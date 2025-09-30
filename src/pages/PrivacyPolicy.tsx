import React from 'react';
import LegalPage from '../components/legal/LegalPage';

const PrivacyPolicy: React.FC = () => {
  return (
    <LegalPage 
      title="Política de Privacidad"
    >
      <section>
        <p>En Bytebox Perú, con domicilio en Lima, Perú, somos responsables del uso y protección de sus datos personales. Esta Política de Privacidad establece los términos en que Bytebox usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web.</p>
        
        <p>Esta política se aplica a la información recopilada a través de nuestro sitio web, aplicaciones móviles, redes sociales y cualquier otro medio digital o físico que nos proporcione sus datos personales. Al utilizar nuestros servicios, usted acepta las prácticas descritas en esta política.</p>
        
        <p>Nos comprometemos a garantizar que su información personal esté segura y protegida. Implementamos medidas técnicas, administrativas y físicas para salvaguardar sus datos contra acceso no autorizado, alteración, divulgación o destrucción.</p>
        
        <p>Le recomendamos leer detenidamente esta política para comprender cómo manejamos su información personal. Si no está de acuerdo con esta política, le sugerimos que no utilice nuestros servicios o proporcione sus datos personales a través de nuestros canales.</p>
      </section>

      <section>
        <h2>Información que Recopilamos</h2>
        <p>Podemos recopilar la siguiente información personal:</p>
        <ul>
          <li>Información de contacto (nombre, dirección de correo electrónico, número de teléfono)</li>
          <li>Información demográfica (código postal, preferencias e intereses)</li>
          <li>Información de pago (para procesar compras)</li>
          <li>Datos de navegación (dirección IP, tipo de navegador, páginas visitadas, tiempo de visita)</li>
          <li>Información de la cuenta (nombre de usuario, contraseña, perfil)</li>
        </ul>
      </section>

      <section>
        <h2>Uso de la Información Recopilada</h2>
        <p>Utilizamos su información para:</p>
        <ul>
          <li>Procesar sus pedidos y solicitudes</li>
          <li>Mejorar nuestros productos y servicios</li>
          <li>Personalizar su experiencia en nuestro sitio web</li>
          <li>Enviar correos electrónicos periódicos con ofertas especiales</li>
          <li>Realizar análisis estadísticos</li>
          <li>Prevenir el fraude y mejorar la seguridad</li>
          <li>Proporcionar, operar y mantener nuestro sitio web</li>
          <li>Mejorar, personalizar y expandir nuestro sitio web</li>
          <li>Comprender y analizar cómo utilizas nuestro sitio web</li>
          <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
          <li>Comunicarnos contigo, ya sea directamente o a través de uno de nuestros socios</li>
          <li>Enviarte correos electrónicos</li>
          <li>Encontrar y prevenir el fraude</li>
        </ul>
      </section>

      <section>
        <h2>Archivos de Registro</h2>
        <p>Bytebox sigue un procedimiento estándar de uso de archivos de registro. Estos archivos registran a los visitantes cuando visitan sitios web. Todas las empresas de hosting hacen esto y forman parte de los análisis de los servicios de hosting. La información recopilada por los archivos de registro incluye direcciones de protocolo de Internet (IP), tipo de navegador, proveedor de servicios de Internet (ISP), marca de fecha y hora, páginas de referencia/salida y posiblemente el número de clics. Estos no están vinculados a ninguna información que sea personalmente identificable.</p>
      </section>

      <section>
        <h2>Política de Cookies</h2>
        <p>Como cualquier otro sitio web, Bytebox utiliza 'cookies'. Estas cookies se utilizan para almacenar información incluyendo las preferencias de los visitantes y las páginas del sitio web a las que el visitante accedió o visitó. La información se utiliza para optimizar la experiencia de los usuarios al personalizar el contenido de nuestra página web según el tipo de navegador de los visitantes y/u otra información.</p>
      </section>

      <section>
        <h2>Cambios a Esta Política de Privacidad</h2>
        <p>Podemos actualizar nuestra Política de Privacidad periódicamente. Te notificaremos de cualquier cambio publicando la nueva Política de Privacidad en esta página. Te recomendamos revisar esta Política de Privacidad periódicamente para cualquier cambio.</p>
      </section>

      <section>
        <h2>Contacto</h2>
        <p>Si tienes alguna pregunta sobre esta Política de Privacidad, no dudes en contactarnos a través de correo electrónico a contacto@bytebox.pe o por correo postal a:</p>
        <address>
          Bytebox Perú<br />
          contacto@bytebox.pe<br />
          +51 942 507 022<br />
          Lima, Perú
        </address>
      </section>
    </LegalPage>
  );
};

export default PrivacyPolicy;
