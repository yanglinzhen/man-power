import React, { Component } from 'react';
import axios from './AxiosConfig.js'
import './CheckData.css'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';

class CheckData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            data: [],
        };
    }

    componentDidMount() {
        axios.get(
            'ot_record?year=' + this.state.year + '&month=' + this.state.month + '&excel=false'
          ).then((response) => {
            console.log(response);
            // if(response.status === 200) {
            //   console.log(response);
            // } else {
            //   console.log(response);
            // }
          })
          .catch((error) => {
            console.log(error);
          });
    }

    render() {
        return (
            <div className="CheckData">
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {this.state.year + '-' + this.state.month}
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
                </UncontrolledDropdown>
            </div>
        );
    }
}

export default CheckData;