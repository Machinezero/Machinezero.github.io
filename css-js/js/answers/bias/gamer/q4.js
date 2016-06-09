
     
      google.charts.setOnLoadCallback(drawChartqYes4);
      function drawChartqYes4() {

        var qYes4 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 10',1],['Figure 11',8],['Figure 12',9]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartYesq4'));

        chart.draw(qYes4, options);
      }