import React, { Component } from 'react';
import axios from './AxiosConfig.js'
import './CheckData.css'
import config from './GlobalConfig'
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
            columns: ["姓名", "部门", "日期", "时数", "所属项目", "工作内容"],
            yearMonths: []
        };
        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
        this.onYearMonthSelected = this.onYearMonthSelected.bind(this);
        this.setYearMonth = this.setYearMonth.bind(this);
    }

    getMonths() {
        let yearAndMonth = {'year': this.state.year, 'month': this.state.month}
        let yearAndMonths = [yearAndMonth]
        for (let index = 0; index < 2; index++) {
            yearAndMonth = this.getNextMonth(yearAndMonth.year, yearAndMonth.month)
            yearAndMonths[yearAndMonths.length] = yearAndMonth
        }

        yearAndMonth = {'year': this.state.year, 'month': this.state.month}
        for (let index = 0; index < 2; index++) {
            yearAndMonth = this.getPrevMonth(yearAndMonth.year, yearAndMonth.month)
            yearAndMonths.unshift(yearAndMonth)
        }
        return yearAndMonths
    }

    getNextMonth(year, month) {
        if (month == 12) {
            return {'year': year + 1, 'month': 1}
        } else {
            return {'year': year, 'month': month + 1}
        }
    }

    getPrevMonth(year, month) {
        if (month == 1) {
            return {'year': year - 1, 'month': 12}
        } else {
            return {'year': year, 'month': month - 1}
        }
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

    setYearMonth(index) {
        this.setState({
            year: this.state.yearMonths[index].year,
            month: this.state.yearMonths[index].month
        })

        this.loadData(this.state.yearMonths[index].year, this.state.yearMonths[index].month);
    }

    onYearMonthSelected() {
        this.setState({
            yearMonths: this.getMonths()
        })
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
                <span>

                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret onClick={() => this.onYearMonthSelected()}>
                        {this.state.year + '-' + this.state.month}
                    </DropdownToggle>
                    <DropdownMenu right>
                        {this.state.yearMonths.map((item, index) =>
                            <DropdownItem onClick={() => this.setYearMonth(index)}>
                                {item.year + '-' + item.month}
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                    </UncontrolledDropdown>
                    <a href={config.url + "/ot_record?year=" + this.state.year + "&month=" + this.state.month + "&excel=true"}>下载文件</a>
                </span>

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