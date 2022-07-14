import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import facebookIcon from 'assets/icons/facebook.png';
import googleIcon from 'assets/icons/google.png';
import twitterIcon from 'assets/icons/twitter.png';
import background from 'assets/images/background.jpg';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100vh',
    // [theme.breakpoints.down("xs")]: {
    //   height: '100%',
    // },
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: '0px 00px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },

  loginContainer: {
    position: 'relative',
    width: 350,
    [theme.breakpoints.down('sm')]: {
      width: 500,
    },
    [theme.breakpoints.down('xs')]: {
      width: 350,
    },

    [theme.breakpoints.up('xl')]: {
      width: 500,
    },
    padding: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    // boxShadow: '0px 0px 15px -3px rgba(15, 23, 42, 0.5)',
    boxShadow: '0px 0px 15px -3px white',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    animation: `$effect 2000ms ${theme.transitions.easing.easeInOut}`,

  },

  backButton: {
    position: 'absolute',
    textTransform: 'none',
    backgroundColor: '#f4a51c',
    color: 'white',
    borderRadius: 30,
    top: 10,
    left: 10,
    zIndex: 9999,
    fontWeight: 600,
    '&:hover': {
      backgroundColor: '#f4a51c',
    },
    '&.Mui-disabled': {
      backgroundColor: '#ddd',
      color: '#686868',
    }
  },

  title: {
    color: 'black',
    fontSize: 40,
    fontWeight: 800,
    fontFamily: 'Varela Round',
  },

  textField: {
    width: '100%',
    height: 40,
    background: 'white',
    color: '#f4a51c',
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E2E8F0',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#f4a51c',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#f4a51c',
    },
  },

  inputContainer: {
    marginTop: 20,
    width: '100%',
  },

  inputName: {
    color: '#686868',
    letterSpacing: 1,
  },

  loginBtn: {
    textTransform: 'none',
    width: 'inherit',
    borderRadius: 30,
    fontSize: 16,
    fontWeight: 600,
    color: 'white',
    border: 'solid 2px orange',
    backgroundColor: '#f4a51c',
    '&:hover': {
      backgroundColor: '#f9a30d',
    }
  },

  socialButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  optionTitle: {
    color: '#686868',
    letterSpacing: 0.5,
    textAlign: 'center',
  },

  signupBtn: {
    textTransform: 'none',
    borderRadius: 30,
    color: '#0096C7',
    // border: 'solid 1px #0096C7',
    '&:hover': {
      // backgroundColor: '#f9a30d',
    }
  },

  remembermeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formControlLabel: {
    '&>.MuiFormControlLabel-label': {
      color: '#686868',
      fontSize: 15,
      letterSpacing: 0.5,
    }
  },
  forgotPassword: {
    // marginTop: 5,
    color: '#0096C7',
    fontSize: 13,
    fontStyle: 'italic',
    '&:hover': {
      cursor: 'pointer',
      color: '#0079a1',
    },
  },

  '@keyframes effect': {
    '0%': {
      transform: 'translateY(-300px)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateY(0px)',
      opacity: 1,
    }
  },

}));

const CustomCheckbox = withStyles({
  root: {
    color: '#686868',
    '&$checked': {
      color: '#f4a51c',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


function Login() {
  const history = useHistory();
  const classes = useStyles();
  const [clearPassword, setClearPassword] = React.useState(false);
  const [checked, setChecked] = React.useState(false)

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };


  const handleNavigate = (link) => {
    history.push(link);
  };

  return (
    <div className={classes.container}>
      <div className={classes.loginContainer}>
        <Button
          className={classes.backButton}
          onClick={() => handleNavigate("/home")}
        >
          Home
        </Button>
        <Typography className={classes.title}> Login </Typography>
        <div className={classes.inputContainer}>
          <Typography className={classes.inputName}> Email/Phone Number </Typography>
          <TextField
            size="small"
            id="outlined-start-adornment"
            className={classes.textField}
            placeholder="Type your Email/Phone Number"
            InputProps={{
              startAdornment: <InputAdornment position="start"><PersonOutlineIcon /></InputAdornment>,
            }}
            variant="outlined"
          />
        </div>
        <div className={classes.inputContainer}>
          <Typography className={classes.inputName}> Password </Typography>
          <TextField
            size="small"
            type={clearPassword ? "text" : "password"}
            id="outlined-start-adornment"
            className={classes.textField}
            placeholder="Type your password"
            InputProps={{
              startAdornment: <InputAdornment position="start">
                <LockOpenIcon />
              </InputAdornment>,
              endAdornment: <InputAdornment position="start">
                {
                  clearPassword ? (
                    <VisibilityIcon onClick={() => setClearPassword(false)} />
                  ) : (
                    <VisibilityOffIcon onClick={() => setClearPassword(true)} />
                  )
                }
              </InputAdornment>,
            }}

            variant="outlined"
          />
        </div>

        <div className={classes.remembermeContainer}>
          <FormControlLabel
            className={classes.formControlLabel}
            control={
              <CustomCheckbox
                checked={checked}
                onChange={handleChecked}
                name="checkedG"
              />
            }
            label="Remember me"
          />
          <Typography className={classes.forgotPassword}> Forgot password?</Typography>
        </div>

        <div className={classes.inputContainer}>
          <Button
            className={classes.loginBtn}
          >
            Sign In
          </Button>
        </div>

        <div className={classes.inputContainer}>
          <Typography className={classes.optionTitle}>Login with</Typography>
          <div className={classes.socialButtonContainer}>
            <IconButton>
              <Avatar src={facebookIcon} />
            </IconButton>
            <IconButton>
              <Avatar src={twitterIcon} />
            </IconButton>
            <IconButton>
              <Avatar src={googleIcon} />
            </IconButton>
          </div>
        </div>

        <div className={classes.inputContainer}>
          {/* <Typography className={classes.optionTitle}>Or Sign Up Using</Typography> */}
          <div className={classes.socialButtonContainer}>
            <Button className={classes.signupBtn} onClick={() => handleNavigate("/signup")}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;