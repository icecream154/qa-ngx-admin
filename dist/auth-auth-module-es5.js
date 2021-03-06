(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
    /***/
    "6epW":
    /*!*********************************************!*\
      !*** ./src/app/auth/auth-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: routes, NgxAuthRoutingModule */

    /***/
    function epW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxAuthRoutingModule", function () {
        return NgxAuthRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/login.component */
      "bsvf");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./register/register.component */
      "ZGml");

      var routes = [// .. here goes our components routes
      {
        path: '',
        component: _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthComponent"],
        children: [{
          path: 'login',
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["NgxLoginComponent"]
        }, {
          path: 'register',
          component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["NgxRegisterComponent"]
        }]
      }];

      var NgxAuthRoutingModule = function NgxAuthRoutingModule() {
        _classCallCheck(this, NgxAuthRoutingModule);
      };

      NgxAuthRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: NgxAuthRoutingModule
      });
      NgxAuthRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function NgxAuthRoutingModule_Factory(t) {
          return new (t || NgxAuthRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](NgxAuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgxAuthRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Yj9t":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /*! exports provided: NgxAuthModule */

    /***/
    function Yj9t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxAuthModule", function () {
        return NgxAuthModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth-routing.module */
      "6epW");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login/login.component */
      "bsvf");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./register/register.component */
      "ZGml");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/auth.service */
      "N/25");

      var NgxAuthModule = function NgxAuthModule() {
        _classCallCheck(this, NgxAuthModule);
      };

      NgxAuthModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: NgxAuthModule
      });
      NgxAuthModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function NgxAuthModule_Factory(t) {
          return new (t || NgxAuthModule)();
        },
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAlertModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCheckboxModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["NgxAuthRoutingModule"], _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](NgxAuthModule, {
          declarations: [// ... here goes our new components
          _login_login_component__WEBPACK_IMPORTED_MODULE_7__["NgxLoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_8__["NgxRegisterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAlertModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCheckboxModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["NgxAuthRoutingModule"], _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](NgxAuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAlertModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCheckboxModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["NgxAuthRoutingModule"], _nebular_auth__WEBPACK_IMPORTED_MODULE_5__["NbAuthModule"]],
            declarations: [// ... here goes our new components
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["NgxLoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_8__["NgxRegisterComponent"]],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZGml":
    /*!*****************************************************!*\
      !*** ./src/app/auth/register/register.component.ts ***!
      \*****************************************************/

    /*! exports provided: NgxRegisterComponent */

    /***/
    function ZGml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxRegisterComponent", function () {
        return NgxRegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      "N/25");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb");

      function NgxRegisterComponent_nb_alert_2_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var error_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](error_r12);
        }
      }

      function NgxRegisterComponent_nb_alert_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-alert", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Oh snap!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ul", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, NgxRegisterComponent_nb_alert_2_li_5_Template, 2, 1, "li", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.errors);
        }
      }

      function NgxRegisterComponent_nb_alert_3_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var message_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](message_r14);
        }
      }

      function NgxRegisterComponent_nb_alert_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-alert", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Hooray!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ul", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, NgxRegisterComponent_nb_alert_3_li_5_Template, 2, 1, "li", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.messages);
        }
      }

      function NgxRegisterComponent_ng_container_11_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Full name is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgxRegisterComponent_ng_container_11_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" Full name should contains from ", ctx_r16.getConfigValue("forms.validation.fullName.minLength"), " to ", ctx_r16.getConfigValue("forms.validation.fullName.maxLength"), " characters ");
        }
      }

      function NgxRegisterComponent_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NgxRegisterComponent_ng_container_11_p_1_Template, 2, 0, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NgxRegisterComponent_ng_container_11_p_2_Template, 2, 2, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r3.errors == null ? null : _r3.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r3.errors == null ? null : _r3.errors.minlength) || (_r3.errors == null ? null : _r3.errors.maxlength));
        }
      }

      function NgxRegisterComponent_ng_container_17_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgxRegisterComponent_ng_container_17_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email should be the real one! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgxRegisterComponent_ng_container_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NgxRegisterComponent_ng_container_17_p_1_Template, 2, 0, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NgxRegisterComponent_ng_container_17_p_2_Template, 2, 0, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r5.errors == null ? null : _r5.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r5.errors == null ? null : _r5.errors.pattern);
        }
      }

      function NgxRegisterComponent_ng_container_23_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgxRegisterComponent_ng_container_23_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" Password should contain from ", ctx_r20.getConfigValue("forms.validation.password.minLength"), " to ", ctx_r20.getConfigValue("forms.validation.password.maxLength"), " characters ");
        }
      }

      function NgxRegisterComponent_ng_container_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NgxRegisterComponent_ng_container_23_p_1_Template, 2, 0, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NgxRegisterComponent_ng_container_23_p_2_Template, 2, 2, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r7.errors == null ? null : _r7.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r7.errors == null ? null : _r7.errors.minlength) || (_r7.errors == null ? null : _r7.errors.maxlength));
        }
      }

      function NgxRegisterComponent_ng_container_29_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password confirmation is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgxRegisterComponent_ng_container_29_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password does not match the confirm password. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgxRegisterComponent_ng_container_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NgxRegisterComponent_ng_container_29_p_1_Template, 2, 0, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NgxRegisterComponent_ng_container_29_p_2_Template, 2, 0, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](28);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r9.errors == null ? null : _r9.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r7.value != _r9.value && !(_r9.errors == null ? null : _r9.errors.required));
        }
      }

      var NgxRegisterComponent = /*#__PURE__*/function (_nebular_auth__WEBPAC) {
        _inherits(NgxRegisterComponent, _nebular_auth__WEBPAC);

        var _super = _createSuper(NgxRegisterComponent);

        function NgxRegisterComponent(service, options, cd, router, auth) {
          var _this;

          _classCallCheck(this, NgxRegisterComponent);

          _this = _super.call(this, service, options, cd, router);
          _this.auth = auth;
          localStorage.setItem('token', null);
          localStorage.setItem('user', null);
          return _this;
        }

        _createClass(NgxRegisterComponent, [{
          key: "register",
          value: function register() {
            // console.log(this.user);
            this.auth.register(this.user);
          }
        }]);

        return NgxRegisterComponent;
      }(_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbRegisterComponent"]);

      NgxRegisterComponent.??fac = function NgxRegisterComponent_Factory(t) {
        return new (t || NgxRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      NgxRegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NgxRegisterComponent,
        selectors: [["ngx-register"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
        decls: 36,
        vars: 29,
        consts: [["id", "title", 1, "title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-control-group"], ["for", "input-name", 1, "label"], ["nbInput", "", "id", "input-name", "name", "fullName", "placeholder", "Full name", "autofocus", "", "fullWidth", "", "fieldSize", "large", 3, "ngModel", "status", "required", "minlength", "maxlength", "ngModelChange"], ["fullName", "ngModel"], [4, "ngIf"], ["for", "input-email", 1, "label"], ["nbInput", "", "id", "input-email", "name", "email", "pattern", ".+@.+..+", "placeholder", "Email address", "fullWidth", "", "fieldSize", "large", 3, "ngModel", "status", "required", "ngModelChange"], ["email", "ngModel"], ["for", "input-password", 1, "label"], ["nbInput", "", "type", "password", "id", "input-password", "name", "password", "placeholder", "Password", "fullWidth", "", "fieldSize", "large", 3, "ngModel", "status", "required", "minlength", "maxlength", "ngModelChange"], ["password", "ngModel"], ["for", "input-re-password", 1, "label"], ["nbInput", "", "type", "password", "id", "input-re-password", "name", "rePass", "placeholder", "Confirm Password", "fullWidth", "", "fieldSize", "large", 3, "ngModel", "status", "required", "ngModelChange"], ["rePass", "ngModel"], ["nbButton", "", "fullWidth", "", "status", "primary", "size", "large", 3, "disabled"], ["aria-label", "Sign in", 1, "another-action"], ["routerLink", "../login", 1, "text-link"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]],
        template: function NgxRegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NgxRegisterComponent_nb_alert_2_Template, 6, 1, "nb-alert", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, NgxRegisterComponent_nb_alert_3_Template, 6, 1, "nb-alert", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function NgxRegisterComponent_Template_form_ngSubmit_4_listener() {
              return ctx.register();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Full name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgxRegisterComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.user.fullName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, NgxRegisterComponent_ng_container_11_Template, 3, 2, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Email address:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgxRegisterComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.user.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, NgxRegisterComponent_ng_container_17_Template, 3, 2, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Password:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "input", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgxRegisterComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.user.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, NgxRegisterComponent_ng_container_23_Template, 3, 2, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Repeat password:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "input", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgxRegisterComponent_Template_input_ngModelChange_27_listener($event) {
              return ctx.user.confirmPassword = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, NgxRegisterComponent_ng_container_29_Template, 3, 2, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " Register ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "section", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " Already have an account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Log in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](5);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](10);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](16);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.fullName)("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.fullName.required"))("minlength", ctx.getConfigValue("forms.validation.fullName.minLength"))("maxlength", ctx.getConfigValue("forms.validation.fullName.maxLength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-invalid", _r3.invalid && _r3.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r3.invalid && _r3.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.email)("status", _r5.dirty ? _r5.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.email.required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-invalid", _r5.invalid && _r5.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r5.invalid && _r5.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.password)("status", _r7.dirty ? _r7.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-invalid", _r7.invalid && _r7.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r7.invalid && _r7.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.confirmPassword)("status", _r9.dirty ? _r9.invalid || _r7.value != _r9.value ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-invalid", _r9.invalid && _r9.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r9.invalid && _r9.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("btn-pulse", ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.submitted || !_r2.valid);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgxRegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-register',
            templateUrl: './register.component.html'
          }]
        }], function () {
          return [{
            type: _nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NB_AUTH_OPTIONS"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "bsvf":
    /*!***********************************************!*\
      !*** ./src/app/auth/login/login.component.ts ***!
      \***********************************************/

    /*! exports provided: NgxLoginComponent */

    /***/
    function bsvf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxLoginComponent", function () {
        return NgxLoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/auth */
      "McNs");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/auth.service */
      "N/25");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nebular/theme */
      "aceb"); // import


      function NgxLoginComponent_nb_alert_2_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var error_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](error_r8);
        }
      }

      function NgxLoginComponent_nb_alert_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-alert", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Oh snap!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, NgxLoginComponent_nb_alert_2_li_5_Template, 2, 1, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.errors);
        }
      }

      function NgxLoginComponent_nb_alert_3_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var message_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](message_r10);
        }
      }

      function NgxLoginComponent_nb_alert_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-alert", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Hooray!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, NgxLoginComponent_nb_alert_3_li_5_Template, 2, 1, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r1.messages);
        }
      }

      function NgxLoginComponent_ng_container_11_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgxLoginComponent_ng_container_11_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Email should be the real one! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgxLoginComponent_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NgxLoginComponent_ng_container_11_p_1_Template, 2, 0, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NgxLoginComponent_ng_container_11_p_2_Template, 2, 0, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r3.errors == null ? null : _r3.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r3.errors == null ? null : _r3.errors.pattern);
        }
      }

      function NgxLoginComponent_ng_container_17_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function NgxLoginComponent_ng_container_17_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" Password should contain from ", ctx_r14.getConfigValue("forms.validation.password.minLength"), " to ", ctx_r14.getConfigValue("forms.validation.password.maxLength"), " characters ");
        }
      }

      function NgxLoginComponent_ng_container_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NgxLoginComponent_ng_container_17_p_1_Template, 2, 0, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NgxLoginComponent_ng_container_17_p_2_Template, 2, 2, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r5.errors == null ? null : _r5.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r5.errors == null ? null : _r5.errors.minlength) || (_r5.errors == null ? null : _r5.errors.maxlength));
        }
      }

      var NgxLoginComponent = /*#__PURE__*/function (_nebular_auth__WEBPAC2) {
        _inherits(NgxLoginComponent, _nebular_auth__WEBPAC2);

        var _super2 = _createSuper(NgxLoginComponent);

        function NgxLoginComponent(service, options, cd, router, auth) {
          var _this2;

          _classCallCheck(this, NgxLoginComponent);

          _this2 = _super2.call(this, service, options, cd, router);
          _this2.auth = auth;
          localStorage.setItem('token', null);
          localStorage.setItem('user', null);
          return _this2;
        }

        _createClass(NgxLoginComponent, [{
          key: "login",
          value: function login() {
            // console.log(this.user);
            this.auth.login(this.user);
          }
        }]);

        return NgxLoginComponent;
      }(_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbLoginComponent"]);

      NgxLoginComponent.??fac = function NgxLoginComponent_Factory(t) {
        return new (t || NgxLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NB_AUTH_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      NgxLoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NgxLoginComponent,
        selectors: [["ngx-login"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
        decls: 24,
        vars: 17,
        consts: [["id", "title", 1, "title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["nbInput", "", "fullWidth", "", "name", "email", "id", "input-email", "pattern", ".+@.+\\..+", "placeholder", "Email address", "fieldSize", "large", "autofocus", "", 3, "ngModel", "status", "required", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], ["for", "input-password", 1, "label"], ["nbInput", "", "fullWidth", "", "name", "password", "type", "password", "id", "input-password", "placeholder", "Password", "fieldSize", "large", 3, "ngModel", "status", "required", "minlength", "maxlength", "ngModelChange"], ["password", "ngModel"], ["nbButton", "", "fullWidth", "", "status", "primary", "size", "large", 3, "disabled"], ["aria-label", "Register", 1, "another-action"], ["routerLink", "../register", 1, "text-link"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]],
        template: function NgxLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NgxLoginComponent_nb_alert_2_Template, 6, 1, "nb-alert", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, NgxLoginComponent_nb_alert_3_Template, 6, 1, "nb-alert", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function NgxLoginComponent_Template_form_ngSubmit_4_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Email address:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgxLoginComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.user.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, NgxLoginComponent_ng_container_11_Template, 3, 2, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Password:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NgxLoginComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.user.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, NgxLoginComponent_ng_container_17_Template, 3, 2, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Log In ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "section", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Don't have an account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](5);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](10);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.email)("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.email.required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-invalid", _r3.invalid && _r3.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r3.invalid && _r3.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.user.password)("status", _r5.dirty ? _r5.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-invalid", _r5.invalid && _r5.touched ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r5.invalid && _r5.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("btn-pulse", ctx.submitted);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.submitted || !_r2.valid);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NgxLoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ngx-login',
            templateUrl: './login.component.html'
          }]
        }], function () {
          return [{
            type: _nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NbAuthService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_nebular_auth__WEBPACK_IMPORTED_MODULE_1__["NB_AUTH_OPTIONS"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=auth-auth-module-es5.js.map