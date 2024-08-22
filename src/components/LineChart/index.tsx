import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const MyLineChart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.chartTitle}>Monthly Revenue (PKR)</Text>
      <LineChart
        data={{
          labels: [
            'JAN',
            'FEB',
            'MAR',
            'APR',
            'MAY',
            'JUN',
            'JUL',
            'AUG',
            'SEP',
            'OCT',
            'NOV',
            'DEC',
          ],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43, 50, 70, 30, 90, 100, 110],
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Line color
            },
            {
              data: [30, 10, 40, 95, 85, 91, 60, 40, 50, 60, 80, 95],
              color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Line color
            },
          ],
        }}
        width={Dimensions.get('window').width - 40} // Subtracting padding
        height={220}
        yAxisLabel=""
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#008000',
          backgroundGradientTo: 'rgba(0,0,0,0.4)',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  chartTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});
export default MyLineChart;
