import React from "react";
import { withTranslation } from "react-i18next";
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
            placeholder={this.props.t("Part of wheel")}
            name="name"
            value={this.props.title}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          <input
            className={styles.CreateFormInput}
            type="number"
            autoFocus="off"
            placeholder={this.props.t("Sum of money")}
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
            placeholder={this.props.t("Date")}
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
export default withTranslation()(Input);
