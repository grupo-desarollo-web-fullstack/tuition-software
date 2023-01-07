import "@styles/modules/home.scss" 
const getImageUrl = (name) =>
  new URL(
    `../assets/img/${name}`,
    import.meta.url
  ).href;

const Home = () => <main className="main">
    <div class="cover">
      <div class="container__cover">
        <div class="container__info">
          <h2 class="cover__title">
            <span class="cover__title cover__title--tech">Tecnología</span>
            QUE CAMBIA EL MUNDO
          </h2>
          <p>La plataforma que ofrece <a href="#">TUITION SOFTWARE</a></p>
          <p>
            es usada a nivel mundial por diversas instituciones relacionadas con
            la educación, empresas y entidades gubernamentales.
          </p>
        </div>
        <div class="container__vector">
          <img src={getImageUrl("1.png")} alt="imagen1" />
        </div>
      </div>
    </div>

      <article id="profile" class="section section--hero section--profile" style={{
        backgroundImage:`url(${getImageUrl("fondito_1.png")})`
      }}>
        <div class="container container--hero">
          <article class="card2 card--hero">
            <header class="card__header">
              <h2 class="card__title card__title--lg">TUITION SOFTWARE</h2>
            </header>
            <div class="card__body card__body--lg">
              <h2 class="card__subtitle card__subtitle--lg">
                El mejor proveedor de plataformas educacionales del Perú
              </h2>
              <p class="card__text d-none md:d-block">
                Especialistas en el desarrollo de software para tus necesidades.
                Desarrollamos soluciones digitales para tu empresa.
              </p>
            </div>
            <footer class="card__footer">
              <div class="buttons">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  class="button button--lg button--primary"
                  >Contactanos</a
                >
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="button button--lg button--primary button--outline"
                  >Videos</a
                >
              </div>
            </footer>
          </article>
          <div class="hero-img">
            <img
                src={getImageUrl("IMAGEN-LAPTOP.jpg")}
              alt="laptop"
              width="256"
              height="256"
              class="hero-img__img"
            />
            <figure class="hero-img__decorators">
              <img
              src={getImageUrl("processor.png")}
                alt="Logo processor"
                width="64"
                height="64"
                class="hero-img__decorator"
              />
              <img
                  src={getImageUrl("hand.png")}
                alt="Logo hand"
                width="64"
                height="64"
                class="hero-img__decorator"
              />
              <img
                  src={getImageUrl("eyes.png")}
                alt="Logo eyes"
                width="64"
                height="64"
                class="hero-img__decorator"
              />
              <img
                  src={getImageUrl("virtual.png")}
                alt="Logo virtual"
                width="64"
                height="64"
                class="hero-img__decorator"
              />
            </figure>
          </div>
        </div>
      </article>
      <section id="experiences" class="section">
        <div class="container container--elements">
          <h2 class="section__title">
            📝Planes de Soporte Técnico para empresas📝
          </h2>
          <div class="elements">
            <article class="card2 card--support">
              <div class="card__body">
                <h4 class="card__subtitle card__subtitle--sm t-shadow-primary">
                  PLAN BASICO IT
                </h4>
                <h4 class="card__title">S/860 +IGV/Mes</h4>
                <h4 class="card__subtitle card__subtitle--sm t-shadow-primary">
                  Para Pymes
                </h4>
                <ul class="list">
                  <li class="list__item">Diagnóstico de equipos.</li>
                  <li class="list__item">
                    Detección y eliminación de virus y software maliciosos.
                  </li>
                  <li class="list__item">
                    Mantenimiento preventivo de equipos de computación (Pc y
                    Laptops) Hasta 10 Equipos.
                  </li>
                  <li class="list__item">
                    Limpieza de hardware, backup in situ.
                  </li>
                  <li class="list__item">Creacion de correos corporativos.</li>
                  <li class="list__item">
                    5% de descuento en la compra de hosting y dominio externos.
                  </li>
                  <li class="list__item">Asistencia remota (Hasta 6 Horas)</li>
                  <li class="list__item">Asesoría telefónica 24 horas.</li>
                  <li class="list__item">
                    Asistencia presencial 2 visitas (Solo Lima).
                  </li>
                  <li class="list__item">
                    Consultorías y asesorías periódicas.
                  </li>
                  <li class="list__item">Instalación de aplicaciones</li>
                  <li class="list__item">
                    Asesoría en la adquisición de equipos de cómputo
                  </li>
                  <li class="list__item">
                    Reuniones de seguimiento con el cliente.
                  </li>
                  <li class="list__item">Informe mensual.</li>
                </ul>
              </div>
            </article>
            <article class="card2 card--support">
              <div class="card__body">
                <h4 class="card__subtitle card__subtitle--sm t-shadow-primary">
                  PLAN MEDIUM PRO
                </h4>
                <h4 class="card__title">S/1550 +IGV/Mes</h4>
                <h4 class="card__subtitle card__subtitle--sm t-shadow-primary">
                  Corporate
                </h4>
                <ul class="list">
                  <li class="list__item">Diagnóstico de equipos.</li>
                  <li class="list__item">
                    Detección y eliminación de virus y software maliciosos.
                  </li>
                  <li class="list__item">
                    Mantenimiento preventivo de equipos de computación (Pc y
                    Laptops) Hasta 15 Equipos.
                  </li>
                  <li class="list__item">
                    Asesoría telefónica 20 horas al mes no acumulativas.
                  </li>
                  <li class="list__item">
                    Asistencia presencial. (3 visitas al mes con generación de
                    reporte de servicio) solo en Lima.
                  </li>
                  <li class="list__item">Instalación de aplicaciones.</li>
                  <li class="list__item">
                    Limpieza de hardware, backup in situ.
                  </li>
                  <li class="list__item">
                    Asesoria en la compra de equipos de cómputo, servidores y
                    equipos de comunicaciones.
                  </li>
                  <li class="list__item">
                    Administración de correos corporativos (POP3/IMAP).
                  </li>
                  <li class="list__item">
                    Inventario y entrega de Información de infraestructura IT.
                  </li>
                  <li class="list__item">
                    5% de descuento en la compra de hosting y dominio externos.
                  </li>
                  <li class="list__item">
                    Instalación y administración de servidores Windows.
                  </li>
                  <li class="list__item">
                    Reuniones de seguimiento con el cliente.
                  </li>
                  <li class="list__item">Informe mensual.</li>
                </ul>
              </div>
            </article>
            <article class="card2 card--support">
              <div class="card__body">
                <h4 class="card__subtitle card__subtitle--sm t-shadow-primary">
                  PLAN PREMIUM
                </h4>
                <h4 class="card__title">S/2260 +IGV/Mes</h4>
                <h4 class="card__subtitle card__subtitle--sm t-shadow-primary">
                  Enterprise
                </h4>
                <ul class="list">
                  <li class="list__item">
                    Diagnóstico de infraestructura de redes, servidores,
                    seguridad, CCTV.
                  </li>
                  <li class="list__item">
                    Detección y eliminación de virus y software maliciosos
                  </li>
                  <li class="list__item">
                    Mantenimiento preventivo de equipos de computación (Pc y
                    Laptops) Hasta 22 Equipos.
                  </li>
                  <li class="list__item">
                    Administración de correos corporativos (POP3/IMAP).
                  </li>
                  <li class="list__item">
                    Asesoría telefónica 20 horas al mes no acumulativas.
                  </li>
                  <li class="list__item">
                    Asistencia remota. (Hasta 22 horas).
                  </li>
                  <li class="list__item">
                    Asistencia presencial. (3 visitas al mes con generación de
                    reporte de servicio) solo en Lima.
                  </li>
                  <li class="list__item">Instalación de aplicaciones.</li>
                  <li class="list__item">
                    Limpieza de hardware, backup in situ.
                  </li>
                  <li class="list__item">
                    Instalación y administración de servidores Windows y Linux.
                  </li>
                  <li class="list__item">
                    5% de descuento en la compra de hosting y dominio externos.
                  </li>
                  <li class="list__item">
                    Asesoría en la compra de equipos de cómputo, servidores,
                    Switches, Wifi, firewall, CCTV, UPS.
                  </li>
                  <li class="list__item">
                    Inventario y entrega de Información de infraestructura IT.
                  </li>
                  <li class="list__item">
                    Reuniones de seguimiento con cliente vía telefónica.
                  </li>
                  <li class="list__item">
                    Equipos de reemplazo sin costo por 8 días (Servidores según
                    nuestro stock).
                  </li>
                  <li class="list__item">
                    Soporte nivel 3 (Router, Switches, firewall, CCTV.)
                  </li>
                  <li class="list__item">
                    Administración de Hosting (no incluye el servicio de
                    hosting)
                  </li>
                  <li class="list__item">20% de descuento en Data Recovery.</li>
                  <li class="list__item">Informe mensual.</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section section--secondary" id="projects">
        <div class="container container--elements">
          <h2 class="section__title">
            🅱 Beneficios al contratar nuestros planes💱
          </h2>
          <div class="elements elements--cards">
            <div class="card2">
              <img
                  src={getImageUrl("atencion-inmediata.png")}
                alt="Atención Inmediata"
                class="card__img"
              />
              <div class="card__body card__body--benefit">
                <h3 class="card__title card__title--lg t-shadow-primary">
                  Atención Inmediata
                </h3>
                <p class="card__text">
                  Ofrecemos atención Inmediata a todos nuestros clientes 24/7
                  presencial o remoto
                </p>
              </div>
            </div>
            <div class="card2">
              <img
                  src={getImageUrl("resolucion-de-incidencias.png")}
                alt="Resolución de incidencias"
                class="card__img"
              />
              <div class="card__body card__body--benefit">
                <h3 class="card__title card__title--lg t-shadow-primary">
                  Resolución de Incidencias
                </h3>
                <p class="card__text">
                  Nuestro equipo de Profesionales está disponible para brindar
                  soluciones inmediatas a las posibles incidencias que se
                  presenten.
                </p>
              </div>
            </div>
            <div class="card2">
              <img
                  src={getImageUrl("mantenimiento-de-equipos.png")}
                alt="Mantenimiento de equipos"
                class="card__img"
              />
              <div class="card__body card__body--benefit">
                <h3 class="card__title card__title--lg t-shadow-primary">
                  Mantenimiento de equipos
                </h3>
                <p class="card__text">
                  Al realizar el mantenimiento preventivo de equipos se
                  minimizan las fallas de sus equipos.
                </p>
              </div>
            </div>
            <div class="card2">
              <img
                  src={getImageUrl("seguridad-y-garantia2.png")}
                alt="Seguridad y garantía"
                class="card__img"
              />
              <div class="card__body card__body--benefit">
                <h3 class="card__title card__title--lg t-shadow-primary">
                  Seguridad y garantía
                </h3>
                <p class="card__text">
                  Nuestro servicio le brinda la tranquilidad que necesita
                  disponemos de diversos canales de comunicacion con nuestro
                  staff de profesionales.
                </p>
              </div>
            </div>
            <div class="card2">
              <img
                src={getImageUrl("ahorro-de-costos.png")}
                alt="Ahorro de costos"
                class="card__img"
              />
              <div class="card__body card__body--benefit">
                <h3 class="card__title card__title--lg t-shadow-primary">
                  Ahorra Costos
                </h3>
                <p class="card__text">
                  Nuestros planes le perminten ahorrar en costos de salario de
                  personal, tercerizando la administración y soporte Técnico
                  profesional.
                </p>
              </div>
            </div>
            <div class="card2">
              <img
                src={getImageUrl("soluciones-informaticas.png")}
                alt="Soluciones Informáticas"
                class="card__img"
              />
              <div class="card__body card__body--benefit">
                <h3 class="card__title card__title--lg t-shadow-primary">
                  Soluciones Informaticas
                </h3>
                <p class="card__text">
                  Le apoyamos en la instalación de programas o aplicativos que
                  necesite su equipo para desenvolverse en sus tareas
                  cotidianas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="section section--secondary">
        <div class="container container--elements">
          <h2 class="section__title section__title--contact">Contacto</h2>
          <form class="form">
            <div class="form__group">
              <input
                type="tel"
                placeholder="Celular"
                class="form__input"
                pattern="[0-9+]+"
                title="Ingresar un número de celular"
                required
              />
              <button
                class="button button--contact button--primary b-radius-none"
              >
                Contactar
              </button>
            </div>
          </form>
        </div>
        </section>
</main>;



export default Home;
