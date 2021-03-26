import { ThunkAction } from "redux-thunk";
import { getAccessory, getAccessorys } from "../../DAL/API";
import { AccessoryType } from "../../Types/AccessorysTypes";
import { UsualFilterType } from "../../Types/RimsTypes";
import { AppStateType } from "../store";
import { FiltersType } from "./rimsReducer";

type ThunkType=ThunkAction<Promise<void>,AppStateType,unknown,ActionType>
let SET_ACCESSORY:"accessoryReducer/SET_ACCESSORY"="accessoryReducer/SET_ACCESSORY"

let initialState={
    id:0 as number,
    title:"" as string,
    image:"" as string,
    price:0 as number,
    category:{title:"Все" ,id:0} as UsualFilterType,
    is_available:true as boolean,
    suggested:[] as Array<AccessoryType>
}

type InititalStateType=typeof initialState
type ActionType=SetAccessoryType

let accessoryReducer=(state=initialState,action:ActionType):InititalStateType=>{
    switch(action.type){
        case SET_ACCESSORY:
            return{...state,...action.accessory,
            suggested:[...action.suggested]}
        default:return state
    }
}


type SetAccessoryType={
    type:typeof SET_ACCESSORY,
    accessory:AccessoryType,
    suggested:Array<AccessoryType>
}
let setAccessory=(accessory:AccessoryType,suggested:Array<AccessoryType>):SetAccessoryType=>{
    return{
        type:SET_ACCESSORY,
        accessory,suggested
    }
} 
export let setAccessoryThunk=(id:number):ThunkType=>async (dispatch:any)=>{
    let resAccessory=await getAccessory(id)
    let filters:FiltersType={
        sort_by_price:null,
        category:resAccessory.data.results[0].category.id,
        is_available:true
    }
    let resAccessorys=await getAccessorys(filters,1)
    dispatch(setAccessory(resAccessory.data.results[0],resAccessorys.data.results.
        filter(r=>r.id!=resAccessory.data.results[0].id).slice(0,3)))
}

export default accessoryReducer