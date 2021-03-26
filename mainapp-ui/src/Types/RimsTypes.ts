
export type UsualFilterType={
    title:string,
    id:number
}

export type BrandType={
    title:string
    description?:string
    image?:string
    is_doLens?:boolean
    is_doRims?:boolean
    is_doSunGlasses?:boolean
    id:number
}

export type RimType={
    //Brand who was created
    title:string
    id:number
    brand:BrandType
    article:string
    
    //Outside params
    color:UsualFilterType
    material:UsualFilterType
    shape:UsualFilterType
    image:string
    gender:UsualFilterType

    //Market params
    price:number
    is_available:boolean
    is_sunGlasses:boolean
}