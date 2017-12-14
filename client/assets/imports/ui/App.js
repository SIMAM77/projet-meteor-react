import React, {Component} from 'react';
import FormHeader from './components/Form';
import List from './components/List';

export default class App extends Component {
    render() {
        return (
            <main>
                <header>
                    <FormHeader/>
                </header>
                <div className="separator"></div>
                <List/>
            </main>
        )
    }
}
