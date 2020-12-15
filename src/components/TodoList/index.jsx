import React, { useState } from 'react';

import "./todolist.css";
import classnames from 'classnames';



function TodoList({ todoList }) {
    const [css, setCss] = useState('2');
    const handleClick = () => {
        setCss('1')
        console.log('asd')
    }
    return (

        <div>
            <div>
                {todoList.map(todo => (
                    <div key={todo.id}
                        className={classnames({
                            item: true,
                            
                        })}
                        onClick={() => handleClick()}
                    >
                    
                        {todo.title} {css} 
                    </div>
                ))}

            </div>
        </div>


    );

}

export default TodoList;