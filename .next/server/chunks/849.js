"use strict";
exports.id = 849;
exports.ids = [849];
exports.modules = {

/***/ 2849:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C$": () => (/* binding */ cartReducer),
/* harmony export */   "X1": () => (/* binding */ decrementQuantity),
/* harmony export */   "Xq": () => (/* binding */ addToCart),
/* harmony export */   "g1": () => (/* binding */ incrementQuantity),
/* harmony export */   "h2": () => (/* binding */ removeFromCart)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_1__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    cart: []
};
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            const itemExists = state.cart.find((item)=>item.id === action.payload.id);
            if (itemExists) {
                itemExists.quantity++;
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: 1
                });
            }
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"])(`${action.payload.title} added`);
        },
        incrementQuantity: (state, action)=>{
            const item = state.cart.find((item)=>item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action)=>{
            const item = state.cart.find((item)=>item.id === action.payload);
            if (item.quantity === 1) {
                const index = state.cart.findIndex((item)=>item.id === action.payload);
                state.cart.splice(index, 1);
            } else {
                item.quantity--;
            }
        },
        removeFromCart: (state, action)=>{
            const index = state.cart.findIndex((item)=>item.id === action.payload);
            state.cart.splice(index, 1);
        }
    }
});
const cartReducer = cartSlice.reducer;
const { addToCart , incrementQuantity , decrementQuantity , removeFromCart  } = cartSlice.actions;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;