import React, { useState } from 'react';
import TodoList from '../../components/TodoList';



function TodoFeature(props) {


    const initTodoList = [
        {
            id: 1,
            title: 'an',
            status: 'new',

        },
        {
            id: 2,
            title: 'ngu',
            status: 'completed',

        },
        {
            id: 3,
            title: 'dich',
            status: 'new',

        },
        {
            id: 4,
            title: 'lam an',
            status: 'completed',

        }
    ]

    const [todoList, setTodoList] = useState(initTodoList);


    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',

        };
        setTodoList(newTodoList)
    }


    return (
        <div>
            <h3>hello moi nguoi  </h3>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />

        </div>

    );

}


export default TodoFeature;