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
class App extends React.Component {
        constructor() {
            super();
            this.state = {
                products: [],
                item: '',
                name: 'App Component',
                title: 'some bla bla bla'
            }
            this.changeTitle = () => {
                this.setState({
                    title: 'new title'
                })
            }
            this.changeInputVal = (e) => {
                this.setState({
                    item: e.target.value
                })
            }
            this.submitForm = (e) => {
                e.preventDefault();
                let products = [...this.state.products, {
                    id: Math.random,
                    name: this.state.item
                }];
                this.setState({
                    products
                })
            }
            this.deleteItem = (id) => {
                let products = [...this.state.products];
                let newProducts = products.filter(product => product.id != id);
                this.setState({
                    products: newProducts
                })
            }
        }

        render() {
            console.log(this);
            console.log(this.state.products);
            return <
                div
            className = "app" > { this.state.item } { this.state.title } <
                button onClick = { this.changeTitle } > Change < /button> { this.state.name } <
            h1 > { this.state.title } < /h1>   <
            Header test = "hawraa"
            item = { this.state.name }
            /> 

            <
            ListItems pro = "c"
            myTitle = { this.state.title }

            / >


            // <
            // AddItem name = "add" / >

            Header / > {
                this.state.products.map(product => < Item id = { product.id }
                    item = { product.name }
                    removeItem = { this.props.removeItem }
                    / > )
                } <
                ListItems products = { this.state.products }
                removeItem = { this.deleteItem }
                / > <
                AddItem changeInput = { this.changeInputVal }
                saveData = { this.submitForm }
                item = { this.state.item }
                / >   < /
                div > ;
            }
        }
        class Header extends React.Component {
            constructor() {
                super();
                this.state = {
                    name: 'Header comp',
                }
            }
            render() {
                console.log(this);
                return <header > Header { this.props.item } { this.props.test } <
                    p > { this.state.name } < /p> < /
                header > ;
            }
        }
        class ListItems extends React.Component {
            render() {
                console.log(this);
                console.log(this.props);
                return <div >
                    List Items Components { this.props.myTitle } { this.props.pro } <
                    Item / > < /div>;
            }
        }
        class Item extends React.Component {
            render() {
                return <div > { this.props.item } <
                    button onClick = {
                        () => this.props.removeItem(this.props.id)
                    } >
                    Delete < /button> < /div > ;
            }
        }
        class AddItem extends React.Component {
            constructor() {
                super();
                this.state = {
                    name: 'test'
                }
                this.changeValue = (e) => {
                    console.log(e.target.value);
                    this.setState({
                        name: e.target.value
                    })
                }
            }
            render() {
                return ( <
                    form onSubmit = { this.props.saveData } > { this.state.name } <
                    input type = "text"
                    // onChange = { this.changeValue }
                    onChange = { this.props.changeInput }
                    value = { this.props.item }
                    / > <
                    input type = "submit" / >
                    <
                    /form>
                )
            }
        }
        ReactDOM.render( < App opps = "arkan" / > , document.getElementById("app"));