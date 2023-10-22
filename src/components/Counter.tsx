import { useState } from 'react'
import classes from  './Counter.module.scss'

type Props = {}

function Counter({}: Props) {
  const [counter, setCounter] = useState(0);
  const addOne = () => {
    setCounter(counter + 1)
  }
  return (
    <button className={classes.btn } onClick={addOne}>
      {counter}
    </button>
  )
}

export default Counter