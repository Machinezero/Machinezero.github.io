
     
      google.charts.setOnLoadCallback(drawChartqYes5);
      function drawChartqYes5() {

        var qYes5 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 14',6],['Figure 15',12]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartYesq5'));

        chart.draw(qYes5, options);
      }