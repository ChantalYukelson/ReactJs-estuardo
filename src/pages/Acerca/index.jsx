import React from 'react'

import logo from '../../assets/images/logo.estuardo.png';

import local from '../../assets/images/local.jpg';
import ropa from '../../assets/images/ropaa.jpg';
import { Link } from 'react-router-dom';
import '../../assets/css/animaciones.css'
import LoadingSpinner from '../../components/LoadingSpinner';

function Acerca() {
    document.title = 'Estuardo Acerca de Nosotros';
    if(ropa === undefined){
        return <section id="menu" className="py-5 text-center container">
        <div className="album bg-degrade py-5">
        <div className="container">
          <div className="">
          <LoadingSpinner />
          </div></div></div>
      </section>
    }
    return (
        <div className="slide-in-fwd-center">
        <div className="container marketing">
          <div className="row mx-auto align-middle text-center py-4">
           
            <div className="col-lg-4 mx-auto">
              <img src={logo} className="img-fluid mx-auto" alt="Logo" />
              <h2>Nuestra historia </h2>
              <p><Link to="" className="btn btn-secondary">Más info »</Link></p>
            </div>
            
          </div>
          {/* Nuestra ética */}
         
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">Somos un negocio familiar <span className="text-muted"></span></h2>
              <p className="lead">En Estuardo, somos un negocio familiar de moda masculina ubicado en Palermo, Buenos Aires. Nuestra historia se remonta a muchos años atrás, cuando nuestro fundador, Estuardo, estableció nuestro pequeño local con el compromiso de ofrecer ropa de alta calidad y diseños únicos. Desde entonces, hemos trabajado incansablemente para mantener vivo su legado de excelencia y estilo. Nos enorgullece haberse convertido en un referente en la moda masculina de la zona, brindando a nuestros clientes una experiencia de compra única y personalizada.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img src={local} className="img-fluid mx-auto" alt="cheffdehabemuspapavictorvondoomcocinando" />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Nuestros productos <span className="text-muted"></span></h2>
              <p className="lead">
              En Estuardo, entendemos que cada hombre tiene su propio estilo y personalidad distintivos. Por eso, hemos seleccionado cuidadosamente un amplio catálogo de productos para satisfacer tus necesidades. Desde trajes a medida y camisas elegantes hasta pantalones sofisticados y accesorios modernos, encontrarás todo lo que necesitas para lucir con confianza en cualquier ocasión. Nuestro equipo de expertos en moda masculina está comprometido a brindarte un servicio profesional y asesoramiento personalizado para ayudarte a encontrar las prendas perfectas que realcen tu estilo único. Ven a visitarnos en Palermo y descubre la calidad, la variedad y el estilo excepcionales que te ofrece Estuardo. Estamos aquí para ayudarte a verte y sentirte impecable en cada momento.</p>
            </div>
            <div className="col-md-5">
              <img src={ropa} className="img-fluid mx-auto" alt="habemuspapafoodtruck" />
            </div>
          </div>
          <hr className="featurette-divider" />
          {/* fin de nuestra ética */}
        </div>
      </div>
  )
}

export default Acerca