import React, { Component } from 'react'

class BankAccountFormCreation extends Component {
    constructor(){
        super()
        this.state={
            accountHolderName:"",
            phone:"",
            email:"",
            password:"",
            address:"",
            accountType:""
        }
    }
    handleName = (event)=>{
        this.setState({
            accountHolderName:event.target.value
        })
    }
    handlePhone = (event)=>{
        this.setState({
            phone:event.target.value
        })
    }
    handleEmail = (event)=>{
        this.setState({
            email:event.target.value
        })
    }
    handlePassword = (event)=>{
        this.setState({
            password:event.target.value
        })
    }
    handleAddress = (event)=>{
        this.setState({
            address:event.target.value
        })
    }
    handleAccountType = (event)=>{
        this.setState({
            accountType:event.target.value
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault()
        alert(`Account Holder Name : ${this.state.accountHolderName}\nPhone Number : ${this.state.phone}\nEmail : ${this.state.email}\nPassword : ${this.state.password}\nAddress : ${this.state.address}`)
        window.location.reload()
    }
    render() {
        const {accountHolderName,phone,email,password,accountType,address}=this.state
        return (
            <div class="container">
                <h1>Bank Account Creation Form</h1>
                <form className='formclass' onSubmit={this.handleSubmit}>
                    
                    <div>
                        <label htmlFor='accountholdername'>Account Holder :</label>
                        <input 
                        type="text" 
                        name="accountholdername" 
                        id="accountholdername" 
                        onChange={this.handleName} 
                        value={accountHolderName}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor='phonenumber'>Phone Number :</label>
                        <input 
                        type="text" 
                        name="phonenumber" 
                        id="phonenumber" 
                        onChange={this.handlePhone} 
                        value={phone}
                        pattern='[0-9]{10}'
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email :</label>
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        onChange={this.handleEmail} 
                        value={email}
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password :</label>
                        <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        onChange={this.handlePassword} 
                        value={password}
                        pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                        title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        />
                    </div>
                    <div>
                        <label htmlFor='address'>Address :</label>
                        <textarea 
                        type="address" 
                        name="address" 
                        id="address" 
                        onChange={this.handleAddress} 
                        value={address}
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor='accountType'>Account Type :</label>
                        <select>
                        <option name="accountType" value={accountType}>
                        Current Account
                        </option>
                        <option name="accountType" value={accountType}>
                        Savings Account
                        </option> 
                        </select>
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default BankAccountFormCreation