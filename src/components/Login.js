import React from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles  } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import history from '../history';

const useStyle = (theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });

class Login extends React.Component{
    constructor(props){
        super(props);   
    this.state={
        email: "",
        password: "",
        Authorization: ""        
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}


// isAuthenticated({email,password}){
//     return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
// }


handleSubmit(e){
    e.preventDefault();
    console.log("hello");
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
        history.push('/home');
    }
    else{
        alert("Authorization Denied. Please Register First");
    } 
}


handleChange(e){
    e.preventDefault();
    this.setState({
        [e.target.name]: [e.target.value]
    })
}
    render(){
        const {classes} = this.props;
        return(
            <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={this.state.email} onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
       
      </Box>
    </Container>


            // <div>
            //     <form onSubmit={this.handleSubmit}>
            //         <input type="email" name="email" placeholder="Enter Your Email" value={this.state.email} onChange={this.handleChange}></input>
            //         <input type="password" name="password" placeholder="Enter Your Password" value={this.state.password} onChange={this.handleChange}></input>                    
            //         <button type="submit">Login</button>
            //     </form>               
            // </div>
        )
    }
}

export default withStyles(useStyle)(Login);