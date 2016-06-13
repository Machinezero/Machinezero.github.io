
     
      google.charts.setOnLoadCallback(drawChartqNone7);
      function drawChartqNone7() {

        var qNone7 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 20',11],['Figure 21',5],['Figure 22',14]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoneq7'));

        chart.draw(qNone7, options);
      }