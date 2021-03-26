import axios from  "axios"
import Cookies from "js-cookie"
import {FiltersType} from "../BLL/Reducers/rimsReducer"
import { MarketPointType } from "../Types/AboutUsTypes";
import { AccessoryType } from "../Types/AccessorysTypes";
import { BrandType, RimType,UsualFilterType } from "../Types/RimsTypes";
const csrftoken = Cookies.get('csrftoken');


let instance=axios.create({
    baseURL:"http://cr37069-django.tw1.ru/api/",
    
})

type GetRimsType={
    count: number,
    next: null | boolean,
    previous: null | boolean,
    results:Array<RimType> 
}
type GetAccessorysType={
    count: number,
    next: null | boolean,
    previous: null | boolean,
    results:Array<AccessoryType> 
}
export let getRims=(filters:FiltersType,page:number=1,is_sunGlasses=false)=>{
    return instance.get<GetRimsType>(`glassesrims/?is_sunglasses=${is_sunGlasses}&is_available=${filters.is_available}&brand=${filters.brand}&color=${filters.color}&shape=${filters.shape}&material=${filters.material}&gender=${filters.gender}&sort_price=${filters.sort_by_price}&page=${page}`)
}
export let getRim=(ID:number)=>{
    return instance.get<GetRimsType>(`glassesrims/?id=${ID}`)
}

export let getAccessorys=(filters:FiltersType,page:number)=>{
    return instance.get<GetAccessorysType>(`accessory/?is_available=${true}&category=${filters.category}&page=${page}&sort_price=${filters.sort_by_price}`)
}
export let getAccessory=(id:number)=>{
    return instance.get<GetAccessorysType>(`accessory/?id=${id}`)
}


export let allParamsRequests={
    getColors(){
        return instance.get<Array<UsualFilterType>>("colors/")
    },
    getMaterials(){
        return instance.get<Array<UsualFilterType>>("materials/")
    },
    getShapes(){
        return instance.get<Array<UsualFilterType>>("shapes/")
    },
    getBrands(is_doRims=false,is_doSunGlasses=false,is_doLens=false){
        return instance.get<Array<BrandType>>(`brands/?is_doRims=${is_doRims}&is_doSunGlasses=${is_doSunGlasses}&is_doLens=${is_doLens}`)
    },
    getGenders(){
        return instance.get<Array<UsualFilterType>>("genders/")
    },
    getCategorysAccessorys(){
        return instance.get<Array<UsualFilterType>>("categoryaccessory/")
    },
    getMarketPoints(){
        return instance.get<Array<MarketPointType>>("marketpoints/")
    }
}

export default instance
