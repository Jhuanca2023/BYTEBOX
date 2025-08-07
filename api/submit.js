const nodemailer = require('nodemailer');

// Habilitar CORS
const allowCors = (handler) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-V, Authorization'
  );
  
  // Manejar solicitudes OPTIONS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  return await handler(req, res);
};

const handler = async (req, res) => {
  // Solo permitir método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método no permitido' });
  }

  try {
    const { nombre, apellido, email, empresa, ruc, objetivo, 
            departamento_nombre, provincia_nombre, distrito_nombre } = req.body;

    // Validar campos requeridos
    if (!nombre || !apellido || !email || !objetivo) {
      return res.status(400).json({ 
        success: false, 
        message: 'Por favor complete todos los campos requeridos' 
      });
    }

    // Configurar transporte de correo
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || 'tucorreo@gmail.com',
        pass: process.env.SMTP_PASSWORD || 'tu_contraseña'
      }
    });

    // Configurar el correo
    const mailOptions = {
      from: `"BYTEBOX Contacto" <${process.env.SMTP_USER || 'tucorreo@gmail.com'}>`,
      to: process.env.TO_EMAIL || 'josehuanca612@gmail.com',
      subject: 'Nuevo mensaje de contacto de BYTEBOX',
      text: `
        Nombre: ${nombre} ${apellido}
        Email: ${email}
        Empresa: ${empresa || 'No especificada'}
        RUC: ${ruc || 'No especificado'}
        Ubicación: ${departamento_nombre || ''}, ${provincia_nombre || ''}, ${distrito_nombre || ''}
        
        Mensaje:
        ${objetivo}
      `
    };

    // Enviar correo
    await transporter.sendMail(mailOptions);

    // Responder con éxito
    return res.status(200).json({
      success: true,
      message: '¡Gracias por contactarnos! Hemos recibido tu mensaje correctamente.'
    });

  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return res.status(500).json({
      success: false,
      message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Aplicar el middleware CORS al manejador
export default allowCors(handler);
