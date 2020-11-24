import React from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles  } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { watch } from 'fs';
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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });
  
  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

class Registration extends React.Component{    
    constructor(props){
        super(props);           
    this.state={        
        email: "",
        password: "",       
        password_confirmation: "",
        errors:{
          password:"",
          password_confirmation:"",
          password_number:""
        }  
    }    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);    
}

handleSubmit(e){  
  e.preventDefault();
  if(validateForm(this.state.errors)){
    axios.post("http://localhost:8000/auth/register",{     
      email: this.state.email,
      password: this.state.password,            
      password_confirmation: this.state.password_confirmation,           
  },{withCredentials: true}
  ).then(response=>{
      localStorage.setItem("user",JSON.stringify(response.data.access_token));
      alert("Registration is Successfull");
      history.push('/login');
  });
  }
  else{
    console.log("Invalid Form");
  }
  }
handleChange(e){
  e.preventDefault();
  const {name,value} = e.target;
  const numbers= /[0-9]/;
  const letters = /[A-Za-z]/;
  let errors = this.state.errors;
  switch (name) {
    case 'password': 
    if(value.length < 8 || !String(value).match(numbers) || !value.match(letters)){
      errors.password = "Password must be 8 characters long and atleast one number!";
    }
    else{
      errors.password="";
    }   
      break;

      case 'password_confirmation':
        if(value!=this.state.password){
          errors.password_confirmation = "Password do not match";
        }        
        else{
          errors.password_confirmation = "";
        }
        break;

      // case 'password_confirmation':
      //   errors.password_confirmation = e.target.value.password!=e.target.value.password_confirmation
      //   ? "Password Do not match"
      //   : '';
    default:
      break;
  }

  this.setState({errors, [name]: value}, ()=> {
      console.log(errors)
  })
}
    render(){
        const {classes} = this.props;
        const {errors} = this.state;
        return (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <form className={classes.form} onSubmit={this.handleSubmit}
                
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        placeholder="Enter Your Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />                     
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        placeholder="Enter Your Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                     {errors.password.length > 0 && 
                <span className='error'>{errors.password}
                {errors.password_number}
                </span>}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password_confirmation"
                        label="Password"
                        type="password"
                        id="password_confirmation"
                        autoComplete="current-password"
                        placeholder="Enter Your Password"
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                      />
                     {errors.password_confirmation.length > 0 && 
                <span className='error'>{errors.password_confirmation}</span>}
                    </Grid>

                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign Up
                  </Button>
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Link href="/login" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
              <Box mt={5}>
                {/* <Copyright /> */}
              </Box>
            </Container>
          );
    }
}

export default withStyles(useStyle)(Registration);