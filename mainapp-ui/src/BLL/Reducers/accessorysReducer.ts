import { allParamsRequests, getAccessorys } from "../../DAL/API"
import {AccessoryType} from "../../Types/AccessorysTypes"
import { UsualFilterType } from "../../Types/RimsTypes"
import { FiltersType } from "./rimsReducer"

let SET_ACCESSORYS:"accessorysReducer/SET_ACCESSORYS"="accessorysReducer/SET_ACCESSORYS"
let SET_CATEGORYS:"accessorysReducer/SET_CATEGORYS"="accessorysReducer/SET_CATEGORYS"

let initialState={
    accessorys:[] as Array<AccessoryType>,
    categorys:[{title:"Все",id:0}] as Array<UsualFilterType>,
    filters:{
        sort_by_price:null as null | boolean,
        category:0 as number
    } as FiltersType,
    totalCount:0 as number,
    page:1 as number
}
type InitialStateType=typeof initialState
type ActionType=SetAccessorysType | SetCategorysType

let accessorysReducer=(state=initialState,action:ActionType):InitialStateType=>{
    switch(action.type){
        case SET_ACCESSORYS:
            return{...state,accessorys:[...action.accessorys],
                filters:{...action.filters},
                totalCount:action.totalCount,
                page:action.page
            }
        case SET_CATEGORYS:
            return{...state,categorys:[...action.categorys]}
        default:return state
    }
}


type SetAccessorysType={
    type:typeof SET_ACCESSORYS,
    filters:FiltersType
    accessorys:Array<AccessoryType>,
    totalCount:number,
    page:number
}
let setAccessorys=(accessorys:Array<AccessoryType>,filters:FiltersType,totalCount:number,page:number):SetAccessorysType=>{
    return{
        type:SET_ACCESSORYS,
        accessorys,filters,
        totalCount,page
    }
}

export let setAccessorysThunk=(filters:FiltersType,page:number=1)=>async (dispatch:any)=>{
    let response = await getAccessorys(filters,page)

    dispatch(setAccessorys(response.data.results,filters,
        response.data.count,page))
}



type SetCategorysType={
    type:typeof SET_CATEGORYS,
    categorys:Array<UsualFilterType>
}
let setCategorys=(categorys:Array<UsualFilterType>):SetCategorysType=>{
    return{
        type:SET_CATEGORYS,
        categorys
    }
}
export let setCategorysThunk=()=>async (dispatch:any)=>{
    let response=await allParamsRequests.getCategorysAccessorys()

    dispatch(setCategorys([{title:"Все",id:0},...response.data]))
}

export default accessorysReducer