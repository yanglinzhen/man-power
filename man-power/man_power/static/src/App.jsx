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
                  <NavLink href="/components/">提交工时记录</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">查看记录</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link to="/demo">Demo</Link></NavLink>
                </NavItem>
                {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
              </Nav>
            </Collapse>
          </Navbar>
          <Route exact path="/" component={Home} />
          <Route exact path="/demo" component={Demo} />
        </div>
      </Router>

    );
  }

}

export default App;
