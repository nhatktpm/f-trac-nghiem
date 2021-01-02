import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminDashBoard from './pages/AdminDashboar';

import AdminLogin from './pages/AdminLogin';


function Admin(props) {

    const [todoList, setTodoList] = useState([

    ]);



    return (
        <div>          
                    {/* <Switch>                        
                        <Route path="/dashboard" component={AdminDashBoard} />
                    </Switch> */}
                                    
        </div>
    );
}

export default Admin;