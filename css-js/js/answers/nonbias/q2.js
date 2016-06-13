
     
      google.charts.setOnLoadCallback(drawChartqNone2);
      function drawChartqNone2() {

        var qNone2 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['FIgure 4',5],['Figure 5',10],['Figure 6',15]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoneq2'));

        chart.draw(qNone2, options);
      }