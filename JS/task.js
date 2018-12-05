class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="background">
            <Menu/>
            </div>

        )
       
    }
}

class Modal extends React.Component {
    render() {
        return (
            <div className="example">
            </div>
        );
    }
}

class Menu extends React.Component {
    render() {
        return (

        <div class="wrapper">
            <nav id="sidebar">
                 <div class="sidebar-header">
                     <h3>Bootstrap Sidebar</h3>
                 </div>

                <div id="content">
                    <nav class="navbar navbar-default">
                     <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
                                <i class="glyphicon glyphicon-align-left"></i>
                                <span>Toggle Sidebar</span>
                            </button>
                        </div>
                         <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                             <ul class="nav navbar-nav navbar-right">
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
    render() {
        return (
            <div className="example">
            </div>
        );
    }
}





function render() {
    ReactDOM.render(
        <App/>,

        document.getElementById("root")
    );
}

render();
