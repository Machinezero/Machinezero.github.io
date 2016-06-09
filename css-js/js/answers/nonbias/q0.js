
    google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var qNone0 = google.visualization.arrayToDataTable([
          ['Response', 'Count'],
          ['Yes',     18],

          ['No',    12]
        ]);

        var options = {
        
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoneq0'));

        chart.draw(qNone0, options);
      }