class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="background">
                <Menu />
                <Main />
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

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.toggleItem = this.toggleItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.counter = 0;
        this.state = {
            categories: ["Chores"],
            list: [],
            toDoArray: [],
            completed: []

        };
    }
    toggleItem(event) {
    
        var clickedItem = this.state.toDoArray.splice(this.state.toDoArray[event.target.value], 1);
        console.log(clickedItem);
        var newCompleted = this.state.completed.push(clickedItem);
        var newToDo = this.state.toDoArray;
        // var finishedTask = this.state.toDoArray;
        // var new_task = event;
        this.setState({
            toDoArray: newToDo,
            completed: newCompleted
        })
        console.log(this.state.toDoArray)
        console.log(this.state.completed);
    }
    addItem(obj) {
        var newTodos = this.state.toDoArray;
        var newItem = obj;
        newTodos.push(newItem);
        this.setState({
            toDoArray: newTodos,
        })
    }
    render() {
        return (
            <div className="mainContainer">
                <EnterItem input={this.addItem} />
                <ToDoList toggleItem={this.toggleItem} toDoProp={this.state.toDoArray} />
                <Done toggleItem={this.toggleItem} doneProp={this.state.completed} />

            </div>
        );
    }
}

class EnterItem extends React.Component {
    constructor(props) {
        super(props);
        this.addList = this.addList.bind(this);
        // this.getInput = this.getInput.bind(this)
        this.counter = 0;
        this.state = {
            list: [],
            categories: ["ITC", "Ulpan", "Chores"]
        };
    }
    addList(event) {
        event.preventDefault();
        var textInput = this.textInput.value;
        var dateInput = this.dateInput.value;
        var obj = {
            textInput: textInput,
            date: dateInput

        }
        this.props.input(obj);
        this.counter += 1;
    }


    // handleSelect() {            //ALLOWS CATEGORY DROPDOWN MENU TO GET CATEGORIE VALUE
    //     this.setState({
    //         value: event.target.value
    //     });
    // }
    render() {
        return (
            <div className="EnterNewItem">
                <form onSubmit={this.addList}>
                    <input className="addNewItemText" ref={(input) => { this.textInput = input }} placeholder="Enter new item to your To Do list"></input>
                    <input type="date" ref={(input) => { this.dateInput = input }}></input>
                    <select onChange={this.handleSelect}>
                        <option value="0">ITC</option>
                        <option value="1">Ulpan</option>
                        <option value="2">Chores</option>
                    </select>
                </form>

            </div>
        );
    }
}

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.isChecked = this.isChecked.bind(this);
        this.state = {
            list: this.props.toDoProp
        };

    }
    isChecked(event) {
        this.props.toggleItem(event);
    }
    //////this is passing an object not a string aka only text/////
    generateItemString(activity) {
        var new_activity = `${activity.textInput} on ${activity.date}`;
        return new_activity;
    }

    render() {
        return (
            /////needs to pass an object////
            <div className="list">
                <h3>To DO List: </h3>
                <ul className="main-list">
                    {this.state.list.map((activity, i) => <li key={i} ><input type="checkbox" value={i} onChange={this.isChecked} /> {this.generateItemString(activity)}</li>)}
                </ul>
            </div>
        );
    }
}

class Done extends React.Component {
    constructor(props) {
        super(props);
            super(props);
            this.isChecked = this.isChecked.bind(this);
            this.state = {
                list: this.props.doneProp
            };

        }
        isChecked(event) {
            this.props.toggleItem(event);

        }
        //////this is passing an object not a string aka only text/////
        generateDoneItemString(activity) {
            var done_activity = `${activity.textInput} on ${activity.date}`;
            return done_activity;
        }

        render() {
            return (
                /////needs to pass an object////
            
                <div className="completed-list">
                    <h3>Completed items:</h3>
                    <ul className="done-list">
                        {this.state.list.map((activity, j) => <li key={j} ><input type="checkbox" onChange={this.isChecked} /> {this.generateDoneItemString(activity)}</li>)}
                    </ul>
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
