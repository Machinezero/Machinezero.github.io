
     
      google.charts.setOnLoadCallback(drawChartqNo1);
      function drawChartqNo1() {

        var qNo1 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 1',2],['Figure 2',5],['Figure 3',5]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoq1'));

        chart.draw(qNo1, options);
      }