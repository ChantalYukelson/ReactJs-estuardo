import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import local from '../../assets/images/local.jpg';
import './Inicio.css'
import '../../assets/css/animaciones.css'
import LoadingSpinner from '../../components/LoadingSpinner/';


function Inicio() {
  
  document.title = 'Estuardo Inicio';


  if(local === undefined){
    return <section id="menu" className="py-5 text-center container">
    <div className="album bg-degrade py-5">
    <div className="container">
      <div className="">
      <LoadingSpinner />
      </div></div></div>
  </section>
  }
  return (
<div>
<section className="heroportada position-relative pt-48 pb-80 bg-dark bg-cover bg-size--cover slide-in-fwd-center">
  {/* Overlay */}
  <span className="position-absolute top-0 start-0 w-full h-full bg-dark opacity-80" />
  {/* Contenido */}
  <div className="container-lg max-w-screen-xl position-relative overlap-10 text-center text-lg-start pt-5 pb-5 pt-lg-6">
    <div className="row row-grid align-items-center">
      <div className="col-lg-8 text-center text-lg-start">
        {/* Título */}
        <h1 className="ls-tight font-bolder display-5 text-black mb-5">

        </h1>
        {/* Texto */}
        <p className="lead text-black text-opacity-80 mb-4 w-lg-2/3 mt-5" style={{ marginTop: "10 rem" }}> 
          Contamos con las prendas de la más alta calidad y un equipo de expertos dedicados exclusivamente a la creación de estilos masculinos excepcionales.
        </p>
        {/* Botón */}
        <div className="mb-5">
          <Link to="/" className="btn btn-lg btn-primary shadow-sm mx-2 px-lg-8 custom-btn">
            Compra tus prendas online!
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>





  <section>
    <article>
      
      {/* Call to action o hero para desktops */}
      <div className="container col-xxl-8 px-4 py-2 d-none d-lg-block">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={local} className="d-block mx-lg-auto img-fluid" alt="Pedí Online" width={700} height={500} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Consegui ropa de calidad a increibles precios</h1>
            <p className="lead">No pierdas tiempo y compra tu ropa en segundos</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to=""><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Productos</button></Link>
              
            </div>
          </div>
        </div>
      </div>
    </article>
   </section>        
  
</div>
  )
}

export default Inicio; 