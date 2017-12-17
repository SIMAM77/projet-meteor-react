import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {withTracker} from 'meteor/react-meteor-data';
import merge from 'deepmerge'

import {listDB} from '../api/Task';
import Task from './Task';

import {Input, Form} from 'antd';
import 'antd/lib/input/style/css';
import 'antd/lib/form/style/css';
import 'antd/lib/card/style/css';

class App extends Component {

    constructor(props) {
        super(props);
        this._createBounds();
        this.state = {
            value: 'a',
            valueLetter: ''
        }

    }

    _createBounds() {
        ['_handleSubmit', '_renderTasks', '_handleChange']
            .forEach((fn) => this[fn] = this[fn].bind(this));
    }

    _handleChange(event) {
        this.setState({value: event.target.value});
        for (let i = 0; i < this.props.firstLetter.length; i++) {
            let firstLetter = this.props.firstLetter[i].name[0];
            if (firstLetter.toLowerCase() === event.target.value.toLowerCase()) {

                /*
                *
                * ICI LE RESULTAT DU TRI
                *
                * A REGLER
                *
                * */

            }

        }
    }

    _handleSubmit(event) {
        event.preventDefault();
        const handleError = document.querySelectorAll('.header-form-error');
        const name = ReactDOM.findDOMNode(this._name).value.trim();
        const surname = ReactDOM.findDOMNode(this._surname).value.trim();
        const email = ReactDOM.findDOMNode(this._email).value.trim();


        if (name && surname && email !== '') {
            listDB.insert({
                name,
                surname,
                email,
            });

            for (let i = 0; i < handleError.length; i++) {
                handleError[i].classList.remove('is-active');
            }

        } else {
            for (let i = 0; i < handleError.length; i++) {
                handleError[i].classList.add('is-active');
            }
        }

        ReactDOM.findDOMNode(this._name).value = '';
        ReactDOM.findDOMNode(this._surname).value = '';
        ReactDOM.findDOMNode(this._email).value = '';
        console.log(this.state);
    }

    _renderTasks() {
        return this.props.tasks.map((task) => (
            <Task key={task._id} task={task} class="list-items"/>
        ));
    }

    render() {
        return (
            <div className="container">
                <header className="header-form">
                    <h1 className="header-form-title">Nombre d'étudiants inscrit sur la liste
                        ({this.props.incompleteCount})</h1>

                    <Form className="header-form-container" onSubmit={this._handleSubmit}>
                        <div className="header-form-items">
                            <Input
                                className='header-form-input'
                                type="text"
                                ref={ref => {
                                    this._name = ref
                                }}
                                placeholder="Prénom"

                            />
                            <span className="header-form-error">Veuillez entrer une valeur</span>
                        </div>
                        <div className="header-form-items">
                            <Input
                                className='header-form-input'
                                type="text"
                                ref={ref => {
                                    this._surname = ref
                                }}
                                placeholder="Nom"

                            />
                            <span className="header-form-error">Veuillez entrer une valeur</span>
                        </div>
                        <div className="header-form-items">
                            <Input
                                className='header-form-input'
                                type="email"
                                ref={ref => {
                                    this._email = ref
                                }}
                                placeholder="Email"

                            />
                            <span className="header-form-error">Veuillez entrer une valeur</span>
                        </div>
                        <Input
                            type="submit"
                            value="Envoyer"
                        />

                    </Form>
                </header>

                <div className="list-container">
                    <div className="list-select">
                        <select
                            onChange={this._handleChange}
                            className="ant-input selectBox"
                            style={{width: 200}}
                            placeholder="Select a person"
                            ref={ref => {
                                this._select = ref
                            }}
                            value={this.state.value}
                        >
                            <option value="a">A</option>
                            <option value="b">B</option>
                            <option value="c">C</option>
                            <option value="d">D</option>
                            <option value="e">E</option>
                            <option value="f">F</option>
                            <option value="g">G</option>
                            <option value="h">H</option>
                            <option value="i">I</option>
                            <option value="j">J</option>
                            <option value="k">K</option>
                            <option value="l">L</option>
                            <option value="m">M</option>
                            <option value="n">N</option>
                            <option value="o">o</option>
                            <option value="p">P</option>
                            <option value="q">Q</option>
                            <option value="r">R</option>
                            <option value="s">S</option>
                            <option value="t">T</option>
                            <option value="u">U</option>
                            <option value="v">V</option>
                            <option value="w">W</option>
                            <option value="x">X</option>
                            <option value="y">Y</option>
                            <option value="z">Z</option>
                        </select>
                    </div>
                    <div className="list-content">
                        {this._renderTasks()}
                    </div>
                </div>
            </div>
        );
    }
}
export default withTracker(() => {
    return {
        tasks: listDB.find({}, {sort: {createdAt: -1}}).fetch(),
        incompleteCount: listDB.find({checked: {$ne: true}}).count(),
        firstLetter: listDB.find({name: {$regex: /\w/}}).fetch()
    };
})(App);