
     
      google.charts.setOnLoadCallback(drawChartqYes9);
      function drawChartqYes9() {

        var qYes9 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['No',3],['Yes',15]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartYesq9'));

        chart.draw(qYes9, options);
      }