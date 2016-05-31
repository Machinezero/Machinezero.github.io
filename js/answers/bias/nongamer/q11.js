(function(){
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChartqNo11);
      function drawChartqNo11() {

        var qNo11 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['',4]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartNoq11'));

        chart.draw(qNo11, options);
      }
       })