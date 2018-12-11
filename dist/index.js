"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ReactOtpComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReactOtpComponent, _React$Component);

  function ReactOtpComponent(props) {
    var _this;

    _classCallCheck(this, ReactOtpComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactOtpComponent).call(this, props));
    _this.otp = [];
    _this.inputs = [];
    return _this;
  }

  _createClass(ReactOtpComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {//this.textInput.focus();
    }
  }, {
    key: "focusNext",
    value: function focusNext(e) {
      if (e.target.value != "" && e.target.nextSibling) {
        e.target.nextSibling.focus();
      }
    }
  }, {
    key: "forceNumberOnly",
    value: function forceNumberOnly(event) {
      var keyCode = event.keyCode || event.which;
      var keyValue = String.fromCharCode(keyCode);

      if (event && event.type == "paste") {
        keyValue = event.clipboardData.getData('text');
      }

      if (!/^\d+$/.test(keyValue)) {
        event.preventDefault();
      }
    }
  }, {
    key: "renderInputs",
    value: function renderInputs() {
      var _this2 = this;

      var numInputs = this.props.inputs || 4;

      for (var i = 0; i < numInputs; i++) {
        this.inputs.push(_react.default.createElement("div", {
          className: "otp_item",
          key: i
        }, _react.default.createElement("input", {
          type: "tel",
          maxLength: "1",
          onKeyPress: function onKeyPress(e) {
            return _this2.forceNumberOnly(e);
          },
          onPaste: function onPaste(e) {
            return _this2.forceNumberOnly(e);
          },
          onChange: function onChange(e) {
            return _this2.focusNext(e);
          }
        }), i != numInputs - 1 && _react.default.createElement("span", null, "-")));
      }

      return this.inputs;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "otp_container"
      }, _react.default.createElement("div", {
        className: "otp_block"
      }, this.renderInputs()));
    }
  }]);

  return ReactOtpComponent;
}(_react.default.Component);

exports.default = ReactOtpComponent;