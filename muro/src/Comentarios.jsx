import React from 'react';

const Rotulo = ({comment}) => {

    return (
        <div>
            {/* comentarios */}
            <ul>
                {comment.map((comentario) => {
                console.log({comentario});
                return (<li>{comentario.texto}</li>)
                })}
            </ul>
        </div>
    )
}

export default Rotulo;