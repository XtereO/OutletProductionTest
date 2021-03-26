import React, { useEffect } from 'react'
import withSuspense from '../HOCs/withSuspense'
import getCarouselItems from "../../BLL/Selectors/getCarouselItems";
import { setCarouselItemsThunk } from "../../BLL/Reducers/mainReducer";
import {Route,Switch} from "react-router-dom"

import CarouselBox from "../Bricks/Carousel"
import {SunGlassesPageUI,RimsPageUI} from "../RimsPage/ContainerRimsPage"
import { useDispatch, useSelector } from 'react-redux'
let RimPage=React.lazy(()=>import('../DetailRim/ContainerRimPage'))
let Accessorys=React.lazy(()=>import('../Accessorys/ContainerAccessorys'))
let Accessory=React.lazy(()=>import('../DetailAccessory/ContainerAccessory'))
let Lens=React.lazy(()=>import('../Lens/ContainerLens'))
let AboutUs=React.lazy(()=>import('../AboutUs/ContainerAboutUs'))

let Main=(props)=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(setCarouselItemsThunk())
    },[])
    const carouselItems=useSelector(getCarouselItems)
    return<div style={{marginTop:'2.4em'}}>
        <CarouselBox items={carouselItems} />
        <div className="mt-4 containerMy">
        <Switch>
              <Route path="/rims/:id?" render={() =><RimsPageUI/>} />
              <Route path="/rim/:id?" render={() => withSuspense(RimPage)} />
              <Route path="/sunglasses/:id?" render={()=><SunGlassesPageUI/>} />
              <Route path="/accessuars/:id?" render={()=>withSuspense(Accessorys)}/>
              <Route path="/accessuar/:id?" render={()=>withSuspense(Accessory)}/>
              <Route path="/lens" render={()=>withSuspense(Lens)} />
              <Route path="*" render={()=>withSuspense(AboutUs)} />
        </Switch>
        </div>
    </div>
}

export default Main