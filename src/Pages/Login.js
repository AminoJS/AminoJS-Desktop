import '../SCSS/App.scss';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
var Amino = require('amino.js');

export default class FeaturedPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }
    
    async handleSubmit(event) {
        alert('USR: ' + this.state.username);
        alert('PWD: ' + this.state.password);
        const sid = await Amino.login(this.state.username, this.state.password);
        localStorage.setItem('sid', sid);
        alert('SID: ' + localStorage.getItem('sid'));
        event.preventDefault();
    }
    
    render() {
        return (
            <div id="login" style={{width: '100vw', height: '100vh', position: 'relative',}}>
                <form style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%)'}} onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <TextField name="username" label="Username" value={this.state.value} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Password:
                        <TextField name="password" label="Password" value={this.state.value} onChange={this.handleInputChange} />
                    </label>
                    <Button variant="raised" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}