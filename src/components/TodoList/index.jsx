import React from 'react';
import PropTypes from 'prop-types';



function TodoList({ todoList }) {
    return (

        <div>
            <div>
                {todoList.map(todo => (
                    <div key={todo.id}>
                    {todo.title}
                    </div>
                ))}

            </div>
        </div>


    );

}

export default TodoList;