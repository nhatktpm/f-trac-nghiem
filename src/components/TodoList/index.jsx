import "./todolist.css";
import classnames from 'classnames';



function TodoList({ todoList, onTodoClick }) {


    const handleTodoClick = (todo, idx) => {
        if (!onTodoClick) {
            console.log('aas')
        };
        onTodoClick(todo, idx);


    }

    return (

        <div>
            <ul>
                {todoList.map((todo, idx) => (
                    <li key={todo.id}
                        className={classnames({
                            item: true,
                            completed: todo.status === 'completed'
                        })}
                        onClick={() => handleTodoClick(todo, idx)}
                    >
                        {todo.title}
                    </li>
                ))}

            </ul>
        </div>


    );

}

export default TodoList;