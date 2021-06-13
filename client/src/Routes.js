import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { AuthPage } from './pages/AuthPage';
import {Table} from "./pages/Table"
export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
        <Switch>
            <Route path="/Table" exact>
                <Table />
            </Route>
        </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/">
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
        )
}