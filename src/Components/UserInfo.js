import React from 'react'
class UserInfo extends React.Component{
	constructor(props){
		super(props);		
	}
	render(){
		return(
			<div className="_userinfo">
				<h2>User Info</h2>
				<p>First Name : {this.props.u_firstname} </p>
				<p>Last Name : {this.props.u_lastname} </p>
				<hr />
				<br />
			</div>
		);
	}
}

export default UserInfo