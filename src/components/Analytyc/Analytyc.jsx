// import React from "react";
// import styles from "./Analytyc.module.css";
// // import { AiOutlineCloudUpload } from "react-icons/ai";
// import { withTranslation } from "react-i18next";
// import axios from "axios";
// import PieChart from "../Piechart/Piechart";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import { Multiselect } from "multiselect-react-dropdown";

// import  Chart_usr from "../Chart/Chart";

// class Analytyc extends React.Component {
//   state = {
//     usr_info: [
//         {
//             item: 'Family',
//             budget: 12500,
//             date: '27.05'
//         },
//         {
//             item: 'Career',
//             budget: 7000,
//             date: '01.07'
//         },
//         {
//             item: 'Health, sports',
//             budget: 4300,
//             date: '12.'
//         },
//         {
//             item: 'Rest and travel',
//             budget: 6800,
//             date: '22.12'
//         },
//     ],
//     loading: true,
//   }


//   state_processing = ()=>{
//     console.log(this.state.usr_info);
//     this.state.usr_info.forEach(current_point=>{
//         console.log(current_point);


//     })
//   }



//   render() {
//     const { title, author } = this.state;

//     return <>
//     {/* <h1>москаляку на гілляку</h1> */}
//     {/* <Chart_usr /> */}
//     {/* <PieChart /> */}
//     {this.state_processing()}

//     </>;
//   }
// }

// export default withTranslation()(Analytyc);
