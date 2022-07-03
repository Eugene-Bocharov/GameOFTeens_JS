import { useState } from "react";
import styles from '../DataCapture/Datacapture.module.css'
function InputList() {
  return (
<div className={styles.input_list}>
    <input type="text"  className={styles.input_item} id={`item_${this.state.counter}`}  onChange={(e)=>{this.item_change(this.state.count, e.target.value)}} placeholder={'item'} />
    <input type="text"  className={styles.input_budget} id={`quantum_${this.state.counter}`} onChange={(e)=>{this.quantum_change(this.state.count, e.target.value)}}  placeholder={'quantum'}/>
    <input type="text"  className={styles.input_date} id={`date _${this.state.counter}`} onChange={(e)=>{this.date_change(this.state.count, e.target.value)}}  placeholder={'date'}/>
</div>
  );
}

export default InputList;
