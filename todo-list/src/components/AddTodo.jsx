import React from 'react';
import { useState } from 'react';

const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if (!title || !desc ) {
            alert("Cant be blank")
            
        }
        else{
            props.addTodo(title, desc)
        setTitle("");
        setDesc(""); 
       }
        
        


    }

    const inputStyle = {
        width: "50vw",
        'margin-left' : "5vw", 
        
    }
    return (
        <div>
            <form onSubmit={submit} style={inputStyle}>
                <div class="form-group  "  >
                    
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Heading"/>
                       
                </div>
                <div class="form-group">
                    
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="exampleInputPassword1" placeholder="Discription"/>
                </div>
               
                <button type="submit" class="btn btn-sm btn-danger"> ADD </button>
            </form>
        </div>
    );
}

export default AddTodo;
