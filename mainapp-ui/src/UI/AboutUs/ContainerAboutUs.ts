import { compose } from "redux";
import { AppStateType } from "../../BLL/store";
import { MarketPointType } from "../../Types/AboutUsTypes";
import AboutUs from "./AboutUs";
import { setMarketPointsThunk } from "../../BLL/Reducers/aboutusReducer";
import { connect } from "react-redux";

type OwnPropsType={}
type MSTPType={
    aboutUsText:string
    marketPoints:Array<MarketPointType>
}
let MapStateToProps=(state:AppStateType):MSTPType=>{
    return{
        aboutUsText:state.aboutUs.aboutUsText,
        marketPoints:state.aboutUs.marketPoints
    }
}
type MDTPType={
    setMarketPointsThunk:()=>void
}

export default compose(
    connect<MSTPType,MDTPType,OwnPropsType,AppStateType>(
        MapStateToProps,{setMarketPointsThunk}
    )
)(AboutUs)