(function(){
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChartqNone11);
      function drawChartqNone11() {

        var qNone11 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['',10]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoneq11'));

        chart.draw(qNone11, options);
      }
       })