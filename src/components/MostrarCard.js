import ProfileCard from "./ProfileCard";

import cuadro1 from "./CartWidget/Img/cuadro1.jpeg"
import cuadro2 from "./CartWidget/Img/cuadro2.jpeg"
import cuadro3 from "./CartWidget/Img/cuadro3.jpeg"
import "./MostrarCard.css"
import "bulma/css/bulma.css"

function MostrarCard (){

    return (
        <div>
            <section className="hero">
                <div className="hero-body">
                    <h1> TODOS LOS PRODUCTOS</h1>
                </div> 
            </section>
            
            <div className="container">
                <div className="columns cards">
                    <div className="column is-4">
                       <ProfileCard titulo={"CUADRO ABSTRACTO"} arroba="TAMAÑO: 70X40" img={cuadro1}/>
                    </div>
                    <div className="column is-4">
                       <ProfileCard titulo={"CUADRO ABSTRACTO"} arroba="TAMAÑO: 130X80" img={cuadro2}/>
                    </div>
                    <div className="column is-4">
                       <ProfileCard titulo={"CUADRO ABSTRACTO"} arroba="TAMAÑO: 60X1200" img={cuadro3}/>
                    </div>
                </div>
            </div>         
          
              
        </div>
    )

}

export default MostrarCard;