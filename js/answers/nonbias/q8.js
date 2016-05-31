
     
      google.charts.setOnLoadCallback(drawChartqNone8);
      function drawChartqNone8() {

        var qNone8 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 23',8],['Figure 24',12],['Figure 25',10]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoneq8'));

        chart.draw(qNone8, options);
      }