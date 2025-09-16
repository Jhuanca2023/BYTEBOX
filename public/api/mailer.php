<?php

require __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class Mailer {
    private $mail;
    private $config;
    
    public function __construct($config) {
        $this->config = $config;
        $this->mail = new PHPMailer(true);
        
        
        $this->mail->isSMTP();
        $this->mail->Host = $config['smtp']['host'];
        $this->mail->SMTPAuth = true;
        $this->mail->Username = $config['smtp']['username'];
        $this->mail->Password = $config['smtp']['password'];
        $this->mail->SMTPSecure = $config['smtp']['secure'];
        $this->mail->Port = $config['smtp']['port'];
        $this->mail->CharSet = 'UTF-8';
        
      
        $this->mail->setFrom($config['smtp']['from_email'], $config['smtp']['from_name']);
        $this->mail->addReplyTo($config['smtp']['reply_to'], $config['smtp']['from_name']);
    }
    
    public function sendContactForm($data) {
        try {
            // Destinatario
            $this->mail->addAddress($this->config['smtp']['recipient']);
            
            // Asunto
            $this->mail->Subject = 'Nuevo mensaje de contacto de ' . ($data['nombre'] ?? 'Cliente');
            
            // Cuerpo del mensaje
            $message = "NUEVO MENSAJE DE CONTACTO\n";
            $message .= "-----------------------\n\n";
            $message .= "Nombre: " . ($data['nombre'] ?? 'No especificado') . "\n";
            $message .= "Email: " . ($data['email'] ?? 'No especificado') . "\n";
            $message .= "Empresa: " . ($data['empresa'] ?? 'No especificada') . "\n";
            $message .= "RUC: " . ($data['ruc'] ?? 'No especificado') . "\n";
            $message .= "País: " . ($data['pais'] ?? 'Perú') . "\n\n";
            $message .= "SOLICITUD DE COTIZACIÓN\n";
            $message .= "----------------------\n";
            $message .= "Equipos solicitados:\n" . ($data['objetivo'] ?? 'No especificado') . "\n\n";
            $message .= "Cantidad de unidades: " . ($data['cantidad_unidades'] ?? 'No especificada') . "\n";
            $message .= "País de destino: " . ($data['pais_destino'] ?? 'No especificado') . "\n";
            
            $this->mail->Body = $message;
            
            // Enviar el correo
            $this->mail->send();
            return ['success' => true, 'message' => 'Mensaje enviado correctamente'];
            
        } catch (Exception $e) {
            return [
                'success' => false, 
                'message' => 'Error al enviar el mensaje: ' . $this->mail->ErrorInfo
            ];
        }
    }
}


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}


if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit();
}


$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (empty($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'No se recibieron datos del formulario']);
    exit();
}

try {

    $config = require __DIR__ . '/config.php';
    

    $mailer = new Mailer($config);
    $result = $mailer->sendContactForm($data);
    

    http_response_code($result['success'] ? 200 : 500);
    echo json_encode($result);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Error en el servidor: ' . $e->getMessage()
    ]);
}
