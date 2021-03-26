import {NavLink} from "react-router-dom"
import Pagination from "../Bricks/Pagination"
import Items from "../Bricks/Items"
import { UsualFilterType } from "../../Types/RimsTypes"
import { AllParamsType, FiltersType } from "../../BLL/Reducers/rimsReducer"
import React from "react"

type PropsType={
    topic:string,//name site
    allParams?:AllParamsType,
    mainFilter:Array<UsualFilterType>,
    otherFilters:any//JSX Element!
    page:number,
    totalCount:number,
    url:string,
    assorty:any,//jsx elements
    allFilters:FiltersType
    setAssorty:(filters:FiltersType,page:number)=>void
}
let Lenta:React.FC<PropsType>=(props)=>{
    let mainFilters=props.mainFilter.map(m=>
        <NavLink to={`${props.url}/${m.id}`} className="list-group-item center "
            style={{textDecoration:"none"}}>
                {m.title}
        </NavLink>
        )
    return<div className="">
        <h3>{props.topic}</h3>
        <div className="row">
            <div className="col-md-3 mt-2">
                <ul className="list-group">
                    {mainFilters}
                </ul>
            </div>
            
            <div className="col-md-9 mt-2">
                <div>
                    {props.otherFilters}
                </div>
                <div>
                    <Items content={props.assorty}/>
                    <div className="right mt-4">
                    {props.allFilters && props.setAssorty &&
                    <Pagination page={props.page} totalCount={props.totalCount} 
                    filters={props.allFilters} setPage={props.setAssorty}/>}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Lenta