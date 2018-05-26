import '../SCSS/App.scss';
import React from 'react';
import '../SCSS/TitleBar.scss';
import CloseIcon from '@material-ui/icons/Close';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import RemoveIcon from '@material-ui/icons/Remove';
import { remote } from 'electron';

const win = remote.getCurrentWindow();


export default class TitleBar extends React.Component {

    state = {
        isMax: win.isMaximized
    }

    render(){
        return (
            <div id="title_bar"
                style={{
                    background: '#202225',
                    width: '100vw',
                    height: '1.5em',
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
                    id="win_control_buttons"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '6em',
                        height: '100%',
                    }}
                >
                    <div
                        id="min"
                        style={{
                            width: '2em',
                            height: '100%',
                            cursor: 'pointer',
                        }}
                        onClick={() => win.minimize()}
                    >
                        <RemoveIcon />
                    </div>

                    <div
                        id="max"
                        style={{
                            width: '2em',
                            height: '100%',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            this.setState({
                                isMax: !this.state.isMax,
                            }, () => {
                                if(this.state.isMax){
                                    win.unmaximize();
                                }else{
                                    win.maximize();
                                }
                            });
                        }}
                    >
                        <FullscreenIcon />
                    </div>

                    <div
                        id="close"
                        style={{
                            width: '2em',
                            height: '100%',
                            cursor: 'pointer',
                        }}
                        onClick={() => win.close()}
                    >
                        <CloseIcon />
                    </div>

                </div>
            </div>
        );
    }
}