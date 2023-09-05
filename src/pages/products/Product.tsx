import './product.scss'
import { Outlet } from 'react-router-dom'
import Test from '@/components/Test'
import { useCallback, useState } from 'react';

export default function Product() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log("Rerender product componewne");
  const handlePrintCount=useCallback((count:number)=>{
    alert("count value is:"+ count)
  },[count])
  
  return (
    <div>
      <h1> Product </h1>
      <Test count={count} handlePrintCount={handlePrintCount}></Test>
    <Outlet></Outlet>
    <button onClick={()=>{
      setCount(count+1)
    }}>tang1====</button>
      <button onClick={() => {
        setCount2(count2 + 1)
      }}>tang2</button>
    </div>
  )
}
