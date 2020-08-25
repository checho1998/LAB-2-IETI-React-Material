import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import { TodoApp } from './TodoApp.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import { Login } from "./components/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const  LoginView  =  ( )  =>  ( 
	      < Login / > 
	  ) ;

	const  TodoAppView  =  ( )  =>  ( 
	      < TodoApp / > 
	  ) ;

class App extends Component {

    constructor(props) {
        super(props);
        localStorage.setItem('emailDefault', "SergioNuñez");
        localStorage.setItem('passwordDefault', "ieti2020");
    }


    render() {

        return (
        	
        		<Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                    {localStorage.getItem('Logged') === "true" ?
                            <li><Link to="/todo">Todo</Link></li> : <li><Link to="/">Login</Link></li>
                          }
                    </ul>

                    <div>
                    {localStorage.getItem('Logged') === "true" ?
                            < Route path="/todo" component={TodoAppView} /> : <Route exact path="/" component={LoginView} />
                          }
                    </div>
                </div>
            </Router>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}

export default App;
