import { Component } from "react";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import "react-toggle/style.css"; // for ES6 modules
import Toggle from "react-toggle";
import route from "../../route";

import styles from "./Navbar.module.css";
const body = document.querySelector("body");

class Navbar extends Component {
  state = {
    inputChecked: false,
  };

  componentDidMount() {
    if (localStorage.getItem("theme") === this.Theme.DARK) {
      body.classList.remove("light-body");
      body.classList.add("dark-body");

      this.setState({ inputChecked: true });
    } else {
      body.classList.remove("dark-body");
      body.classList.add("light-body");
    }
  }

  Theme = {
    LIGHT: "light-theme",
    DARK: "dark-theme",
  };

  defaultTheme = this.Theme.LIGHT;

  getTheme = () => {
    let theme = localStorage.getItem("theme");

    if (!theme) {
      theme = this.defaultTheme;
      this.setTheme(theme);
    }

    return theme;
  };

  setTheme = (theme) => {
    localStorage.setItem("theme", theme);
  };

  theme = this.getTheme();
  changeTheme = () => {
    this.theme =
      this.theme === this.Theme.LIGHT ? this.Theme.DARK : this.Theme.LIGHT;

    if (this.theme === this.Theme.DARK) {
      this.setState({ inputChecked: true });

      body.classList.remove("light-body");
      body.classList.add("dark-body");
    } else {
      this.setState({ inputChecked: false });

      body.classList.remove("dark-body");
      body.classList.add("light-body");
    }

    this.setTheme(this.theme);
  };

  chageToolbar = () => {
    this.changeTheme();
  };
  render() {
    return (
      <nav className={styles.Navigation}>
        <div className={styles.Container}>
          <div className={styles.ButtonSection}>
            <DropdownButton
              className={styles.SettingsBtn}
              id="dropdown-variants-primary"
              size="sm"
              title={<IoSettingsOutline size="1.4em" />}
              autoClose="outside"
            >
              <Dropdown.Item className={styles.decide_item}>
                <label>
                  <Toggle
                    defaultChecked={this.state.aubergineIsReady}
                    className="styled_toggle"
                    icons={{
                      checked: (
                        <BsFillMoonFill className={styles.toggle_icon} />
                      ),
                      unchecked: (
                        <BsFillSunFill className={styles.toggle_icon} />
                      ),
                    }}
                    checked={this.state.inputChecked}
                    onChange={() => this.chageToolbar()}
                  />
                </label>
              </Dropdown.Item>
              <Dropdown.Item className={styles.LangChanger}>
                <button
                  onClick={() => {
                    this.props.i18n.changeLanguage("ua");
                    this.props.setLang("ua");

                    localStorage.setItem("language", "ua");
                  }}
                  className={
                    this.props.language === "ua"
                      ? styles.ActiveLanguageBtn
                      : null
                  }
                >
                  UA
                </button>
                |
                <button
                  onClick={() => {
                    this.props.i18n.changeLanguage("en");
                    this.props.setLang("en");

                    localStorage.setItem("language", "en");
                  }}
                  className={
                    this.props.language === "en"
                      ? styles.ActiveLanguageBtn
                      : null
                  }
                >
                  EN
                </button>
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
