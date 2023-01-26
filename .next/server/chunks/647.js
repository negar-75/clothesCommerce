"use strict";
exports.id = 647;
exports.ids = [647];
exports.modules = {

/***/ 4387:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8157);
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_gesture_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(512);
/* harmony import */ var _use_gesture_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_use_gesture_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4417);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_DeleteOutline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8012);
/* harmony import */ var _mui_icons_material_DeleteOutline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DeleteOutline__WEBPACK_IMPORTED_MODULE_5__);






function AnimatedDiv({ children  }) {
    const [{ x  }, set] = useSpring(()=>({
            x: 0
        }));
    const bind = useDrag(({ delta , down , last  })=>{
        const x = down ? delta[0] : 0;
        set({
            x
        });
        if (last && delta[0] && delta[0] > 100) {
            onEnd && onEnd();
        }
    });
    const transform = to([
        x
    ], (x)=>`translate3d(${x}px,0,0)`);
    return /*#__PURE__*/ _jsx(animated.div, {
        ...bind(),
        style: {
            transform
        },
        children: children
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (AnimatedDiv)));


/***/ }),

/***/ 3565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function DiscountBox() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "md:col-span-8 lg:px-12 col-span-12 px-3 mb-6",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "discount-code flex flex-col gap-5",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    htmlFor: "discount-code",
                    children: "Have a promo code for checkout?"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container flex flex-col items-start gap-3 md:flex-row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            id: "discount-code",
                            type: "text",
                            className: "form-input rounded-full lg:w-[60%] w-[80%]"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "ml-7 uppercase font-semibold tracking-wide text-xs text-slate-900 bg-white rounded-full px-10 py-3 border border-slate-400 hover:border-black transition ease-linear duration-150 cursor-pointer",
                            children: "Apply"
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiscountBox);


/***/ }),

/***/ 7611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function OrderSummaryBox({ totalPrice  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "lg:col-span-4 bg-stone-200 flex flex-col py-5 rounded-md col-span-12 px-5 ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "info border-b-2 border-black pb-6 mb-6 px-5 w-screen max-w-[100%] ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: "Order Summary"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "",
                                children: " Total price"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "",
                                children: [
                                    "$",
                                    totalPrice
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "checkout lg:text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "md:ml-7 uppercase font-semibold text-xs text-slate-900 bg-white rounded-full md:px-10 md:py-3 border px-5 py-2 border-slate-400 hover:border-black transition ease-linear duration-150 cursor-pointer",
                    children: "Check out"
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummaryBox);


/***/ }),

/***/ 316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_slices_cart_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2849);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_slices_cart_slice__WEBPACK_IMPORTED_MODULE_1__]);
_store_slices_cart_slice__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function QuantityBox({ value , id  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "custom-number-input h-6 w-20 md:h-10 md:w-28",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-row h-6 w-full rounded-lg relative bg-transparent mt-1 md:h-10",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    "data-action": "decrement",
                    className: "bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none relative",
                    onClick: ()=>dispatch((0,_store_slices_cart_slice__WEBPACK_IMPORTED_MODULE_1__/* .decrementQuantity */ .X1)(id)),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "m-auto md:text-2xl font-thin absolute translate-y-[-60%] translate-x-[-50%]",
                        children: "−"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    className: " bg-gray-300 outline-none focus:outline-none text-center w-full md:font-semibold md:text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 ",
                    name: "custom-input-number",
                    value: value,
                    defaultValue: 0
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    "data-action": "increment",
                    className: "text-gray-600 bg-gray-300 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer relative",
                    onClick: ()=>dispatch((0,_store_slices_cart_slice__WEBPACK_IMPORTED_MODULE_1__/* .incrementQuantity */ .g1)(id)),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "m-auto md:text-2xl font-thin absolute translate-y-[-60%] translate-x-[-50%]",
                        children: "+"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuantityBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6647:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _discountBox_discountBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _orderSummaryBox_orderSummaryBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7611);
/* harmony import */ var _store_slices_cart_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2849);
/* harmony import */ var _quantityBox_quantityBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(316);
/* harmony import */ var _animatedDiv_animatedDiv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4387);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_slices_cart_slice__WEBPACK_IMPORTED_MODULE_5__, _quantityBox_quantityBox__WEBPACK_IMPORTED_MODULE_6__]);
([_store_slices_cart_slice__WEBPACK_IMPORTED_MODULE_5__, _quantityBox_quantityBox__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function ShoppingCart() {
    const cart = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.cart);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const getTotalPrice = ()=>{
        return cart.reduce((accumulator, item)=>accumulator + item.quantity * item.price, 0);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid grid-cols-12 md:mx-32 mx-5 ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "col-span-12 mb-6 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            className: "border-b-2 border-stone-200",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "text-start md:w-[20px] ",
                                    children: "Product"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "text-start md:w-[50px]",
                                    children: "Price"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "text-start md:w-[50px]",
                                    children: "Quantity"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "text-start md:w-[50px]",
                                    children: "Total"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        children: cart?.map((row)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                className: "border-b-2 border-stone-200",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center py-3 gap-2 md:gap-6 md:pl-0",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: " md:w-[130px] md:h-[163px] w-[90px] relative overflow-hidden group",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: row.image,
                                                            className: "object-cover w-[100%] h-[100%] object-top group-hover:opacity-70"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            onClick: ()=>dispatch((0,_store_slices_cart_slice__WEBPACK_IMPORTED_MODULE_5__/* .removeFromCart */ .h2)(row.id)),
                                                            className: "absolute bottom-[-60px] text-center py-1 text-white transition-bottom duration-200 ease-linear bg-gray-400 right-0 left-0 font-light group-hover:bottom-[40%] cursor-pointer ",
                                                            children: "Remove product"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "font-semibold text-sm md:text-lg",
                                                    children: row.title
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "md:text-lg text-sm",
                                            children: [
                                                "$",
                                                row.price
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_quantityBox_quantityBox__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            value: row.quantity,
                                            id: row.id
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "md:text-lg font-semibold text-sm",
                                            children: [
                                                "$",
                                                row.quantity * row.price
                                            ]
                                        })
                                    })
                                ]
                            }, row.id);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_discountBox_discountBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_orderSummaryBox_orderSummaryBox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                totalPrice: getTotalPrice()
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingCart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;