import '../SCSS/App.scss';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class FeaturedPosts extends React.Component {

    async login(){
        localStorage.setItem('sid', 'place_holder');
        window.location.href = '/';
    }

    render(){
        return (
            <div id="login"
                style={{
                    width: '100vw',
                    height: '100vh',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%)',
                    }}
                >
                    <TextField 
                        label="Username"
                        style={{
                            color: '#FFF',
                            display: 'block',
                        }}
                        defaultValue="lol"
                    />
                    
                    <TextField 
                        label="Password"
                        type="password"
                        style={{
                            color: '#FFF',
                            display: 'block',
                        }}
                        defaultValue="lol"
                    />

                    <Button variant="raised" onClick={() => this.login()}>
                        Login
                    </Button>
                </div>

            </div>
        );
    }
}