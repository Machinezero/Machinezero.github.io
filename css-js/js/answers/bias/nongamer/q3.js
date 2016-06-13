
     
      google.charts.setOnLoadCallback(drawChartqNo3);
      function drawChartqNo3() {

        var qNo3 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['FIgure 7',1],['Figure 8',3],['Figure 9',8]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoq3'));

        chart.draw(qNo3, options);
      }