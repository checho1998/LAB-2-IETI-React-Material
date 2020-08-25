import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export class Login extends React.Component{
	
	constructor(props) {
        super(props);
        this.state = { email: "", password: "" };
        this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
        this.handlePassSubmit = this.handlePassSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
	handleSubmit() {
        if (localStorage.getItem('emailDefault') === this.state.email && localStorage.getItem('passwordDefault') === this.state.password)
            localStorage.setItem('Logged', "true");
        this.setState({ email: "", password: "" });
    }
    handlePassSubmit(event) {  
        this.setState({password: event.target.value});
    }
     handleEmailSubmit(event) {
        
        this.setState({email: event.target.value});
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">Sign in</Typography>
                        <form className="form" onSubmit={this.handleSubmit}>
                        <h1>email : SergioNuñez  Password : ieti2020</h1>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus value={this.state.email}
                                onChange={this.handleEmailSubmit} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    value={this.state.password}
                                    autoComplete="current-password"
                                    onChange={this.handlePassSubmit}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}