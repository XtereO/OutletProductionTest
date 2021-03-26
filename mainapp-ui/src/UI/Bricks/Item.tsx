import React, { useState } from "react"
import { NavLink } from "react-router-dom"

type PropsType = {
    brand?: string
    image: string
    price: number
    article?: string
    is_accessory?:boolean
    id: number
    title: string
}

let Item: React.FC<PropsType> = (props) => {
    let [onHover, setHover] = useState(false)
    let changeBehavior = () => {
        setHover(!onHover)
    }
    return <div className="col-md-4 mt-2">
        <div className="card"
            onMouseEnter={changeBehavior} onMouseLeave={changeBehavior} >
            <div className="center" style={{overflow:"hidden",height:"270px"}}>
                <img src={props.image}
                    className={onHover ? "ItemOn " : "ItemExit "} />
            </div>
            <div className="card-body">
                <div className="mb-2">
                    {props.title}
                </div><div></div>
                <div className="left">
                    <div>
                        Цена {props.price} ₽
                    </div>

                    { props.article && 
                    <div style={{ fontSize: "0.7em" }} className="text-secondary">
                        Артикул {props.article}
                    </div>}
                </div>
                <div className="right">
                    {onHover ?
                        <NavLink to={props.is_accessory ? 
                        `/accessuar/${props.id}` 
                        :`/rim/${props.id}`}>
                            <button style={{fontSize:"1.1em"}} 
                            className="btn btn-warning text-white mt-1">
                                Подробнее
                            </button>
                        </NavLink>
                        :
                        <div className="mt-3">{props.brand}</div>
                    }
                </div>
            </div>
        </div>
    </div>
}

export default Item