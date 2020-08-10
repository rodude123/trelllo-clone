import React, {Component} from 'react';
import './loginSignup.css';

class App extends Component
{

    state = {
        name: '',
        email: '',
        password: '',
        rePassword: '',
        loggedIn: false
    }

    signUpForm = () =>
    {
        document.getElementById('container').classList.add("right-panel-active")
    };

    loginForm = () =>
    {
        document.getElementById('container').classList.remove("right-panel-active")
    }

    login = e =>
    {
        e.preventDefault();
        let formData = new FormData();
        formData.append("email", this.state.email);
        formData.append("password", this.state.password)
        fetch("./api/login.php",
    {
            method: "POST",
            body: formData
        }).then(res =>
        {
            res.text().then(text =>
            {
                this.setState({loggedIn: true})
            })
        })
    }




    render() {

        return (
            <>
                <h2>Tra la la lelo</h2>
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <input type="text" placeholder="Name" id="name" onChange={e => this.setState({name: e.target.value})} required/>
                            <input type="email" placeholder="Email" id="upEmail" onChange={e => this.setState({email: e.target.value})} required/>
                            <input type="password" placeholder="Password" id="upPassword" onChange={e => this.setState({password: e.target.value})} required/>
                            <input type="password" placeholder="retype password" id="upRePassword" onChange={e => this.setState({rePassword: e.target.value})} required/>
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="signin.html" onSubmit={this.login}>
                            <h1>Sign in</h1>
                            <input type="email" placeholder="Email" id="inEmail" onChange={e => this.setState({email: e.target.value})} required/>
                            <input type="password" placeholder="Password" id="inPassword"  onChange={e => this.setState({password: e.target.value})} required/>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>Sign in to Tra la la lelo</p>
                                <button className="ghost" onClick={this.loginForm}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Sign up to Tra la la lelo</p>
                                <button className="ghost" onClick={this.signUpForm}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
