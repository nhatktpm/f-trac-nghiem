import React, { useState } from 'react';

import TodoList from '../../components/TodoList';



function TodoFeature(props) {


    const initMang = [
        {
            id: 1,
            title: 'an',
            status: 'new'
        },
        {
            id: 2,
            title: 'ngu',
            status: 'comple'
        },
        {
            id: 3,
            title: 'an',
            status: 'new'
        },
        {
            id: 4,
            title: 'ngu',
            status: 'comple'
        }
    ]

    const [mang, setMang] = useState(initMang);

    const handleMang = (todo, index) => {

        const newTodoList = [...mang];

        newTodoList[index] = {
            ...newTodoList[index],

            status: newTodoList[index].status === 'new' ? 'comple' : 'new',
        };
        setMang(newTodoList);

    }


    return (
        <div>
            <h3>hello moi nguoi</h3>
            <TodoList todoList={initMang} ham={handleMang} />

        </div>

    );

}


export default TodoFeature;