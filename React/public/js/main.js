'use strict';

// ===============
// ex3:
//Forms & Input
//Events => onChange + onSubmit
//map with array
//dealing with arrays in jsx
//list items
//Small App : ToggleText like in jquery


// var myInputVal;
// var allItems = [];
// var handleInputChange = (e) => {
//     // console.log(e.target.value);
//     myInputVal = e.target.value;
// };
// var handleFormSubmit = (e) => {
//     e.preventDefault();
//     // console.log(myInputVal);
//     allItems.push(myInputVal);
//     // console.log(allItems);
//     e.target.elements[0].value = "";
//     render();
// };
// var obj = {
//     name: 'test',
//     size: 12,
// };
// var myarr = [1, 2, 3];


var toggle = false;
var toggleText = function toggleText() {
    toggle = !toggle;
    render();
};

function render() {
    var content = React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: toggleText },
            ' Toggle Text '
        ),
        '  ',
        toggle ? React.createElement(
            'p',
            null,
            ' This is Text '
        ) : '',
        ' '
    );
    ReactDOM.render(content, document.getElementById('app'));
}
render();
