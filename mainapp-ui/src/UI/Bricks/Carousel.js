import { Carousel } from "react-bootstrap"


let MyCarousel=(props)=>{
    return<div>
        <Carousel>
            {props.items}
        </Carousel>
    </div>
}

export default MyCarousel