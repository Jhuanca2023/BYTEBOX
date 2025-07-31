export type CardCategory = 'servicios' | 'sobre-nosotros' | 'casos-exito' | 'trabajo-remoto';
export type FilterType = 'all' | CardCategory;

export interface CardProps {
  img: string;
  alt: string;
  title: string;
  highlight: string;
  desc: string;
  category: CardCategory;
  link: string;
}

export const cards: CardProps[] = [
  {
    img: 'seller.png',
    alt: 'Offboarding',
    title: 'Offboarding:',
    highlight: 'El proceso que no debe subestimarse',
    desc: '¿Sabés cómo proteger datos y recuperar equipos al despedir a un colaborador?',
    category: 'servicios',
    link: 'https://l.instagram.com/?u=https%3A%2F%2Fwa.link%2Fhso7p4%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAac4vS63Y-4vl3B6AqbR049XVi4mC3PId9hPZ3gfGvti5RNNPuJAkrPeXORCDw_aem_aqFptyHHMUbiukqg1Bz58g&e=AT07G0uE5MtMMqKDNmWeYXIRpBGA8IdReSVDaaFZFeHixukdjXnEo3WCbHlvsSiG5EvBVcAAoEp69quWCqX3m2BuEQDZkKy3q5msUObIFBASM8camqQ6DFo'
  },
  {
    img: 'image.png',
    alt: 'Perú',
    title: 'BYTEBOX llega a Perú:',
    highlight: 'creciendo en Perú',
    desc: 'BYTEBOX desembarca en Perú para seguir expandiendo soluciones tecnológicas, impulsando la innovación y generando nuevas oportunidades para empresas peruanas.',
    category: 'sobre-nosotros',
    link: 'https://www.instagram.com/bytebox.pe/'
  },
  {
    img: 'falabe.png',
    alt: 'Éxitos',
    title: 'Casos de',
    highlight: 'éxito',
    desc: 'Descubre cómo hemos ayudado a empresas a alcanzar sus objetivos tecnológicos y mejorar sus operaciones.',
    category: 'casos-exito',
    link: 'https://l.instagram.com/?u=https%3A%2F%2Fwww.falabella.com.pe%2Ffalabella-pe%2Fseller%2FBytebox%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAadAA7QD9TRDVOQmck-TPQi4sCtVWwkkezam6buuamuC9qrv3Nt5BQRI4AL7JA_aem_M-nEwQGsw3QEIcmco4Poiw&e=AT211XdjqguppZWrf0_4uvlVZGv-5GAjpdoSvEySqNOUJlDq1EowKkJMK6_q-ZSWy0_xwEn4brpNFnyJXUz9mhuBqUntEr15dQItlIJCylWXetj9r3n6gTI'
  },
  {
    img: 'accesorios.png',
    alt: 'Coolbox',
    title: 'Coolbox:',
    highlight: 'Líder en Tecnología y Gadgets',
    desc: 'Coolbox es líder en tecnología y gadgets, brindando productos de última generación y experiencias únicas para empresas y consumidores en toda la región.',
    category: 'casos-exito',
    link: 'https://l.instagram.com/?u=https%3A%2F%2Fwww.coolbox.pe%2Fbytebox%3Fmap%3DsellerName%26fbclid%3DPAZXh0bgNhZW0CMTEAAafdAaCy6uDOW7rkwpSGGJG8Tdx0i3c4EmxSzC7rgw8yEjRPBTpqEa984RYEAg_aem_nRAZR6DiZG9TKB7VYQicPQ&e=AT1sOqRwrdi1O8zwxDRgA6ZAaeXamIrnUSbaztz2KpIJxrYhfmaTsIA1_D16Wjf7_xrJHQnjJ08gAkwHp8GdM8UeDpwFKesEuZYsT63XbT_uWcjosungOAA'
  },
  {
    img: 'plataforma.png',
    alt: 'Hardware sostenible',
    title: 'El futuro del',
    highlight: 'hardware sostenible',
    desc: 'Renová tu tecnología con Buyback: optimizá recursos y promové un futuro sostenible.',
    category: 'trabajo-remoto',
    link: '/'
  },
  {
    img: 'imagepapel.png',
    alt: 'Guía para equipar',
    title: 'Guía para equipar a',
    highlight: 'empleados remotos',
    desc: 'Equipar a empleados remotos es clave para el éxito. Aprendé a elegir los dispositivos adecuados, cumplir con las normativas locales y mantener su equipamiento de forma efectiva.',
    category: 'trabajo-remoto',
    link: 'https://l.instagram.com/?u=https%3A%2F%2Fwa.link%2Fhso7p4%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAac4vS63Y-4vl3B6AqbR049XVi4mC3PId9hPZ3gfGvti5RNNPuJAkrPeXORCDw_aem_aqFptyHHMUbiukqg1Bz58g&e=AT07G0uE5MtMMqKDNmWeYXIRpBGA8IdReSVDaaFZFeHixukdjXnEo3WCbHlvsSiG5EvBVcAAoEp69quWCqX3m2BuEQDZkKy3q5msUObIFBASM8camqQ6DFo'
  }
];

export const extraCards: CardProps[] = [
  {
    img: 'imageLap.png',
    alt: 'Servicios IT',
    title: 'Servicios',
    highlight: 'Tecnológicos',
    desc: 'Soluciones IT personalizadas para potenciar tu negocio y mejorar la productividad de tu equipo.',
    category: 'servicios',
    link: 'https://l.instagram.com/?u=https%3A%2F%2Fwa.link%2Fhso7p4%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAac4vS63Y-4vl3B6AqbR049XVi4mC3PId9hPZ3gfGvti5RNNPuJAkrPeXORCDw_aem_aqFptyHHMUbiukqg1Bz58g&e=AT07G0uE5MtMMqKDNmWeYXIRpBGA8IdReSVDaaFZFeHixukdjXnEo3WCbHlvsSiG5EvBVcAAoEp69quWCqX3m2BuEQDZkKy3q5msUObIFBASM8camqQ6DFo'
  },
  {
    img: 'image.png',
    alt: 'Sostenibilidad',
    title: 'Sostenibilidad:',
    highlight: 'Tecnología Verde',
    desc: 'Soluciones tecnológicas que ayudan a reducir el impacto ambiental y promueven la economía circular.',
    category: 'sobre-nosotros',
    link: 'https://www.coolbox.pe/cargador-inalambrico-magsafe---carga-15w-para-iphone-100433757/p'
  },
  {
    img: 'imagepapel.png',
    alt: 'Trabajo remoto',
    title: 'Trabajo',
    highlight: 'remoto eficiente',
    desc: 'Descubre cómo optimizar el trabajo remoto con nuestras soluciones tecnológicas y herramientas colaborativas para equipos distribuidos.',
    category: 'trabajo-remoto',
    link: '//'
  },
  {
    img: 'imagepapel.png',
    alt: 'Transformación Empresarial',
    title: 'Transformación Empresarial:',
    highlight: 'Casos de Éxito',
    desc: 'Historias de empresas que han logrado el éxito gracias a la transformación digital.',
    category: 'casos-exito',
    link: 'https://www.facebook.com/381132331740955?ref=_xav_ig_profile_page_web'
  }
];
