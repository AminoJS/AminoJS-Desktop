import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FeaturedPosts from '../Pages/FeaturedPosts';

export default class AppRouter extends React.Component {

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={FeaturedPosts}/>
                </Switch>
            </BrowserRouter>
        );
    }
}