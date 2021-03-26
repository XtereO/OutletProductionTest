import {Carousel} from "react-bootstrap"
import { CarousetlItemType } from "../Reducers/mainReducer"
import { AppStateType } from "../store"

let getCarouselItems=(state:AppStateType)=>{
    return state.main.carouselItems.map(c=><Carousel.Item>
    <img
    src={c.image}
    className="w-100 h-50"
        />
        <Carousel.Caption>
            <h3>{c.title}</h3>
                <p>
                    {c.description}
                </p>
        </Carousel.Caption>
    </Carousel.Item>)
}

export default getCarouselItems