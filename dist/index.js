"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = require("reselect");
exports.selector = reselect_1.createSelector(function (state) { return state.a; }, function (state) { return state.b; }, function (a, b) {
    return {
        out: a + "+" + b
    };
});
console.log(exports.selector({ a: 'string', b: 5 }));
