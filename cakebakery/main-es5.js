function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/additem/additem.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/additem/additem.component.ts ***!
    \**********************************************/

  /*! exports provided: AdditemComponent */

  /***/
  function srcAppAdditemAdditemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdditemComponent", function () {
      return AdditemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AdditemComponent = /*#__PURE__*/function () {
      function AdditemComponent() {
        _classCallCheck(this, AdditemComponent);

        this.cake = {};
      }

      _createClass(AdditemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addItem",
        value: function addItem() {
          console.log(this.cake);
        }
      }]);

      return AdditemComponent;
    }();

    AdditemComponent.ɵfac = function AdditemComponent_Factory(t) {
      return new (t || AdditemComponent)();
    };

    AdditemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdditemComponent,
      selectors: [["app-additem"]],
      decls: 33,
      vars: 7,
      consts: [[1, "additem-section"], [1, "form-group"], ["name", "name", "type", "text", "placeholder", "Enter Cake Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "image", "type", "file", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "price", "type", "text", "placeholder", "enter price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "weight", "placeholder", "Enter weight", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-check"], ["type", "checkbox", "id", "gridCheck", "name", "checkBox", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "gridCheck", 1, "form-check-label"], ["name", "category", "id", "FormControlSelect", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "FormControlTextarea1", "rows", "3", "name", "description", "placeholder", "Enter Description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]],
      template: function AdditemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "AddItem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdditemComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.cake.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdditemComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.cake.image = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdditemComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.cake.price = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdditemComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.cake.weight = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdditemComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.cake.type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Eggless ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdditemComponent_Template_select_ngModelChange_18_listener($event) {
            return ctx.cake.category = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Black Forest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Vanilla");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "pineapple");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Strawberry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "textarea", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdditemComponent_Template_textarea_ngModelChange_30_listener($event) {
            return ctx.cake.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_Template_button_click_31_listener() {
            return ctx.addItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Add Item ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cake.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cake.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cake.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cake.weight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cake.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cake.category);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cake.description);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: [".additem-section[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background: #eee;\r\n    padding: 50px;\r\n  }\r\n  .additem-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkaXRlbS9hZGRpdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvYWRkaXRlbS9hZGRpdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkaXRlbS1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgfVxyXG4gIC5hZGRpdGVtLXNlY3Rpb24gZm9ybSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdditemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-additem',
          templateUrl: './additem.component.html',
          styleUrls: ['./additem.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _searchcake_searchcake_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./searchcake/searchcake.component */
    "./src/app/searchcake/searchcake.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/sign-up/sign-up.component.ts");
    /* harmony import */


    var _cakedetails_cakedetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./cakedetails/cakedetails.component */
    "./src/app/cakedetails/cakedetails.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _editcake_editcake_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./editcake/editcake.component */
    "./src/app/editcake/editcake.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'signup',
      component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
    }, {
      path: 'forgetPassword',
      component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"]
    }, {
      path: 'search',
      component: _searchcake_searchcake_component__WEBPACK_IMPORTED_MODULE_5__["SearchcakeComponent"]
    }, {
      path: 'cake/:id',
      component: _cakedetails_cakedetails_component__WEBPACK_IMPORTED_MODULE_7__["CakedetailsComponent"]
    }, {
      path: 'cart',
      component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"]
    }, {
      path: 'editcake',
      component: _editcake_editcake_component__WEBPACK_IMPORTED_MODULE_9__["EditcakeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./commonservice.service */
    "./src/app/commonservice.service.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent(cs) {
      _classCallCheck(this, AppComponent);

      this.cs = cs;
      this.title = 'walkingTreeProject'; // trainees = trainees;

      this.cakeList = this.cs.cakes;
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "containers"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [".containers[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    min-height: 100vh;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVycyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybChcIlwiKTsgKi9cclxuICB9XHJcbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/sign-up/sign-up.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/app/card/card.component.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _additem_additem_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./additem/additem.component */
    "./src/app/additem/additem.component.ts");
    /* harmony import */


    var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./user-list/user-list.component */
    "./src/app/user-list/user-list.component.ts");
    /* harmony import */


    var _test_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./test.directive */
    "./src/app/test.directive.ts");
    /* harmony import */


    var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./carousel/carousel.component */
    "./src/app/carousel/carousel.component.ts");
    /* harmony import */


    var _highlight_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./highlight.directive */
    "./src/app/highlight.directive.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _search_cake_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./search-cake.directive */
    "./src/app/search-cake.directive.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _searchcake_searchcake_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./searchcake/searchcake.component */
    "./src/app/searchcake/searchcake.component.ts");
    /* harmony import */


    var _cakedetails_cakedetails_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./cakedetails/cakedetails.component */
    "./src/app/cakedetails/cakedetails.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _cakeform_cakeform_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./cakeform/cakeform.component */
    "./src/app/cakeform/cakeform.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _placeorder_placeorder_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./placeorder/placeorder.component */
    "./src/app/placeorder/placeorder.component.ts");
    /* harmony import */


    var _authinterceptor_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./authinterceptor.service */
    "./src/app/authinterceptor.service.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _editcake_editcake_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./editcake/editcake.component */
    "./src/app/editcake/editcake.component.ts"); // import { AddUserComponent } from './add-user/add-user.component';
    // import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HTTP_INTERCEPTORS"],
        useClass: _authinterceptor_service__WEBPACK_IMPORTED_MODULE_26__["AuthinterceptorService"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"], _additem_additem_component__WEBPACK_IMPORTED_MODULE_10__["AdditemComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_11__["UserListComponent"], _test_directive__WEBPACK_IMPORTED_MODULE_12__["TestDirective"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_13__["CarouselComponent"], _highlight_directive__WEBPACK_IMPORTED_MODULE_14__["HighlightDirective"], _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"], _search_cake_directive__WEBPACK_IMPORTED_MODULE_16__["SearchCakeDirective"], _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"], _searchcake_searchcake_component__WEBPACK_IMPORTED_MODULE_18__["SearchcakeComponent"], _cakedetails_cakedetails_component__WEBPACK_IMPORTED_MODULE_19__["CakedetailsComponent"], _cakeform_cakeform_component__WEBPACK_IMPORTED_MODULE_21__["CakeformComponent"], _placeorder_placeorder_component__WEBPACK_IMPORTED_MODULE_25__["PlaceorderComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_27__["CartComponent"], _editcake_editcake_component__WEBPACK_IMPORTED_MODULE_28__["EditcakeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"], _additem_additem_component__WEBPACK_IMPORTED_MODULE_10__["AdditemComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_11__["UserListComponent"], _test_directive__WEBPACK_IMPORTED_MODULE_12__["TestDirective"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_13__["CarouselComponent"], _highlight_directive__WEBPACK_IMPORTED_MODULE_14__["HighlightDirective"], _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"], _search_cake_directive__WEBPACK_IMPORTED_MODULE_16__["SearchCakeDirective"], _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"], _searchcake_searchcake_component__WEBPACK_IMPORTED_MODULE_18__["SearchcakeComponent"], _cakedetails_cakedetails_component__WEBPACK_IMPORTED_MODULE_19__["CakedetailsComponent"], _cakeform_cakeform_component__WEBPACK_IMPORTED_MODULE_21__["CakeformComponent"], _placeorder_placeorder_component__WEBPACK_IMPORTED_MODULE_25__["PlaceorderComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_27__["CartComponent"], _editcake_editcake_component__WEBPACK_IMPORTED_MODULE_28__["EditcakeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"].forRoot()],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HTTP_INTERCEPTORS"],
            useClass: _authinterceptor_service__WEBPACK_IMPORTED_MODULE_26__["AuthinterceptorService"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/authinterceptor.service.ts":
  /*!********************************************!*\
    !*** ./src/app/authinterceptor.service.ts ***!
    \********************************************/

  /*! exports provided: AuthinterceptorService */

  /***/
  function srcAppAuthinterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthinterceptorService", function () {
      return AuthinterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // import { request } from 'node:http';


    var AuthinterceptorService = /*#__PURE__*/function () {
      function AuthinterceptorService() {
        _classCallCheck(this, AuthinterceptorService);
      }

      _createClass(AuthinterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          // alert('ja rha hai interceptor me');
          if (localStorage.token) {
            request = request.clone({
              setHeaders: {
                authtoken: localStorage.token
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return AuthinterceptorService;
    }();

    AuthinterceptorService.ɵfac = function AuthinterceptorService_Factory(t) {
      return new (t || AuthinterceptorService)();
    };

    AuthinterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthinterceptorService,
      factory: AuthinterceptorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthinterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cakedetails/cakedetails.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/cakedetails/cakedetails.component.ts ***!
    \******************************************************/

  /*! exports provided: CakedetailsComponent */

  /***/
  function srcAppCakedetailsCakedetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CakedetailsComponent", function () {
      return CakedetailsComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _commonservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../commonservice.service */
    "./src/app/commonservice.service.ts"); // import { log } from 'node:console';
    // import { from } from 'rxjs';
    // import {UserListService} from "../user-list.service";


    var CakedetailsComponent = /*#__PURE__*/function () {
      function CakedetailsComponent(routes, http, route, toast, cs) {
        var _this = this;

        _classCallCheck(this, CakedetailsComponent);

        this.routes = routes;
        this.http = http;
        this.route = route;
        this.toast = toast;
        this.cs = cs;
        this.cakeobj = {};
        this.ids = +this.routes.snapshot.params['id'];
        console.log(this.ids);
        var apiurl = 'https://apifromashu.herokuapp.com/api/cake/';
        this.http.get(apiurl + this.ids).subscribe(function (response) {
          console.log('response from signup api', response);
          _this.cakeobj = response.data;
          _this.cake = {
            name: _this.cakeobj.name,
            cakeid: _this.cakeobj.cakeid,
            image: _this.cakeobj.image,
            price: _this.cakeobj.price,
            weight: _this.cakeobj.weight
          };
        }, function (error) {
          console.log('Error from signup api', error);
        });
      }

      _createClass(CakedetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "add",
        value: function add() {
          var _this2 = this;

          var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
          var api = 'https://apifromashu.herokuapp.com/api/addcaketocart'; // var token  = JSON.parse(localStorage.token)
          // header = header.set('authtoken', token);

          this.http.post(api, this.cake).subscribe(function (response) {
            console.log("add cake to cart response", response);
          }, function (error) {
            console.log("add cake to cart error", error);
          });

          if (!localStorage.getItem("email")) {
            this.toast.warning("Please Login First", "Warning");
            setTimeout(function () {
              _this2.route.navigate(['/login']);
            }, 3000);
          }
        }
      }]);

      return CakedetailsComponent;
    }();

    CakedetailsComponent.ɵfac = function CakedetailsComponent_Factory(t) {
      return new (t || CakedetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_4__["CommonserviceService"]));
    };

    CakedetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CakedetailsComponent,
      selectors: [["app-cakedetails"]],
      decls: 14,
      vars: 4,
      consts: [[1, "container"], [1, "imag"], [3, "src"], [1, "details"], [3, "click"]],
      template: function CakedetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Cake Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CakedetailsComponent_Template_button_click_12_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Add To Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.cakeobj.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Name: ", ctx.cakeobj.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Price: ", ctx.cakeobj.price, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Weight: ", ctx.cakeobj.weight, "");
        }
      },
      styles: [".container[_ngcontent-%COMP%]{\r\n    position:relative;\r\n    top:10vh;\r\n    left:10vw;\r\n    display: flex;\r\n    flex-direction: row;\r\n    height:100vh;\r\n    \r\n}\r\n.details[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    left:5vw;\r\n    display:grid;\r\n    grid-template-rows: repeat(6,1fr);\r\n    height:30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FrZWRldGFpbHMvY2FrZWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsU0FBUztJQUNULGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jYWtlZGV0YWlscy9jYWtlZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgdG9wOjEwdmg7XHJcbiAgICBsZWZ0OjEwdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIFxyXG59XHJcbi5kZXRhaWxze1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDo1dnc7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LDFmcik7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CakedetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-cakedetails',
          templateUrl: './cakedetails.component.html',
          styleUrls: ['./cakedetails.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _commonservice_service__WEBPACK_IMPORTED_MODULE_4__["CommonserviceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cakeform/cakeform.component.ts":
  /*!************************************************!*\
    !*** ./src/app/cakeform/cakeform.component.ts ***!
    \************************************************/

  /*! exports provided: CakeformComponent */

  /***/
  function srcAppCakeformCakeformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CakeformComponent", function () {
      return CakeformComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CakeformComponent = /*#__PURE__*/function () {
      function CakeformComponent() {
        _classCallCheck(this, CakeformComponent);
      }

      _createClass(CakeformComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CakeformComponent;
    }();

    CakeformComponent.ɵfac = function CakeformComponent_Factory(t) {
      return new (t || CakeformComponent)();
    };

    CakeformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CakeformComponent,
      selectors: [["app-cakeform"]],
      decls: 2,
      vars: 0,
      template: function CakeformComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cakeform works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nha2Vmb3JtL2Nha2Vmb3JtLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CakeformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cakeform',
          templateUrl: './cakeform.component.html',
          styleUrls: ['./cakeform.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/card/card.component.ts":
  /*!****************************************!*\
    !*** ./src/app/card/card.component.ts ***!
    \****************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _commonservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../commonservice.service */
    "./src/app/commonservice.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CardComponent_div_1_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CardComponent_div_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CardComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var cake_r1 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.cakedetail(cake_r1.cakeid);
        })("click", function CardComponent_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var i_r2 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.cakedetail(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_div_1_span_1_Template, 2, 0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_div_1_span_2_Template, 2, 0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cake_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cake_r1.nonVeg);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !cake_r1.nonVeg);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", cake_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cake_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", cake_r1.price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cake_r1.weight);
      }
    }

    var CardComponent = /*#__PURE__*/function () {
      function CardComponent(router, cs, http, route) {
        _classCallCheck(this, CardComponent);

        this.router = router;
        this.cs = cs;
        this.http = http;
        this.route = route;
        this.cakeSearch = [];
        this.cs.getdata();
      }

      _createClass(CardComponent, [{
        key: "cakedetail",
        value: function cakedetail(id) {
          console.log(id);
          this.route.navigate(['/cake', id]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.cakeSearch = this.cs.cakeSearch;
        }
      }]);

      return CardComponent;
    }();

    CardComponent.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_2__["CommonserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-card"]],
      decls: 2,
      vars: 2,
      consts: [[1, "container"], ["class", "card", "style", "width: 18rem; height: 18rem", "appCakeHighlight", "", 3, "click", 4, "ngFor", "ngForOf", "ngForAs"], ["appCakeHighlight", "", 1, "card", 2, "width", "18rem", "height", "18rem", 3, "click"], [4, "ngIf"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["src", "assets/nonVeg.png", "alt", ""], ["src", "assets/veg.png", "alt", ""]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_div_1_Template, 11, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cakeSearch)("ngForAs", ctx.index);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 50%;\r\n  }\r\n  .card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: 10px;\r\n   \r\n    transition: all 0.5s ease;\r\n    background: #eee;\r\n    border: 0.1px solid #6f4e37;\r\n  }\r\n  .card[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.1);\r\n    box-shadow: 2px 2px 5px #6f4e37;\r\n    cursor: pointer;\r\n  }\r\n  .card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    position: absolute;\r\n    left: 90%;\r\n  }\r\n  .container[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: repeat(4,1fr);\r\n    \r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZOztJQUVaLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWDtFQUNBO0lBQ0UsYUFBYTtJQUNiLG9DQUFvQzs7O0VBR3RDIiwiZmlsZSI6InNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCBpbWcge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgfVxyXG4gIC5jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgIFxyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkICM2ZjRlMzc7XHJcbiAgfVxyXG4gIC5jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4ICM2ZjRlMzc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5jYXJkIHNwYW4ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA5MCU7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwxZnIpO1xyXG4gICAgXHJcbiAgICBcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card',
          templateUrl: './card.component.html',
          styleUrls: ['./card.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _commonservice_service__WEBPACK_IMPORTED_MODULE_2__["CommonserviceService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/carousel/carousel.component.ts":
  /*!************************************************!*\
    !*** ./src/app/carousel/carousel.component.ts ***!
    \************************************************/

  /*! exports provided: CarouselComponent */

  /***/
  function srcAppCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../user-list.service */
    "./src/app/user-list.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CarouselComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var CarouselComponent = /*#__PURE__*/function () {
      function CarouselComponent(cs) {
        _classCallCheck(this, CarouselComponent);

        this.cs = cs;
        this.sliderImg = this.cs.sliderImgs;
      }

      _createClass(CarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CarouselComponent;
    }();

    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
      return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_list_service__WEBPACK_IMPORTED_MODULE_1__["UserListService"]));
    };

    CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarouselComponent,
      selectors: [["app-carousel"]],
      decls: 13,
      vars: 2,
      consts: [["id", "carouselExampleControls", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["alt", "...", 1, "d-block", "w-100", 3, "src"], ["class", "carousel-item", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "carousel-item"]],
      template: function CarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_div_4_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.sliderImg[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sliderImg.slice(1));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 70vh;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlIGltZyB7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICAvKiBvYmplY3QtZml0OiBjb3ZlcjsgKi9cclxuICB9XHJcbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-carousel',
          templateUrl: './carousel.component.html',
          styleUrls: ['./carousel.component.css']
        }]
      }], function () {
        return [{
          type: _user_list_service__WEBPACK_IMPORTED_MODULE_1__["UserListService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cart/cart.component.ts":
  /*!****************************************!*\
    !*** ./src/app/cart/cart.component.ts ***!
    \****************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CartComponent_tr_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_tr_18_Template_i_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var percake_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.removeCake(percake_r1.cakeid);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var percake_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", percake_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](percake_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](percake_r1.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](percake_r1.quantity);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](percake_r1.weight);
      }
    } // import { log } from 'node:console';


    var CartComponent = /*#__PURE__*/function () {
      function CartComponent(http) {
        _classCallCheck(this, CartComponent);

        this.http = http;
        this.cartItem = [];
        this.priceArray = [];
        this.cartItems();
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cartItems",
        value: function cartItems() {
          var _this3 = this;

          var apiUrl = 'https://apifromashu.herokuapp.com/api/cakecart';
          this.http.post(apiUrl, {}).subscribe(function (res) {
            console.log('cart items', res);
            _this3.cartItem = res.data;
            console.log(_this3.cartItem);
          }, function (error) {
            console.log('this is response' + error);
          });
          this.priceArray = this.cartItem.map(function (ele) {
            return ele.price;
          });
          console.log(this.priceArray);
        }
      }, {
        key: "removeCake",
        value: function removeCake(i) {
          var _this4 = this;

          console.log(this.cartItem);
          var apiUrl = 'https://apifromashu.herokuapp.com/api/removecakefromcart';
          this.http.post(apiUrl, {
            cakeid: i
          }).subscribe(function (response) {
            console.log('cart items', response);

            _this4.cartItems();
          }, function (error) {
            console.log('this is response ', error);
            ;
          });
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      decls: 29,
      vars: 1,
      consts: [[1, "table", "table-striped", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-dark", "btn-border-primary"], ["scope", "row"], ["alt", "", "height", "40px", "width", "40px", 3, "src"], [1, "far", "fa-trash-alt", 3, "click"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Weight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CartComponent_tr_18_Template, 15, 6, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Checkout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Total:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartItem);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".btn-border-primary[_ngcontent-%COMP%] {\r\n    border: 2px solid #555;\r\n    margin: 0 10px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1ib3JkZXItcHJpbWFyeSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTU1O1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/commonservice.service.ts":
  /*!******************************************!*\
    !*** ./src/app/commonservice.service.ts ***!
    \******************************************/

  /*! exports provided: CommonserviceService */

  /***/
  function srcAppCommonserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonserviceService", function () {
      return CommonserviceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CommonserviceService = /*#__PURE__*/function () {
      function CommonserviceService(http, router) {
        _classCallCheck(this, CommonserviceService);

        this.http = http;
        this.router = router;
        this.cakes = [];
        this.question10 = "some value";
        this.cakeSearch = [];
      }

      _createClass(CommonserviceService, [{
        key: "getdata",
        value: function getdata() {
          var _this5 = this;

          var apiUrl = "https://apibyashu.herokuapp.com/api/allcakes";
          this.http.get(apiUrl).subscribe(function (response) {
            console.log(response);
            _this5.cakeSearch = response.data;
            _this5.cakes = _toConsumableArray(response.data);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return CommonserviceService;
    }();

    CommonserviceService.ɵfac = function CommonserviceService_Factory(t) {
      return new (t || CommonserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    CommonserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CommonserviceService,
      factory: CommonserviceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/data.ts":
  /*!*************************!*\
    !*** ./src/app/data.ts ***!
    \*************************/

  /*! exports provided: trainees, cakeList, sliderImgs */

  /***/
  function srcAppDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "trainees", function () {
      return trainees;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cakeList", function () {
      return cakeList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sliderImgs", function () {
      return sliderImgs;
    });

    var trainees = [{
      name: 'harshit Dubey',
      dobYear: '1999',
      veg: true,
      avatar: 'https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg'
    }, {
      name: 'Rohit',
      dobYear: '1996',
      veg: false,
      avatar: 'https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg'
    }, {
      name: 'Abhishek',
      dobYear: '1997',
      veg: false,
      avatar: 'https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg'
    }, {
      name: 'Amar',
      dobYear: '1995',
      veg: true,
      avatar: 'https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg'
    }];
    var cakeList = [{
      "name": "Chocolate Cheese Cake",
      "price": 1300,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615286247/kzzsqvp1ydkrnat07zjr.jpg",
      "cakeid": 1615286283621
    }, {
      "name": "Chocolate Cake",
      "price": 400,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615289983/n8kysvgi6qfubufegavq.jpg",
      "cakeid": 1615290293028
    }, {
      "name": "Chocolava Special",
      "price": 5000,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615290519/tot4h3zt8czwo8lmv7sk.jpg",
      "cakeid": 1615290595858
    }, {
      "price": 800,
      "name": "Chocolate Truffle",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615290706/gxduqcqyytdvsmsiczcr.jpg",
      "cakeid": 1615290710603
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615290731/wsdezq5cchpmddj4n8hd.jpg",
      "name": "Chocolate Cake",
      "price": 700,
      "cakeid": 1615290773495
    }, {
      "name": "chocolate cake",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615291039/t3mbcsju6gco2ctiyzcg.jpg",
      "price": 599,
      "cakeid": 1615291050771
    }, {
      "name": "chocolate cake",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615291145/sn10s30rjcrpvysgnv85.jpg",
      "price": 399,
      "cakeid": 1615291152501
    }, {
      "name": "chocolate cake",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615291145/sn10s30rjcrpvysgnv85.jpg",
      "price": 399,
      "cakeid": 1615291236063
    }, {
      "name": "Blue Berry cheese Cake",
      "price": 1000,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615291611/d6irltnfa9kknsq9pi1y.jpg",
      "cakeid": 1615291650149
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615291844/wkfo2qxgqvl41urnuymc.jpg",
      "name": "Strawberry cupcake",
      "price": 2000,
      "cakeid": 1615291848263
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615292716/matnan3dnvztbpnwgylh.jpg",
      "name": "blueberry",
      "price": 540,
      "cakeid": 1615292723149
    }, {
      "name": "PineApple",
      "price": 450,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615292696/gqblabftbjv6nj7zeail.jpg",
      "cakeid": 1615292726129
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615293948/nvtmmgae8zbq2qdwfznc.jpg",
      "name": "Black Forest",
      "price": 200,
      "cakeid": 1615293952882
    }, {
      "name": "PineApple",
      "price": 450,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615294711/iosnnenoqbno1dtg9ana.png",
      "cakeid": 1615294727568
    }, {
      "name": "black forest",
      "price": 899,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615294654/fstgjqzauobzircprd51.jpg",
      "cakeid": 1615294779977
    }, {
      "name": "Cake Test",
      "price": 1000,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615294766/wuov3epftwt6msakqbdz.jpg",
      "cakeid": 1615294780078
    }, {
      "price": 1000,
      "name": "Red valvet",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615294781/yw7o6p3a0edrkydjv1bs.jpg",
      "cakeid": 1615294790360
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615294779/xsdtxt6kjw4riykdu0mc.jpg",
      "name": "butter cake",
      "price": 2000,
      "cakeid": 1615294813950
    }, {
      "name": "blue berry",
      "price": 899,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615294757/h11cqnuratsbhhwxfqev.png",
      "cakeid": 1615294831787
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615293948/nvtmmgae8zbq2qdwfznc.jpg",
      "name": "Black Forest",
      "price": 200,
      "cakeid": 1615294857312
    }, {
      "name": "butter cake",
      "price": 2000,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615294952/whfl0kxr8yuwpflbvn35.jpg",
      "cakeid": 1615294986151
    }, {
      "name": "Coco",
      "price": 456,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615295361/yjmzw2hpivz6sig6bse3.jpg",
      "cakeid": 1615295409054
    }, {
      "name": "Choclate",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615295891/ofkioyliqmlaye0trpgj.jpg",
      "price": 400,
      "cakeid": 1615295901063
    }, {
      "price": 2000,
      "name": "Red valvet",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615349841/zbuu6slgadwjmyt9stbz.jpg",
      "cakeid": 1615349858483
    }, {
      "name": "Black Forest",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615350105/h0vhogxwfxufnj4ktfxl.jpg",
      "price": 500,
      "cakeid": 1615350162666
    }, {
      "name": "Black Forest",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615350105/h0vhogxwfxufnj4ktfxl.jpg",
      "price": 500,
      "cakeid": 1615350219027
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615350313/zthc6vlzadbeq70y5rwy.jpg",
      "name": "blueberry",
      "price": 540,
      "cakeid": 1615350322009
    }, {
      "name": "chocolate",
      "price": 567,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615350488/w4stmnhwcyowkzl0p97y.jpg",
      "cakeid": 1615350494584
    }, {
      "name": "Strawberry Cake",
      "price": 900,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615350849/fwh8ovszgk875ket328r.png",
      "cakeid": 1615350886242
    }, {
      "name": "vanilla",
      "price": 500,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615350980/mszejpaua0qr3ixkwukn.jpg",
      "cakeid": 1615350989324
    }, {
      "name": "Cherry cake",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615351889/yajihequbzl72dgmccvx.jpg",
      "price": 680,
      "cakeid": 1615352026750
    }, {
      "name": "vanilla",
      "price": 236,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615353582/wazbkxu9py8yztimxs3k.jpg",
      "cakeid": 1615353590517
    }, {
      "price": 480,
      "name": "Pound Cake",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615355891/uwql37azofh3k7oevcnr.jpg",
      "cakeid": 1615355939951
    }, {
      "price": 580,
      "name": "Angel Food Cake",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615356061/g9fspcufziyxrinkdudn.jpg",
      "cakeid": 1615356095911
    }, {
      "name": "Choclate berry cake",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615356406/dxeug0b7ddklrpg1xr48.jpg",
      "price": 400,
      "cakeid": 1615356460823
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615356539/wefnsq1kwbauqvl0amzc.jpg",
      "name": "Butterscotch cake",
      "price": 1500,
      "cakeid": 1615356547388
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615356777/rktancvhwvcafwqckqsn.jpg",
      "name": "Mango Cake",
      "price": 500,
      "cakeid": 1615356797393
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615359171/du4zqosztxebm4a6q1cn.jpg",
      "name": "Jumbo butter  cake",
      "price": 2000,
      "cakeid": 1615359240002
    }, {
      "price": 1000,
      "name": "Kit Kat Cake",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615359359/ftkrsut0llwuehcvgoao.jpg",
      "cakeid": 1615359363268
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615359426/eejwk9eyjengnkrx3e7x.jpg",
      "name": "Fruits Cake",
      "price": 500,
      "cakeid": 1615359480800
    }, {
      "price": 800,
      "name": "Fruit Cake",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615359559/vizaoltlgcgvmh9h0vls.jpg",
      "cakeid": 1615359563186
    }, {
      "name": "Kasata",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615359555/asz8fwrwgbprny41oggs.jpg",
      "price": 999,
      "cakeid": 1615359596932
    }, {
      "name": "Kasata",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615359555/asz8fwrwgbprny41oggs.jpg",
      "price": 999,
      "cakeid": 1615359625007
    }, {
      "name": "Oreo Cake",
      "price": 700,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615359778/kdzzxjwvlxckdadc1old.jpg",
      "cakeid": 1615359978325
    }, {
      "name": "Chocolate Cake",
      "price": 56700,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615381479/xeowxf1xf8unbnqlipap.jpg",
      "cakeid": 1615381495533
    }, {
      "name": "Mini Cake",
      "price": 10,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615439513/tuttukwigg4cmuwceixc.jpg",
      "cakeid": 1615439583632
    }, {
      "name": "Mango Cake",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615524219/z6ynqav65smyuh2wtbol.jpg",
      "price": 400,
      "cakeid": 1615524322927
    }, {
      "name": "Roseberry",
      "price": 500,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615531535/gpmoazlcwibo1ckq9x8l.png",
      "cakeid": 1615531585435
    }, {
      "name": "choco lava",
      "price": 2000,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615551885/hna2yqgqpyr40tofd09g.png",
      "cakeid": 1615551936337
    }, {
      "name": "Strawberry cake",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615610845/d6qwvcv10v9i5flzlnsg.jpg",
      "price": 500,
      "cakeid": 1615610904404
    }, {
      "name": "Special GINGER GARLIC cake",
      "price": 56700,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615638727/cvns5uymnulhpcdmckz2.jpg",
      "cakeid": 1615638744507
    }, {
      "name": "Fruit Overloaded",
      "price": 899,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615784694/a8syikttis6dqmgaj9ul.jpg",
      "cakeid": 1615784763911
    }, {
      "name": "Fruit Overloaded",
      "price": 899,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615786390/weaqkwlb3iyop8tes2jk.jpg",
      "cakeid": 1615786415446
    }, {
      "name": "PineApple",
      "price": 700,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615802328/e13zxpzz1cf7o91s59dw.jpg",
      "cakeid": 1615802356960
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615877099/zfkzhjadcjoo4xs8ucs3.jpg",
      "name": "Chocolate Cake",
      "price": 500,
      "cakeid": 1615877170104
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615877251/dwil0snr6wsrhxeagg2w.jpg",
      "name": "Chocolate Cake",
      "price": 500,
      "cakeid": 1615877291354
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615877704/guleulqssp4ga1uchviv.jpg",
      "name": "Choco Lava Cake",
      "price": 900,
      "cakeid": 1615877736210
    }, {
      "name": "Vanila",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615879465/h1tvtd6wea2wdqsoh3c0.jpg",
      "price": 1080,
      "cakeid": 1615879497832
    }, {
      "name": "Red velvet",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1615898047/eszslus7yj2kuruspp7a.jpg",
      "price": 2333,
      "cakeid": 1615898084288
    }, {
      "name": "Devils Food Cake",
      "price": 700,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616727831/syvrf7makxsopzwyqpk3.jpg",
      "cakeid": 1616727841404
    }, {
      "name": "Cake By Kapil",
      "price": 900,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616735977/pll4a9h4u4egaaapr5py.jpg",
      "cakeid": 1616735983425
    }, {
      "name": "Vanilla Treat",
      "price": 849,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616736677/bgu4yt9uamzdlxdtuhn6.jpg",
      "cakeid": 1616736685712
    }, {
      "name": "Kitkat chocolate cake",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616737542/nrsvv7olumt86x1ysdrr.jpg",
      "price": 700,
      "cakeid": 1616737560575
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616737883/kltx6tc9aaf868m8jlyi.webp",
      "name": "CupCake",
      "price": 300,
      "cakeid": 1616737940498
    }, {
      "name": "Cake Apoorv",
      "price": 1234,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616738910/sfss2lkky1n1sqyvwt3j.jpg",
      "cakeid": 1616738947044
    }, {
      "name": "ArunChoco",
      "price": 1000,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616739931/freecjwdil5g6yltipdl.jpg",
      "cakeid": 1616739932663
    }, {
      "name": "MyCake",
      "price": 500,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616739972/gha1bk2zy8quczwh6kvz.jpg",
      "cakeid": 1616739978994
    }, {
      "name": "CakeByAadhi",
      "price": 300,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616740388/zi2nfyy0kkys6aafphuy.webp",
      "cakeid": 1616740394866
    }, {
      "name": "StrawberryByMahesh",
      "price": 100,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616740238/k2gvnlf3szssvsqwp3f6.jpg",
      "cakeid": 1616740433985
    }, {
      "name": "WalnutByAkancha",
      "price": 899,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616741062/hgssgpexiwugxjjbyxz5.jpg",
      "cakeid": 1616741068273
    }, {
      "name": "Molten Choco Lava Cake",
      "price": 2000,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616741634/lniv1rjpinjkma31duk4.jpg",
      "cakeid": 1616741639124
    }, {
      "name": "Vanilla Photo Cake",
      "price": 1000,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616741962/owld8ec9ecbbq0r64xis.jpg",
      "cakeid": 1616741970813
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616742625/ao9rq4z2gppv7cewrwwc.jpg",
      "name": "Sweet Secret",
      "price": 1250,
      "cakeid": 1616742668967
    }, {
      "name": "Rainbow Forest",
      "price": 1000,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616743051/dqwcvegddwmrex2fhtyj.jpg",
      "cakeid": 1616743074719
    }, {
      "name": "Creamy Chocolate",
      "price": 234,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616745528/zz79zdsqef6s1bqsf60k.jpg",
      "cakeid": 1616745540190
    }, {
      "name": "Red Velvet",
      "price": 900,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616912867/sz1fsbxw9j3ktjdmt8zy.jpg",
      "cakeid": 1616912872372
    }, {
      "name": "Red Velvet",
      "price": 750,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616913026/dag4e208fca68luotkjz.jpg",
      "cakeid": 1616913032677
    }, {
      "name": "Red Velvet",
      "price": 800,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1616913942/ujwfp0mukb69t9b3c4wh.jpg",
      "cakeid": 1616913946804
    }, {
      "name": "Kapil's Cake",
      "price": 1200,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1617000706/vklewrxujqapo9kud3az.jpg",
      "cakeid": 1617000720877
    }, {
      "name": "Choco Delight Truffle",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1618237541/f7j6t91aopdbfwue9nth.jpg",
      "price": 500,
      "cakeid": 1618237633633
    }, {
      "name": "Rosy Pink & Purple Daisy Floral Cake",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1618578698/sznbm9zjfbk2rbsee3qj.jpg",
      "price": 800,
      "cakeid": 1618578762148
    }, {
      "name": "Chocklate cake",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1619062706/hkfnbcgxtfnh0qycddpv.jpg",
      "price": 199,
      "cakeid": 1619062775275
    }, {
      "name": "Black Forest",
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1619066267/bmfj4dmrxwk2zr47mdar.jpg",
      "price": 300,
      "cakeid": 1619066321243
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1619171256/skeqcatrit121uzcw1cp.jpg",
      "name": "batman cake",
      "price": 5000,
      "cakeid": 1619171373658
    }, {
      "name": "choco cake",
      "price": 5200,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1619173565/jegqaudk9vwxy109qior.jpg",
      "cakeid": 1619173605923
    }, {
      "name": "New LockDownSpecialCake ",
      "price": 5000,
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1619180823/zmkhp46arzdfutqwihdn.jpg",
      "cakeid": 1619180839693
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1619245451/z8d1pozye3lz8qog7z65.jpg",
      "name": "milk cake",
      "price": 400,
      "cakeid": 1619245489834
    }, {
      "image": "https://res.cloudinary.com/ashudev/image/upload/v1619245451/z8d1pozye3lz8qog7z65.jpg",
      "name": "milk cake111",
      "price": 400,
      "cakeid": 1619246058194
    }];
    var sliderImgs = ['assets/patrick-fore-NnTQBkBkU9g-unsplash.jpg', 'assets/prakash-meghani-07bBNmiV7ag-unsplash.jpg', 'assets/sera-iZgQKxuMRHc-unsplash.jpg'];
    /***/
  },

  /***/
  "./src/app/editcake/editcake.component.ts":
  /*!************************************************!*\
    !*** ./src/app/editcake/editcake.component.ts ***!
    \************************************************/

  /*! exports provided: EditcakeComponent */

  /***/
  function srcAppEditcakeEditcakeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditcakeComponent", function () {
      return EditcakeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var EditcakeComponent = /*#__PURE__*/function () {
      function EditcakeComponent() {
        _classCallCheck(this, EditcakeComponent);
      }

      _createClass(EditcakeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EditcakeComponent;
    }();

    EditcakeComponent.ɵfac = function EditcakeComponent_Factory(t) {
      return new (t || EditcakeComponent)();
    };

    EditcakeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditcakeComponent,
      selectors: [["app-editcake"]],
      decls: 20,
      vars: 0,
      consts: [[1, "mb-3"], ["for", "exampleInputEmail1", 1, "form-label"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "exampleInputPassword1", 1, "form-label"], ["type", "text", "id", "exampleInputPassword1", 1, "form-control"], [1, "mb-3", "form-check"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", "value", "true", 1, "form-check-label"], ["src", "", "alt", ""], ["type", "submit", 1, "btn", "btn-primary"]],
      template: function EditcakeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Weight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Eggless");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRjYWtlL2VkaXRjYWtlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditcakeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-editcake',
          templateUrl: './editcake.component.html',
          styleUrls: ['./editcake.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/forgot-password/forgot-password.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.component.ts ***!
    \**************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(http, router) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.http = http;
        this.router = router;
        this.user = {};
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getPass",
        value: function getPass() {
          var _this6 = this;

          console.log(this.user);
          var apiUrl = "https://apibyashu.herokuapp.com/api/recoverpassword";
          this.http.post(apiUrl, this.user).subscribe(function (response) {
            console.log(response);

            _this6.router.navigate(["/login"]);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      decls: 10,
      vars: 1,
      consts: [[1, "login-section"], [1, "form-group"], ["for", "email"], ["name", "email", "type", "email", "id", "email", "aria-describedby", "emailHelp", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Forgot Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.user.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_8_listener() {
            return ctx.getPass();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Get Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: [".login-section[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 50px;\r\n    flex-direction: column;\r\n    background: rgba(255, 255, 255, 0.521);\r\n    padding: 50px;\r\n    \r\n  }\r\n  .login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n  .login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNTBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTIxKTtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAvKiBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gIH1cclxuICAubG9naW4tc2VjdGlvbiBmb3JtIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5sb2dpbi1zZWN0aW9uIGZvcm0gaW5wdXQge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgfVxyXG4gICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot-password',
          templateUrl: './forgot-password.component.html',
          styleUrls: ['./forgot-password.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/highlight.directive.ts":
  /*!****************************************!*\
    !*** ./src/app/highlight.directive.ts ***!
    \****************************************/

  /*! exports provided: HighlightDirective */

  /***/
  function srcAppHighlightDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightDirective", function () {
      return HighlightDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HighlightDirective = function HighlightDirective() {
      _classCallCheck(this, HighlightDirective);
    };

    HighlightDirective.ɵfac = function HighlightDirective_Factory(t) {
      return new (t || HighlightDirective)();
    };

    HighlightDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: HighlightDirective,
      selectors: [["", "appHighlight", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appHighlight]'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../commonservice.service */
    "./src/app/commonservice.service.ts");
    /* harmony import */


    var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../carousel/carousel.component */
    "./src/app/carousel/carousel.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../card/card.component */
    "./src/app/card/card.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " No Cake found!. For your Search Query! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(cs) {
        _classCallCheck(this, HomeComponent);

        this.cs = cs;
        this.cakeList = this.cs.cakes;
      }

      _createClass(HomeComponent, [{
        key: "getcakeid",
        value: function getcakeid(cake) {
          console.log(cake.id);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 6,
      vars: 1,
      consts: [[1, "cake-list"], ["class", "no-query", 4, "ngIf"], [1, "no-query"], ["src", "assets/404.png", "alt", "no-found"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_5_Template, 5, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cs.cakeSearch.length === 0);
        }
      },
      directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: [".cake-list[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    \r\n    background: rgba(180, 173, 78, 0.384);\r\n    border-radius: 10px;\r\n    padding: 25px;\r\n    margin: 25px;\r\n    margin-bottom: 0;\r\n  }\r\n  .no-query[_ngcontent-%COMP%] {\r\n    background: rgba(255, 255, 255, 0.61);\r\n    padding: 10%;\r\n    width: 100%;\r\n  }\r\n  .no-query[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align: center;\r\n    color: rgb(152 133 77);\r\n  }\r\n  .no-query[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 200px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQWlCO09BQWpCLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNha2UtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxODAsIDE3MywgNzgsIDAuMzg0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLm5vLXF1ZXJ5IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MSk7XHJcbiAgICBwYWRkaW5nOiAxMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLm5vLXF1ZXJ5IHAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDE1MiAxMzMgNzcpO1xyXG4gIH1cclxuICAubm8tcXVlcnkgaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login-service.service.ts":
  /*!******************************************!*\
    !*** ./src/app/login-service.service.ts ***!
    \******************************************/

  /*! exports provided: LoginServiceService */

  /***/
  function srcAppLoginServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginServiceService", function () {
      return LoginServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoginServiceService = /*#__PURE__*/function () {
      function LoginServiceService() {
        _classCallCheck(this, LoginServiceService);
      }

      _createClass(LoginServiceService, [{
        key: "validateEmail",
        value: function validateEmail(email) {
          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(email).toLowerCase());
        }
      }]);

      return LoginServiceService;
    }();

    LoginServiceService.ɵfac = function LoginServiceService_Factory(t) {
      return new (t || LoginServiceService)();
    };

    LoginServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginServiceService,
      factory: LoginServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _login_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../login-service.service */
    "./src/app/login-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // import { threadId } from 'node:worker_threads';


    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(ls, route, http, routes, toast) {
        _classCallCheck(this, LoginComponent);

        this.ls = ls;
        this.route = route;
        this.http = http;
        this.routes = routes;
        this.toast = toast;
        this.user = {};
        this.user.email = this.routes.snapshot.params['email'];
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this7 = this;

          if (!this.user.email || !this.user.password) alert('Please fill all the field');
          var apiurl = 'https://apifromashu.herokuapp.com/api/login';
          this.http.post(apiurl, this.user).subscribe(function (response) {
            console.log('response from signup api', response);
            _this7.message = response.message;

            if (_this7.message !== 'Invalid Credentials') {
              _this7.toast.success(response.message, 'login successful');

              _this7.message = '';
              localStorage.setItem('email', _this7.user.email);
              localStorage.setItem('password', _this7.user.password);
              localStorage.setItem('token', response.token);

              _this7.route.navigate(['/']);
            } else {
              return;
            }
          }, function (error) {
            console.log('Error from signup api', error);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service_service__WEBPACK_IMPORTED_MODULE_1__["LoginServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 23,
      vars: 3,
      consts: [[1, "login-section"], [1, "form-group"], ["for", "email"], ["name", "email", "type", "email", "id", "email", "aria-describedby", "emailHelp", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", "id", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "passwordHelpBlock", 1, "form-text"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["routerLink", "/forgetPassword"], ["routerLink", "/signup"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.user.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.user.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_15_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " forget Password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " New user? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "SignUp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".login-section[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 50px;\r\n    flex-direction: column;\r\n    background: #fff;\r\n    padding: 50px;\r\n    \r\n  }\r\n  .login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n  .login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n  }\r\n  .login-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n  }\r\n  .form-text[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgLyogYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjazsgKi9cclxuICB9XHJcbiAgLmxvZ2luLXNlY3Rpb24gZm9ybSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICAubG9naW4tc2VjdGlvbiBmb3JtIGlucHV0IHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gIH1cclxuICAubG9naW4tc2VjdGlvbiBmb3JtIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG4gIC5mb3JtLXRleHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _login_service_service__WEBPACK_IMPORTED_MODULE_1__["LoginServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NavbarComponent_button_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_button_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_button_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " LogOut ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    } // import{SearchComponent} from '../Search/search.component';


    var NavbarComponent = /*#__PURE__*/function () {
      // file: any;
      // imgurl: any;
      function NavbarComponent(route, http) {
        _classCallCheck(this, NavbarComponent);

        this.route = route;
        this.http = http;
        this.searchcake = undefined;
        this.flag = true;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "search",
        value: function search() {
          this.searchcake = this.searchcake.trim();
          if (!this.searchcake) return;

          if (this.searchcake) {
            this.route.navigate(['/search'], {
              queryParams: {
                q: this.searchcake
              }
            });
          }
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.email = localStorage.getItem("email");

          if (this.email) {
            this.flag = false;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem("email");
          this.route.navigate(['/login']);
          this.flag = true;
        }
      }, {
        key: "upload",
        value: function upload(event) {
          var _this8 = this;

          var data = event.target.querySelector('input'); // console.log(data);

          if (data.files.length == 0) {
            console.log("No file selected!");
            return;
          }

          var file = data.files[0];
          var formData = new FormData();
          formData.append('file', file);
          console.log(file); // this.files.inProgress = true;

          var api = 'https://apifromashu.herokuapp.com/api/upload';
          this.http.post(api, formData).subscribe(function (res) {
            console.log("response from upload api", res);
            _this8.imgurl = res.imageUrl;
          }, function (error) {
            console.log("error from upload api", error);
          });
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 17,
      vars: 5,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand"], [1, "highlight"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "d-flex"], ["type", "search", "placeholder", "Search", "aria-label", "Search", "name", "search", 1, "form-control", "me-2", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], ["class", "btn btn-dark btn-border-primary", "type", "submit", "routerLink", "/login", 4, "ngIf"], ["class", "order btn btn-primary", 4, "ngIf"], ["class", "cart btn btn-primary", "routerLink", "/cart", 4, "ngIf"], ["class", "btn btn-primary", "type", "submit", "routerLink", "/login", 3, "click", 4, "ngIf"], ["type", "submit", "routerLink", "/login", 1, "btn", "btn-dark", "btn-border-primary"], [1, "order", "btn", "btn-primary"], ["routerLink", "/cart", 1, "cart", "btn", "btn-primary"], [1, "fas", "fa-shopping-cart"], ["type", "submit", "routerLink", "/login", 1, "btn", "btn-primary", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " CakeBakery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavbarComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.searchcake = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_11_listener() {
            return ctx.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavbarComponent_button_13_Template, 2, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_button_14_Template, 2, 0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_button_15_Template, 2, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavbarComponent_button_16_Template, 2, 0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchcake);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flag);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["a.navbar-brand[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    color: wheat;\r\n    font-weight: 700;\r\n  }\r\n  .navbar-brand[_ngcontent-%COMP%]:hover {\r\n    color: rgb(173, 168, 158);\r\n  }\r\n  .navbar[_ngcontent-%COMP%] {\r\n    background: #3c1321;\r\n    height: 70px;\r\n  }\r\n  .highlight[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n  }\r\n  .btn-border-primary[_ngcontent-%COMP%] {\r\n    border: 2px solid #555;\r\n    margin: 0 10px;\r\n  }\r\n  .logo[_ngcontent-%COMP%] {\r\n    width: 7%;\r\n    height: 50%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsY0FBYztFQUNoQjtFQUVBO0lBQ0UsU0FBUztJQUNULFdBQVc7SUFDWCxvQkFBaUI7T0FBakIsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYS5uYXZiYXItYnJhbmQge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IHdoZWF0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgLm5hdmJhci1icmFuZDpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDE3MywgMTY4LCAxNTgpO1xyXG4gIH1cclxuICAubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzYzEzMjE7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgfVxyXG4gIC5oaWdobGlnaHQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIC5idG4tYm9yZGVyLXByaW1hcnkge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubG9nbyB7XHJcbiAgICB3aWR0aDogNyU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/placeorder/placeorder.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/placeorder/placeorder.component.ts ***!
    \****************************************************/

  /*! exports provided: PlaceorderComponent */

  /***/
  function srcAppPlaceorderPlaceorderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceorderComponent", function () {
      return PlaceorderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var PlaceorderComponent = /*#__PURE__*/function () {
      function PlaceorderComponent() {
        _classCallCheck(this, PlaceorderComponent);
      }

      _createClass(PlaceorderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PlaceorderComponent;
    }();

    PlaceorderComponent.ɵfac = function PlaceorderComponent_Factory(t) {
      return new (t || PlaceorderComponent)();
    };

    PlaceorderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlaceorderComponent,
      selectors: [["app-placeorder"]],
      decls: 8,
      vars: 0,
      consts: [[1, "order-form"], ["type", "text", "placeholder", "Enter Your Name"], ["type", "text", "placeholder", "Enter Your Address"], ["type", "text", "placeholder", "Enter Your Phone No."], ["type", "text", "placeholder", "Enter Your City"], ["type", "text", "placeholder", "Enter Your Pincode"]],
      template: function PlaceorderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Place Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlb3JkZXIvcGxhY2VvcmRlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaceorderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-placeorder',
          templateUrl: './placeorder.component.html',
          styleUrls: ['./placeorder.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/search-cake.directive.ts":
  /*!******************************************!*\
    !*** ./src/app/search-cake.directive.ts ***!
    \******************************************/

  /*! exports provided: SearchCakeDirective */

  /***/
  function srcAppSearchCakeDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchCakeDirective", function () {
      return SearchCakeDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./commonservice.service */
    "./src/app/commonservice.service.ts");

    var SearchCakeDirective = /*#__PURE__*/function () {
      function SearchCakeDirective(cs) {
        _classCallCheck(this, SearchCakeDirective);

        this.cs = cs;
      }

      _createClass(SearchCakeDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this9 = this;

          if (this.searchKey) {
            this.cs.cakeSearch = this.cs.cakes.filter(function (e) {
              return e.name.toLowerCase().includes(_this9.searchKey.toLowerCase());
            });
          } else {
            this.cs.cakeSearch = this.cs.cakes;
          }
        }
      }]);

      return SearchCakeDirective;
    }();

    SearchCakeDirective.ɵfac = function SearchCakeDirective_Factory(t) {
      return new (t || SearchCakeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]));
    };

    SearchCakeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SearchCakeDirective,
      selectors: [["", "appSearchCake", ""]],
      inputs: {
        searchKey: "searchKey"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchCakeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appSearchCake]'
        }]
      }], function () {
        return [{
          type: _commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]
        }];
      }, {
        searchKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../commonservice.service */
    "./src/app/commonservice.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _search_cake_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../search-cake.directive */
    "./src/app/search-cake.directive.ts"); // import { UserListService } from '../user-list.service';


    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(cs) {
        _classCallCheck(this, SearchComponent);

        this.cs = cs;
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]));
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 4,
      vars: 2,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light"], [1, "container-fluid"], [1, "d-flex"], ["name", "search", "type", "search", "placeholder", "Search", "aria-label", "Search", "appSearchCake", "", 1, "form-control", "me-2", 3, "ngModel", "searchKey", "ngModelChange"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.searchQuery = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchQuery)("searchKey", ctx.searchQuery);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _search_cake_directive__WEBPACK_IMPORTED_MODULE_3__["SearchCakeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: [".navbar[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    background: #6f4e37a8;\r\n    \r\n  \r\n    \r\n  }\r\n  .navbar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 100%;\r\n    \r\n  }\r\n  .navbar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    border: none;\r\n    height: 40px;\r\n    \r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIseUJBQXlCOztJQUV6QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzZmNGUzN2E4O1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogMzBweDsgKi9cclxuICBcclxuICAgIC8qIG1hcmdpbjogNTBweDsgKi9cclxuICB9XHJcbiAgLm5hdmJhciBmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogcGFkZGluZzogMTVweDsgKi9cclxuICB9XHJcbiAgLm5hdmJhciBmb3JtIGlucHV0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1MHB4OyAqL1xyXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cclxuICB9XHJcbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.css']
        }]
      }], function () {
        return [{
          type: _commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/searchcake/searchcake.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/searchcake/searchcake.component.ts ***!
    \****************************************************/

  /*! exports provided: SearchcakeComponent */

  /***/
  function srcAppSearchcakeSearchcakeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchcakeComponent", function () {
      return SearchcakeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _commonservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../commonservice.service */
    "./src/app/commonservice.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SearchcakeComponent_div_6_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SearchcakeComponent_div_6_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SearchcakeComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchcakeComponent_div_6_span_1_Template, 2, 0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchcakeComponent_div_6_span_2_Template, 2, 0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cake_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/cake/", cake_r1.cakeid, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cake_r1.nonVeg);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !cake_r1.nonVeg);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", cake_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cake_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", cake_r1.price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cake_r1.weight);
      }
    }

    var SearchcakeComponent = /*#__PURE__*/function () {
      function SearchcakeComponent(route, cs, http) {
        var _this10 = this;

        _classCallCheck(this, SearchcakeComponent);

        this.route = route;
        this.cs = cs;
        this.http = http;
        var url = 'https://apifromashu.herokuapp.com/api/searchcakes?q=';
        this.route.queryParams.subscribe(function (e) {
          if (e.q) {
            console.log(url + e.q);

            _this10.http.get(url + e.q).subscribe(function (response) {
              console.log('response from signup api', response);
              _this10.searchcakes = response.data;

              if (!_this10.searchcakes.length) {
                alert("there is no such cake");
              }

              console.log(_this10.searchcakes);
            }, function (error) {
              console.log('Error from signup api', error);
            }); // this.cakes.cakecard.filter((ev: any) =>
            // ev.name.toLowerCase().includes(e.q.toLowerCase()));

          } else {}
        });
      }

      _createClass(SearchcakeComponent, [{
        key: "filter",
        value: function filter() {
          var _this11 = this;

          if (this.min || this.max) {
            this.searchcakes = this.cs.cakes.filter(function (eve) {
              return (_this11.min ? eve.price >= _this11.min : true) && (_this11.max ? eve.price <= _this11.max : true);
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchcakeComponent;
    }();

    SearchcakeComponent.ɵfac = function SearchcakeComponent_Factory(t) {
      return new (t || SearchcakeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_2__["CommonserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    SearchcakeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchcakeComponent,
      selectors: [["app-searchcake"]],
      decls: 7,
      vars: 3,
      consts: [[1, "filter"], ["name", "min", "type", "text", "placeholder", "min-price", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "max", "placeholder", "max-price", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "container"], ["class", "card", "style", "width: 18rem; height: 18rem", "appCakeHighlight", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["appCakeHighlight", "", 1, "card", 2, "width", "18rem", "height", "18rem", 3, "routerLink"], [4, "ngIf"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["src", "assets/nonVeg.png", "alt", ""], ["src", "assets/veg.png", "alt", ""]],
      template: function SearchcakeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchcakeComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.min = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchcakeComponent_Template_input_ngModelChange_2_listener($event) {
            return ctx.max = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchcakeComponent_Template_button_click_3_listener() {
            return ctx.filter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchcakeComponent_div_6_Template, 11, 7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.min);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.max);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchcakes);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: [".card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 50%;\r\n  }\r\n  .card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: 10px;\r\n   \r\n    transition: all 0.5s ease;\r\n    background: #eee;\r\n    border: 0.1px solid #6f4e37;\r\n  }\r\n  .card[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.1);\r\n    box-shadow: 2px 2px 5px #6f4e37;\r\n    cursor: pointer;\r\n  }\r\n  .card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    position: absolute;\r\n    left: 90%;\r\n  }\r\n  .container[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: repeat(4,1fr);\r\n   justify-content: center;\r\n    \r\n  }\r\n  .filter[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    left:40%;\r\n    top:20px;\r\n    margin:0 0 20px 0;\r\n    \r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoY2FrZS9zZWFyY2hjYWtlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZOztJQUVaLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWDtFQUNBO0lBQ0UsYUFBYTtJQUNiLG9DQUFvQztHQUNyQyx1QkFBdUI7O0VBRXhCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFFBQVE7SUFDUixpQkFBaUI7OztBQUdyQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaGNha2Uvc2VhcmNoY2FrZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQgaW1nIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH1cclxuICAuY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICBcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZCAjNmY0ZTM3O1xyXG4gIH1cclxuICAuY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAjNmY0ZTM3O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuY2FyZCBzcGFuIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogOTAlO1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsMWZyKTtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxuICB9XHJcbiAgLmZpbHRlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6NDAlO1xyXG4gICAgdG9wOjIwcHg7XHJcbiAgICBtYXJnaW46MCAwIDIwcHggMDtcclxuICAgIFxyXG5cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchcakeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-searchcake',
          templateUrl: './searchcake.component.html',
          styleUrls: ['./searchcake.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _commonservice_service__WEBPACK_IMPORTED_MODULE_2__["CommonserviceService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sign-up/sign-up.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sign-up/sign-up.component.ts ***!
    \**********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _login_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../login-service.service */
    "./src/app/login-service.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(ls, http, router) {
        _classCallCheck(this, SignupComponent);

        this.ls = ls;
        this.http = http;
        this.router = router;
        this.user = {};
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signUp",
        value: function signUp() {
          var _this12 = this;

          // if (this.ls.validateEmail(this.user.email)) alert('Correct Email');
          // else alert('Invalid Email');
          var apiUrl = "https://apibyashu.herokuapp.com/api/register";
          this.http.post(apiUrl, this.user, {
            observe: 'response'
          }).subscribe(function (response) {
            console.log(response);
            _this12.message = response.message;
          }, function (error) {
            console.log(error);

            _this12.router.navigate(["/login"]);
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service_service__WEBPACK_IMPORTED_MODULE_1__["LoginServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-sign-up"]],
      decls: 19,
      vars: 4,
      consts: [[1, "signup-section"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "aria-describedby", "emailHelp", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "aria-describedby", "emailHelp", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", "id", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SignUp Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.user.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.user.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.user.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_17_listener() {
            return ctx.signUp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " SignUp ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: [".signup-section[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 50px;\r\n    flex-direction: column;\r\n    background: rgba(255, 255, 255, 0.521);\r\n    padding: 50px;\r\n    \r\n  }\r\n  .signup-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n  .signup-section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2IsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MjEpO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIC8qIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7ICovXHJcbiAgfVxyXG4gIC5zaWdudXAtc2VjdGlvbiBmb3JtIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5zaWdudXAtc2VjdGlvbiBmb3JtIGlucHV0IHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gIH1cclxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-up',
          templateUrl: './sign-up.component.html',
          styleUrls: ['./sign-up.component.css']
        }]
      }], function () {
        return [{
          type: _login_service_service__WEBPACK_IMPORTED_MODULE_1__["LoginServiceService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/test.directive.ts":
  /*!***********************************!*\
    !*** ./src/app/test.directive.ts ***!
    \***********************************/

  /*! exports provided: TestDirective */

  /***/
  function srcAppTestDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestDirective", function () {
      return TestDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TestDirective = /*#__PURE__*/function () {
      function TestDirective(el) {
        _classCallCheck(this, TestDirective);

        this.el = el;
        console.log(this.el.nativeElement);
      }

      _createClass(TestDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('Color de de', this.enterColor);
        }
      }, {
        key: "colorChange",
        value: function colorChange() {
          this.el.nativeElement.style.backgroundColor = this.enterColor;
        }
      }, {
        key: "colors",
        value: function colors() {
          this.el.nativeElement.style.backgroundColor = '#eee';
        }
      }]);

      return TestDirective;
    }();

    TestDirective.ɵfac = function TestDirective_Factory(t) {
      return new (t || TestDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    TestDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TestDirective,
      selectors: [["", "appTest", ""]],
      hostBindings: function TestDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function TestDirective_mouseenter_HostBindingHandler() {
            return ctx.colorChange();
          })("mouseleave", function TestDirective_mouseleave_HostBindingHandler() {
            return ctx.colors();
          });
        }
      },
      inputs: {
        enterColor: "enterColor"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appTest]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        enterColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colorChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseenter']
        }],
        colors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseleave']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user-list.service.ts":
  /*!**************************************!*\
    !*** ./src/app/user-list.service.ts ***!
    \**************************************/

  /*! exports provided: UserListService */

  /***/
  function srcAppUserListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListService", function () {
      return UserListService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./data */
    "./src/app/data.ts");

    var UserListService = /*#__PURE__*/function () {
      function UserListService() {
        _classCallCheck(this, UserListService);

        this.users = [];
        this.sliderImgs = _data__WEBPACK_IMPORTED_MODULE_1__["sliderImgs"];
        this.cakeList = _data__WEBPACK_IMPORTED_MODULE_1__["cakeList"];
        this.cakeSearch = this.cakeList;
      }

      _createClass(UserListService, [{
        key: "searchCake",
        value: function searchCake() {
          console.log(this.cakeSearch);
        }
      }]);

      return UserListService;
    }();

    UserListService.ɵfac = function UserListService_Factory(t) {
      return new (t || UserListService)();
    };

    UserListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserListService,
      factory: UserListService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-list/user-list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/user-list/user-list.component.ts ***!
    \**************************************************/

  /*! exports provided: UserListComponent */

  /***/
  function srcAppUserListUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
      return UserListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../user-list.service */
    "./src/app/user-list.service.ts");
    /* harmony import */


    var _test_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../test.directive */
    "./src/app/test.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserListComponent_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_tr_14_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.deleteUser(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var userInfo_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](userInfo_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](userInfo_r1.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", userInfo_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var UserListComponent = /*#__PURE__*/function () {
      function UserListComponent(users) {
        _classCallCheck(this, UserListComponent);

        this.users = users;
        this.user = [];
        this.user = this.users.users;
      }

      _createClass(UserListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deleteUser",
        value: function deleteUser(index) {
          this.users.users.splice(index, 1);
        }
      }]);

      return UserListComponent;
    }();

    UserListComponent.ɵfac = function UserListComponent_Factory(t) {
      return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_list_service__WEBPACK_IMPORTED_MODULE_1__["UserListService"]));
    };

    UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserListComponent,
      selectors: [["app-user-list"]],
      decls: 15,
      vars: 1,
      consts: [[1, "table"], ["scope", "col", "appTest", "", "enterColor", "#faa"], [4, "ngFor", "ngForOf"], ["scope", "row", "appTest", "", "enterColor", "#faa"], ["appTest", "", "enterColor", "#faa"], ["alt", "", "width", "40", 3, "src"], [1, "btn", "btn-danger", 3, "click"]],
      template: function UserListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserListComponent_tr_14_Template, 12, 4, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user);
        }
      },
      directives: [_test_directive__WEBPACK_IMPORTED_MODULE_2__["TestDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".table[_ngcontent-%COMP%] {\r\n    border: 2px solid #eee;\r\n    background: #eee;\r\n    margin: 50px;\r\n    width: 90%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-list',
          templateUrl: './user-list.component.html',
          styleUrls: ['./user-list.component.css']
        }]
      }], function () {
        return [{
          type: _user_list_service__WEBPACK_IMPORTED_MODULE_1__["UserListService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Admin\Desktop\cakebakery\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map