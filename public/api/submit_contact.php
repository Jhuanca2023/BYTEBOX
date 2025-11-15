<?php
// Habilitar visualización de errores
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Configuración de CORS
$allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost',
    'https://bytebox.com.pe',
    'https://bytebox.pe',
    'http://bytebox.com.pe',
    'https://bytebox.com.pe',
    'http://www.bytebox.com.pe',
    'https://www.bytebox.com.pe'
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$isAllowedOrigin = false;

foreach ($allowedOrigins as $allowed) {
    if (fnmatch($allowed, $origin)) {
        $isAllowedOrigin = true;
        break;
    }
}

if ($isAllowedOrigin) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    // Fallback para permitir el dominio principal tanto en HTTP como HTTPS
    $fallbackOrigin = 'https://bytebox.com.pe';
    if (strpos($origin, 'bytebox.com.pe') !== false) {
        $fallbackOrigin = $origin;
    }
    header("Access-Control-Allow-Origin: $fallbackOrigin");
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=utf-8");

// Manejar solicitud OPTIONS para CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Procesar solicitud POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        
        // Validar campos requeridos
        $required = ['nombre', 'email', 'empresa', 'ruc', 'pais', 'objetivo', 'cantidad_unidades', 'pais_destino'];
        foreach ($required as $field) {
            if (empty($data[$field])) {
                throw new Exception("El campo $field es requerido");
            }
        }

        // Validar formato de email
        if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            throw new Exception('El formato del correo electrónico no es válido');
        }
        // Validar RUC (ejemplo para Perú)
        if (!preg_match('/^[0-9]{11}$/', $data['ruc'])) {
            throw new Exception('El RUC debe tener 11 dígitos numéricos');
        }

        // Configuración del correo
        $to = 'contacto@bytebox.pe';
        $subject = 'Nuevo mensaje de contacto de ' . $data['nombre'];

        // Configuración del servidor de correo
        ini_set('SMTP', 'mail.bytebox.com.pe');
        ini_set('smtp_port', 465);
        ini_set('sendmail_from', 'no-reply@bytebox.com.pe');

        // Crear el cuerpo del mensaje HTML
        $message = "
        <html>
        <head>
            <title>Nuevo mensaje de contacto</title>
        </head>
        <body>
            <h2>Nuevo mensaje de contacto</h2>
            <p><strong>Nombre:</strong> " . htmlspecialchars($data['nombre']) . "</p>
            <p><strong>Email:</strong> " . htmlspecialchars($data['email']) . "</p>
            <p><strong>Empresa:</strong> " . htmlspecialchars($data['empresa']) . "</p>
            <p><strong>RUC:</strong> " . htmlspecialchars($data['ruc']) . "</p>
            <p><strong>País:</strong> " . htmlspecialchars($data['pais']) . "</p>
            <p><strong>Objetivo:</strong> " . htmlspecialchars($data['objetivo']) . "</p>
            <p><strong>Cantidad de unidades:</strong> " . htmlspecialchars($data['cantidad_unidades']) . "</p>
            <p><strong>País de destino:</strong> " . htmlspecialchars($data['pais_destino']) . "</p>
            <p><strong>Mensaje:</strong> " . (!empty($data['mensaje']) ? htmlspecialchars($data['mensaje']) : 'No especificado') . "</p>
        </body>
        </html>";

        // Cabeceras del correo
        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=UTF-8',
            'From: ByteBOX Web <no-reply@bytebox.com.pe>',
            'Reply-To: ' . $data['nombre'] . ' <' . $data['email'] . '>',
            'X-Mailer: PHP/' . phpversion(),
            'X-Priority: 1',
            'X-MSMail-Priority: High'
        ];

        $headersString = implode("\r\n", $headers);

        // Enviar el correo
        $mailSent = mail($to, $subject, $message, $headersString);
        
        if ($mailSent) {
            echo json_encode([
                'success' => true,
                'message' => 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.'
            ]);
        } else {
            $error = error_get_last();
            throw new Exception('Error al enviar el correo: ' . ($error['message'] ?? 'Error desconocido'));
        }

    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => $e->getMessage()
        ]);
    }
    exit();
}

// Si no es una solicitud POST
http_response_code(405);
echo json_encode(['success' => false, 'message' => 'Método no permitido']);