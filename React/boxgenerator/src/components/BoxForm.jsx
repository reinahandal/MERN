import React, {useState} from 'react';

const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const handleBox = (e) => {
        e.preventDefault();
        props.myFun(color,width,height);
        setColor("");
        setWidth(0);
        setHeight(0);
    }

    return (
        <div>
            <form onSubmit={handleBox}>
                <div>
                    <label>Color</label>
                    <input type="text" onChange={(e) => setColor(e.target.value)} value={color}></input>
                </div>
                <div>
                    <label>Width</label>
                    <input type="text" onChange={(e) => setWidth(e.target.value)} value={width}></input>
                </div>
                <div>
                    <label>Height</label>
                    <input type="text" onChange={(e) => setHeight(e.target.value)} value={height}></input>
                </div>
                    <input type="submit"></input>
            </form>
        </div>
)
}

export default BoxForm