import { Formik, Field } from "formik";
import React,{ useEffect, useState } from "react";
import {AllParamsType, FiltersType} from "../../BLL/Reducers/rimsReducer"

type PropsType={
  filters:FiltersType,
  allParams:AllParamsType,
  setFilter:(filters:FiltersType,page:number)=>void
}

let FilterRims:React.FC<PropsType> = (props) => {
  let [allParams,setAllParams] = useState(props.allParams)
  useEffect(()=>{
    setAllParams(props.allParams)
  },[props.allParams])
  return (
    <Formik initialValues={{
      //choosed params
      color:props.filters.color,
      material:props.filters.material,
      shape:props.filters.shape,
      brand:props.filters.brand,
      is_available:props.filters.is_available,
      sort_by_price:props.filters.sort_by_price,
    }} 
      onSubmit={(values) => {
      let filters:FiltersType={
        color:values.color,
        material:values.material,
        shape:values.shape,
        brand:values.brand,
        is_available:values.is_available,
        sort_by_price:values.sort_by_price,
        
        //this params seting by url
        gender:props.filters.gender
      }
      props.setFilter(filters,1)
    }}>
      {({ values,
      handleSubmit,
      handleChange }) => {

        //Ooops i am sorry :)
        let colors=allParams.colors.map(c=>
          <option value={c.id}>{c.title}</option>)
        let materials=allParams.materials.map(m=>
          <option value={m.id}>{m.title}</option>)
        let shapes=allParams.shapes.map(s=>
          <option value={s.id}>{s.title}</option>)
        let brands=allParams.brands.map(b=>
          <option value={b.id}>{b.title}</option>)
        

        return (
          <form onSubmit={handleSubmit}>
            <div className="row">

              <div className="col-md-4 FilterItem">
                <div className="m-2"><label htmlFor="color">
                  <h4>Цвет</h4>
                </label></div>
                <div className="">
                <select id="color" name="color" style={{fontSize:"1.05em"}}
                className="form-control" onChange={handleChange}>
                  {colors}
                </select></div>
              </div>

              <div className="col-md-4 FilterItem">
                <div className="m-2"><label htmlFor="material">
                  <h4>Материал</h4>
                </label></div>
                <div>
                <select id="material" name="material" style={{fontSize:"1.05em"}}
                className="form-control" onChange={handleChange}>
                  {materials}
                </select></div>
              </div>
              
              
              <div className="col-md-4 mb-2">
                <div>
                <select name="sort_by_price" onChange={handleChange}
                className="form-control" style={{fontSize:"1.05em"}}>
                  <option value={"null"}>Сначала Новые</option>
                  <option value={"true"}>Сначала Подешевле</option>
                  <option value={"false"}>Сначала Подороже</option>
                </select></div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 FilterItem">
                <div className="m-2"><label htmlFor="brand">
                  <h4>Бренд</h4>
                </label></div>
                <div>
                <select id="brand" name="brand" style={{fontSize:"1.05em"}}
                className="form-control" onChange={handleChange}>
                  {brands}
                </select></div>
              </div>

              <div className="col-md-4 FilterItem">
                <div className="m-2"><label htmlFor="shape">
                  <h4>Форма</h4></label>
                </div>
                <div>
                <select id="shape" name="shape" style={{fontSize:"1.05em"}}
                className="form-control" onChange={handleChange}>
                  {shapes}
                </select></div>
              </div>

              <div className="col-md-4 d-flex center">
                <label>
                  <span className="m-2" style={{fontSize:"1.3em"}}>
                  В наличии
                  </span>
                  <Field  type="checkbox" name="is_available"/>
                </label>
              </div>
              
            </div>
            <button style={{fontSize:"1.05em"}}
             className="btn btn-outline-primary mt-2 w-100">
              Применить
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default FilterRims;
