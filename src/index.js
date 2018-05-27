import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './SCSS/index.scss';
import * as Amino from 'amino.js';
(async () => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    if(email && password){
        const sid = await Amino.login(email, password);
        console.log(sid);
        ReactDOM.render(<App />, document.getElementById('root'));
    }else{
        ReactDOM.render(<App />, document.getElementById('root'));
    }
})();