import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../Types/product";
import { useAppStore } from "../store/app-store";

function ShirtsMain(){

    const {addProductList} = useAppStore();
    const [shirtsList, setshirtsList] = useState<Product[]>([])

    useEffect(() => {
        axios.get("https://onboarding.branit.kr/api/sample/shirt").then((result:any ) => {
            console.log(result.data.result);
            setshirtsList(result.data.result);
        }).catch((error)=> {
            console.error(error)
        })
        // (async()=> {
        //     try{ 
        //     const result = await axios.get("https://onboarding.branit.kr/api/sample/pants")
        //     console.log(result);
        // //     }catch (error) {
        // //         console.error(error);
        // //     }

        // })()
    }, [])
 
    return(
    <div style={{
        padding : 20
    }}>
        { shirtsList.map((item, idx)=>{
            return (
            <div 
                key={`${idx}`}
                style={{
                    border : "1px solid lightgrey",
                    marginBottom : 16,
                    padding : 10,
                    display : "flex"
                }}
            >
                
                    <div style={{width:50, height:50, marginRight:10 }}>
                        <img src={item.image} width={"100%"} height={"100%"} />
                        </div>

                <div>

                    <div style={{fontWeight : 600, fontSize:14}}>
                        {item.name}
                        </div>

                    <div style={{fontSize:14}}>
                        {item.price}
                        </div>
                        
                    <div style={{fontSize:14}}>
                        {item.size}
                        </div>

                </div>
                <div style={{
                    flex : 1,
                    display : "flex",
                    justifyContent : "flex-end"
                }}>
                
                    <button
                    onClick={(_)=>{addProductList(item)

                    }}
                    > 
                        장바구니 추가</button>
                </div>

            </div>
            )

        })}
    </div>
)}

export default ShirtsMain;