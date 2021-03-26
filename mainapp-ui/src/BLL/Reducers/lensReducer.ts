import { ThunkAction } from "redux-thunk";
import { allParamsRequests } from "../../DAL/API";
import { BrandType } from "../../Types/RimsTypes";
import { AppStateType } from "../store";

type ThunkType=ThunkAction<Promise<void>,AppStateType,unknown,ActionType>
let SET_BRANDS:"lensReducer/SET_BRANDS"="lensReducer/SET_BRANDS"

let initialState={
    brands:[] as Array<BrandType>,
    text:"" as string
}

type InitialStateType=typeof initialState
type ActionType=SetBrandsType

let lensReducer=(state=initialState,action:ActionType):InitialStateType=>{
    switch (action.type) {
        case SET_BRANDS:
            return{...state,brands:[...action.brands]}
        default:
            return state;
    }
}

type SetBrandsType={
    type:typeof SET_BRANDS
    brands:Array<BrandType>
}

let setBrands=(brands:Array<BrandType>):SetBrandsType=>{
    return{
        type:SET_BRANDS,
        brands
    }
}

export let setBrandsThunk=():ThunkType=>async (dispatch:any)=>{
    let response =await allParamsRequests.getBrands(false,false,true)

    dispatch(setBrands(response.data))
}

export default lensReducer