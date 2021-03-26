"use strict";
exports.__esModule = true;
var formik_1 = require("formik");
var FilterRims = function (props) {
    return (React.createElement(formik_1.Formik, { initialValues: {
            //choosed params
            color: props.filters.color,
            material: props.filters.material,
            shape: props.filters.shape,
            brand: props.filters.brand,
            is_available: props.filters.is_available,
            sort_by_price: props.filters.sort_by_price,
            //all params
            colors: props.allParams.colors,
            materials: props.allParams.materials,
            shapes: props.allParams.shapes,
            brands: props.allParams.brands
        }, onSubmit: function (values) {
            var filters = {
                color: values.color,
                material: values.material,
                shape: values.shape,
                brand: values.brand,
                is_available: values.is_available,
                sort_by_price: values.sort_by_price,
                //this params seting by url
                gender: props.filters.gender
            };
            debugger;
            props.setFilter(filters, 1);
        } }, function (_a) {
        var values = _a.values, handleSubmit = _a.handleSubmit, handleChange = _a.handleChange;
        //Ooops i am sorry :)
        var colors = values.colors.map(function (c) {
            return React.createElement("option", { value: c.id }, c.title);
        });
        var materials = values.materials.map(function (m) {
            return React.createElement("option", { value: m.id }, m.title);
        });
        var shapes = values.shapes.map(function (s) {
            return React.createElement("option", { value: s.id }, s.title);
        });
        var brands = values.brands.map(function (b) {
            return React.createElement("option", { value: b.id }, b.title);
        });
        return (React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-4 d-flex center" },
                    React.createElement("div", { className: "m-2" },
                        React.createElement("label", { htmlFor: "color" },
                            React.createElement("h5", null, "\u0426\u0432\u0435\u0442"))),
                    React.createElement("div", null,
                        React.createElement("select", { id: "color", name: "color", className: "form-control", onChange: handleChange }, colors))),
                React.createElement("div", { className: "col-md-4 d-flex center" },
                    React.createElement("div", { className: "m-2" },
                        React.createElement("label", { htmlFor: "material" },
                            React.createElement("h5", null, "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B"))),
                    React.createElement("div", null,
                        React.createElement("select", { id: "material", name: "material", className: "form-control", onChange: handleChange }, materials))),
                React.createElement("div", { className: "col-md-4 d-flex center" },
                    React.createElement("div", { className: "m-2" },
                        React.createElement("label", { htmlFor: "shape" },
                            React.createElement("h5", null, "\u0424\u043E\u0440\u043C\u0430"))),
                    React.createElement("div", null,
                        React.createElement("select", { id: "shape", name: "shape", className: "form-control", onChange: handleChange }, shapes)))),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-4 d-flex center" },
                    React.createElement("div", { className: "m-2" },
                        React.createElement("label", { htmlFor: "brand" },
                            React.createElement("h5", null, "\u0411\u0440\u044D\u043D\u0434"))),
                    React.createElement("div", null,
                        React.createElement("select", { id: "brand", name: "brand", className: "form-control", onChange: handleChange }, brands))),
                React.createElement("div", { className: "col-md-4 d-flex center" },
                    React.createElement("label", null,
                        React.createElement("span", { className: "m-2", style: { fontSize: "1.4em" } }, "\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438"),
                        React.createElement(formik_1.Field, { type: "checkbox", name: "is_available" }))),
                React.createElement("div", { className: "col-md-4 d-flex center" },
                    React.createElement("div", null,
                        React.createElement("select", { name: "sort_by_price", onChange: handleChange, className: "form-control" },
                            React.createElement("option", { value: "null" }, "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u041D\u043E\u0432\u044B\u0435"),
                            React.createElement("option", { value: "true" }, "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u041F\u043E\u0434\u0435\u0448\u0435\u0432\u043B\u0435"),
                            React.createElement("option", { value: "false" }, "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u041F\u043E\u0434\u043E\u0440\u043E\u0436\u0435"))))),
            React.createElement("button", { className: "btn btn-outline-primary mt-2 w-100" }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C")));
    }));
};
exports["default"] = FilterRims;
