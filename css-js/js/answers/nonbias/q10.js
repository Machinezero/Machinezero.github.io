
     
      google.charts.setOnLoadCallback(drawChartqNone10);
      function drawChartqNone10() {

        var qNone10 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['No, the one with the fountain is better.',4],['No, the one with the lion statue is better.',14],['Yes',12]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoneq10'));

        chart.draw(qNone10, options);
      }