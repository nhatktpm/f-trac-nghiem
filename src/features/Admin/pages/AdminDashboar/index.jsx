import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';
import EditExercise from '../../components/EditExercise';
import ListExercise from '../../components/ListExrcise';
import QuestionExercise from '../../components/QuestionExercise';

function AdminDashBoard(props) {
    return (
        <div className="d-flex" >
            <AdminMenu />
            <div className="main-panel">
                <div classNames="content">
                    <div className="col-3">

                        <Switch>
                            <Route path="/dashboard/list_exercise" component={ListExercise} />
                            <Route path="/dashboard/edit" component={EditExercise} />
                            <Route path="/dashboard/question_exercise" component={QuestionExercise} />
                        </Switch>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default AdminDashBoard;