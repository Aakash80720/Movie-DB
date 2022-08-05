import React, { useEffect } from 'react'
//k_owl16qen
function Info(props) {
    console.log(props)
    return (
        <div>
            <h4>Trailler:</h4>
            <center>
                <iframe className = "trailer" src={props?.vid?.linkEmbed} width="854" height="480" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" frameborder="no" scrolling="no"></iframe> 
            </center>
        </div>
    )
}

export default Info
