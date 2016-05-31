
     
      google.charts.setOnLoadCallback(drawChartqYes8);
      function drawChartqYes8() {

        var qYes8 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 23',4],['Figure 24',6],['Figure 25',8]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartYesq8'));

        chart.draw(qYes8, options);
      }