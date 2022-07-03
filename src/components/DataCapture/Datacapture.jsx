import React from "react";
import styles from '../DataCapture/Datacapture.module.css'
import { withTranslation } from "react-i18next";

class Datacapture extends React.Component {
  state = {
    user_info: [{
        item: 0,
        quantity: 0,
        date: 0,},
    ],
    count: 0,
    inpt_count: 0,
  }

item_change=(index, usr_value)=>{
const arr_items = this.state.user_info;
arr_items[index].item=usr_value;
console.log(arr_items);
}

quantum_change=(index, usr_value)=>{
    const arr_quantities = this.state.user_info;
    arr_quantities[index].quantity=usr_value;
    console.log(arr_quantities);
}

date_change=(index, usr_value)=>{
    const arr_date = this.state.user_info;
    arr_date[index].date=usr_value;
    console.log(arr_date);
}

calc_items_func = ()=>{
 localStorage.setItem('UserData',  JSON.stringify(this.state.user_info));
 window.location.reload()


 // clear inputs


}

inpt_func=()=>{
    return <div className={styles.input_list}>
    <input type="text"  className={styles.input_item} id={`item_${this.state.counter}`}  onChange={(e)=>{this.item_change(this.state.count, e.target.value)}} placeholder={'item'} />
    <input type="text"  className={styles.input_budget} id={`quantum_${this.state.counter}`} onChange={(e)=>{this.quantum_change(this.state.count, e.target.value)}}  placeholder={'quantum'}/>
    <input type="text"  className={styles.input_date} id={`date _${this.state.counter}`} onChange={(e)=>{this.date_change(this.state.count, e.target.value)}}  placeholder={'date'}/>
</div>
}
  add_item_func = ()=>{
    // console.log(this.state.user_info);
    this.setState({ count: this.state.count + 1 })
    console.log(this.state.count);
  if (this.state.count > 7) {
    console.log('stop, bro, u got 7');
    const arr = this.state.user_info
    console.log(arr);
  }
  else{
        const arr = this.state.user_info
    arr.push({
        item: 0,
        quantity: 0,
        date: 0,
    })
    console.log(arr);
    this.setState({ inpt_count: this.state.inpt_count + 1 })
  }}

  render() {

    return <>
<div className={styles.capture_container}>
    <div className={styles.inputs_list}>
<div className={styles.input_list}>
    <input type="text"  className={styles.input_item} id={`item_${this.state.counter}`}  onChange={(e)=>{this.item_change(this.state.count, e.target.value)}} placeholder={'item'} />
    <input type="text"  className={styles.input_budget} id={`quantum_${this.state.counter}`} onChange={(e)=>{this.quantum_change(this.state.count, e.target.value)}}  placeholder={'quantum'}/>
    <input type="text"  className={styles.input_date} id={`date _${this.state.counter}`} onChange={(e)=>{this.date_change(this.state.count, e.target.value)}}  placeholder={'date'}/>
</div>
    </div>
    <div className={styles.buttons_dividers}>
        <button className={styles.add_item_button}  onClick={()=>{this.add_item_func()}}>add a new one</button>
        <button className={styles.calc_items_button} onClick={()=>{this.calc_items_func()}}>let's  go</button>
    </div>
</div>
    </>;
  }
}

export default withTranslation()(Datacapture);
