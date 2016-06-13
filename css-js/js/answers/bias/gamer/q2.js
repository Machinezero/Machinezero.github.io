
     
      google.charts.setOnLoadCallback(drawChartqYes2);
      function drawChartqYes2() {

        var qYes2 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['FIgure 4',3],['Figure 5',7],['Figure 6',8]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartYesq2'));

        chart.draw(qYes2, options);
      }