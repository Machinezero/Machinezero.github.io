
     
      google.charts.setOnLoadCallback(drawChartqYes10);
      function drawChartqYes10() {

        var qYes10 = google.visualization.arrayToDataTable([
          ['Answer', 'Count'],
          ['No, the one with the fountain is better.',3],['No, the one with the lion statue is better.',9],['Yes',6]
        ]);

        var options = {
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechartYesq10'));

        chart.draw(qYes10, options);
      }