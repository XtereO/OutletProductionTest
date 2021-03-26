import {UsualFilterType} from "./RimsTypes"

export type AccessoryType={
    id:number
    title:string
    category:UsualFilterType
    image:string
    price:number
    is_available:boolean
}