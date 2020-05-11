import React from 'react'
import UserInfo from './UserInfo.js'

class Form extends React.Component{
	constructor(props){
		super(props);
		this.state={
			firstname:'',
			lastname:'',
			s_firstname:'',
			s_lastname:'',
			ischeck:''
		};
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	handleChange(event){
		const target = event.target;
   	 	const value = target.value;
    	const name = target.name;
		this.setState({
			[name]:value,	
		});
	}
	handleSubmit(event){
		event.preventDefault();
		this.setState({
			s_firstname:this.state.firstname,
			s_lastname:this.state.lastname
		});
	}
	render(){
		return(
			<div className="_form">
				<UserInfo u_firstname={this.state.s_firstname} u_lastname={this.state.s_lastname} />
				<form onSubmit={this.handleSubmit}>
					<div>First Name: <input name="firstname" type="text" onChange={this.handleChange} /></div>
					<br />
					<div>Last Name: <input name="lastname" type="text" onChange={this.handleChange} /></div>
					<br />
					{/* } <div><input type="checkbox" name="ischeck" /> <label>Remember Check This Too</label></div> */}
					<br />
					<button type="submit">Pleaseeee</button>
				</form>
			</div>
		);
	}
}

export default Form 