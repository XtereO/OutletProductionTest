"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Pagination_1 = require("../Bricks/Pagination");
var Items_1 = require("../Bricks/Items");
var react_1 = require("react");
var Lenta = function (props) {
    var mainFilters = props.mainFilter.map(function (m) {
        return react_1["default"].createElement("li", { className: "list-group-item center" },
            react_1["default"].createElement(react_router_dom_1.NavLink, { to: props.url + "/" + m.id, className: "text-dark", style: { textDecoration: "none" } }, m.title));
    });
    return react_1["default"].createElement("div", { className: "container" },
        react_1["default"].createElement("h3", null, props.topic),
        react_1["default"].createElement("div", { className: "row" },
            react_1["default"].createElement("div", { className: "col-md-3 mt-2" },
                react_1["default"].createElement("ul", { className: "list-group" }, mainFilters)),
            react_1["default"].createElement("div", { className: "col-md-9 mt-2" },
                react_1["default"].createElement("div", null, props.otherFilters),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(Items_1["default"], { content: props.assorty }),
                    react_1["default"].createElement("div", { className: "right mt-4" },
                        react_1["default"].createElement(Pagination_1["default"], null))))));
};
exports["default"] = Lenta;
