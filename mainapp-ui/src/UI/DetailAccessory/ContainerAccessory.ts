import { connect } from "react-redux";
import { compose } from "redux";
import { AppStateType } from "../../BLL/store";
import { AccessoryType } from "../../Types/AccessorysTypes";
import { UsualFilterType } from "../../Types/RimsTypes";
import { setAccessoryThunk } from "../../BLL/Reducers/accessoryReducer";
import Accessory from "./Accessory";
import { withRouter } from "react-router-dom";
import getAccessorysSelector from "../../BLL/Selectors/getAccessorysSelector";

type OwnPropsType={}
type MSTPType={
    title:string,
    price:number,
    image:string,
    category:UsualFilterType,
    is_available:boolean,
    suggested:Array<any>//JSX elements
}
let MapStateToProps=(state:AppStateType):MSTPType=>{
    return{
        title:state.accessory.title,
        price:state.accessory.price,
        image:state.accessory.image,
        category:state.accessory.category,
        is_available:state.accessory.is_available,
        suggested: getAccessorysSelector(state.accessory.suggested)
    }
}

type MDTPType={
    setAccessoryThunk:(id:number)=>void
}


export default compose(
    connect<MSTPType,MDTPType,OwnPropsType,AppStateType>(
        MapStateToProps,{setAccessoryThunk}),
    withRouter
)(Accessory)