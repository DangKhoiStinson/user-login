import React from 'react'
import Header from './Components/Header.js'
import Form from './Components/Form.js'
// import UserInfo from './Components/UserInfo.js'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="_content">
				    <Header />
				    <Form />
                </div>
			</div>
        );
    }
}

export default App