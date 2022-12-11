import React from 'react'

const DisplayBoxes = (props) => {
    return (
        <div style={{
            display:"flex",
            flexWrap:"wrap"
        }}>
            { props.boxes.map( (item, i) => 
                <div style={{
                    backgroundColor: item[0],
                    width: item[1]+"px",
                    height: item[2]+"px",
                    margin: "10px"
                }} key={i}></div>) }
        </div>
    )
}

export default DisplayBoxes