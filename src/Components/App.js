import '../SCSS/App.scss';
import React from 'react';
import TitleBar from './TitleBar';
import Communities from './Communities';
import FeaturedPosts from './FeaturedPosts';

export default class App extends React.Component {
    render(){
        return (
            <div id="home_page">
                <TitleBar />
                <Communities />
                <div id="main_content"
                    style={{
                        position: 'fixed',
                        top: '2em',
                        left: '5.4em',
                        background: '#36393F',
                        width: '100vw',
                        height: '100vh',
                        overflowX: 'scroll',
                        padding: '0.6em',
                    }}
                >
                    <FeaturedPosts />
                </div>
            </div>
        );
    }
}