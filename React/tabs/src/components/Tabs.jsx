import React, { useState } from 'react'

const Tabs = (props) => {
    return (
        <div style={{
            marginTop:"20px",
            marginBottom:"20px",
            display:"flex",
            
        }}>
        { props.tabs.map( (item, i) => 
            <div style={{
                width:"140px",
                height:"30px",
                border:"2px lightgray solid",
                padding:"5px",
                margin: "5px"
            }} onClick={ (e) => props.selectTab(item)}>{item.label}</div>
            )
        }
        </div>
    )
}

export default Tabs
