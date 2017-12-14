import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Input} from 'antd';
import 'antd/lib/input/style/css';
import Skills from './FormSkills'

export default class Form extends Component {

    constructor() {
        super();
        this._createBounds();
    }

    _createBounds() {
        ['_selectValue']
            .forEach((fn) => this[fn] = this[fn].bind(this));
    }

    static _getSkills() {
        return [
            {_id: 1, text: 'HTML'},
            {_id: 2, text: 'CSS'},
            {_id: 3, text: 'JavaScript'},
            {_id: 4, text: 'PHP'},
            {_id: 5, text: 'MYSQL'}
        ];
    }

    _renderSkills() {
        return Form._getSkills().map((skills) => (
            <Skills key={skills._id} content={skills.text}/>
        ));
    }

    _selectValue() {
        this._index = this._select.options[this._select.selectedIndex]
    }

    _handleClick() {
        console.log(ReactDOM.findDOMNode(this._surname));
        console.log(ReactDOM.findDOMNode(this._name));
        console.log(ReactDOM.findDOMNode(this._year));
        console.log(ReactDOM.findDOMNode(this._email));

    }

    render() {
        return (
            <div className="header-form">
                <h2 className="header-form-title">Hello, please type informations about you</h2>
                <form className="form-container">
                    <div className="form-field">
                        <Input id='1' ref={surname => {
                            this._surname = surname
                        }} type='text' placeholder="Votre nom"/>
                    </div>
                    <div className="form-field">
                        <Input id='2' ref={name => {
                            this._name = name
                        }} type='text' placeholder="Votre prénom"/>
                    </div>
                    <div className="form-field">
                        <Input id='3' ref={year => {
                            this._year = year
                        }} type='text' placeholder="Votre âge"/>
                    </div>
                    <div className="form-field">
                        <Input id='4' ref={email => {
                            this._email = email
                        }} type='text' placeholder="Votre email"/>
                    </div>
                    <div className="form-field">
                        <select onChange={this._selectValue} className="form-field-select" ref={select => {
                            this._select = select
                        }}>
                            {this._renderSkills()}
                        </select>
                    </div>
                    <div className="form-field submit">
                        <Input onClick={this._handleClick} type='submit' value="Envoyer"/>
                    </div>
                </form>
            </div>
        )
    }
}