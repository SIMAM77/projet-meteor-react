import React, {Component} from 'react';
import { Card } from 'antd';
import 'antd/lib/card/style/css';

export default class List extends Component {

    render () {
        return (
            <div className="list-container">
                <Card title="Card title" style={{ width: '25%' }}>
                    Whatever content
                </Card>
            </div>
        )
    }
}