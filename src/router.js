import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {MainPage} from './components/main-page/main-page'

export class Router extends React.Component
{
    render()
    {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path={"/home"} component={MainPage}/>
                </Switch>
            </BrowserRouter>)
    }
}
