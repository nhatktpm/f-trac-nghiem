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
    const [filStatus, setFilStatus] = useState('all');


    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',

        };
        setTodoList(newTodoList)
    }


    const showAll = () => {
        setFilStatus('all');
    }
    const showCompleted = () => {
        setFilStatus('completed');
    }
    const showNew = () => {
        setFilStatus('new');
    }

    const renderTodoList = todoList.filter(todo => filStatus === 'all' || filStatus === todo.status);


    return (
        <section>
            <h3>hello moi nguoi  </h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

            <button onClick={showAll} >
                Show All
            </button>

            <button onClick={showCompleted}>
                Show Completed
             </button>

            <button onClick={showNew}  >
                Show New
            </button>

        </section>

    );

}


export default TodoFeature;