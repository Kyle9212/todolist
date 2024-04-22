import { Link } from "react-router-dom";
import { useAppStore } from "../store/app-store";

function Header(){
    const{setProductList}=useAppStore()

   return(
    <>
    <div 
       style={{
        height:80, 
        display : "flex", 
        justifyContent : "space-between", 
        alignItems : "center",
        borderBottom : "1px solid lightgrey"
        }}
        >
      <div style={{display : "flex"}}>
        <div style={{width:70}}>
          <Link to = "pants">팬츠</Link>
          </div>
        <div style={{width:70}}>
        <Link to = "shirts">셔츠</Link>
          </div>
      </div>
      <div>
        장바구니 {setProductList.length}개 
        </div>
    </div>
    </>


   )

}
export default Header;