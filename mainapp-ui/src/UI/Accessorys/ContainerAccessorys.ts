
import Accessory from "./Accessorys"
import {compose} from "redux"
import {connect} from "react-redux"
import { UsualFilterType } from "../../Types/RimsTypes"
import { AccessoryType } from "../../Types/AccessorysTypes"
import { AppStateType } from "../../BLL/store"
import { setAccessorysThunk,setCategorysThunk } from "../../BLL/Reducers/accessorysReducer";
import { withRouter } from "react-router"
import getAccessorysSelector from "../../BLL/Selectors/getAccessorysSelector";
import { FiltersType } from "../../BLL/Reducers/rimsReducer"

type OwnPropsType={}
type MSTPType={
    accessorys:any,
    filters:FiltersType
    categorys:Array<UsualFilterType>,
    totalCount:number,
    page:number
}
let MapStateToProps=(state:AppStateType):MSTPType=>{
    return{
        accessorys:getAccessorysSelector(state.accessorys.accessorys),
        filters:state.accessorys.filters,
        categorys:state.accessorys.categorys,
        totalCount:state.accessorys.totalCount,
        page:state.accessorys.page
    }
}
type MDTPType={
    setAccessorysThunk:(filters:FiltersType,page:number)=>void,
    setCategorysThunk:()=>void
}

export default compose(
    connect<MSTPType,MDTPType,OwnPropsType,AppStateType>(MapStateToProps,{
        setAccessorysThunk,setCategorysThunk
    }),
    withRouter
)(Accessory)
