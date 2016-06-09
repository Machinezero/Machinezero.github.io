
     
      google.charts.setOnLoadCallback(drawChartqNo5);
      function drawChartqNo5() {

        var qNo5 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 13',1],['Figure 14',2],['Figure 15',9]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoq5'));

        chart.draw(qNo5, options);
      }