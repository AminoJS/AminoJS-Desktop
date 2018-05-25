import '../SCSS/App.scss';
import React from 'react';

export default class TitleBar extends React.Component {
    render(){
        return (
            <div id="title_bar"
                style={{
                    background: '#202225',
                    width: '100vw',
                    height: '2em',
                    position: 'fixed',
                    boxShadow: 'rgb(0, 0, 0) 0px 0px 1px',
                    zIndex: 1,

                }}
            >
                <div
                    style={{
                        background: 'url(http://www.coullon.com/img/portfolio/amino1.png)',
                        width: '7em',
                        height: '3em',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        margin: '-0.4em -1.5em',
                        filter: 'grayscale(1)',
                    }}
                >
                </div>

                <div
                    style={{
                        position: 'absolute',
                        background: '#CCC',
                        top: 0,
                        right: 0,
                        width: '5em',
                        height: '100%',
                    }}
                >
                </div>
            </div>
        );
    }
}