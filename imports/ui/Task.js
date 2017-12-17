import React, { Component } from 'react';

import { listDB } from '../api/Task';

import {Card, Icon} from 'antd';
import 'antd/lib/card/style/css';
import 'antd/lib/icon/style/css';

export default class Task extends Component {


    constructor() {
        super()
        this._createBounds();
    }

    _createBounds() {
        ['_deleteThisTask']
            .forEach((fn) => this[fn] = this[fn].bind(this));
    }

    _deleteThisTask() {
        listDB.remove(this.props.task._id);
    }

    render() {

        return (
        <Card className={this.props.class} title={this.props.task.name}
        actions={[<Icon onClick={this._deleteThisTask} type="close-circle-o" />]}
        >
            <p>{this.props.task.name}</p>
            <p>{this.props.task.surname}</p>
            <p>{this.props.task.email}</p>
            <p>{this.props.task.select}</p>
        </Card>
        );
    }
}