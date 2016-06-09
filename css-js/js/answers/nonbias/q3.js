
     
      google.charts.setOnLoadCallback(drawChartqNone3);
      function drawChartqNone3() {

        var qNone3 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['FIgure 7',6],['Figure 8',9],['Figure 9',15]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoneq3'));

        chart.draw(qNone3, options);
      }