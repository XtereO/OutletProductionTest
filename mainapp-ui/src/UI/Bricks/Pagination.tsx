import { useEffect, useState } from "react"
import { FiltersType } from "../../BLL/Reducers/rimsReducer"

type PropsType = {
    page: number
    totalCount: number
    filters: FiltersType
    setPage: (filters: FiltersType, page: number) => void
}

let Pagination:React.FC<PropsType>=(props)=>{
    let [page,setPage]=useState(props.page)
    useEffect(()=>{
        props.setPage(props.filters,page)
        let pages=[]
        for(let i=1;i<=Math.ceil(props.totalCount/9);i++){
            let e=null
            if(page==i){
                e=<button key={i} className="btn btn-light"
                onClick={()=>{setPage(i)}}>
                    {i}
                </button>
            }else{
                e=<button key={i} className="btn btn-primary"
                onClick={()=>{setPage(i)}}>
                    {i}
                </button>
            }
            pages.push(e)
        }
        setCurPages([...pages].slice((portionNumber-1)*portionSize,(portionNumber)*portionSize))
    },[page,props.totalCount])
    //Create all pages
    let Pages:Array<any>=[]
    let portionSize=5
    for(let i=1;i<=Math.ceil(props.totalCount/9);i++){
        let e=null
        if(page==i){
            e=<button key={i} className="btn btn-light"
            onClick={()=>{setPage(i)}}>
                {i}
            </button>
        }else{
            e=<button key={i} className="btn btn-primary"
            onClick={()=>{setPage(i)}}>
                {i}
            </button>
        }
        Pages.push(e)
    }

    //To understand where curPage
    let i=1
    while(props.page >portionSize*i){
        i++
    }

    //for next and prev
    let [portionNumber,setPortionNumber]=useState(i)
    let [curPages,setCurPages]=useState([...Pages].slice(portionSize*(i-1),portionSize*i))
    let onNext=()=>{
        let newPortionNumber=portionNumber+1
        setPortionNumber(newPortionNumber)
        let newPages=[...Pages].slice((newPortionNumber-1)*portionSize,(newPortionNumber-1)*portionSize+portionSize)
        setCurPages(newPages)
    }
    let onPrev=()=>{
        let newPortionNumber=portionNumber-1
        setPortionNumber(newPortionNumber)
        let newPages=[...Pages].slice((newPortionNumber-1)*portionSize,(newPortionNumber-1)*portionSize+portionSize)
        setCurPages(newPages)
    }

    //render
    return<div>
        {portionNumber>1 &&
        <button onClick={onPrev} className="btn btn-outline-primary">
            {"<"}
        </button>}
        {curPages}
        {(portionNumber)*portionSize<Math.ceil(props.totalCount/9) &&
        <button onClick={onNext} className="btn btn-outline-primary">
            {">"}
        </button>}
    </div>
}
export default Pagination
