import { allParamsRequests } from "../../DAL/API"


let SET_CAROUSEL_ITEMS:"mainReducer/SET_CAROUSEL_ITEMS"="mainReducer/SET_CAROUSEL_ITEMS"

export type CarousetlItemType={
    title:string
    image?:string
    description?:string
    id:number
}
let initialState={
    carouselItems:[] as Array<CarousetlItemType>
}

type InitialStateType=typeof initialState
type ActionType=SetCarouselItemsType

let mainReducer=(state=initialState,action:ActionType):InitialStateType=>{
    switch(action.type){
        case SET_CAROUSEL_ITEMS:
            debugger
            return{...state,
            carouselItems:[...action.carouselItems]}
        default:
            return state
    }
}

type SetCarouselItemsType={
    type:typeof SET_CAROUSEL_ITEMS,
    carouselItems:Array<CarousetlItemType>
}
let setCarouselItems=(carouselItems:Array<CarousetlItemType>):SetCarouselItemsType=>{
    return{
        type:SET_CAROUSEL_ITEMS,
        carouselItems
    }
}
export let setCarouselItemsThunk=()=> async (dispatch:any)=>{
    let response=await allParamsRequests.getBrands()

    dispatch(setCarouselItems(response.data))
}


export default mainReducer
