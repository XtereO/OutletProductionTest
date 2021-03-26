import { useEffect } from "react"
import { BrandType } from "../../Types/RimsTypes"


type PropsType={
    brands:Array<BrandType>
    text:string
    setBrandsThunk:()=>void
}

let Lens:React.FC<PropsType>=(props)=>{
    useEffect(()=>{
        if (props.brands.length===0){
            props.setBrandsThunk()
        }
    },[])
    let brands=props.brands.map(b=>
        <img className="img rounded mx-2" src={b.image} 
        title={`${b.title} - ${b.description}`} style={{height:"270px",overflow:"hidden"}} />)
    return<div className="">
        <div className="mb-4 center">
            {brands}
        </div>
        <div className="container mt-4">
            <h3 className="text-center">Линзы</h3>
            Помимо оправ и солнцезащитных очков 
            у нас также имеются линзы
            от разных брендов. Линзы вам поможет подобрать 
            наш консультант - врач-офтальмолог. По всем вопросам
            обращайтесь к нам.

        </div>
    </div>
}

export default Lens