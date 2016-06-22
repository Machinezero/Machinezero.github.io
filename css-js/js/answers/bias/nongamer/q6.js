
     
      google.charts.setOnLoadCallback(drawChartqNo6);
      function drawChartqNo6() {

        var qNo6 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 16',8],['Figure 17',11],['Figure 18',9],['Figure 19',2]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoq6'));

        chart.draw(qNo6, options);
      }