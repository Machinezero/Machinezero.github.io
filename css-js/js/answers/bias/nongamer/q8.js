
     
      google.charts.setOnLoadCallback(drawChartqNo8);
      function drawChartqNo8() {

        var qNo8 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 23',4],['Figure 24',6],['Figure 25',2]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoq8'));

        chart.draw(qNo8, options);
      }