import React, { Component } from 'react';
import { Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Nav,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import axios from './AxiosConfig.js'
import { BrowserRouter as Router, Route, Link, IndexRedirect } from "react-router-dom";
import Home from './Home.jsx'
import Demo from './Demo.jsx'
import CheckData from './CheckData.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar color="light" light expand="md">
            <NavbarBrand><Link to="/">工时统计</Link></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={true} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">提交工时记录</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link to="/checkData">查看记录</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link to="/demo">Demo</Link></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Route exact path="/" component={Home} />
          <Route exact path="/demo" component={Demo} />
          <Route exact path="/checkData" component={CheckData} />
        </div>
      </Router>

    );
  }

}

export default App;
