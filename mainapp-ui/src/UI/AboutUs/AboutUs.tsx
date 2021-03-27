import React from "react"
import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { MarketPointType } from "../../Types/AboutUsTypes"

type PropsType={
    aboutUsText:string
    marketPoints:Array<MarketPointType>
    setMarketPointsThunk:()=>void
}

let AboutUs:React.FC<PropsType>=React.memo((props)=>{
    useEffect(()=>{
        if (props.marketPoints.length===0){
            props.setMarketPointsThunk()
        }
    },[])
    let marketPoints=props.marketPoints.map(m=>
        <a href={m.link} style={{textDecoration:"none"}} 
        className="list-group-item text-center" target="_blank">
            {m.region} район, ул. {m.street}
        </a>)
    return<div className="">
        <div className="row mx-2">
            <div className="col-md-6 mt-1">
                <h3 className="text-center text-primary">
                    О нас 
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-info-circle mx-2" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                </h3>

                <div style={{fontSize:"1.1em"}} className="center">
                    
                    <span className="ml-2"></span>
                    Outlet-SPb оптика. Хотите купить модные брендовые очки 
                    и не оставить за них половину зарплаты? Тогда вам в нашу оптику!

                    <br />
                    
                    <span className="ml-2"></span>
                    У нас представлены оправы и солнцезащитные очки известных 
                    брендов прошлогодних коллекций, которые вы  можете приобрести
                    по самым низким ценам.
                </div>
            </div>
            
            <div className="col-md-6 mt-1">
                <h3 className="text-center text-primary">
                    Где нас найти
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search mx-2" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </h3>

                <div>
                    <p style={{fontSize:"1.2em"}} className="center">
                    Все наши торговые точки в СПб
                    </p>
                    <ul className="list-group">
                        {marketPoints}
                    </ul>
                </div>
            </div>
        </div>
    </div>
})

export default AboutUs