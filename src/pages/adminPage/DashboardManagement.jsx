import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Button, Calendar, Col, DatePicker, Row, Select } from "antd";
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
import api from "../../config/axios"
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
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const onChange = (date, dateString) => {
    setSelectedMonth(date.getMonth() + 1); // Months are 0-indexed
    setSelectedYear(date.getFullYear());
  };
  const handleSelectChange = (value) => {
    setSelectedValue(value); // Lưu giá trị được chọn từ Select
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
  const numMonths = 30;
  const handleSubmit = async () => {
    if (selectedMonth && selectedYear && selectedValue ) {
      const response = await api.post(
      "/admin/" + selectedMonth, selectedYear,selectedValue 
      );
    }
  };
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
  // label: [july]
  //data : [5]

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
    ],
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
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
          <Select
            showSearch
            placeholder="Chọn số tháng muốn thống kê"
            optionFilterProp="children"
            onSearch={onSearch}
            filterOption={filterOption}
            options={[
              {
                value: "3",
                label: "3 Tháng",
              },
              {
                value: "6",
                label: "6 Tháng",
              },
              {
                value: "9",
                label: "9 Tháng",
              },
            ]}
          />
          <Button type="primary" onClick={handleSubmit}>Submit</Button>
        </Col>
        <Col span={20}>
          <Line options={options} data={data} />
        </Col>
      </Row>
    </>
  );
};

export default DashboardManagement;
