<?php
// Cargar variables de entorno
$dotenv = parse_ini_file(__DIR__ . '/../../.env');

// Configuración de PHPMailer
return [
    'smtp' => [
        'host' => $dotenv['SMTP_HOST'],
        'username' => $dotenv['SMTP_USERNAME'],
        'password' => $dotenv['SMTP_PASSWORD'],
        'secure' => $dotenv['SMTP_SECURE'],
        'port' => (int)$dotenv['SMTP_PORT'],
        'from_email' => $dotenv['FROM_EMAIL'],
        'from_name' => $dotenv['FROM_NAME'],
        'reply_to' => $dotenv['REPLY_TO'],
        'recipient' => $dotenv['RECIPIENT_EMAIL']
    ]
];
