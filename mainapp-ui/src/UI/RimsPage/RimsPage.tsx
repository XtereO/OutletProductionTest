import React, { useEffect } from "react"
import { AllParamsType, FiltersType, setRimsThunk } from "../../BLL/Reducers/rimsReducer"
import Lenta from "../Lenta/Lenta"
import FilterRims from "../Bricks/FilterRims"
import { useHistory } from "react-router"
const queryString:any = require('query-string');

type PropsType={
    allParams:AllParamsType
    filters:FiltersType
    page:number
    totalCount:number
    rims:any
    setRimsThunk:(filters:FiltersType,page:number)=>void
    setAllParamsThunk:()=>void
    match:any
}

let RimsPage:React.FC<PropsType>=(props)=>{
    useEffect(()=>{
        props.setRimsThunk(
            {...props.filters,
                gender:props.match.params.id ? props.match.params.id : 0},1)
    },[props.match.params.id])
    useEffect(()=>{ 
        props.setAllParamsThunk()
        return (()=>{
            props.setRimsThunk({color:0,material:0,
            shape:0,brand:0,
            sort_by_price:null,gender:0},1)
        })
    },[])
    return<div>
        <Lenta topic={"Оправы"} allParams={props.allParams}
        mainFilter={props.allParams.genders} page={props.page}
        totalCount={props.totalCount} assorty={props.rims}
        setAssorty={props.setRimsThunk} url={"/rims"}
        otherFilters={FilterRims({filters:props.filters,allParams:props.allParams,
        setFilter:props.setRimsThunk })} allFilters={props.filters}/>
    </div>
}

export default RimsPage