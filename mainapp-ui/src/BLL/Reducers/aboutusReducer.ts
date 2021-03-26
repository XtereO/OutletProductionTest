import { ThunkAction } from "redux-thunk";
import { allParamsRequests } from "../../DAL/API";
import { MarketPointType } from "../../Types/AboutUsTypes";
import { AppStateType } from "../store";

type ThunkType=ThunkAction<Promise<void>,AppStateType,unknown,ActionType>
let SET_MARKET_POINT:"aboutusReducer/SET_MARKET_POINT"="aboutusReducer/SET_MARKET_POINT"

let initialState={
    marketPoints:[] as Array<MarketPointType>,
    aboutUsText:"" as string
}

type InitialStateType=typeof initialState
type ActionType=SetMarketPointsType

let aboutUsReducer=(state=initialState,action:ActionType):InitialStateType=>{
    switch (action.type) {    
        case SET_MARKET_POINT:
            return{...state,marketPoints:[...action.marketPoints]}
        default:
            return state
    }
}

type SetMarketPointsType={
    type:typeof SET_MARKET_POINT,
    marketPoints:Array<MarketPointType>
}

let setMarketPoints=(marketPoints:Array<MarketPointType>):SetMarketPointsType=>{
    return{
        type:SET_MARKET_POINT,
        marketPoints
    }
}

export let setMarketPointsThunk=():ThunkType=>async (dispatch:any)=>{
    let response=await allParamsRequests.getMarketPoints()

    dispatch(setMarketPoints(response.data))
}


export default aboutUsReducer
