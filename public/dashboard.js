(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('fakeovertime'),
    {
      data: {
          datasets: [{
              type: 'bar',
              label: 'Bar Dataset',
              data: data.map(row => row.count),
              order: 2
          }, 
          {
              type: 'line',
              label: 'Line Dataset',
              data: data.map(row => row.count),
              order: 1
          }],
          labels: data.map(row => row.year)
      }
    }
  );
})();
