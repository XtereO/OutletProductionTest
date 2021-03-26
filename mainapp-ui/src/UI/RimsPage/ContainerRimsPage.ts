import {compose} from "redux"
import RimsPage from "./RimsPage";
import SunGlassesPage from "./SunGlassesPage"
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../../BLL/store";
import { AllParamsType,FiltersType,setRimsThunk,setAllParamsRimsThunk,setAllParamsSunGlassesThunk } from "../../BLL/Reducers/rimsReducer";
import { RimType } from "../../Types/RimsTypes";
import getGlassesSelector from "../../BLL/Selectors/getGlassesSelector";
import { setRimThunk } from "../../BLL/Reducers/rimReducer";

type OwnPropsType={}
type MSTPType={
    //All params
    allParams:AllParamsType,
    //Parametrs which choosed by people (0-default,All)  
    filters:FiltersType,

    //Main Content , totalCount - its count all rims
    page:number,
    totalCount:number,
    rims:any  //jsx elements
}
let MapStateToProps=(state:AppStateType):MSTPType=>{
    return{
        allParams:state.rims.allParams,
        filters:state.rims.filters,
        page:state.rims.page,
        totalCount:state.rims.totalCount,
        rims:getGlassesSelector(state.rims.rims)
    }
}
type RimsMDTPType={
    setRimsThunk:(filters:FiltersType,page:number)=>void
    setAllParamsThunk:()=>void
}

type SunGlassesMDTPType={
    setRimsThunk:(filters:FiltersType,page:number,is_sunGlasses:boolean)=>void
    setAllParamsThunk:()=>void
}

export let RimsPageUI = compose(
    withRouter,
    connect<MSTPType,RimsMDTPType,OwnPropsType,AppStateType>(
        MapStateToProps,{
            setRimsThunk,setAllParamsThunk:setAllParamsRimsThunk
        }
    )
)(RimsPage)
export let SunGlassesPageUI=compose(
    withRouter,
    connect<MSTPType,SunGlassesMDTPType,OwnPropsType,AppStateType>(
        MapStateToProps,{
            setRimsThunk,setAllParamsThunk:setAllParamsSunGlassesThunk
        }
    )
)(SunGlassesPage)