import React, { useEffect } from "react"
import { BrandType, UsualFilterType } from "../../Types/RimsTypes"
import Items from "../Bricks/Items"


type PropsType = {
    title:string,
    id:number,
    brand: BrandType,
    article: string,
    color: UsualFilterType,
    material: UsualFilterType,
    shape: UsualFilterType,
    image: string,
    gender: UsualFilterType,
    price: number,
    is_available:boolean,
    is_sunGlasses: boolean
    setRimThunk:(ID:number)=>void
    match:any
    suggested:Array<any>//jsx elements
}

let RimPage: React.FC<PropsType> = (props) => {
    useEffect(()=>{
        props.setRimThunk(props.match.params.id)
    },[props.match.params.id])
    let mainCharachteristics=[
        {title:"Брэнд",value:props.brand.title},
        {title:"Артикул",value:props.article},
        {title:"Цвет",value:props.color.title},
        {title:"Материал",value:props.material.title},
        {title:"Форма",value:props.shape.title},
        {title:"Категория",value:props.gender.title},
        {title:"Цена",value:props.price}
    ]
    let mainCharachteristicsUI=mainCharachteristics.map(m=>
        <li className="list-group-item center">
            {m.title} - {m.value}
        </li>)
    return <div className="">
        <span className="text-secondary">
            {props.is_available ? "Есть в наличии" :
            "Нет в наличии"}
        </span>
        <h3>{props.is_sunGlasses ? "Солнцезащитные очки - " :
        "Оправа - "}{props.title}</h3>
        <div className="row mx-2">
            <div className="col-md-6 card py-4 mt-1">
                <img src={props.image}
                className="w-100"/>
            </div>
            <div className="col-md-6 mt-1">
                <ul className="list-group">
                    <li className="list-group-item" style={{background:"#007BFF",color:"white"}}>
                        Общие характеристики
                    </li>
                    {mainCharachteristicsUI}
                </ul>
            </div>
        </div>

        {props.suggested.length >0 &&
        <div className="m-2">
        <div>
            <h3>Также вас может заинтересовать:</h3>
        </div>
        <div>
            <Items content={props.suggested} limit={true} />
        </div>
        </div>}
    </div>
}

export default RimPage