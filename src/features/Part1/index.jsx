import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailTestPage from './pages/DetailTestPage';
import ListTestPage from './pages/ListTestPage';



function Part1(props) {

    const match = useRouteMatch();

    return (
        <div>
            <div>Part1</div>
            <Switch>
            <Route path={match.url} exact component={ListTestPage}  />
            <Route path={match.url/"/:testId"} exact component={DetailTestPage}  />


            </Switch>



        </div>

    );
}

export default Part1;