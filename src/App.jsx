import React, { Component } from 'react';
import styles from "./App.module.css";

class App extends Component {
    render() { 
        return (
            <>
                <h1 className={styles.header}>Hello, user! Make your first finance wheel!</h1>
            </>
        );
    }
}
 
export default App;