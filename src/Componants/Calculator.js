import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
function Calc(){
  const [count, setCount] = useState(0) 
  let addOne = () => {
    setCount(1)
  }
  return(
    <>
    <p>{count}</p>
    <Button variant="success" onClick={addOne()}>Primary</Button>
    </>
  )
}

export default Calc