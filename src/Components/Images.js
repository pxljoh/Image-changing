import React, { useState } from 'react'


function Images() {
    let a = {
        header: [
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fboricuaonline.com%2Fwp-content%2Fuploads%2F2019%2F11%2Fcabo-rojo-playa-combate2.jpg&f=1&nofb=1",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.godominicanrepublic.com%2Fwp-content%2Fuploads%2F2017%2F11%2FCabo-Rojo2.jpg&f=1&nofb=1",
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftropixtraveler.com%2Fweb%2Fwp-content%2Fuploads%2F2015%2F04%2F239-Puerto-Rico-Cabo-Rojo-Rock-Formation.jpg&f=1&nofb=1",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fboricuaonline.com%2Fwp-content%2Fuploads%2F2019%2F11%2Fcabo-rojo-balneario-boqueron8.jpg&f=1&nofb=1",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.marinas.com%2Fv2%2Fc98a16655651a689bf2a520b7e627ff6f6e727578a6de2f4892b9c95552d0193.jpg&f=1&nofb=1",

        ],
    }

    const [pic, setPic] = useState(0);
    const nextPic = () => {
        if (pic < 3) {
            setPic(pic + 1)
        } else { setPic(0) }
        console.log(pic)
    }
    const previousPic = () => {
        if (pic > 0) {
            setPic(pic - 1)
        } else { setPic(3) }
        console.log(pic)
    }
    return (
        <div className="img-container w-100  center pa3 tracked-mega f6 times ">
            <div className="tc center mb3">
                <h1 >CABO ROJO</h1>
                <p >Puerto Rico</p>
                <img src={a.header[pic]} className="w-100 center h5 ba mt5 overflow-hidden " alt="cabo rojo beach PR" />
            </div>

            <p className="w-90 center tracked f6 ">Cabo Rojo fue fundado en el año 1771 por Nicolás Ramírez de Arellano, su primer alcalde. Su nombre proviene del color rojizo que se refleja en sus costas por el exceso de minerales el agua. Se le conocía como los Cabos Rojos o Tierras Bajas de los Morillos.</p>
            
            <div className="tc center flex justify-center mt4">
                <button id="button-r" onClick={previousPic} className="w4 pa3 pointer"> 🡄 </button>
                <button id="button-l" onClick={nextPic} className="w4 pa3 ba b--black-10 pointer">🡆</button>
            </div>
          
                <p className=" f7  w-90 tr absolute bottom-0">j</p>
          
            
       
        </div>
    )
}

export default Images