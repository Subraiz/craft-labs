window.onload = () => {
  let ctx = document.getElementById("myChart");
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let ratio = (windowWidth + 0.85 * windowWidth) / windowHeight;

  let dataConfiguration = {
    label: "Visitors",
    data: [
      { x: 0, y: 25 },
      { x: 1, y: 60 },
      { x: 2, y: 45 },
      { x: 3, y: 34 },
      { x: 4, y: 124 },
      { x: 5, y: 23 },
      { x: 6, y: 88 },
      { x: 7, y: 95 }
    ],
    backgroundColor: "rgba(179,150,255,.6)",
    pointBackgroundColor: "#FFD521",
    borderColor: "purple"
  };

  const visitorsData = [
    { x: 0, y: 25 },
    { x: 1, y: 60 },
    { x: 2, y: 45 },
    { x: 3, y: 34 },
    { x: 4, y: 124 },
    { x: 5, y: 23 },
    { x: 6, y: 88 },
    { x: 7, y: 95 }
  ];

  const ordersData = [
    { x: 0, y: 8 },
    { x: 1, y: 12 },
    { x: 2, y: 9 },
    { x: 3, y: 14 },
    { x: 4, y: 34 },
    { x: 5, y: 23 },
    { x: 6, y: 15 },
    { x: 7, y: 23 }
  ];

  const revenueData = [
    { x: 0, y: 125 },
    { x: 1, y: 120 },
    { x: 2, y: 90 },
    { x: 3, y: 140 },
    { x: 4, y: 225 },
    { x: 5, y: 233 },
    { x: 6, y: 150 },
    { x: 7, y: 230 }
  ];

  let visitorsTab = document.querySelector("#visitors-tab");
  let ordersTab = document.querySelector("#orders-tab");
  let revenueTab = document.querySelector("#revenue-tab");

  visitorsTab.addEventListener("click", () => {
    dataConfiguration.data = visitorsData;
    dataConfiguration.label = "Visitors";
    myLineChart.options.scales.yAxes[0].ticks.callback = value => {
      return value;
    };
    myLineChart.update();
  });

  ordersTab.addEventListener("click", () => {
    dataConfiguration.data = ordersData;
    dataConfiguration.label = "Orders";
    myLineChart.options.scales.yAxes[0].ticks.callback = value => {
      return value;
    };
    myLineChart.update();
  });

  revenueTab.addEventListener("click", () => {
    dataConfiguration.data = revenueData;
    dataConfiguration.label = "Revenue";
    myLineChart.options.scales.yAxes[0].ticks.callback = function(
      value,
      index,
      values
    ) {
      return "$" + value.toFixed(2);
    };
    myLineChart.update();
  });

  var myLineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Monday",
        "Tuesday",
        "Wedneday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      datasets: [dataConfiguration]
    },
    options: {
      legend: {
        display: false
      },
      aspectRatio: ratio,
      responsive: false,
      bezierCurve: true,
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false
            },
            ticks: {
              padding: 10
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              padding: 10
            }
          }
        ]
      }
    }
  });

  // Segemnted control animation
  let tabs = document.querySelectorAll(".control-tab");
  let activeTabContainer = document.querySelector(".active-tab");
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      let tabIndex = index;
      let selectedIndex = 0;
      for (var i = 0; i < tabs.length; i++) {
        let currentTab = tabs[i];
        if (currentTab.classList[1] == "selected-control-tab") {
          selectedIndex = i;
          currentTab.classList.remove("selected-control-tab");
        }
      }
      let distance = tabIndex * 31.5;
      activeTabContainer.style.left = `${distance}%`;
      tab.classList.add("selected-control-tab");
    });
  });
};
