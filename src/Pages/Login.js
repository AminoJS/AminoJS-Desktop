import '../SCSS/App.scss';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as Amino from 'amino.js';

export default class FeaturedPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    
    async handleSubmit(event) {
        event.preventDefault();
        try{
            await Amino.login(this.state.email, this.state.password);
            localStorage.setItem('email', this.state.email);
            localStorage.setItem('password', this.state.password);
            window.location.href = '/';
        }
        catch(error){
            console.error(error);
        }
    }
    
    render() {
        return (
            <div id="login" style={{width: '100vw', height: '100vh', position: 'relative',}}>
                <form style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%)'}} onSubmit={e => this.handleSubmit(e)}>
                    <label>
                        Email:
                        <TextField type="text" label="Email" value={this.state.value} onChange={e => this.setState({email: e.target.value})} />
                    </label>
                    <label>
                        Password:
                        <TextField type="password" label="Password" value={this.state.value} onChange={e => this.setState({password: e.target.value})} />
                    </label>
                    <Button variant="raised" type="submit">Submit</Button>
                </form>
            </div>
        );
    }
}