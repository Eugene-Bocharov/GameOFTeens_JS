import React, { Component } from 'react';
import styles from "./App.module.css";
import { withTranslation } from 'react-i18next';

class App extends Component {
    state = {
        
    }
    render() { 
        return (
            <>
                <h1 className={styles.mainTitle}>Hello, user! Make your first finance wheel!</h1>

            </>
        );
    }
}
 
export default withTranslation()(App);