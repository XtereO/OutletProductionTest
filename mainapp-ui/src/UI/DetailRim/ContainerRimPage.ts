import { compose } from "redux"
import { connect } from "react-redux"
import RimPage from "./RimPage"
import { BrandType, RimType, UsualFilterType } from "../../Types/RimsTypes"
import { setRimThunk } from "../../BLL/Reducers/rimReducer"
import { AppStateType } from "../../BLL/store"
import { withRouter } from "react-router"
import getGlasssesSelector from "../../BLL/Selectors/getGlassesSelector"

type OwnPropsType = {}
type MSTPType = {
    id: number,
    title: string,
    brand: BrandType,
    article: string,
    color: UsualFilterType,
    material: UsualFilterType,
    shape: UsualFilterType,
    image: string,
    gender: UsualFilterType,
    price: number,
    is_available: boolean,
    is_sunGlasses: boolean,
    suggested:any//JSX elements
}
type MDTPType = {
    setRimThunk: (ID: number) => void
}
let MapStateToProps = (state: AppStateType): MSTPType => {
    return {
        id: state.rim.id,
        title: state.rim.title,
        brand: state.rim.brand,
        article: state.rim.article,
        color: state.rim.color,
        material: state.rim.material,
        shape: state.rim.shape,
        image: state.rim.image,
        gender: state.rim.gender,
        price: state.rim.price,
        is_available: state.rim.is_available,
        is_sunGlasses: state.rim.is_sunGlasses,
        suggested:getGlasssesSelector(state.rim.suggested)
    }
}

export default compose(
    connect<MSTPType, MDTPType, OwnPropsType, AppStateType>(
        MapStateToProps, { setRimThunk }),
    withRouter
)(RimPage)