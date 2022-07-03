import React from "react";
import styles from "./Home.module.css";
import Input from "../Input/Input.jsx";
import { withTranslation } from "react-i18next";

import { nanoid } from "nanoid";

const INITIAL_STATE = {
  finances: {
    finance1: { title: "", sum: "", date: "" },
  },
  currentTheme: "",
  count: 1,
};
const body = document.querySelector("body");
console.log(body);
class CreateForm extends React.Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    if (localStorage.getItem("theme") === "dark-theme") {
      this.setState({ currentTheme: "darkNotify" });
    } else {
      this.setState({ currentTheme: "lightNotify" });
    }
  }

  addInput = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };
  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();

    if (localStorage.getItem("theme") === "dark-theme") {
      this.setState({ currentTheme: "darkNotify" });
    } else {
      this.setState({ currentTheme: "lightNotify" });
    }

    this.reset();
  };
  // handleChange = (event) => {
  //   const Array = [];

  //   event.map((form) => {
  //     const formValues = Object.values(form);
  //     const formKey = formValues[0];

  //     return Array.push(formKey);
  //   });

  //   this.setState({ form: Array.join(", ") });
  // };

  reset = () => {
    this.setState({
      title: "",
      sum: "",
      date: "",
    });
  };

  render() {
    const { title, sum, date } = this.state;

    console.log(this.state);
    return (
      <form
        className={styles.Container}
        onSubmit={this.handleSubmit}
        name="finance wheel"
        encType="multipart/form-data"
      >
        <h2 name={this.props.t("finance wheel")}>finance wheel:</h2>

        {[...Array(this.state.count)].map(() => (
          <Input key={nanoid()} />
        ))}
        <button
          type="button"
          onClick={this.addInput}
          className={styles.CreateFormButton}
        >
          Add
        </button>
        <button type="submit" className={styles.CreateFormButton}>
          Let's go
        </button>
      </form>
    );
  }
}

export default withTranslation()(CreateForm);
{
  /* <label>
              <Multiselect
                displayValue="key"
                id="css_custom_multiselect"
                showArrow="true"
                closeIcon="circle"
                onKeyPressFn={function noRefCheck() {}}
                onRemove={this.handleSelect}
                onSearch={function noRefCheck() {}}
                onSelect={this.handleSelect}
                options={[
                  {
                    cat: "pop",
                    key: `${this.props.t("Pop")}`,
                  },
                  {
                    cat: "rock",
                    key: `${this.props.t("Rock")}`,
                  },
                  {
                    cat: "jazz",
                    key: `${this.props.t("Jazz")}`,
                  },
                  {
                    cat: "traditional",
                    key: `${this.props.t("Traditional")}`,
                  },
                  {
                    cat: "hip-hop",
                    key: `${this.props.t("Hip-hop")}`,
                  },
                  {
                    cat: "electronic",
                    key: `${this.props.t("Electronic")}`,
                  },
                  {
                    cat: "folk",
                    key: `${this.props.t("Folk")}`,
                  },
                  {
                    cat: "indi",
                    key: `${this.props.t("Indi")}`,
                  },
                  {
                    cat: "country",
                    key: `${this.props.t("Country")}`,
                  },
                  {
                    cat: "classical",
                    key: `${this.props.t("Classical")}`,
                  },
                ]}
                placeholder={`${this.props.t("Click To Select Genres")}`}
                style={{
                  chips: {
                    background: "rgb(248, 153, 28)",
                    height: "20px",
                    margin: "0 3px",
                  },
                  searchBox: {
                    border: "none",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "10px",
                    cursor: "pointer",
                    listStyle: "none",
                    width: "100%",
                    height: "48px",
                    margin: "0",
                    backgroundColor: "#fff",
                    marginBottom: "16px",
                  },
                  optionContainer: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "0",
                  },
                  option: {
                    backgroundColor: "rgb(248, 153, 28)",
                    margin: "3px 0",
                    width: "100%",
                    borderRadius: "5px",
                  },
                  chip: {
                    marginRight: "5px",
                  },
                }}
                selectionLimit={3}
                required
              />
            </label> */
}
