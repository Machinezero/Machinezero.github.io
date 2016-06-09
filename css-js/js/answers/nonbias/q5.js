
     
      google.charts.setOnLoadCallback(drawChartqNone5);
      function drawChartqNone5() {

        var qNone5 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 13',1],['Figure 14',8],['Figure 15',21]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoneq5'));

        chart.draw(qNone5, options);
      }