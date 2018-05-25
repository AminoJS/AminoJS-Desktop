import '../SCSS/App.scss';
import React from 'react';
import TitleBar from './TitleBar';
import Communities from './Communities';
import FeaturedPosts from './FeaturedPosts';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import { EventEmitter } from 'fbemitter';

export const SnackbarEmitter = new EventEmitter();


export default class App extends React.Component {

    state = {
        snackbarOpen: false,
        snackbar: {
            title: 'Default Title',
            message: 'Default Text',
            duration: 2500,
        }
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
    }
}