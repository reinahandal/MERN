import React from 'react'

const Colors = (props) => {
    return (
        <div>
            <h1 style={{
                backgroundColor: props.bg,
                color: props.txt
            }}>{props.word}</h1>
        </div>
    )
}

export default Colors
