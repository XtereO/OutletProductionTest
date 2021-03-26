import { ThunkAction } from "redux-thunk";
import { getRim, getRims } from "../../DAL/API";
import { BrandType, RimType, UsualFilterType } from "../../Types/RimsTypes";
import { AppStateType } from "../store";
import { FiltersType } from "./rimsReducer";

type ThunkType=ThunkAction<Promise<void>,AppStateType,unknown,ActionType>
let SET_RIM:"rimReducer/SET_RIM"="rimReducer/SET_RIM"
let SET_RIMS:"rimReducer/SET_RIMS"="rimReducer/SET_RIMS"

let initialState={
    id:0 as number,
    title:"BR - 0532" as string,
    brand:{title:"Brioni"} as BrandType,
    article:"26618" as string,
    color:{title:"Серебряные",id:3} as UsualFilterType,
    material:{title:"Металл",id:2} as UsualFilterType,
    gender:{title:"Мужские",id:2} as UsualFilterType,
    shape:{title:"Авиаторы",id:1} as UsualFilterType,
    image:"https://i4.stat01.com/1/8920/89197583/075a3e/ochki-turok-steinhard-anti-blue-glasses-fu001.jpg" as string,
    price:0 as number,
    is_available:false,
    is_sunGlasses:false,
    suggested:[] as Array<RimType>
}

type InititalStateType=typeof initialState
type ActionType=SetRimType
let rimReducer=(state=initialState,action:ActionType):InititalStateType=>{
    switch(action.type){
        case SET_RIM:
            return{...state,...action.rim,suggested:[...action.rims]}
        default:return state
    }
}

type SetRimType={
    type:typeof SET_RIM,
    rim:RimType,
    rims:Array<RimType>
}
let setRim=(rim:RimType,rims:Array<RimType>):SetRimType=>{
    return{
        type:SET_RIM,
        rim,rims
    }
}
export let setRimThunk=(ID:number):ThunkType=>async (dispatch:any)=>{
    let resRim=await getRim(ID)
    let filters:FiltersType={
        color:0,
        material:resRim.data.results[0].material.id,
        brand:resRim.data.results[0].brand.id,
        shape:resRim.data.results[0].shape.id,
        gender:resRim.data.results[0].gender.id,
        is_available:true,
        sort_by_price:null
    }

    let resRims=await getRims(filters)
    dispatch(setRim(resRim.data.results[0],resRims.data.results.filter(r=>r.id!=resRim.data.results[0].id)))
}



export default rimReducer

