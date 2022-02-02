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


let toggle = false;
var toggleText = () => {
    toggle = !toggle;
    render();
}

function render() {
    let content = ( <
        div >
        <
        button onClick = { toggleText } > Toggle Text < /button>  {
        toggle ? <
        p > This is Text < /p> : ''} < /
        div >
    );
    ReactDOM.render(content, document.getElementById('app'));
}
render();