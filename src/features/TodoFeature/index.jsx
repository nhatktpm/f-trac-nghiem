import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';
import { Container } from '@material-ui/core';



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

    const location = useLocation();

    const [todoList, setTodoList] = useState(initTodoList);
    const [filStatus, setFilStatus] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });


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


    const handleTodoFormSubmit = (values) => {
        console.log('form submit: ', values);
    }

    return (
        <Container>
            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />



            <div> this is my to do</div>
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

        </Container>

    );

}


export default TodoFeature;