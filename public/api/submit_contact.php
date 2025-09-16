<?php
// Configuración de CORS para producción
header("Access-Control-Allow-Origin: https://tecnovedadesweb.com");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");
header("Content-Type: application/json; charset=utf-8");

// Manejo de preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Habilitar reporte de errores para desarrollo
ini_set('display_errors', 0);
error_reporting(E_ALL);

// Cargar configuración
$config = require __DIR__ . '/config.php';

// Obtener datos del POST
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Verificar si hay datos
if (empty($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'No se recibieron datos']);
    exit();
}

try {
    // Inicializar PHPMailer
    require __DIR__ . '/mailer.php';
    $mailer = new Mailer($config);
    
    // Enviar correo
    $result = $mailer->sendContactForm($data);
    
    // Respuesta exitosa
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => '¡Gracias por contactarnos! Hemos recibido tu mensaje correctamente y nuestro equipo se pondrá en contacto contigo a la brevedad posible.'
    ]);
    
} catch (Exception $e) {
    // Error al enviar el correo
    http_response_code(500);
    
    $mensajeError = 'Error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.';
    
    // Mostrar mensaje de error detallado solo en desarrollo
    $origen = $_SERVER['HTTP_ORIGIN'] ?? '';
    if (in_array($origen, ['http://localhost:3000', 'http://localhost:5173', 'https://tecnovedadesweb.com'])) {
        $mensajeError = $e->getMessage();
    }
    
    echo json_encode([
        'success' => false,
        'message' => $mensajeError
    ]);
}

exit();