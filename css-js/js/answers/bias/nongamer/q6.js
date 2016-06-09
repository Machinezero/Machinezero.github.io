
     
      google.charts.setOnLoadCallback(drawChartqNo6);
      function drawChartqNo6() {

        var qNo6 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 16',5],['Figure 17',4],['Figure 19',3]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoq6'));

        chart.draw(qNo6, options);
      }