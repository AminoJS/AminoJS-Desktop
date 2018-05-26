import '../SCSS/App.scss';
import React from 'react';
import Communities from './Communities';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import { EventEmitter } from 'fbemitter';
import PageRouter from '../Routers/PageRouter';
import AppRouter from '../Routers/AppRouter';
import TitleBar from './TitleBar';

export const SnackbarEmitter = new EventEmitter();

window.dev = {};

window.dev.logout = () => {
    localStorage.removeItem('sid');
    window.location.href = '/';
};

window.dev.login = () => {
    localStorage.setItem('sid', 'place_holder');
    window.location.href = '/';
};

export default class App extends React.Component {

    state = {
        snackbarOpen: false,
        snackbar: {
            title: 'Default Title',
            message: 'Default Text',
            duration: 2500,
        },
    }

    closeSnackbar(){
        this.setState({
            snackbarOpen: false,
        });
    }

    componentDidMount(){
        SnackbarEmitter.addListener('push', payload => {
            console.log(payload);
            const snackbar = {
                ...this.state.snackbar,
                // Overwrite the defaults if available
                ...payload,
            };
            this.setState({
                snackbar,
                snackbarOpen: true,
            });
        });
    }

    render(){

        const sid = localStorage.getItem('sid');

        if(sid !== null){
            return (
                <div id="home_page">
                    <TitleBar />
                    <Communities />
                    <div id="main_content"
                        style={{
                            position: 'fixed',
                            top: '1.5em',
                            left: '5.4em',
                            background: '#36393F',
                            width: '100vw',
                            height: '100vh',
                            overflowX: 'scroll',
                            padding: '0.6em',
                        }}
                    >
                        <AppRouter />    
                    </div>
    
                    <Snackbar
                        anchorOrigin={{ 
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.snackbarOpen}
                        onClose={() => this.closeSnackbar()}
                        message={this.state.snackbar.message}
                        autoHideDuration={this.state.snackbar.duration}
                        action={
                            <Button 
                                color="secondary"
                                size="small"
                                onClick={() => this.closeSnackbar()}
                            >
                                {
                                    this.state.snackbar.button || 'OK'
                                }
                            </Button>
                        }
                    ></Snackbar>
    
                </div>
            );
        }else{
            return (
                <div>
                    <TitleBar />
                    <PageRouter />
                </div>
            );
        }
    }
}