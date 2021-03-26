"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Lenta_1 = require("../Lenta/Lenta");
var FilterRims_1 = require("../Bricks/FilterRims");
var RimsPage = function (props) {
    return react_1["default"].createElement("div", null,
        react_1["default"].createElement(Lenta_1["default"], { topic: "Оправы", allParams: props.allParams, mainFilter: props.allParams.genders, page: props.page, totalCount: props.totalCount, assorty: props.rims, setAssorty: props.setRimsThunk, url: "/rims", otherFilters: FilterRims_1["default"]({ filters: props.filters, allParams: props.allParams,
                setFilter: props.setRimsThunk }) }));
};
exports["default"] = RimsPage;
