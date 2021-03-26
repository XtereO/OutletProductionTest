import { FiltersType } from "../../BLL/Reducers/rimsReducer";


type PropsType={
    filters:FiltersType
    setAccessory:(filters:FiltersType,page:number)=>void
}

let AccessoryFilters:React.FC<PropsType>=(props)=>{
    let onChange=(e:any)=>{
        debugger
        props.setAccessory({...props.filters,sort_by_price:e.target.value},1)
    }
    return<div className="w-100">
        <div className="">
            <select style={{fontSize:"1.3em"}}
             className="form-control" onChange={onChange}>
                <option value={"null"}>
                    Сначала Новые
                </option>
                <option value={"true"}>
                    Сначала Подешевле
                </option>
                <option value={"false"}>
                    Сначала Подороже
                </option>
            </select>
        </div>
    </div>
}

export default AccessoryFilters