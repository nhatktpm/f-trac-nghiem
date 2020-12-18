import "./todolist.css";
import classnames from 'classnames';



function TodoList({ todoList, ham }) {
       

    const handleHam = (todo, index) => {
        if (!ham) return;
        ham(todo, index);
      

    }
    
    return (

        <div>
            <div>
                {todoList.map((todo, idex) => (
                    <div key={todo.id}
                        className={classnames({
                            item: true,
                            click: todo.status === 'new'
                        })}
                        onClick={() => handleHam(todo, idex)}
                    >

                        {todo.title}
                    </div>
                ))}

            </div>
        </div>


    );

}

export default TodoList;