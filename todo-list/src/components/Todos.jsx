import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    return (
        <div>
            <h3>To Do LISTS </h3>
            {props.todos.length === 0 ? "No todos to diaply":
                props.todos.map((todo)=>{
                    return (
                        <>
                        
                        <Todo todo ={todo} key={todo.sno} onDelete={props.onDelete}/>  
                        {/* in map we have to give a key   */}
                        

                        </>
                    )
                })
            }

            
        </div>
    );
}

export default Todos;
