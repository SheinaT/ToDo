class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="background">
                <Menu />
                <EnterItem />
            </div>

        )

    }
}

class Modal extends React.Component {
    render() {
        return (
            <div className="modalThing">

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


class EnterItem extends React.Component {
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
            list: list,
            categories: ["Chores"]
        })
    }
    handleSelect() {            //ALLOWS CATEGORY DROPDOWN MENU TO GET CATEGORIE VALUE
        this.setState({
            value: event.target.value
        });
    }
    render() {
        return (
            <div className="EnterNewItem">
                <input ref={(input) => { this.textInput = input; }}></input>
                <input type="date" ref={(input) => { this.dateInput = input; }}></input>
                <select onChange={this.handleSelect}>
                    <option value="0">ITC</option>
                    <option value="1">Ulpan</option>
                    <option value="2">Chores</option>
                </select>
                <button onClick={this.getInput}> ENTER </button>
                <List />
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




function render() {
    ReactDOM.render(
        <App />,

        document.getElementById("root")
    );
}

render();
