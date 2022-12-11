import React from 'react'

const Display = (props) => {
    return (
        props.selectedTab ?
        <div style={{
            border:"2px solid gray",
            padding:"15px",
            margin:"0 20px"
        }}>
            {props.selectedTab.content}
        </div> : ''
    )
}

export default Display
