import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {SignInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({ [name]: value});
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span className="title">Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                             
                    <FormInput 
                        name="email" 
                        type="email" 
                        label="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput 
                        label="password" 
                        name="password" 
                        type="password" 
                        value={this.state.password}  
                        handleChange={this.handleChange} 
                    required/>

                    <div className="buttons">
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;