
     
      google.charts.setOnLoadCallback(drawChartqNo10);
      function drawChartqNo10() {

        var qNo10 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['No, the one with the fountain is better.',1],['No, the one with the lion statue is better.',5],['Yes',6]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoq10'));

        chart.draw(qNo10, options);
      }