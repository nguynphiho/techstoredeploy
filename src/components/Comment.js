import { Avatar, Button, IconButton, makeStyles, Typography } from '@material-ui/core';
import DisLikeIcon from '@material-ui/icons/ThumbDown';
import LikeIcon from '@material-ui/icons/ThumbUpAlt';
import avatar from 'assets/images/thuyduong.jpg';
import React from 'react';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    padding: 10,
    background: 'white',
    boxShadow: '0px 0px 15px rgba(15, 23, 42, 0.1)',
    borderRadius: 10,
  },

  avatar: {
    width: 50,
    height: 50,
    '& img': {
      objectFit: 'cover',
    }
  },

  content: {
    paddingLeft: 20,
  },

  title: {
    display: 'flex',
    alignItems: 'center',
  },

  username: {
    fontSize: 15,
    fontFamily: 'Lato',
    fontWeight: 600,
  },

  time: {
    marginLeft: 20,
    fontSize: 13,
    fontFamily: 'Lato',
    color: '#686868',
  },

  comment: {
    fontSize: 15,
    fontFamily: 'Lato',
    color: '#686868',
    letterSpacing: 1.3,
    margin: '5px 0px',
  },

  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 20,
    '& p': {
      fontSize: 15,
      fontFamily: 'Lato',
      color: '#686868',
    },
  },

  buttonIcon: {
    padding: 5,
    fontSize: 10,
  },

}))

function Comment() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <Avatar src={avatar} className={classes.avatar} />
      </div>
      <div className={classes.content}>
        <div className={classes.title}>
          <Typography className={classes.username}>Thuy Duong</Typography>
          <Typography className={classes.time}>2 month ago</Typography>
        </div>
        <div className={classes.comment}>
          I'm stay up all night, tell myself i'm alright,...
        </div>
        <div className={classes.buttonContainer}>
          <div className={classes.button}>
            <IconButton className={classes.buttonIcon}>
              <LikeIcon />
            </IconButton>
            <Typography>999</Typography>
          </div>
          <div className={classes.button}>
            <IconButton className={classes.buttonIcon}>
              <DisLikeIcon />
            </IconButton>
            <Typography>1</Typography>
          </div>
          <div className={classes.button}>
            <Button>Reply</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment;