import Header from '../common/Header';
import Footer from '../common/Footer';
import './SobreNosotros.css';


const equipo = [
  { nombre: 'María González', rol: 'CEO & Fundadora', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { nombre: 'Juan Pérez', rol: 'CTO', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { nombre: 'Lucía Torres', rol: 'COO', img: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { nombre: 'Carlos Ruiz', rol: 'CMO', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
];



const SobreNosotros = () => (
  <>
    <Header />
    
    {/* HERO SECTION */}
    <section className="hero-section sobre-nosotros-hero-bg">
      <div className="hero-content">
        <h1>Sobre Nosotros</h1>
        <p>Descubre la historia, misión y valores que nos impulsan a conectar empresas y personas a través de la tecnología.</p>
      </div>
    </section>

    {/* LOGOS ANIMADOS */}
   
      <h2 className="logos-title">
        Expansión global <span className="brand">de nuestras marcas</span>
      </h2>
      <div className="logos-container">
        <div className="marquee-logos">
          {["/logos/workana.png","/logos/binance.png","/logos/qubika.png","/logos/pomelo.png","/logos/perficient.png","/logos/globant.png","/logos/infogain.png","/logos/dlocal.png"].map((src, i) => (
            <img key={i} src={src} alt="logo" className="logo-item" />
          ))}
          {/* Duplicar para efecto infinito */}
          {["/logos/workana.png","/logos/binance.png","/logos/qubika.png","/logos/pomelo.png","/logos/perficient.png","/logos/globant.png","/logos/infogain.png","/logos/dlocal.png"].map((src, i) => (
            <img key={i+100} src={src} alt="logo" className="logo-item" />
          ))}
        </div>
      </div>
  

    {/* SECCIONES PRINCIPALES */}
    <main className="main-content">
      {/* Nuestra Historia */}
      <section className="content-section">
        <div className="content-image">
          <img src="https://imgs.search.brave.com/4647C1EAqmzYaPkOBDPcbvdjFUsxFisYVCvZ4NMbqw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/MTM1MDAwOC9lcy9m/b3RvL2VxdWlwby1k/ZS1uZWdvY2lvcy1x/dWUtdHJhYmFqYS1l/bi11bmEtY29tcHV0/YWRvcmEtcG9ydCVD/MyVBMXRpbC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9UlZo/MmFPTGE1elNBUTdX/UWExYm1nWkNwSHNF/SEN1STZ2dWVEWWZD/UUN0RT0" alt="Historia Bytebox"/>
        </div>
        <div className="content-text">
          <h2 className="content-title">Nuestra Historia</h2>
          <p className="content-description">
            Bytebox nació con la visión de transformar la manera en que las empresas acceden a tecnología de calidad. Desde 2018, hemos crecido hasta operar en más de 120 países, acompañando a empresas y personas en su camino hacia la transformación digital.
          </p>
        </div>
      </section>

      {/* Nuestra Misión */}
      <section className="content-section">
        <div className="content-text">
          <h2 className="content-title">Nuestra Misión</h2>
          <p className="content-description">
            Nuestra misión es brindar productos tecnológicos de vanguardia que potencien la conectividad, productividad y entretenimiento de nuestros clientes. Nos comprometemos a ofrecer una experiencia de compra excepcional, combinando innovación, calidad y servicio al cliente en todos los mercados en los que operamos, con un enfoque especial en satisfacer las necesidades del mercado peruano.
          </p>
        </div>
        <div className="content-image">
          <img src="https://imgs.search.brave.com/VdwwyyoiTP1s8D8zLyYoubIBijhrx2-m0dmPV-925M8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9tb2Rlcm5hLWNv/bXVuaWNhY2lvbi1j/cmVhdGl2YS1yZWQt/aW50ZXJuZXQtY29u/ZWN0YW4tY2l1ZGFk/LWludGVsaWdlbnRl/XzMxOTY1LTE1MDEy/LmpwZz9zZW10PWFp/c19pdGVtc19ib29z/dGVkJnc9NzQw" alt="Misión Bytebox" />
        </div>
      </section>

      {/* Conectividad Global */}
      <section className="content-section">
        <div className="content-image">
          <img src="https://imgs.search.brave.com/w2Yltj9xCJvzanrnWnU_EyDt8tOfMl6XSJJcDpSOOuY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/NTU4NTYzMS9lcy9m/b3RvL3RvcnJlLWRl/LWNvbXVuaWNhY2lv/bmVzLTVnLWNvbi1o/b21icmUtdXNhbmRv/LWVsLXRlbCVDMyVB/OWZvbm8tbSVDMyVC/M3ZpbC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9d0dHcTBs/NDVKMXduQnNCQVln/QTdTMDhyOXBQaGs0/RTVleTlVZXVZeEhV/Yz0" alt="Conectividad Global" />
        </div>
        <div className="content-text">
          <h2 className="content-title">Conectividad Global</h2>
          <p className="content-description">
            El concepto de "Conectividad Global" se basa en la idea de que los accesorios y equipos tecnológicos son los habilitadores de la conectividad global. Proporcionamos productos que permiten la conectividad sin límites, facilitando la comunicación y el intercambio de información a nivel global. Siempre a la vanguardia, trayendo lo último en tecnología a nuestros clientes antes que nadie.
          </p>
        </div>
      </section>
      
      {/* Nuestro Equipo */}
      <section className="team-section">
        <h2 className="team-title">Nuestro Equipo</h2>
        <div className="team-grid">
          {equipo.map((m) => (
            <div key={m.nombre} className="team-member">
              <img src={m.img} alt={m.nombre} className="team-photo" />
              <div className="team-name">{m.nombre}</div>
              <div className="team-role">{m.rol}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
    
    <Footer />
  </>
);

export default SobreNosotros; 