import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    width: 140,
    height: 40,
    border: 'solid 1px #686868',
  },

  button: {
    minWidth: 40,
    borderRight: 'solid 1px #686868',
    borderLeft: 'solid 1px #686868',
    borderRadius: 0,
    fontSize: 20,
    fontFamily: 'Lato',
    color: '#686868',
    padding: 0,
  },

  input: {
    width: 60,
    textAlign: 'center',
    padding: 0,
    paddingLeft: 15,
    outline: 'none',
    border: 'none',
    fontSize: 18,
    fontFamily: 'Lato',
    color: '#686868'
  }
}))

function QuantityComponent() {
  const classes = useStyles();
  const [quantity, setQuantity] = React.useState(1);

  const handleDecrease = () => {
    setQuantity((prevValue) => {
      if (prevValue > 1){
        return --prevValue
      } else {
        return 1;
      }
    })
  };

  const handleIncrease = () => {
    setQuantity(prevValue => ++prevValue)
  };

  React.useEffect(()=>{
    console.log(quantity);
  },[quantity]);
  
  return (
    <div className={classes.container}>
      <Button className={classes.button} onClick={handleDecrease}>-</Button>
      <input
        type="number"
        value={quantity}
        readOnly
        className={classes.input} 
      />
      <Button className={classes.button} onClick={handleIncrease}>+</Button>
    </div>
  )
}

export default QuantityComponent;