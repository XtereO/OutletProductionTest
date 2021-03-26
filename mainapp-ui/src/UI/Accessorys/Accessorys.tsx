import { useEffect } from "react"
import { FiltersType } from "../../BLL/Reducers/rimsReducer"
import { AccessoryType } from "../../Types/AccessorysTypes"
import { UsualFilterType } from "../../Types/RimsTypes"
import AccessorysFilter from "./AccessoryFilters"
import Lenta from "../Lenta/Lenta"


type PropsType = {
    accessorys: Array<AccessoryType>,
    filters:FiltersType,
    categorys: Array<UsualFilterType>,
    totalCount: number,
    page:number,
    setAccessorysThunk:(filters:FiltersType,page:number)=>void,
    setCategorysThunk:()=>void,
    match:any
}

let Accessorys: React.FC<PropsType> = (props) => {
    useEffect(()=>{
        props.setCategorysThunk()
    },[])
    useEffect(()=>{
        props.setAccessorysThunk({category:props.match.params.id,sort_by_price:null},1)
    },[props.match.params.id])
    return <div>
        <Lenta url="/accessuars" topic="Аксессуары"
        mainFilter={props.categorys} otherFilters={AccessorysFilter(
            {filters:props.filters,setAccessory:props.setAccessorysThunk})}
        page={props.page} totalCount={props.totalCount} assorty={props.accessorys}
        setAssorty={props.setAccessorysThunk} allFilters={props.filters}
        />
    </div>
}

export default Accessorys