var data = $.get("contribution-data.svg",  function( data ) {
  dailyValues = [];
  weeklyValues = [];
  monthlyValues = [];
  $("rect.day", data).each(function () {
    console.log(this);
    dailyValues.push({"date":  new Date($(this).attr('data-date')), 
                      "count": $(this).attr('data-count')})
  });
  // raw agg for the week; moving to a python script that runs once a day instead
  for(var i = 0; i < dailyValues.length; i+=7) {
      var sum = 0;
      for(var j = i; j < i + 7; j++) {
          if(dailyValues[j]) {
              sum += parseInt(dailyValues[j].count);
          }
      }
      d = new Date(dailyValues[i].date)
      weeklyValues.push({"date": d, "count": sum})
  }
  
  for(var i = 0; i < dailyValues.length; i+=30) {
      var sum = 0;
      for(var j = i; j < i + 30; j++) {
          if(dailyValues[j]) {
              sum += parseInt(dailyValues[j].count);
          }
      }
      d = new Date(dailyValues[i].date)
      monthlyValues.push({"date": d, "count": sum})
  }
  console.log(JSON.stringify(weeklyValues));
  MG.data_graphic({
    title: "Commits",
    data: [dailyValues, weeklyValues, monthlyValues],
    area: false,
    full_width: true,
    height: 300,
    target: "#contributions",
    interpolate: d3.curveStep,
    x_accessor: "date",
    y_accessor: "count",
  });
});

