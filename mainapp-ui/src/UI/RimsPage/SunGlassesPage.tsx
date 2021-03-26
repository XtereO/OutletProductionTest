import React, { useEffect } from "react"
import { AllParamsType, FiltersType } from "../../BLL/Reducers/rimsReducer"
import FilterRims from "../Bricks/FilterRims"
import Lenta from "../Lenta/Lenta"


type PropsType={
    allParams:AllParamsType
    filters:FiltersType
    page:number
    totalCount:number
    rims:any
    setRimsThunk:(filters:FiltersType,page:number,is_sunGlasses:boolean)=>void
    setAllParamsThunk:()=>void
    match:any
}

let SunGlassesPage:React.FC<PropsType>=(props)=>{
    let setSunGlassesThunk=(filters:FiltersType,page:number)=>{
        props.setRimsThunk(filters,page,true)
    }
    useEffect(()=>{
        props.setRimsThunk(
            {...props.filters,
                gender:props.match.params.id ? props.match.params.id : 0},1,true)
    },[props.match.params.id])
    useEffect(()=>{
        props.setAllParamsThunk()
    },[])
    return<div>
        <Lenta topic={"Солнцезащитные очки"} allParams={props.allParams}
        mainFilter={props.allParams.genders} page={props.page}
        totalCount={props.totalCount} assorty={props.rims}
        setAssorty={setSunGlassesThunk} url={"/sunglasses"}
        otherFilters={FilterRims({filters:props.filters,allParams:props.allParams,
        setFilter:setSunGlassesThunk})} allFilters={props.filters}/>
    </div>
}

export default SunGlassesPage