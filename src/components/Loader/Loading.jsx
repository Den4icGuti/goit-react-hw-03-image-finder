import { Oval } from "react-loader-spinner";
import { Load } from "./Loading.styled";

function PendingImg({ load }) { 
  return (
    <Load>
       <Oval color="#303030" height={40} width={40} />
    </Load>
     
  
 )
}

export default PendingImg;