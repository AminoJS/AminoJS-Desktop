import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Pages/Login';

export default class PageRouter extends React.Component {

    render(){
        return (
            <BrowserRouter>
                <div
                    style={{
                        background: '#36393F',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh'
                    }}
                >
                    <Switch>
                        <Route exact path="/" component={Login}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}