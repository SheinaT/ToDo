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

class ModalEditText extends React.Component {
    constructor(props) {
        super(props);
        // this.editItem = this.editItem.bind(this);
    }
    // editItem() {
    //     event.preventDefault();
    //     if (this.state.isEditing) {
    //         var textInput = this.textInput.value;
    //         var dateInput = this.dateInput.value;
    //         var timeInput = this.timeInput.value;
    //         var obj = {
    //             textInput: textInput,
    //             date: dateInput,
    //             time: timeInput
    //         }
    //         this.props.input(obj);
    //         this.counter += 1;
    //         this.textInput.value = "";      //CLEAR AFTER SAVED IN OBJ
    //         this.dateInput.value = "";
    //         this.timeInput.value = "";
    //     }
    // }
    render() {
        return (
            <div className="editModal">
                <form onSubmit={this.editItem}>
                    <input className="addNewItemText" ref={(input) => { this.textInput = input }} placeholder="Enter new item to your To Do list"></input>
                    <input type="date" ref={(input) => { this.dateInput = input }}></input>
                    <input type="time" ref={(input) => { this.timeInput = input }}></input>
                    <br/>
                    <button>Save</button>
                    <button>Delete</button> 
                </form>
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
                        <h3>Get Shit Done</h3>
                        <img className="logo" src="./CSS/Images/task.png"></img>
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
            categories: ["Main", "ITC", "Ulpan", "Chores"],
            toDoArray: [],
            completed: [],
        };
    }
    toggleItem(event, list) {
        // event.preventDefault();
        var listItemIsIn = list === "toDoArray" ? this.state.toDoArray : this.state.completed;
        var listItemNotIn = list === "toDoArray" ? this.state.completed : this.state.toDoArray;
        var clickedItem = listItemIsIn[event.target.value];
        listItemIsIn.splice([event.target.value], 1);
        listItemNotIn.push(clickedItem);
        var newToDoList = this.state.toDoArray;
        var newCompleted = this.state.completed;
        this.setState({
            toDoArray: newToDoList,
            completed: newCompleted
        })
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
                <EnterItem categories={this.state.categories} input={this.addItem} />
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
            categories: this.props.categories,
        };
    }
    addList(event) {
        event.preventDefault();
        if (this.textInput.value !== "") {      //PREVENT BLANK ENTRY   //MAY IMPLEMENT REGEX LATER
            var textInput = this.textInput.value;
            var dateInput = this.dateInput.value;
            var timeInput = this.timeInput.value;
            var obj = {
                textInput: textInput,
                date: dateInput,
                time: timeInput
            }
            this.props.input(obj);
            this.counter += 1;
            this.textInput.value = "";      //CLEAR AFTER SAVED IN OBJ
            this.dateInput.value = "";
            this.timeInput.value = "";
        }
    }

    // handleSelect() {            //ALLOWS CATEGORY DROPDOWN MENU TO GET CATEGORIE VALUE
    //     this.setState({
    //         value: event.target.value
    //     });
    // }
    render() {
        return (
            <div className="EnterNewItem">
                <form className="submit" onSubmit={this.addList}>
                    <input className="addNewItemText" ref={(input) => { this.textInput = input }} placeholder="Enter new item to your To Do list"></input>
                    <input type="date" ref={(input) => { this.dateInput = input }}></input>
                    <input type="time" ref={(input) => { this.timeInput = input }}></input>
                    <select onChange={this.handleSelect}>
                        <option id="itc" value="0">ITC</option>
                        <option id="ulpan" value="1">Ulpan</option>
                        <option id="chores" value="2">Chores</option>
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
        this.editItem = this.editItem.bind(this);
        this.state = {
            isEditing: false
        }
    }
    isChecked(event) {
        this.props.toggleItem(event, "toDoArray");
    }
    //////this is passing an object not a string aka only text/////
    generateItemString(activity) {
        if (activity.date === "" && activity.time === "") {
            var new_activity_textonly = `${activity.textInput}`;
            return new_activity_textonly;
        }
        else if (activity.date === "") {
            var new_activity_dateless = `${activity.textInput} at ${activity.time}`;
            return new_activity_dateless;
        }
        else if (activity.time === "") {
            var new_activity_timeless = `${activity.textInput} on ${activity.date}`;
            return new_activity_timeless;
        }
        var new_activity = `${activity.textInput} on ${activity.date} at ${activity.time}`;
        return new_activity;
    }
    componentWillReceiveProps() {
        this.render()
    }
    editItem(event) {
        this.setState({
            isEditing: true
        });
        console.log(this.props.toDoProp[event.target.value].textInput)
    }
    render() {
        var displayEditModal = this.state.isEditing ? <ModalEditText editItem={this.props.toDoProp[event.target.value]} /> : null;
        return (
            /////needs to pass an object////
            <div className="list">
                <h3>To Do List: </h3>
                <ul className="main-list">
                    {this.props.toDoProp.map((activity, i) => <li key={i} ><input type="checkbox" value={i} onChange={this.isChecked} checked={false} /> {this.generateItemString(activity)} <button onClick={this.editItem} className="edit-button" value={i}> EDIT </button> </li>)}
                </ul>
                {displayEditModal}
            </div>
        );
    }
}

class Done extends React.Component {
    constructor(props) {
        super(props);
        super(props);
        this.isChecked = this.isChecked.bind(this);

    }
    isChecked(event) {
        this.props.toggleItem(event, "doneArray");
    }
    //////this is passing an object not a string aka only text/////
    generateDoneItemString(activity) {
        if (activity.date === "" && activity.time === "") {
            var new_activity_textonly = `${activity.textInput}`;
            return new_activity_textonly;
        }
        else if (activity.date === "") {
            var new_activity_dateless = `${activity.textInput} at ${activity.time}`;
            return new_activity_dateless;
        }
        else if (activity.time === "") {
            var new_activity_timeless = `${activity.textInput} on ${activity.date}`;
            return new_activity_timeless;
        }
        var new_activity = `${activity.textInput} on ${activity.date} at ${activity.time}`;
        return new_activity;
    }

    componentWillReceiveProps() {
        this.render()
    }

    render() {
        return (
            /////needs to pass an object////
            <div className="completed-list">
                <h3>Completed:</h3>
                <ul className="done-list">
                    {this.props.doneProp.map((activity, j) => <li key={j} ><input type="checkbox" value={j} onChange={this.isChecked} checked={true} /> {this.generateDoneItemString(activity)}</li>)}
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
