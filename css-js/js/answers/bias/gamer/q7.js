
     
      google.charts.setOnLoadCallback(drawChartqYes7);
      function drawChartqYes7() {

        var qYes7 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 20',7],['Figure 21',2],['Figure 22',9]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartYesq7'));

        chart.draw(qYes7, options);
      }