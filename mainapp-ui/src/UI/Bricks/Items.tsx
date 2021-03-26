import React from "react"
import Item from "./Item"

type PropsType={
    content:Array<any>//jsx elements
    limit?:boolean
}

let Items:React.FC<PropsType>=(props)=>{
    let content=props.content
    return<div className="">
        <div className="row">
            {[...content].slice(0,3)}
        </div>
        {props.limit ? <div></div> : 
        <div>
        <div className="row">
            {[...content].slice(3,6)}
        </div>
        <div className="row">
            {[...content].slice(6,9)}
        </div>
        </div>
        }
    </div>
}

export default Items