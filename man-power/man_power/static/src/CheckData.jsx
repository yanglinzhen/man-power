import React, { Component } from 'react';
import axios from './AxiosConfig.js'
import './CheckData.css'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Table,
    Button
  } from 'reactstrap';

class CheckData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            data: [],
            columns: ["姓名", "部门", "日期", "时数", "所属项目", "工作内容"]
        };
        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    }

    onDeleteButtonClick(id) {
        axios.post(
            'delete_record',
            id,
        ).then((response) => {
            if(response.status === 200) {
                this.loadData(this.state.year, this.state.month);
            } else {
            }
        })
        .catch((error) => {
            console.log(error)
        });
    }

    componentDidMount() {
        this.loadData(this.state.year, this.state.month);
    }

    loadData(year, month) {
        axios.get(
            'ot_record?year=' + year + '&month=' + month
          ).then((response) => {
            if(response.status === 200) {
                this.setState({
                    data: response.data.data
                });
            } else {

            }
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
                  {/* <DropdownMenu right>
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
                  </DropdownMenu> */}
                </UncontrolledDropdown>

                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        {this.state.columns.map((item) => 
                            <th>{item}</th>
                        )}
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((rowItem, index) =>
                            <tr>
                                <th scope="row">{index}</th>
                                <td>{rowItem[0]}</td>
                                <td>{rowItem[1]}</td>
                                <td>{rowItem[2]}</td>
                                <td>{rowItem[3]}</td>
                                <td>{rowItem[4]}</td>
                                <td>{rowItem[5]}</td>
                                <td><Button color="secondary" onClick={() => this.onDeleteButtonClick(rowItem[6])} >删除记录</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default CheckData;