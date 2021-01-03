import React from 'react';
import { Link } from 'react-router-dom';

function Exercise(props) {

    const { exercise, onEdit, onDelete } = props;
    console.log(exercise)
    return (

        <>
            {exercise.map((exer, idx) => (

                <tr>
                    <td>
                        {idx}
                    </td>

                    <td>
                        {exer.name}
                    </td>

                    <td>
                        <img
                            src={exer.img}
                            alt="hinh"
                            height="50px" width="50px"
                        />
                    </td>

                    <td>
                        {exer.description}
                    </td>

                    <td>

                        <Link to="/dashboard/edit">
                            <button onClick={() => onEdit(exer, idx)} type="button" class="btn btn-warning btn-sm">Edit</button>
                        </Link>
                    </td>

                    <td>
                        <button onClick={() => onDelete(exer, idx)} type="button" class="btn btn-danger btn-sm">Delete</button>
                    </td>

                </tr>

            ))}

        </>

    );
}

export default Exercise;            