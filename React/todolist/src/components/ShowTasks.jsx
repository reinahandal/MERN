import React, {useState} from 'react'


const ShowTasks = (props) => {
    // const [checkedItems, setCheckedItems] = useState([]);

    // const checkItem = (item,idx) => {
    //     if(item.isCompleted==true){
    //         item.isCompleted=false;
    //         // const x = checkedItems.indexOf(item);
    //         // setCheckedItems([...checkedItems.slice(0,x), ...checkedItems.slice(x+1)]);
    //     } else {
    //         item.isCompleted=true;
    //         // setCheckedItems([...checkedItems,props.allTasks[idx]]);
    //     }
    // }

    return (
        <div className='container mt-5'>
            {props.allTasks.map((item) =>
                <div>
                    <label className={item.isCompleted ? "text-decoration-line-through form-check-label" : "form-check-label"}>
                    <input type="checkbox" checked={item.isCompleted} onChange={e => props.checkItem(item)} className="form-check-input me-2"/>
                        {item.name}
                    </label>
                    <button onClick={(e)=>props.deleteItem(item)} className="btn btn-danger btn-sm ms-4 mb-2">Delete</button>
                </div>
            )}
        </div>
    )
}

export default ShowTasks
