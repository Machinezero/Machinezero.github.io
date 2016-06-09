
     
      google.charts.setOnLoadCallback(drawChartqNone9);
      function drawChartqNone9() {

        var qNone9 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['No',6],['Yes',24]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoneq9'));

        chart.draw(qNone9, options);
      }