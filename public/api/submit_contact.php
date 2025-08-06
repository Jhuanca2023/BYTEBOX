<?php
// Habilitar CORS
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

// Si es una solicitud OPTIONS, terminar la ejecución
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

header('Content-Type: application/json');

// Configuración
$destinatario = 'josehuanca612@gmail.com';
$asunto = 'Nuevo mensaje de contacto de BYTEBOX';

// Obtener los datos del formulario
$input = file_get_contents('php://input');
$datos = json_decode($input, true);

// Validar los datos recibidos
if (empty($datos)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'No se recibieron datos del formulario']);
    exit;
}

// Construir el mensaje
$mensaje = "Nuevo mensaje de contacto\n\n";
$mensaje .= "Nombre: " . htmlspecialchars($datos['nombre'] ?? '') . " " . htmlspecialchars($datos['apellido'] ?? '') . "\n";
$mensaje .= "Email: " . htmlspecialchars($datos['email'] ?? '') . "\n";
$mensaje .= "Empresa: " . htmlspecialchars($datos['empresa'] ?? '') . "\n";
$mensaje .= "RUC: " . htmlspecialchars($datos['ruc'] ?? 'No especificado') . "\n";
$mensaje .= "Ubicación: " . 
            htmlspecialchars($datos['departamento_nombre'] ?? '') . 
            ", " . htmlspecialchars($datos['provincia_nombre'] ?? '') . 
            ", " . htmlspecialchars($datos['distrito_nombre'] ?? '') . "\n\n";
$mensaje .= "Mensaje:\n" . htmlspecialchars($datos['objetivo'] ?? '');

// Cabeceras del correo
$headers = "From: " . ($datos['email'] ?? 'noreply@bytebox.com') . "\r\n";
$headers .= "Reply-To: " . ($datos['email'] ?? '') . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Intentar enviar el correo
$enviado = mail($destinatario, $asunto, $mensaje, $headers);

if ($enviado) {
    http_response_code(200);
    echo json_encode([
        'success' => true, 
        'message' => '¡Gracias por contactarnos! Hemos recibido tu mensaje correctamente y nuestro equipo se pondrá en contacto contigo a la brevedad posible.'
    ]);
} else {
    $error = error_get_last();
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
        'error' => $error ? $error['message'] : 'Error desconocido'
    ]);
}
?>