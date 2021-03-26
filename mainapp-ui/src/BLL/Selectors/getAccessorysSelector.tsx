import { AccessoryType } from "../../Types/AccessorysTypes";
import Item from "../../UI/Bricks/Item"

let getAccessorysSelector=(accessorys:Array<AccessoryType>):any=>{
    return accessorys.map(r=>{
        return<Item image={r.image} is_accessory={true}
        price={r.price} id={r.id} title={r.title}/>
    })
} 

export default getAccessorysSelector

