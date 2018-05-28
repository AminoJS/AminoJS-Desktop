import '../SCSS/App.scss';
import React from 'react';
import '../SCSS/TitleBar.scss';
import CloseIcon from '@material-ui/icons/Close';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import RemoveIcon from '@material-ui/icons/Remove';
import { remote } from 'electron';

const win = remote.getCurrentWindow();
const platform = process.platform === 'darwin' ? 'osx' : 'win';

let winControlStyle = {};

if(platform === 'osx'){
    winControlStyle = {
        left: 0,
    };
}else{
    winControlStyle = {
        right: 0,
    };
}

export default class TitleBar extends React.Component {

    constructor(){
        super();
        this.winControlButtons = React.createRef();
    }

    state = {
        isMax: win.isMaximized,
    }

    componentDidMount(){
        win.addListener('blur', () => {
            this.winControlButtons.current.classList.add('blur');
        });
        
        win.addListener('focus', () => {
            this.winControlButtons.current.classList.remove('blur');
        });
    }

    buttonsLayout(){
        const buttons = {
            close: (() => {
                return (
                    <div
                        id="close"
                        style={{
                            width: '2em',
                            height: '100%',
                            cursor: 'pointer',
                        }}
                        onClick={() => win.close()}
                    >
                        <CloseIcon className="win_icon" />
                    </div>
                );
            })(),
            max: (() => {
                return (
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
                        <FullscreenIcon className="win_icon" />
                    </div>
                );
            })(),
            min: (() => {
                return (
                    <div
                        id="min"
                        style={{
                            width: '2em',
                            height: '100%',
                            cursor: 'pointer',
                        }}
                        onClick={() => win.minimize()}
                    >
                        <RemoveIcon className="win_icon" />
                    </div>
                );
            })(),
        };

        if(platform === 'osx'){
            return [
                buttons.close,
                buttons.min,
                buttons.max,
            ];
        }else{
            return [
                buttons.min,
                buttons.max,
                buttons.close,
            ];
        }
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
                        display: platform === 'osx' ? 'none' : 'inline-block',
                    }}
                >
                </div>

                <div id="drag_bar"
                    style={{
                        width: platform === 'osx' ? '93.8%' : '90%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                    }}
                    className={platform}
                ></div>

                <div
                    id="win_control_buttons"
                    ref={this.winControlButtons}
                    style={{
                        position: 'absolute',
                        width: 'auto',
                        height: '100%',
                        top: 0,
                        marginRight:'auto',
                        ...winControlStyle,
                    }}
                    className={platform}
                >
                    {
                        this.buttonsLayout()   
                    }
                </div>
            </div>
        );
    }
}