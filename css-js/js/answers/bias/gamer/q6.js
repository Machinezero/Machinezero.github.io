
     
      google.charts.setOnLoadCallback(drawChartqYes6);
      function drawChartqYes6() {

        var qYes6 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 16',3],['Figure 17',7],['Figure 18',2],['Figure 19',6]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartYesq6'));

        chart.draw(qYes6, options);
      }