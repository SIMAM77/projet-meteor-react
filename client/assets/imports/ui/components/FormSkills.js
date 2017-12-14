import ReactDOM from 'react-dom'
import React, {Component} from 'react';
import {Select} from 'antd';
import 'antd/lib/select/style/css';

export default class FormSkills extends Component {

    render() {
        return (
            <option ref='name'>{this.props.content}</option>
        )
    }

}