import React from 'react';
 
const Comentarios = ({comment}) => {

    return (
        <div>
            <ul>
                {comment.map((comentario, i) => {
                return (<li key={i} className={comentario.leido ? 'leido':'noleido'}>{comentario.texto}</li>)
                })}
            </ul>
        </div>
    )
}


export default Comentarios;