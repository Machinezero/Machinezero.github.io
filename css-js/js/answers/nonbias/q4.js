
     
      google.charts.setOnLoadCallback(drawChartqNone4);
      function drawChartqNone4() {

        var qNone4 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['Figure 10',4],['Figure 11',11],['Figure 12',15]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoneq4'));

        chart.draw(qNone4, options);
      }