import { RimType } from "../../Types/RimsTypes";
import Item from "../../UI/Bricks/Item"

let getGlasssesSelector=(rims:Array<RimType>):any=>{
    return rims.map(r=>{
        return<Item brand={r.brand.title} image={r.image}
        price={r.price} article={r.article} id={r.id} title={r.title}/>
    })
} 

export default getGlasssesSelector