import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

const { Title: AntTitle } = Typography;

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimeStamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.unshift(coinHistory.data.history[i].price);
    coinTimeStamp.unshift(
      new Date(coinHistory.data.history[i].timestamp*1000).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <AntTitle level={2} className="chart-title">
          {coinName} Price Chart
        </AntTitle>
        <Col className="price-container">
          <AntTitle level={5} className="price-change">
            {coinHistory?.data?.change}%
          </AntTitle>
          <AntTitle level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </AntTitle>
        </Col>
      </Row>
      <p className="price-graph"> Price in USD </p>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
