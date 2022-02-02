'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Components
//htmlدائما اسماء الكمبوننت تبدأ كابتل لتر حتى لا يحدث اشتباه مع تاكات ال
//ex1 
// class Hello extends React.Component {
//     render() {
//         //return JSX
//         return <div > Hello Component < /div>;
//     }
// }
// class Header extends React.Component {
//     render() {
//         //return JSX
//         return ( < div > Header Component <
//             br / > <
//             span > Hello Header Compont < /span> < /
//             div > );
//     }
// }

// let content = ( <
//     div >
//     <
//     Hello / > <
//     p > This is P < /p> <
//     h2 > Hawraa < /h2>   <
//     Header > < /Header> < /
//     div >
// );
// ReactDOM.render(content, document.getElementById("app"));


//Props (properties and also like attribute in html)  
//state = private object related to class || component
//can pass state from component to another by props
//ex2
var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            products: [],
            item: '',
            name: 'App Component',
            title: 'some bla bla bla'
        };
        _this.changeTitle = function () {
            _this.setState({
                title: 'new title'
            });
        };
        _this.changeInputVal = function (e) {
            _this.setState({
                item: e.target.value
            });
        };
        _this.submitForm = function (e) {
            e.preventDefault();
            var products = [].concat(_toConsumableArray(_this.state.products), [{
                id: Math.random,
                name: _this.state.item
            }]);
            _this.setState({
                products: products
            });
        };
        _this.deleteItem = function (id) {
            var products = [].concat(_toConsumableArray(_this.state.products));
            var newProducts = products.filter(function (product) {
                return product.id != id;
            });
            _this.setState({
                products: newProducts
            });
        };
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log(this);
            console.log(this.state.products);
            return React.createElement(
                'div',
                {
                    className: 'app' },
                ' ',
                this.state.item,
                ' ',
                this.state.title,
                ' ',
                React.createElement(
                    'button',
                    { onClick: this.changeTitle },
                    ' Change '
                ),
                ' ',
                this.state.name,
                ' ',
                React.createElement(
                    'h1',
                    null,
                    ' ',
                    this.state.title,
                    ' '
                ),
                '   ',
                React.createElement(Header, { test: 'hawraa',
                    item: this.state.name
                }),
                React.createElement(ListItems, { pro: 'c',
                    myTitle: this.state.title

                }),
                '// ',
                React.createElement(
                // AddItem name = "add" / >

                Header, null),
                ' ',
                this.state.products.map(function (product) {
                    return React.createElement(Item, { id: product.id,
                        item: product.name,
                        removeItem: _this2.props.removeItem
                    });
                }),
                ' ',
                React.createElement(ListItems, { products: this.state.products,
                    removeItem: this.deleteItem
                }),
                ' ',
                React.createElement(AddItem, { changeInput: this.changeInputVal,
                    saveData: this.submitForm,
                    item: this.state.item
                }),
                '   '
            );
        }
    }]);

    return App;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        var _this3 = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this3.state = {
            name: 'Header comp'
        };
        return _this3;
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            console.log(this);
            return React.createElement(
                'header',
                null,
                ' Header ',
                this.props.item,
                ' ',
                this.props.test,
                ' ',
                React.createElement(
                    'p',
                    null,
                    ' ',
                    this.state.name,
                    ' '
                ),
                ' '
            );
        }
    }]);

    return Header;
}(React.Component);

var ListItems = function (_React$Component3) {
    _inherits(ListItems, _React$Component3);

    function ListItems() {
        _classCallCheck(this, ListItems);

        return _possibleConstructorReturn(this, (ListItems.__proto__ || Object.getPrototypeOf(ListItems)).apply(this, arguments));
    }

    _createClass(ListItems, [{
        key: 'render',
        value: function render() {
            console.log(this);
            console.log(this.props);
            return React.createElement(
                'div',
                null,
                'List Items Components ',
                this.props.myTitle,
                ' ',
                this.props.pro,
                ' ',
                React.createElement(Item, null),
                ' '
            );
        }
    }]);

    return ListItems;
}(React.Component);

var Item = function (_React$Component4) {
    _inherits(Item, _React$Component4);

    function Item() {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    _createClass(Item, [{
        key: 'render',
        value: function render() {
            var _this6 = this;

            return React.createElement(
                'div',
                null,
                ' ',
                this.props.item,
                ' ',
                React.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this6.props.removeItem(_this6.props.id);
                        } },
                    'Delete '
                ),
                ' '
            );
        }
    }]);

    return Item;
}(React.Component);

var AddItem = function (_React$Component5) {
    _inherits(AddItem, _React$Component5);

    function AddItem() {
        _classCallCheck(this, AddItem);

        var _this7 = _possibleConstructorReturn(this, (AddItem.__proto__ || Object.getPrototypeOf(AddItem)).call(this));

        _this7.state = {
            name: 'test'
        };
        _this7.changeValue = function (e) {
            console.log(e.target.value);
            _this7.setState({
                name: e.target.value
            });
        };
        return _this7;
    }

    _createClass(AddItem, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.props.saveData },
                ' ',
                this.state.name,
                ' ',
                React.createElement('input', { type: 'text'
                    // onChange = { this.changeValue }
                    , onChange: this.props.changeInput,
                    value: this.props.item
                }),
                ' ',
                React.createElement('input', { type: 'submit' })
            );
        }
    }]);

    return AddItem;
}(React.Component);

ReactDOM.render(React.createElement(App, { opps: 'arkan' }), document.getElementById("app"));
