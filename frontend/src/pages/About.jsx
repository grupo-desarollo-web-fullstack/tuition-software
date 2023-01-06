import "@styles/modules/members.scss";
import Image1 from "@assets/img/img1.png";
import Image2 from "@assets/img/img2.jpeg";
import Image3 from "@assets/img/img3.jpg";
import Image4 from "@assets/img/img4.jpg";

import Logo from "@components/svgr/GivenSvg";


const About = () => (
  <main className="main main--about">
    <section className="about">
      <div className="content">
        <Logo />
        <div className="text">
          <h1>Sobre Nosotros</h1>
          <h5>Desarrolladores y diseñadores</h5>
          <p>
            Somos una organizacion de desarrolladores y diseñadores enfocados en
            brindar soluciones de alta gama dentro de los cuales se encuentran
            servicios como un procesos de matricula para estudiantes, donde el
            estudiante se podra registrar y loguearse para poder realizar sus
            matricula y una vez finalizado este proceso podra ver los cursos en
            los cuales se encuentra matriculado de una forma sencilla y rapida.
          </p>
        </div>
      </div>
    </section>

    <section className="content">
      <div className="container">
        <div className="card-section">
          <div className="card">
            <div className="card-header">Alejandro Oroncoy Almeyda</div>
            <div className="card-body">
              <div className="img img--alejo">
                <img src={Image1} alt="" />
              </div>
              <a href="https://github.com/alejooroncoy">Saber mas!</a>
            </div>
            <div className="card-footer">7 de Enero 2023</div>
          </div>
          <div className="card">
            <div className="card-header">Mario Grande Contreras</div>
            <div className="card-body">
              <div className="img">
                <img src={Image2} alt="" />
              </div>
              <a href="https://github.com/Mario2701">Saber mas!</a>
            </div>
            <div className="card-footer">7 de Enero 2023</div>
          </div>
          <div className="card">
            <div className="card-header">York Antayhua Cortez</div>
            <div className="card-body">
              <div className="img">
                <img src={Image4} alt="" />
              </div>
              <a href="https://github.com/york30">Saber mas!</a>
            </div>
            <div className="card-footer">7 de Enero 2023</div>
          </div>
          <div className="card">
            <div className="card-header">Yhancarlos Gonzales Javier</div>
            <div className="card-body">
              <div className="img">
                <img src={Image3} alt="" />
              </div>
              <a href="https://github.com/YHAGON">Saber mas!</a>
            </div>
            <div className="card-footer">7 de Enero 2023</div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default About;

// # I will work from this point
