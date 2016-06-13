
     
      google.charts.setOnLoadCallback(drawChartqNone6);
      function drawChartqNone6() {

        var qNone6 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 16',8],['Figure 17',11],['Figure 18',2],['Figure 19',9]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoneq6'));

        chart.draw(qNone6, options);
      }