import { connect } from "react-redux";
import { compose } from "redux";
import { AppStateType } from "../../BLL/store";
import { BrandType } from "../../Types/RimsTypes";
import Lens from "./Lens";
import { setBrandsThunk } from "../../BLL/Reducers/lensReducer";

type OwnPropsType={}
type MSTPType={
    brands:Array<BrandType>
    text:string
}
let MapStateToProps=(state:AppStateType):MSTPType=>{
    return{
        brands:state.lens.brands,
        text:state.lens.text
    }
}
type MDTPType={
    setBrandsThunk:()=>void
}


export default compose(
    connect<MSTPType,MDTPType,OwnPropsType,AppStateType>(
        MapStateToProps,{setBrandsThunk}
    )
)(Lens)