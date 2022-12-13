import React from 'react'

const Number = (props) => {
    return (
        <div>
        <h1>{isNaN(props.bla) ? 'The word is:' : 'the number is:'} {props.bla}</h1>
        </div>
    )
}

export default Number
