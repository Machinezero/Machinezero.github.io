
     
      google.charts.setOnLoadCallback(drawChartqNo7);
      function drawChartqNo7() {

        var qNo7 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 20',4],['Figure 21',3],['Figure 22',5]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoq7'));

        chart.draw(qNo7, options);
      }