import React, { Component } from "react";
import styles from "./App.module.css";
import { withTranslation } from "react-i18next";
import Datacapture from "./components/DataCapture/Datacapture";
import Diagram from "./Diagram";
import Toggle from "react-toggle";
import "react-toggle/style.css";

class App extends Component {
    state = {
        
    }
    render() { 
        return (
            <>
                <h1 className={styles.mainTitle}>Hello, user! Make your first finance wheel!</h1>

        {localStorage.setItem(
          "UserData",
          JSON.stringify([
            {
              item: "Career",
              quantity: 12500,
              date: "03.07",
            },
            {
              item: "Enviroment",
              quantity: 7500,
              date: "03.07",
            },
            {
              item: "Career",
              quantity: 12500,
              date: "03.07",
            },
            {
              item: "Career",
              quantity: 12500,
              date: "03.07",
            },
          ])
        )}
        <div className={styles.components_divider}>
          <Datacapture />
          <Diagram />
        </div>
      </>
    );
  }
}

export default withTranslation()(App);
