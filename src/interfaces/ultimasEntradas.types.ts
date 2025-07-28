export type CardCategory = 'servicios' | 'sobre-nosotros' | 'casos-exito' | 'trabajo-remoto';
export type FilterType = 'all' | CardCategory;

export interface CardProps {
  img: string;
  alt: string;
  title: string;
  highlight: string;
  desc: string;
  category: CardCategory;
}

export const cards: CardProps[] = [
  {
    img: 'imageLap.png', // This will be imported and used with require/import
    alt: 'Offboarding',
    title: 'Offboarding:',
    highlight: 'El proceso que no debe subestimarse',
    desc: '¿Sabés cómo proteger datos y recuperar equipos al despedir a un colaborador?',
    category: 'servicios'
  },
  {
    img: 'image.png',
    alt: 'Perú',
    title: 'BYTEBOX llega a Perú:',
    highlight: 'creciendo en Perú',
    desc: 'BYTEBOX desembarca en Perú para seguir expandiendo soluciones tecnológicas, impulsando la innovación y generando nuevas oportunidades para empresas peruanas.',
    category: 'sobre-nosotros'
  },
  {
    img: 'falabe.png',
    alt: 'Falabella',
    title: 'Falabella:',
    highlight: 'Innovación en Retail',
    desc: 'Falabella es una de las principales empresas de retail en Latinoamérica, ofreciendo soluciones innovadoras y una amplia gama de productos y servicios para sus clientes y partners.',
    category: 'casos-exito'
  },
  {
    img: 'accesorios.png',
    alt: 'Coolbox',
    title: 'Coolbox:',
    highlight: 'Líder en Tecnología y Gadgets',
    desc: 'Coolbox es líder en tecnología y gadgets, brindando productos de última generación y experiencias únicas para empresas y consumidores en toda la región.',
    category: 'casos-exito'
  },
  {
    img: 'plataforma.png',
    alt: 'Hardware sostenible',
    title: 'El futuro del',
    highlight: 'hardware sostenible',
    desc: 'Renová tu tecnología con Buyback: optimizá recursos y promové un futuro sostenible.',
    category: 'trabajo-remoto'
  },
  {
    img: 'imagepapel.png',
    alt: 'Guía para equipar',
    title: 'Guía para equipar a',
    highlight: 'empleados remotos',
    desc: 'Equipar a empleados remotos es clave para el éxito. Aprendé a elegir los dispositivos adecuados, cumplir con las normativas locales y mantener su equipamiento de forma efectiva.',
    category: 'trabajo-remoto'
  }
];

export const extraCards: CardProps[] = [
  {
    img: 'imageLap.png',
    alt: 'Innovación Digital',
    title: 'Innovación Digital:',
    highlight: 'Tendencias 2025',
    desc: 'Descubre las tendencias tecnológicas que están transformando el mundo digital este año.',
    category: 'servicios'
  },
  {
    img: 'image.png',
    alt: 'Sostenibilidad',
    title: 'Sostenibilidad:',
    highlight: 'Tecnología Verde',
    desc: 'Soluciones tecnológicas que ayudan a reducir el impacto ambiental y promueven la economía circular.',
    category: 'sobre-nosotros'
  },
  {
    img: 'imagepapel.png',
    alt: 'Transformación Empresarial',
    title: 'Transformación Empresarial:',
    highlight: 'Casos de Éxito',
    desc: 'Historias de empresas que han logrado el éxito gracias a la transformación digital.',
    category: 'casos-exito'
  }
];
