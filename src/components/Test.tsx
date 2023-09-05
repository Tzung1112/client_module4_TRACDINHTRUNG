import {memo} from "react"
interface Props {
  count: number
  handlePrintCount: (count: number) =>void;
}
const Test:React.FC<Props>=(props)=>{
  const { count, handlePrintCount }=props
  console.log("render test cop");
  return (
    <div style={{color:"white"}}>
      hello test{count}
      <button onClick={()=>{handlePrintCount(count)}}>Thu</button>
    </div>
  )
}
export default memo(Test)
