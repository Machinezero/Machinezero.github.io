
     
      google.charts.setOnLoadCallback(drawChartqYes1);
      function drawChartqYes1() {

        var qYes1 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 1',4],['Figure 2',6],['Figure 3',8]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartYesq1'));

        chart.draw(qYes1, options);
      }