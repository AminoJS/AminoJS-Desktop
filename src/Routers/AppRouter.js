import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FeaturedPosts from '../Pages/FeaturedPosts';

export default class AppRouter extends React.Component {

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <div
                        style={{
                            overflowY: 'scroll'
                        }}
                    >
                        <Route exact path="/" component={FeaturedPosts}/>
                    </div>
                </Switch>
            </BrowserRouter>
        );
    }
}