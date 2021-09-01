const ChartData =  {
  weekData: {
    labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    datasets: [
      {
        data: [0, 2.0, 4.0, 5.0, 2.0],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 3 // optional
      }
    ]
  },
  methodData: {
    labels: ['1', '9', '14', '18', '23', '28', '31'],
    datasets: [
      {
        data: [0, 1.0, 2.0, 4.0, 1.0],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 3 // optional
      }
    ]
  },
  yearData: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12'],
    datasets: [
      {
        data: [0, 2.0, 4.0, 5.0, 2.0],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 3 // optional
      }
    ]
  },
  summaryData: {
    labels: ['2017', '2018', '2019', '2020', '2021'],
    datasets: [
      {
        data: [0, 2.0, 4.0, 5.0, 2.0],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 3 // optional
      }
    ]
  }
}

export default ChartData