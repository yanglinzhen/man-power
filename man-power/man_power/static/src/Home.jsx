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

class Home extends Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    axios.post(
      'ot_record',
      this.state,
    ).then((response) => {
      if(response.status === 200) {
        alert('工时记录提交成功');
      } else {
        alert('工时记录提交失败');
      }
    })
    .catch((error) => {
      alert('工时记录提交失败');
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="Home">

      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="userName">姓名</Label>
          <Input type="text" name="userName" id="userName" onChange={this.handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label for="department">部门</Label>
          <Input type="text" name="department" id="department" onChange={this.handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label for="otDate">日期</Label>
          <Input type="date" name="otDate" id="otDate" onChange={this.handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label for="otDuration">时数</Label>
          <Input type="number" step="0.1" name="otDuration" id="otDuration" onChange={this.handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label for="project">所属项目</Label>
          <Input type="text" name="project" id="project" onChange={this.handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label for="otReason">工作内容</Label>
          <Input type="text" name="otReason" id="otReason" onChange={this.handleInputChange} />
        </FormGroup>
        
        <Button >提交</Button>
      </Form>

      </div>
    );
  }

}

export default Home;
