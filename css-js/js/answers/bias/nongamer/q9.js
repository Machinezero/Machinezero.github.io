
     
      google.charts.setOnLoadCallback(drawChartqNo9);
      function drawChartqNo9() {

        var qNo9 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['No',3],['Yes',9]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoq9'));

        chart.draw(qNo9, options);
      }