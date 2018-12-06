class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="background">
                <Menu />
                <ListItem />
            </div>

        )

    }
}

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.addList = this.addList.bind(this);
        this.getInput = this.getInput.bind(this)
        this.counter = 0;
        this.state = {
            list: [],
        };
    }
    getInput() {
        this.setState({
            inputText: this.textInput.value,
            inputDate: this.dateInput.value,
        });
        this.addList();
    }
    addList() {
        var new_task = <li key={this.counter}>{this.textInput.value}  {this.dateInput.value}</li>
        this.counter += 1;
        var list = this.state.list;
        list.push(new_task);
        this.setState({
            list: list
        })
    }
    render() {
        return (
            <div className="enterToDoItem">
                <input ref={(input) => { this.textInput = input; }}></input>
                <input type="date" ref={(input) => { this.dateInput = input; }}></input>
                <button onClick={this.getInput}> ENTER ITEM </button>
            </div>
        );
    }
}

class Menu extends React.Component {
    render() {
        return (

            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>Bootstrap Sidebar</h3>
                    </div>

                    <div id="content">
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" id="sidebarCollapse" className="btn btn-info navbar-btn">
                                        <i className="glyphicon glyphicon-align-left"></i>
                                        <span>Toggle Sidebar</span>
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="#">Page</a></li>
                                        <li><a href="#">Page</a></li>
                                        <li><a href="#">Page</a></li>
                                        <li><a href="#">Page</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </nav>
            </div>

        );
    }
}

class List extends React.Component {

    render() {
        return (
            <div className="example">
            </div>
        );
    }
}

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
        this.addTo = this.addTo.bind(this);
    }

    addTo() {
        var item = this.state.arr;
        var name = this.name.value;
        item.push({
            name
        })
        this.setState({
            arr: item

        })

    }
    render() {
        return (
            <div className="example">
                <input ref={(input) => { this.name = input; }} type="text" placeholder="Type New List" id="list-item" />
            </div>
        );
    }
}





function render() {
    ReactDOM.render(
        <App />,

        document.getElementById("root")
    );
}

render();
