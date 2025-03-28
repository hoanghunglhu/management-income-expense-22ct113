import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const ProfileScreen = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    data: [],
  });

  useEffect(() => {
    // Giả lập dữ liệu giao dịch
    const fetchData = () => {
      const transactions = [
        { day: 1, count: 5 },
        { day: 2, count: 8 },
        { day: 3, count: 2 },
        { day: 4, count: 10 },
        { day: 5, count: 7 },
        { day: 6, count: 4 },
        { day: 7, count: 6 },
      ];

      // Xử lý dữ liệu để hiển thị trên biểu đồ
      const labels = transactions.map((t) => `Ngày ${t.day}`);
      const data = transactions.map((t) => t.count);

      setChartData({ labels, data });
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Thống kê giao dịch trong tháng</Text>
      <BarChart
        data={{
          labels: chartData.labels,
          datasets: [
            {
              data: chartData.data,
            },
          ],
        }}
        width={Dimensions.get('window').width - 20} // Chiều rộng biểu đồ
        height={220} // Chiều cao biểu đồ
        yAxisLabel=""
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 0, // Không hiển thị số thập phân
          color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default ProfileScreen;