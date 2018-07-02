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
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      department: '',
      otDate: Date.now(),
      otDuration: 0,
      project: '',
      otReason: '',
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  // handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // }

  // handleSubmit(event) {
  //   axios.post(
  //     'ot_record',
  //     this.state,
  //   ).then((response) => {
  //     if(response.status === 200) {
  //       alert('工时记录提交成功');
  //     } else {
  //       alert('工时记录提交失败');
  //     }
  //   })
  //   .catch((error) => {
  //     alert('工时记录提交失败');
  //   });
  //   event.preventDefault();
  // }

  render() {
    return (
      
      <Router>
        <div className="App">
          <Navbar color="light" light expand="md">
            <NavbarBrand><Link to="/">工时统计</Link></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">提交工时记录</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">查看记录</NavLink>
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
        </div>
      </Router>

    );
  }

}

export default App;
