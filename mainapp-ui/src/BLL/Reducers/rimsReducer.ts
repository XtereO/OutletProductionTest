import {BrandType, UsualFilterType,RimType} from "../../Types/RimsTypes"
import {ThunkAction} from "redux-thunk"
import { AppStateType } from "../store";
import { getRims,allParamsRequests } from "../../DAL/API";

type ThunkType=ThunkAction<Promise<void>,AppStateType,unknown,ActionType>
let SET_RIMS:"rimsReducer/SET_RIMS"="rimsReducer/SET_RIMS"
let SET_ALL_PARAMS:"rimsReducer/SET_ALL_PARAMS"="rimsReducer/SET_ALL_PARAMS"

export type AllParamsType={
    colors:Array<UsualFilterType>
    materials:Array<UsualFilterType>
    shapes:Array<UsualFilterType>
    brands:Array<BrandType>
    genders:Array<UsualFilterType>
}
export type FiltersType={
    color?:number,
    material?:number,
    shape?:number,
    brand?:number,
    is_available?:boolean,
    gender?:number,
    sort_by_price:boolean | null
    category?:number
}
let initialState={
    
    //All params
    allParams:{
        colors:[{title:"Любой",id:0}] as Array<UsualFilterType>,
        materials:[{title:"Любой",id:0}] as Array<UsualFilterType>,
        shapes:[{title:"Любая",id:0}] as Array<UsualFilterType>,
        genders:[{title:"Все",id:0}] as Array<UsualFilterType>,
        brands:[{title:"Любой",id:0,description:"",
    image:""}] as Array<BrandType>
    } as AllParamsType,
    //Parametrs which choosed by people (0-default,All)  
    filters:{ 
        //Number its id
        color:0 as number,
        material:0 as number,
        shape:0 as number,
        brand:0 as number,
        is_available:true as boolean,
        gender:0 as number,
        // null-all rims, true-first cheap,false-first expensive        
        sort_by_price:null as null | boolean
    } as FiltersType,

    //Main Content , totalCount - its count all rims
    page:1 as number,
    totalCount:0 as number,
    rims:[] as Array<RimType>
}

type InitialStateType=typeof initialState
type ActionType=SetRimsType | SetAllParamsType

let rimsReducer=(state=initialState,action:ActionType):InitialStateType=>{
    switch(action.type){
        case SET_RIMS:
            return{...state,totalCount:action.totalCount,
                rims:[...action.rims],
                filters:{...action.filters},page:action.page}
        case SET_ALL_PARAMS:
            return{...state,allParams:{...action.allParams}}
        default:return state
    }
}

type SetRimsType={
    type:typeof SET_RIMS
    rims:Array<RimType>
    filters:FiltersType,
    page:number,totalCount:number
}
let setRims=(rims:Array<RimType>,filters:FiltersType,page:number,totalCount:number):SetRimsType=>{
    return{
        type:SET_RIMS,
        rims,filters,page,totalCount
    }
}
export let setRimsThunk=(filters:FiltersType,page=1,is_sunGlasses=false):ThunkType=>async (dispatch:any)=>{

    let response=await getRims(filters,page,is_sunGlasses)
    
    dispatch(setRims(response.data.results,filters,
        page,response.data.count))

}

type SetAllParamsType={
    type:typeof SET_ALL_PARAMS,
    allParams:AllParamsType
}
let setAllParams=(allParams:AllParamsType):SetAllParamsType=>{
    return{
        type:SET_ALL_PARAMS,
        allParams
    }
}
export let setAllParamsRimsThunk=():ThunkType=>async (dispatch:any)=>{
    let resBrands=await allParamsRequests.getBrands(true)
    let resGenders=await allParamsRequests.getGenders()
    let resShapes=await allParamsRequests.getShapes()
    let resColors=await allParamsRequests.getColors()
    let resMaterials=await allParamsRequests.getMaterials()
    
    let allParams:AllParamsType={
        brands:[{title:"Любой",id:0},...resBrands.data],
        genders:[{title:"Все",id:0},...resGenders.data],
        shapes:[{title:"Любая",id:0},...resShapes.data],
        colors:[{title:"Любой",id:0},...resColors.data],
        materials:[{title:"Любой",id:0},...resMaterials.data]
    }

    dispatch(setAllParams(allParams))
}
export let setAllParamsSunGlassesThunk=():ThunkType=>async (dispatch:any)=>{
    let resBrands=await allParamsRequests.getBrands(false,true)
    let resGenders=await allParamsRequests.getGenders()
    let resShapes=await allParamsRequests.getShapes()
    let resColors=await allParamsRequests.getColors()
    let resMaterials=await allParamsRequests.getMaterials()
    
    let allParams:AllParamsType={
        brands:[{title:"Любой",id:0},...resBrands.data],
        genders:[{title:"Все",id:0},...resGenders.data],
        shapes:[{title:"Любая",id:0},...resShapes.data],
        colors:[{title:"Любой",id:0},...resColors.data],
        materials:[{title:"Любой",id:0},...resMaterials.data]
    }

    dispatch(setAllParams(allParams))
}


export default rimsReducer

