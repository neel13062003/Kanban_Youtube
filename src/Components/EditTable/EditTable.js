import React, { useState } from 'react'
import {X} from "react-feather" 
import './EditTable.css'

function EditTable(props) {
    const [showEdit,setShowEdit] = useState(false)
    return (
        <div class="editable">
            {
                showEdit ? (
                    <form className={`editable_edit ${props.editClass || ""}   `}
                        onSubmit={(event)=>{
                            event.preventDefault()    /*Resubmit na thay form*/
                            if(props.onSubmit) props.onSubmit()
                        }}
                    >
                        <input type="text" placeholder={props.placeholder}  defaultValue={props.text}/>
                        <div classname="editable_edit_foot" style={{display:'flex'}}>
                            <button type="submit" class="editable_edit_foot_button">{props.buttonText || "Add"}</button>
                            <X class="svg" onClick={()=> setShowEdit(false)}/>
                        </div>
                    </form>
                ):(
                    <p onClick={()=> setShowEdit(true)}  class ={`editable_display  ${props.displayClass || ""} `}>{props.text || "Add Item"}</p>
                )
            } 
        </div>
    );
}

export default EditTable;
