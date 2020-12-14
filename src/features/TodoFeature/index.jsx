import React from 'react';

import TodoList from '../../components/TodoList';



function TodoFeature(props) {
    
    const mang = [
        {
            id: 1,
            title: 'an'

        },
        {
            id: 2,
            title: 'ngu'

        },
        {
            id: 3,
            title: 'ia'

        },
        {
            id: 4,
            title: 'dich'

        }
    ]
    return (
        <div>
            <h3>hello moi nguoi</h3>
            <TodoList todoList={mang} />


        </div>

    );
    console.log(props)
}


export default TodoFeature;