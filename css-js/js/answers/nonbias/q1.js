
     
      google.charts.setOnLoadCallback(drawChartqNone1);
      function drawChartqNone1() {

        var qNone1 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 1',6],['Figure 2',11],['Figure 3',13]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoneq1'));

        chart.draw(qNone1, options);
      }