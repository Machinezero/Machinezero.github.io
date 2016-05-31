
     
      google.charts.setOnLoadCallback(drawChartqNo4);
      function drawChartqNo4() {

        var qNo4 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 10',3],['Figure 11',3],['Figure 12',6]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoq4'));

        chart.draw(qNo4, options);
      }