
     
      google.charts.setOnLoadCallback(drawChartqYes3);
      function drawChartqYes3() {

        var qYes3 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['FIgure 7',5],['Figure 8',6],['Figure 9',7]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartYesq3'));

        chart.draw(qYes3, options);
      }