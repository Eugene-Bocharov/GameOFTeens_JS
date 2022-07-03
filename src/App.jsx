import React, { Component } from "react";
import styles from "./App.module.css";
import { withTranslation } from "react-i18next";
import Datacapture from "./components/DataCapture/Datacapture";
import Diagram from "./Diagram";
import Toggle from "react-toggle";
import "react-toggle/style.css";

class App extends Component {
  state = {
    currentLanguage: null,
    isChartChanged: false,
  };

  componentDidMount() {
    const language = localStorage.getItem("language");

    if (language !== "null") {
      this.setState({
        currentLanguage: language,
      });

      localStorage.setItem("language", language);
    } else {
      this.setState({
        currentLanguage: "en",
      });

      localStorage.setItem("language", "en");
    }
  }

  setLanguage = (lang) => {
    this.setState({
      currentLanguage: lang,
    });
  };

  handleTofuChange = () => {
    if (this.state.isChartChanged === false) {
      this.setState({ isChartChanged: true });
      localStorage.setItem('isChartChanged', JSON.stringify(true))
    }else{
      this.setState({ isChartChanged: false});
      localStorage.setItem('isChartChanged', JSON.stringify(false))
    }
    console.log(this.state.isChartChanged);
  };

  render() {
    return (
      <>
<div className={styles.toggle_divider}>      
    <h1 className={styles.mainTitle}>{this.props.t("finance weel")}</h1>

<label className={styles.toggle_label}>
  <Toggle
    defaultChecked={this.state.isChartChanged}
    icons={false}
    onChange={this.handleTofuChange}
  />
  <span className={styles.toggle_title} >{this.state.isChartChanged ? 'Pie Chart' : 'Bar Chart'}</span>
</label>
</div>

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
