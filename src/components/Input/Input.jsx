import React from "react";
import styles from "../Home/Home.module.css";

class Input extends React.Component {
  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className={styles.CreateForm}>
        <label>
          <input
            className={styles.CreateFormInput}
            type="text"
            autoFocus="off"
            placeholder={"Part of wheel"}
            name="name"
            value={this.props.name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          <input
            className={styles.CreateFormInput}
            type="number"
            autoFocus="off"
            placeholder={"Sum of money"}
            name="sum"
            value={this.props.sum}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          <input
            className={styles.CreateFormInput}
            type="date"
            autoFocus="off"
            placeholder={"Date"}
            name="date"
            value={this.props.date}
            onChange={this.handleChange}
            required
          />
        </label>
      </div>
    );
  }
}
export default Input;
