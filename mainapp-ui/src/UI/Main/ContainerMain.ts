import { connect } from "react-redux";
import { compose } from "redux";
import { CarousetlItemType,setCarouselItemsThunk } from "../../BLL/Reducers/mainReducer";
import getCarouselItems from "../../BLL/Selectors/getCarouselItems";
import { AppStateType } from "../../BLL/store";
import Main from "./Main";

type OwnPropsType={}

type MSTPType={
    carouselItems:any//jsx elements
}
let MapStateToProps=(state:AppStateType):MSTPType=>{
    return{
        carouselItems:getCarouselItems(state.main.carouselItems)
    }
}

type MDTPType={
    setCarouselItemsThunk:()=>void
}


export default compose(
    connect<MSTPType,MDTPType,OwnPropsType,AppStateType>(
        MapStateToProps,{setCarouselItemsThunk}
    )
)(Main)