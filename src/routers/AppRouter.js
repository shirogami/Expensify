
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashBoardPage from './../components/ExpenseDashBoardPage';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashBoardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} exact={true} />
                <Route path="/edit/:id" component={EditExpensePage} exact={true} />
                <Route path="/help" component={HelpPage} exact={true} />
                <Route component={NotFoundPage} exact={true} />

            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;