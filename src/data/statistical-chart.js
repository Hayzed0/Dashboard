export const websiteViewData = {
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["M", "T", "W", "T", "F", "S", "S"],
      axisTicks: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "16%",
        endingShape: "rounded",
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },

    yaxis: {
      labels: {
        style: {
          colors: "#37474f",
          fontSize: "13px",
          fontFamily: "inherit",
          fontWeight: 300,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
      colors: "#008800",
      endingShape: "rounded",
    },
    tooltip: {
      theme: "dark",
    },
  },
  series: [
    {
      name: "series 1",
      data: [50, 20, 10, 50, 20, 40, 30],
    },
  ],
  xaxis: {
    categories: ["M", "T", "W", "T", "F", "S", "S"],
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: "#37474f",
        fontSize: "13px",
        fontFamily: "inherit",
        fontWeight: 300,
      },
    },
  },
};

export const dailySalesData = {
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    xaxis: {
        categories: [
          "Jan",
          "feb",
          "mar",
          "may",
          "jun",
          "jul",
          "aug",
          "sep",
          "oct",
          "nov",
          "dec",
        ],
      },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        style: {
          colors: "#37474f",
          fontSize: "13px",
          fontFamily: "inherit",
          fontWeight: 300,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
  series: [
    {
      name: "series 1",
      data: [50, 100, 200, 150, 220, 300, 110, 200, 500, 450, 500],
    },
  ],
  xaxis: {
    categories: [
      "Jan",
      "feb",
      "mar",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ],
    axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#37474f",
          fontSize: "13px",
          fontFamily: "inherit",
          fontWeight: 300,
        },
      },
  },
};

export const completedTaskData = {
  options: {
    chart: {
      type: "line",
    },
    xaxis: {
        categories: [
          "Jan",
          "feb",
          "mar",
          "may",
          "jun",
          "jul",
          "aug",
          "sep",
          "oct",
          "nov",
          "dec",
        ],
      },
  },
  series: [
    {
      name: "completed Task",
      data: [50, 150, 200, 100, 220, 60, 110, 200, 330, 150, 300],
    },
  ],
  xaxis: {
    categories: [
      "Jan",
      "feb",
      "mar",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ],
  },
};

export default { websiteViewData, completedTaskData, dailySalesData };
