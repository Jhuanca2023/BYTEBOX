<?php
// Configuración de CORS para producción
$allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://bytebox-virid.vercel.app',
    'https://bytebox-api.vercel.app'
];

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

// Configuración de encabezados CORS
if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: " . $origin);
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Credentials: true");
    
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }
} else {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Origen no permitido']);
    exit();
}

header('Content-Type: application/json; charset=utf-8');

// Configuración del correo
$destinatario = 'josehuanca612@gmail.com';
$asunto = 'Nuevo mensaje de contacto de BYTEBOX';

// Validar que se recibieron datos
$input = file_get_contents('php://input');
$datos = json_decode($input, true);

if (empty($datos)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'No se recibieron datos del formulario']);
    exit;
}

// Validar campos obligatorios
$camposObligatorios = [
    'nombre' => 'El nombre es obligatorio',
    'apellido' => 'El apellido es obligatorio',
    'email' => 'El correo electrónico es obligatorio',
    'ruc' => 'El RUC es obligatorio',
    'objetivo' => 'Debe especificar los equipos que desea cotizar'
];

$errores = [];
foreach ($camposObligatorios as $campo => $mensaje) {
    if (empty(trim($datos[$campo] ?? ''))) {
        $errores[] = $mensaje;
    }
}

// Validar formato de email
if (!empty($datos['email']) && !filter_var($datos['email'], FILTER_VALIDATE_EMAIL)) {
    $errores[] = 'El formato del correo electrónico no es válido';
}

// Validar formato de RUC (11 dígitos numéricos)
if (!empty($datos['ruc']) && !preg_match('/^\d{11}$/', $datos['ruc'])) {
    $errores[] = 'El RUC debe tener exactamente 11 dígitos numéricos';
}

if (!empty($errores)) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Error de validación',
        'errors' => $errores
    ]);
    exit;
}

// Construir el mensaje de correo
$mensaje = "Nuevo mensaje de contacto desde el formulario web\n";
$mensaje .= "========================================\n\n";
$mensaje .= "INFORMACIÓN DE CONTACTO\n";
$mensaje .= "----------------------\n";
$mensaje .= "Nombre: " . htmlspecialchars($datos['nombre'] ?? '') . " " . htmlspecialchars($datos['apellido'] ?? '') . "\n";
$mensaje .= "Email: " . htmlspecialchars($datos['email'] ?? '') . "\n";
$mensaje .= "Empresa: " . htmlspecialchars($datos['empresa'] ?? 'No especificada') . "\n";
$mensaje .= "RUC: " . htmlspecialchars($datos['ruc'] ?? 'No especificado') . "\n";
$mensaje .= "País: " . htmlspecialchars($datos['pais'] ?? 'Perú') . "\n\n";

$mensaje .= "SOLICITUD DE COTIZACIÓN\n";
$mensaje .= "----------------------\n";
$mensaje .= "Equipos solicitados:\n" . htmlspecialchars($datos['objetivo'] ?? 'No especificado') . "\n\n";
$mensaje .= "Cantidad de unidades: " . htmlspecialchars($datos['cantidad_unidades'] ?? 'No especificada') . "\n";
$mensaje .= "País de destino: " . htmlspecialchars($datos['pais_destino'] ?? 'No especificado') . "\n";

// Configuración de los headers del correo
$remitente = !empty($datos['email']) ? $datos['email'] : 'noreply@bytebox.pe';
$headers = [
    'From: ' . $remitente,
    'Reply-To: ' . $remitente,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8',
    'MIME-Version: 1.0'
];

$headers = implode("\r\n", $headers) . "\r\n";

/**
 * Función para enviar email con manejo de errores
 * 
 * @param string $destinatario Correo del destinatario
 * @param string $asunto Asunto del correo
 * @param string $mensaje Cuerpo del mensaje
 * @param string $headers Encabezados del correo
 * @return bool True si el correo se envió correctamente, false en caso contrario
 */
function enviarEmail($destinatario, $asunto, $mensaje, $headers) {
    // Configurar el remitente para evitar problemas con el servidor de correo
    ini_set('sendmail_from', 'noreply@bytebox.pe');
    
    // Usar la función mail() básica
    $enviado = @mail($destinatario, $asunto, $mensaje, $headers);
    
    // Si el envío falla, registrar el error
    if (!$enviado) {
        $error = error_get_last();
        error_log("Error al enviar correo: " . ($error['message'] ?? 'Error desconocido'));
    }
    
    return $enviado;
    
    /* 
     * Opción 2: Usar PHPMailer (recomendado para producción)
     * Descomenta este bloque y configura con tus credenciales SMTP
     * 
    try {
        require 'vendor/autoload.php';
        
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.tudominio.com'; // Servidor SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'usuario@tudominio.com'; // Usuario SMTP
        $mail->Password = 'tu_contraseña'; // Contraseña SMTP
        $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        $mail->CharSet = 'UTF-8';

        // Remitente y destinatario
        $mail->setFrom('noreply@bytebox.pe', 'BYTEBOX Contacto');
        $mail->addAddress($destinatario);
        $mail->addReplyTo($remitente, $datos['nombre'] . ' ' . $datos['apellido']);

        // Contenido
        $mail->isHTML(false);
        $mail->Subject = $asunto;
        $mail->Body = $mensaje;

        return $mail->send();
    } catch (Exception $e) {
        error_log("Error al enviar correo: " . $e->getMessage());
        return false;
    }
    */
}

// Intentar enviar el correo
try {
    $enviado = enviarEmail($destinatario, $asunto, $mensaje, $headers);
    
    if ($enviado) {
        http_response_code(200);
        echo json_encode([
            'success' => true, 
            'message' => '¡Gracias por contactarnos! Hemos recibido tu mensaje correctamente y nuestro equipo se pondrá en contacto contigo a la brevedad posible.'
        ]);
    } else {
        throw new Exception('No se pudo enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.');
    }
} catch (Exception $e) {
    http_response_code(500);
    
    // En producción, no exponer detalles del error al usuario
    $mensajeError = 'Error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.';
    
    // Solo en desarrollo, mostrar el error real
    if (in_array($_SERVER['HTTP_ORIGIN'] ?? '', ['http://localhost:3000', 'http://localhost:5173'])) {
        $mensajeError = $e->getMessage();
    }
    
    echo json_encode([
        'success' => false, 
        'message' => $mensajeError
    ]);
}
?>