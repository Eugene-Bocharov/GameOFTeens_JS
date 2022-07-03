import { useState } from "react";
import PieChart from "./components/Piechart/Piechart";
import BarChart from "./components/Piechart/Barchart";
import Doughnutchart from "./components/Piechart/Doughnut";
import { styles } from "./Diagram.module.css";
const UserData = JSON.parse(localStorage.getItem('UserData'))

function data_analyse(usrData) {
  const x = usrData.datasets[0].data;
  const y = usrData.labels;
console.log(y);
console.log(x);
}

function Diagram() {
// const data_analyse = ()=>{}

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.item),
    datasets: [
      {
        // label: "Users Gained",
        data: UserData.map((data) => data.quantity),
        backgroundColor: [
            "#FF0000",
            "#00F0FF",
            "#EE23DA",
            "#03FF1C",
            "#0057FF ",
            "#FFF500",
            "#FFF500",
            "#CCCCCC",
        ],
        borderColor: "#272727",
        borderWidth: 5 ,
      },
    ],
  });
  console.log(userData);
  data_analyse(userData)
  const current_chart = JSON.parse(localStorage.getItem('isChartChanged'))
  console.log(userData);
console.log('yo. chart is' + current_chart)
  return (
    <div className="App">
      <div style={{ width: 600 }}>
       {current_chart ?  <PieChart chartData={userData} /> : <BarChart chartData={userData}/>}
      </div> 

    </div>
  );
}

export default Diagram;
