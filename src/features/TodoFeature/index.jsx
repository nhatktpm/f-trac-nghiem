import React from 'react';

import TodoList from '../../components/TodoList';



function TodoFeature(props) {
    const TodoList = [
        {
            id:1,
            title: 'eat',
            status: 1
        },
        {
            id:2,
            title: 'eat',
            status: 1
        },
        {
            id:3,
            title: 'eat',
            status: 1
        }
    ]
    return (
        <div>
            <TodoList todoList={TodoList}/>
        </div>
    );
}

export default TodoFeature;