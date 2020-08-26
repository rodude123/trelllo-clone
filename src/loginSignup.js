import React, {Component} from 'react';
import './loginSignup.css';

class LoginSignup extends Component {

    state = {
        name: '',
	    username: '',
        email: '',
        password: '',
	    company: '',
	    website: '',
        message: '',
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
                if (text === "ok")
                {
                    this.setState({loggedIn: true})
                }
                else
                {
                    this.setState({message: text})

                }
            })
        })
    }
    
    signUp = e =>
    {
    	e.preventDefault();
    	let formData = new FormData();
    	formData.append("name", this.state.name)
	    formData.append("username", this.state.username)
	    formData.append("email", this.state.email)
	    formData.append("password", this.state.password)
	    formData.append("company", this.state.company)
	    formData.append("website", this.state.website)
	
	    fetch("./api/signup.php",
		    {
			    method: "POST",
			    body: formData
		    }).then(res =>
	    {
		    res.text().then(text =>
		    {
			    if (text === "ok")
			    {
				    this.setState({signup: true})
			    }
			    else
			    {
				    this.setState({message: text})
				
			    }
		    })
	    })
	    
    }

    closeAlert = e =>
    {
        let div = e.target.parentElement;
        div.style.opacity="0";
        setTimeout(function(){div.style.display = "none";}, 600);
        this.setState({message: ''})
    }

    render() {
        return (
            <div>
                <h2>Tra la la lelo</h2>
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form action="#" onSubmit={this.signUp}>
                            <h1>Create Account</h1>
	                        <div className="row">
		                        <input type="text" className="small" placeholder="Name*" id="name" maxLength="100"
		                               onChange={e => this.setState({name: e.target.value})} required/>
		                        <input type="text" className="small" placeholder="Username*" id="username"
		                               maxLength="50" onChange={e => this.setState({username: e.target.value})}/>
	                        </div>
	                        <div className="row">
		                        <input type="text" placeholder="Company" id="company" maxLength="100"
		                               onChange={e => this.setState({company: e.target.value})}/>
		                        <input type="text" placeholder="Website" id="website"
		                               onChange={e => this.setState({website: e.target.value})}
		                               pattern="(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})"/>
	                        </div>
                            <input type="email" placeholder="Email*" id="upEmail" onChange={e => this.setState({email: e.target.value})} required/>
                            <input type="password" placeholder="Password*" id="upPassword" onChange={e => this.setState({password: e.target.value})} required/>
                            <input type="password" placeholder="Retype password*" id="upRePassword" onChange={e => {this.state.password !== e.target.value && this.setState({message: "Password's don't match"})}} required/>
	                        {this.state.message !== '' &&
	
	                        <div className="alert">
		                        <span id="closebtn2" className="closebtn" onClick={this.closeAlert}>&times;</span>
		                        {this.state.message}
	                        </div>
	                        }
	                        <input type="submit" value="Sign up" disabled={true}/>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="signin.html" onSubmit={this.login}>
                            <h1>Sign in</h1>
                            <input type="email" placeholder="Email" id="inEmail" onChange={e => this.setState({email: e.target.value})} required/>
                            <input type="password" placeholder="Password" id="inPassword"  onChange={e => this.setState({password: e.target.value})} required/>
                            {this.state.message !== '' &&

                            <div className="alert">
                                <span id="closebtnl" className="closebtn" onClick={this.closeAlert}>&times;</span>
                                {this.state.message}
                            </div>
                            }
                            <input type="submit" value={"Sign in"}/>
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
            </div>
        );
    }
}

export default LoginSignup;
