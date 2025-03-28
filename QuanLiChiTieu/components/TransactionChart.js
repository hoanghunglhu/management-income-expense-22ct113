import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { BarChart, Grid } from "react-native-svg-charts";
import { getTransactionStats } from "../utils/getTransactionStats";

const TransactionChart = ({ transactions }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const data = getTransactionStats(transactions);
    setChartData(data);
  }, [transactions]);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}>
        Số giao dịch theo ngày trong tháng
      </Text>
      <BarChart
        style={{ height: 200, marginVertical: 20 }}
        data={chartData.map((item) => item.count)}
        svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
      </BarChart>
      {chartData.map((item, index) => (
        <Text key={index}>{`${item.day}: ${item.count} giao dịch`}</Text>
      ))}
    </View>
  );
};

export default TransactionChart;
