
     
      google.charts.setOnLoadCallback(drawChartqNo2);
      function drawChartqNo2() {

        var qNo2 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['FIgure 4',2],['Figure 5',3],['Figure 6',7]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoq2'));

        chart.draw(qNo2, options);
      }