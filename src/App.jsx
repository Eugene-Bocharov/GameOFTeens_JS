import React, { Component } from "react";
import styles from "./App.module.css";
import { withTranslation } from "react-i18next";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import route from "../../route";
class App extends Component {
  state = {
    currentLanguage: "",
  };

  componentDidMount() {
    this.setState({
      currentLanguage: localStorage.getItem("language"),
    });
  }
  setLanguage = (lang) => {
    this.setState({
      currentLanguage: lang,
    });
  };
  render() {
    // return ;

    return (
      <React.Fragment>
        <Navbar
          language={this.state.currentLanguage}
          setLang={this.setLanguage}
        />
        <HomePage />
      </React.Fragment>
    );
    // <Switch>
    //   (<HomePage />)
    //   <Navbar
    //     language={this.state.currentLanguage}
    //     setLang={this.setLanguage}
    //   />
    // </Switch>
  }
}
export default withTranslation()(App);
//   const language = localStorage.getItem("language");

//   if (language !== "null") {
//     this.setState({
//       currentLanguage: language,
//     });

//     localStorage.setItem("language", language);
//   } else {
//     this.setState({
//       currentLanguage: "en",
//     });

//     localStorage.setItem("language", "en");
//   }
//
