(function(){
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChartqYes11);
      function drawChartqYes11() {

        var qYes11 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['',6]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartYesq11'));

        chart.draw(qYes11, options);
      }
       })