import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Calendar, Col, DatePicker, Row } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);
const DashboardManagement = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const onChange = (date, dateString) => {
    setSelectedMonth(date.getMonth() + 1); // Months are 0-indexed
    setSelectedYear(date.getFullYear());
  };


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const startMonth = new Date().getMonth() - 5; // January
  const numMonths = 6;
  const handleSubmit = async () => {
    if (selectedMonth && selectedYear) {
      const response = await fetch("/admin/" + selectedMonth + "-" + selectedYear)}}
  // api so nguoi da mua
  // api so khoa hoc dang co
  // api so khoa học da ba


  //default  dassh board  hien tai - 6 thang 
  const labels = [];
  for (let i = startMonth; i <= startMonth + numMonths - 1; i++) {
    labels.push(
      new Date(2022, i - 1).toLocaleString("default", { month: "long" }),
    );
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Doanh thu",
        data: labels.map(
          () => Math.floor(Math.random() * (10 - -10 + 1)) + -10,
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Người đăng kí",
        data: labels.map(
          () => Math.floor(Math.random() * (10 - -10 + 1)) + -10,
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],  };
  return (
    <>
      <Row gutter={24}>
        <Col span={4}>
          <DatePicker
            picker="month"
            onChange={onChange}
            renderExtraFooter={() => "extra footer"}
          />
          {selectedMonth && <p>Month: {selectedMonth}</p>}
          {selectedYear && <p>Year: {selectedYear}</p>}
          <button onClick={handleSubmit}>Submit</button>
        </Col>
        <Col span={20}>
          <Line options={options} data={data} />
        </Col>
      </Row>
    </>
  );
};

export default DashboardManagement;
