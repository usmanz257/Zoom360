export class Chartthemes{
    public darkLucidaTheme:object;
    public defaulttheme:object;
constructor(){
  this.darkLucidaTheme={
    colors: [
      "#2b908f",
      "#90ee7e",
      "#f45b5b",
      "#7798BF",
      "#aaeeee",
      "#ff0066",
      "#eeaaee",
      "#55BF3B",
      "#DF5353",
      "#7798BF",
      "#aaeeee"
    ],
    symbols: [
      "circle",
      "diamond",
      "square",
      "triangle",
      "triangle-down"
    ],
    lang: {
      loading: "Loading...",
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      weekdays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      decimalPoint: ".",
      numericSymbols: [
        "k",
        "M",
        "G",
        "T",
        "P",
        "E"
      ],
      resetZoom: "Reset zoom",
      resetZoomTitle: "Reset zoom level 1:1",
      thousandsSep: " "
    },
    global: {},
    time: {
      timezoneOffset: 0,
      useUTC: true
    },
    chart: {
      styledMode: false,
      borderRadius: 0,
      colorCount: 10,
      defaultSeriesType: "line",
      ignoreHiddenSeries: true,
      spacing: [
        10,
        10,
        15,
        10
      ],
      resetZoomButton: {
        theme: {
          zIndex: 6
        },
        position: {
          align: "right",
          x: -10,
          y: 10
        }
      },
      width: null,
      height: null,
      borderColor: "#335cad",
      backgroundColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 1,
          y2: 1
        },
        stops: [
          [
            0,
            "#2a2a2b"
          ],
          [
            1,
            "#3e3e40"
          ]
        ]
      },
      plotBorderColor: "#606063",
      style: {
        fontFamily: "'Open Sans', sans-serif"
      }
    },
    title: {
      text: "Chart title",
      align: "center",
      margin: 15,
      widthAdjust: -44,
      style: {
        color: "#E0E0E3",
        textTransform: "paragraph",
        fontSize: "20px",
        fontFamily:"Open Sans"
      }
    },
    subtitle: {
      text: "",
      align: "center",
      widthAdjust: -44,
      style: {
        color: "#E0E0E3",
        textTransform: "uppercase"
      }
    },
    caption: {
      margin: 15,
      text: "",
      align: "left",
      verticalAlign: "bottom"
    },
    // plotOptions: {
    //   line: {
    //     lineWidth: 2,
    //     allowPointSelect: false,
    //     crisp: true,
    //     showCheckbox: false,
    //     animation: {
    //       duration: 1000
    //     },
    //     events: {},
    //     marker: {
    //       enabledThreshold: 2,
    //       lineColor: "#ffffff",
    //       lineWidth: 0,
    //       radius: 4,
    //       states: {
    //         normal: {
    //           animation: true
    //         },
    //         hover: {
    //           animation: {
    //             duration: 50
    //           },
    //           enabled: true,
    //           radiusPlus: 2,
    //           lineWidthPlus: 1
    //         },
    //         select: {
    //           fillColor: "#cccccc",
    //           lineColor: "#000000",
    //           lineWidth: 2
    //         }
    //       }
    //     },
    //     point: {
    //       events: {}
    //     },
    //     dataLabels: {
    //       animation: {},
    //       align: "center",
    //       defer: true,
    //       padding: 5,
    //       style: {
    //         fontSize: "11px",
    //         fontWeight: "bold",
    //         color: "contrast",
    //         textOutline: "1px contrast"
    //       },
    //       verticalAlign: "bottom",
    //       x: 0,
    //       y: 0
    //     },
    //     cropThreshold: 300,
    //     opacity: 1,
    //     pointRange: 0,
    //     softThreshold: true,
    //     states: {
    //       normal: {
    //         animation: true
    //       },
    //       hover: {
    //         animation: {
    //           duration: 50
    //         },
    //         lineWidthPlus: 1,
    //         marker: {},
    //         halo: {
    //           size: 10,
    //           opacity: 0.25
    //         }
    //       },
    //       select: {
    //         animation: {
    //           duration: 0
    //         }
    //       },
    //       inactive: {
    //         animation: {
    //           duration: 50
    //         },
    //         opacity: 0.2
    //       }
    //     },
    //     stickyTracking: true,
    //     turboThreshold: 1000,
    //     findNearestPointBy: "x"
    //   },
    //   area: {
    //     lineWidth: 2,
    //     allowPointSelect: false,
    //     crisp: true,
    //     showCheckbox: false,
    //     animation: {
    //       duration: 1000
    //     },
    //     events: {},
    //     marker: {
    //       enabledThreshold: 2,
    //       lineColor: "#ffffff",
    //       lineWidth: 0,
    //       radius: 4,
    //       states: {
    //         normal: {
    //           animation: true
    //         },
    //         hover: {
    //           animation: {
    //             duration: 50
    //           },
    //           enabled: true,
    //           radiusPlus: 2,
    //           lineWidthPlus: 1
    //         },
    //         select: {
    //           fillColor: "#cccccc",
    //           lineColor: "#000000",
    //           lineWidth: 2
    //         }
    //       }
    //     },
    //     point: {
    //       events: {}
    //     },
    //     dataLabels: {
    //       animation: {},
    //       align: "center",
    //       defer: true,
    //       padding: 5,
    //       style: {
    //         fontSize: "11px",
    //         fontWeight: "bold",
    //         color: "contrast",
    //         textOutline: "1px contrast"
    //       },
    //       verticalAlign: "bottom",
    //       x: 0,
    //       y: 0
    //     },
    //     cropThreshold: 300,
    //     opacity: 1,
    //     pointRange: 0,
    //     softThreshold: true,
    //     states: {
    //       normal: {
    //         animation: true
    //       },
    //       hover: {
    //         animation: {
    //           duration: 50
    //         },
    //         lineWidthPlus: 1,
    //         marker: {},
    //         halo: {
    //           size: 10,
    //           opacity: 0.25
    //         }
    //       },
    //       select: {
    //         animation: {
    //           duration: 0
    //         }
    //       },
    //       inactive: {
    //         animation: {
    //           duration: 50
    //         },
    //         opacity: 0.2
    //       }
    //     },
    //     stickyTracking: true,
    //     turboThreshold: 1000,
    //     findNearestPointBy: "x",
    //     threshold: 0
    //   },
    //   spline: {
    //     lineWidth: 2,
    //     allowPointSelect: false,
    //     crisp: true,
    //     showCheckbox: false,
    //     animation: {
    //       duration: 1000
    //     },
    //     events: {},
    //     marker: {
    //       enabledThreshold: 2,
    //       lineColor: "#ffffff",
    //       lineWidth: 0,
    //       radius: 4,
    //       states: {
    //         normal: {
    //           animation: true
    //         },
    //         hover: {
    //           animation: {
    //             duration: 50
    //           },
    //           enabled: true,
    //           radiusPlus: 2,
    //           lineWidthPlus: 1
    //         },
    //         select: {
    //           fillColor: "#cccccc",
    //           lineColor: "#000000",
    //           lineWidth: 2
    //         }
    //       }
    //     },
    //     point: {
    //       events: {}
    //     },
    //     dataLabels: {
    //       animation: {},
    //       align: "center",
    //       defer: true,
    //       padding: 5,
    //       style: {
    //         fontSize: "11px",
    //         fontWeight: "bold",
    //         color: "contrast",
    //         textOutline: "1px contrast"
    //       },
    //       verticalAlign: "bottom",
    //       x: 0,
    //       y: 0
    //     },
    //     cropThreshold: 300,
    //     opacity: 1,
    //     pointRange: 0,
    //     softThreshold: true,
    //     states: {
    //       normal: {
    //         animation: true
    //       },
    //       hover: {
    //         animation: {
    //           duration: 50
    //         },
    //         lineWidthPlus: 1,
    //         marker: {},
    //         halo: {
    //           size: 10,
    //           opacity: 0.25
    //         }
    //       },
    //       select: {
    //         animation: {
    //           duration: 0
    //         }
    //       },
    //       inactive: {
    //         animation: {
    //           duration: 50
    //         },
    //         opacity: 0.2
    //       }
    //     },
    //     stickyTracking: true,
    //     turboThreshold: 1000,
    //     findNearestPointBy: "x"
    //   },
    //   areaspline: {
    //     lineWidth: 2,
    //     allowPointSelect: false,
    //     crisp: true,
    //     showCheckbox: false,
    //     animation: {
    //       duration: 1000
    //     },
    //     events: {},
    //     marker: {
    //       enabledThreshold: 2,
    //       lineColor: "#ffffff",
    //       lineWidth: 0,
    //       radius: 4,
    //       states: {
    //         normal: {
    //           animation: true
    //         },
    //         hover: {
    //           animation: {
    //             duration: 50
    //           },
    //           enabled: true,
    //           radiusPlus: 2,
    //           lineWidthPlus: 1
    //         },
    //         select: {
    //           fillColor: "#cccccc",
    //           lineColor: "#000000",
    //           lineWidth: 2
    //         }
    //       }
    //     },
    //     point: {
    //       events: {}
    //     },
    //     dataLabels: {
    //       animation: {},
    //       align: "center",
    //       defer: true,
    //       padding: 5,
    //       style: {
    //         fontSize: "11px",
    //         fontWeight: "bold",
    //         color: "contrast",
    //         textOutline: "1px contrast"
    //       },
    //       verticalAlign: "bottom",
    //       x: 0,
    //       y: 0
    //     },
    //     cropThreshold: 300,
    //     opacity: 1,
    //     pointRange: 0,
    //     softThreshold: true,
    //     states: {
    //       normal: {
    //         animation: true
    //       },
    //       hover: {
    //         animation: {
    //           duration: 50
    //         },
    //         lineWidthPlus: 1,
    //         marker: {},
    //         halo: {
    //           size: 10,
    //           opacity: 0.25
    //         }
    //       },
    //       select: {
    //         animation: {
    //           duration: 0
    //         }
    //       },
    //       inactive: {
    //         animation: {
    //           duration: 50
    //         },
    //         opacity: 0.2
    //       }
    //     },
    //     stickyTracking: true,
    //     turboThreshold: 1000,
    //     findNearestPointBy: "x",
    //     threshold: 0
    //   },
    //   column: {
    //     lineWidth: 2,
    //     allowPointSelect: false,
    //     crisp: true,
    //     showCheckbox: false,
    //     animation: {
    //       duration: 1000
    //     },
    //     events: {},
    //     marker: null,
    //     point: {
    //       events: {}
    //     },
    //     dataLabels: {
    //       animation: {},
    //       defer: true,
    //       padding: 5,
    //       style: {
    //         fontSize: "11px",
    //         fontWeight: "bold",
    //         color: "contrast",
    //         textOutline: "1px contrast"
    //       },
    //       x: 0
    //     },
    //     cropThreshold: 50,
    //     opacity: 1,
    //     pointRange: null,
    //     softThreshold: true,
    //     states: {
    //       normal: {
    //         animation: true
    //       },
    //       hover: {
    //         animation: {
    //           duration: 50
    //         },
    //         lineWidthPlus: 1,
    //         marker: {},
    //         halo: false,
    //         brightness: 0.1
    //       },
    //       select: {
    //         animation: {
    //           duration: 0
    //         },
    //         color: "#cccccc",
    //         borderColor: "#000000"
    //       },
    //       inactive: {
    //         animation: {
    //           duration: 50
    //         },
    //         opacity: 0.2
    //       }
    //     },
    //     stickyTracking: false,
    //     turboThreshold: 1000,
    //     findNearestPointBy: "x",
    //     borderRadius: 0,
    //     centerInCategory: false,
    //     groupPadding: 0.2,
    //     pointPadding: 0.1,
    //     minPointLength: 0,
    //     startFromThreshold: true,
    //     tooltip: {
    //       distance: 6
    //     },
    //     threshold: 0,
    //     borderColor: "#ffffff"
    //   },
    //   bar: {
    //     lineWidth: 2,
    //     allowPointSelect: false,
    //     crisp: true,
    //     showCheckbox: false,
    //     animation: {
    //       duration: 1000
    //     },
    //     events: {},
    //     marker: null,
    //     point: {
    //       events: {}
    //     },
    //     dataLabels: {
    //       animation: {},
    //       defer: true,
    //       padding: 5,
    //       style: {
    //         fontSize: "11px",
    //         fontWeight: "bold",
    //         color: "contrast",
    //         textOutline: "1px contrast"
    //       },
    //       x: 0
    //     },
    //     cropThreshold: 50,
    //     opacity: 1,
    //     pointRange: null,
    //     softThreshold: true,
    //     states: {
    //       normal: {
    //         animation: true
    //       },
    //       hover: {
    //         animation: {
    //           duration: 50
    //         },
    //         lineWidthPlus: 1,
    //         marker: {},
    //         halo: false,
    //         brightness: 0.1
    //       },
    //       select: {
    //         animation: {
    //           duration: 0
    //         },
    //         color: "#cccccc",
    //         borderColor: "#000000"
    //       },
    //       inactive: {
    //         animation: {
    //           duration: 50
    //         },
    //         opacity: 0.2
    //       }
    //     },
    //     stickyTracking: false,
    //     turboThreshold: 1000,
    //     findNearestPointBy: "x",
    //     borderRadius: 0,
    //     centerInCategory: false,
    //     groupPadding: 0.2,
    //     pointPadding: 0.1,
    //     minPointLength: 0,
    //     startFromThreshold: true,
    //     tooltip: {
    //       distance: 6
    //     },
    //     threshold: 0,
    //     borderColor: "#ffffff"
    //   },
    //   scatter: {
    //     lineWidth: 0,
    //     allowPointSelect: false,
    //     crisp: true,
    //     showCheckbox: false,
    //     animation: {
    //       duration: 1000
    //     },
    //     events: {},
    //     marker: {
    //       enabledThreshold: 2,
    //       lineColor: "#ffffff",
    //       lineWidth: 0,
    //       radius: 4,
    //       states: {
    //         normal: {
    //           animation: true
    //         },
    //         hover: {
    //           animation: {
    //             duration: 50
    //           },
    //           enabled: true,
    //           radiusPlus: 2,
    //           lineWidthPlus: 1
    //         },
    //         select: {
    //           fillColor: "#cccccc",
    //           lineColor: "#000000",
    //           lineWidth: 2
    //         }
    //       },
    //       enabled: true
    //     },
    //     point: {
    //       events: {}
    //     },
    //     dataLabels: {
    //       animation: {},
    //       align: "center",
    //       defer: true,
    //       padding: 5,
    //       style: {
    //         fontSize: "11px",
    //         fontWeight: "bold",
    //         color: "contrast",
    //         textOutline: "1px contrast"
    //       },
    //       verticalAlign: "bottom",
    //       x: 0,
    //       y: 0
    //     },
    //     cropThreshold: 300,
    //     opacity: 1,
    //     pointRange: 0,
    //     softThreshold: true,
    //     states: {
    //       normal: {
    //         animation: true
    //       },
    //       hover: {
    //         animation: {
    //           duration: 50
    //         },
    //         lineWidthPlus: 1,
    //         marker: {},
    //         halo: {
    //           size: 10,
    //           opacity: 0.25
    //         }
    //       },
    //       select: {
    //         animation: {
    //           duration: 0
    //         }
    //       },
    //       inactive: {
    //         animation: {
    //           duration: 50
    //         },
    //         opacity: 0.2
    //       }
    //     },
    //     stickyTracking: true,
    //     turboThreshold: 1000,
    //     findNearestPointBy: "xy",
    //     jitter: {
    //       x: 0,
    //       y: 0
    //     },
    //     tooltip: {
    //       headerFormat: "<span style=\"color:{point.color}\">●</span> <span style=\"font-size: 10px\"> {series.name}</span><br/>",
    //       pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
    //     }
    //   },
    //   pie: {
    //     allowPointSelect: false,
    //     crisp: true,
    //     showCheckbox: false,
    //     animation: {
    //       duration: 1000
    //     },
    //     events: {},
    //     marker: null,
    //     point: {
    //       events: {}
    //     },
    //     dataLabels: {
    //       animation: {},
    //       align: "center",
    //       defer: true,
    //       padding: 5,
    //       style: {
    //         fontSize: "11px",
    //         fontWeight: "bold",
    //         color: "contrast",
    //         textOutline: "1px contrast"
    //       },
    //       verticalAlign: "bottom",
    //       x: 0,
    //       y: 0,
    //       allowOverlap: true,
    //       connectorPadding: 5,
    //       connectorShape: "fixedOffset",
    //       crookDistance: "70%",
    //       distance: 30,
    //       enabled: true,
    //       softConnector: true
    //     },
    //     cropThreshold: 300,
    //     opacity: 1,
    //     pointRange: 0,
    //     softThreshold: true,
    //     states: {
    //       normal: {
    //         animation: true
    //       },
    //       hover: {
    //         animation: {
    //           duration: 50
    //         },
    //         lineWidthPlus: 1,
    //         marker: {},
    //         halo: {
    //           size: 10,
    //           opacity: 0.25
    //         },
    //         brightness: 0.1
    //       },
    //       select: {
    //         animation: {
    //           duration: 0
    //         }
    //       },
    //       inactive: {
    //         animation: {
    //           duration: 50
    //         },
    //         opacity: 0.2
    //       }
    //     },
    //     stickyTracking: false,
    //     turboThreshold: 1000,
    //     findNearestPointBy: "x",
    //     center: [
    //       null,
    //       null
    //     ],
    //     clip: false,
    //     colorByPoint: true,
    //     ignoreHiddenPoint: true,
    //     inactiveOtherPoints: true,
    //     legendType: "point",
    //     size: null,
    //     showInLegend: false,
    //     slicedOffset: 10,
    //     tooltip: {
    //       followPointer: true
    //     },
    //     borderColor: "#ffffff",
    //     borderWidth: 1
    //   },
    //   series: {
    //     dataLabels: {
    //       color: "#F0F0F3",
    //       style: {
    //         fontSize: "12px"
    //       }
    //     },
    //     marker: {
    //       lineColor: "#333"
    //     }
    //   },
    //   boxplot: {
    //     fillColor: "#505053"
    //   },
    //   candlestick: {
    //     lineColor: "white"
    //   },
    //   errorbar: {
    //     color: "white"
    //   }
    // },
    labels: {
      style: {
        position: "absolute",
        color: "#707073"
      }
    },
    legend: {
      enabled: true,
      align: "right",
      alignColumns: true,
      layout:"vertical",
      floating:true,
      verticalAlign: "top",
      borderColor: "#ffffff",
      backgroundColor:"#000000",
      BorderWidth : 1,
      borderRadius: 0,
      navigation: {
        activeColor: "#003399",
        inactiveColor: "#cccccc"
      },
      itemStyle: {
        color: "#E0E0E3",
        cursor: "pointer",
        fontSize: "12px",
        fontWeight: "bold",
        textOverflow: "ellipsis"
      },
      itemHoverStyle: {
        color: "#FFF"
      },
      itemHiddenStyle: {
        color: "#606063"
      },
      shadow: false,
      itemCheckboxStyle: {
        position: "absolute",
        width: "13px",
        height: "13px"
      },
      squareSymbol: true,
      symbolPadding: 5,
      x: 0,
      y: 0,
      title: {
        style: {
          fontWeight: "bold",
          color: "#C0C0C0"
        }
      },
   //   backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    loading: {
      labelStyle: {
        fontWeight: "bold",
        position: "relative",
        top: "45%"
      },
      style: {
        position: "absolute",
        backgroundColor: "#000000",
        opacity: 0.5,
        textAlign: "center"
      }
    },
    tooltip: {
      enabled: true,
      animation: true,
      borderRadius: 3,
      dateTimeLabelFormats: {
        millisecond: "%A, %b %e, %H:%M:%S.%L",
        second: "%A, %b %e, %H:%M:%S",
        minute: "%A, %b %e, %H:%M",
        hour: "%A, %b %e, %H:%M",
        day: "%A, %b %e, %Y",
        week: "Week from %A, %b %e, %Y",
        month: "%B %Y",
        year: "%Y"
      },
      footerFormat: "",
      padding: 8,
      snap: 10,
      headerFormat: "<span style=\"font-size: 10px\">{point.key}</span><br/>",
      pointFormat: "<span style=\"color:{point.color}\">●</span> {series.name}: <b>{point.y}</b><br/>",
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      borderWidth: 1,
      shadow: true,
      style: {
        color: "#F0F0F0",
        cursor: "default",
        fontSize: "12px",
        whiteSpace: "nowrap"
      }
    },
    credits: {
      enabled: true,
      href: "https://www.highcharts.com?credits",
      position: {
        align: "right",
        x: -10,
        verticalAlign: "bottom",
        y: -5
      },
      style: {
        cursor: "pointer",
        color: "#666",
        fontSize: "9px"
      },
      text: ""
    },
    xAxis: {
      gridLineColor: "#707073",
      labels: {
        style: {
          color: "#E0E0E3"
        }
      },
      lineColor: "#707073",
      minorGridLineColor: "#505053",
      tickColor: "#707073",
      title: {
        style: {
          color: "#A0A0A3"
        }
      }
    },
    yAxis: {
      gridLineColor: "#707073",
      labels: {
        style: {
          color: "#E0E0E3"
        }
      },
      lineColor: "#707073",
      minorGridLineColor: "#505053",
      tickColor: "#707073",
      tickWidth: 1,
      title: {
        style: {
          color: "#A0A0A3"
        }
      }
    },
    drilldown: {
      activeAxisLabelStyle: {
        color: "#F0F0F3"
      },
      activeDataLabelStyle: {
        color: "#F0F0F3"
      }
    },
    navigation: {
      buttonOptions: {
        symbolStroke: "#DDDDDD",
        theme: {
          fill: "#505053"
        }
      }
    },
    rangeSelector: {
      buttonTheme: {
        fill: "#505053",
        stroke: "#000000",
        style: {
          color: "#CCC"
        },
        states: {
          hover: {
            fill: "#707073",
            stroke: "#000000",
            style: {
              color: "white"
            }
          },
          select: {
            fill: "#000003",
            stroke: "#000000",
            style: {
              color: "white"
            }
          }
        }
      },
      inputBoxBorderColor: "#505053",
      inputStyle: {
        backgroundColor: "#333",
        color: "silver"
      },
      labelStyle: {
        color: "silver"
      }
    },
    navigator: {
      handles: {
        backgroundColor: "#666",
        borderColor: "#AAA"
      },
      outlineColor: "#CCC",
      maskFill: "rgba(255,255,255,0.1)",
      series: {
        color: "#7798BF",
        lineColor: "#A6C7ED"
      },
      xAxis: {
        gridLineColor: "#505053"
      }
    },
    scrollbar: {
      barBackgroundColor: "#808083",
      barBorderColor: "#808083",
      buttonArrowColor: "#CCC",
      buttonBackgroundColor: "#606063",
      buttonBorderColor: "#606063",
      rifleColor: "#FFF",
      trackBackgroundColor: "#404043",
      trackBorderColor: "#404043"
    }
  }
    // this.darkLucidaTheme= {
    //     colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
    //       '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'
    //     ],
    //     chart: {
    //       backgroundColor: {
    //         linearGradient: {
    //           x1: 0,
    //           y1: 0,
    //           x2: 1,
    //           y2: 1
    //         },
    //         stops: [
    //           [0, '#2a2a2b'],
    //           [1, '#3e3e40']
    //         ]
    //       },
    //       style: {
    //         fontFamily: '\'Unica One\', sans-serif'
    //       },
    //       plotBorderColor: '#606063'
    //     },
    //     title: {
    //       style: {
    //         color: '#E0E0E3',
    //         textTransform: 'uppercase',
    //         fontSize: '20px'
    //       }
    //     },
    //     subtitle: {
    //       style: {
    //         color: '#E0E0E3',
    //         textTransform: 'uppercase'
    //       }
    //     },
    //     xAxis: {
    //       gridLineColor: '#707073',
    //       labels: {
    //         style: {
    //           color: '#E0E0E3'
    //         }
    //       },
    //       lineColor: '#707073',
    //       minorGridLineColor: '#505053',
    //       tickColor: '#707073',
    //       title: {
    //         style: {
    //           color: '#A0A0A3'
      
    //         }
    //       }
    //     },
    //     yAxis: {
    //       gridLineColor: '#707073',
    //       labels: {
    //         style: {
    //           color: '#E0E0E3'
    //         }
    //       },
    //       lineColor: '#707073',
    //       minorGridLineColor: '#505053',
    //       tickColor: '#707073',
    //       tickWidth: 1,
    //       title: {
    //         style: {
    //           color: '#A0A0A3'
    //         }
    //       }
    //     },
    //     tooltip: {
    //       backgroundColor: 'rgba(0, 0, 0, 0.85)',
    //       style: {
    //         color: '#F0F0F0'
    //       }
    //     },
    //     plotOptions: {
    //       series: {
    //         dataLabels: {
    //           color: '#F0F0F3',
    //           style: {
    //             fontSize: '13px'
    //           }
    //         },
    //         marker: {
    //           lineColor: '#333'
    //         }
    //       },
    //       boxplot: {
    //         fillColor: '#505053'
    //       },
    //       candlestick: {
    //         lineColor: 'white'
    //       },
    //       errorbar: {
    //         color: 'white'
    //       }
    //     },
    //     legend: {
    //       backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //       itemStyle: {
    //         color: '#E0E0E3'
    //       },
    //       itemHoverStyle: {
    //         color: '#FFF'
    //       },
    //       itemHiddenStyle: {
    //         color: '#606063'
    //       },
    //       title: {
    //         style: {
    //           color: '#C0C0C0'
    //         }
    //       }
    //     },
    //     credits: {
    //       style: {
    //         color: '#666'
    //       }
    //     },
    //     labels: {
    //       style: {
    //         color: '#707073'
    //       }
    //     },
      
    //     drilldown: {
    //       activeAxisLabelStyle: {
    //         color: '#F0F0F3'
    //       },
    //       activeDataLabelStyle: {
    //         color: '#F0F0F3'
    //       }
    //     },
    //     navigation: {
    //       buttonOptions: {
    //         symbolStroke: '#DDDDDD',
    //         theme: {
    //           fill: '#505053'
    //         }
    //       }
    //     },
      
    //     // scroll charts
    //     rangeSelector: {
    //       buttonTheme: {
    //         fill: '#505053',
    //         stroke: '#000000',
    //         style: {
    //           color: '#CCC'
    //         },
    //         states: {
    //           hover: {
    //             fill: '#707073',
    //             stroke: '#000000',
    //             style: {
    //               color: 'white'
    //             }
    //           },
    //           select: {
    //             fill: '#000003',
    //             stroke: '#000000',
    //             style: {
    //               color: 'white'
    //             }
    //           }
    //         }
    //       },
    //       inputBoxBorderColor: '#505053',
    //       inputStyle: {
    //         backgroundColor: '#333',
    //         color: 'silver'
    //       },
    //       labelStyle: {
    //         color: 'silver'
    //       }
    //     },
      
    //     navigator: {
    //       handles: {
    //         backgroundColor: '#666',
    //         borderColor: '#AAA'
    //       },
    //       outlineColor: '#CCC',
    //       maskFill: 'rgba(255,255,255,0.1)',
    //       series: {
    //         color: '#7798BF',
    //         lineColor: '#A6C7ED'
    //       },
    //       xAxis: {
    //         gridLineColor: '#505053'
    //       }
    //     },
      
    //     scrollbar: {
    //       barBackgroundColor: '#808083',
    //       barBorderColor: '#808083',
    //       buttonArrowColor: '#CCC',
    //       buttonBackgroundColor: '#606063',
    //       buttonBorderColor: '#606063',
    //       rifleColor: '#FFF',
    //       trackBackgroundColor: '#404043',
    //       trackBorderColor: '#404043'
    //     }
    //   };
      this.defaulttheme={
        colors: [
          "#7cb5ec",
          "#434348",
          "#90ed7d",
          "#f7a35c",
          "#8085e9",
          "#f15c80",
          "#e4d354",
          "#2b908f",
          "#f45b5b",
          "#91e8e1"
        ],
        symbols: [
          "circle",
          "diamond",
          "square",
          "triangle",
          "triangle-down"
        ],
        lang: {
          loading: "Loading...",
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ],
          shortMonths: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          weekdays: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          decimalPoint: ".",
          numericSymbols: [
            "k",
            "M",
            "G",
            "T",
            "P",
            "E"
          ],
          resetZoom: "Reset zoom",
          resetZoomTitle: "Reset zoom level 1:1",
          thousandsSep: " "
        },
        global: {},
        time: {
          timezoneOffset: 0,
          useUTC: true
        },
        chart: {
          styledMode: false,
          borderRadius: 0,
          colorCount: 10,
          defaultSeriesType: "line",
          ignoreHiddenSeries: true,
          spacing: [
            10,
            10,
            15,
            10
          ],
          resetZoomButton: {
            theme: {
              zIndex: 6
            },
            position: {
              align: "right",
              x: -10,
              y: 10
            }
          },
          width: null,
          height: null,
          borderColor: "#335cad",
          backgroundColor: "#ffffff",
          plotBorderColor: "#cccccc",
          style:{
            fontFamily: "'Open Sans'"
          }
        },
        title: {
          text: "Chart title",
          align: "center",
          margin: 15,
          widthAdjust: -44,
          style: {
            color: "#000",
            textTransform: "paragraph",
            fontSize: "20px"
          }
        },
        subtitle: {
          text: "",
          align: "center",
          widthAdjust: -44,
          style: {
            color: "#000",
            textTransform: "uppercase"
          }
        },
        caption: {
          margin: 15,
          text: "",
          align: "left",
          verticalAlign: "bottom"
        },
        // plotOptions: {
        //   line: {
        //     lineWidth: 2,
        //     allowPointSelect: false,
        //     crisp: true,
        //     showCheckbox: false,
        //     animation: {
        //       duration: 1000
        //     },
        //     events: {},
        //     marker: {
        //       enabledThreshold: 2,
        //       lineColor: "#ffffff",
        //       lineWidth: 0,
        //       radius: 4,
        //       states: {
        //         normal: {
        //           animation: true
        //         },
        //         hover: {
        //           animation: {
        //             duration: 50
        //           },
        //           enabled: true,
        //           radiusPlus: 2,
        //           lineWidthPlus: 1
        //         },
        //         select: {
        //           fillColor: "#cccccc",
        //           lineColor: "#000000",
        //           lineWidth: 2
        //         }
        //       }
        //     },
        //     point: {
        //       events: {}
        //     },
        //     dataLabels: {
        //       animation: {},
        //       align: "center",
        //       defer: true,
        //       padding: 5,
        //       style: {
        //         fontSize: "11px",
        //         fontWeight: "bold",
        //         color: "contrast",
        //         textOutline: "1px contrast"
        //       },
        //       verticalAlign: "bottom",
        //       x: 0,
        //       y: 0
        //     },
        //     cropThreshold: 300,
        //     opacity: 1,
        //     pointRange: 0,
        //     softThreshold: true,
        //     states: {
        //       normal: {
        //         animation: true
        //       },
        //       hover: {
        //         animation: {
        //           duration: 50
        //         },
        //         lineWidthPlus: 1,
        //         marker: {},
        //         halo: {
        //           size: 10,
        //           opacity: 0.25
        //         }
        //       },
        //       select: {
        //         animation: {
        //           duration: 0
        //         }
        //       },
        //       inactive: {
        //         animation: {
        //           duration: 50
        //         },
        //         opacity: 0.2
        //       }
        //     },
        //     stickyTracking: true,
        //     turboThreshold: 1000,
        //     findNearestPointBy: "x"
        //   },
        //   area: {
        //     lineWidth: 2,
        //     allowPointSelect: false,
        //     crisp: true,
        //     showCheckbox: false,
        //     animation: {
        //       duration: 1000
        //     },
        //     events: {},
        //     marker: {
        //       enabledThreshold: 2,
        //       lineColor: "#ffffff",
        //       lineWidth: 0,
        //       radius: 4,
        //       states: {
        //         normal: {
        //           animation: true
        //         },
        //         hover: {
        //           animation: {
        //             duration: 50
        //           },
        //           enabled: true,
        //           radiusPlus: 2,
        //           lineWidthPlus: 1
        //         },
        //         select: {
        //           fillColor: "#cccccc",
        //           lineColor: "#000000",
        //           lineWidth: 2
        //         }
        //       }
        //     },
        //     point: {
        //       events: {}
        //     },
        //     dataLabels: {
        //       animation: {},
        //       align: "center",
        //       defer: true,
        //       padding: 5,
        //       style: {
        //         fontSize: "11px",
        //         fontWeight: "bold",
        //         color: "contrast",
        //         textOutline: "1px contrast"
        //       },
        //       verticalAlign: "bottom",
        //       x: 0,
        //       y: 0
        //     },
        //     cropThreshold: 300,
        //     opacity: 1,
        //     pointRange: 0,
        //     softThreshold: true,
        //     states: {
        //       normal: {
        //         animation: true
        //       },
        //       hover: {
        //         animation: {
        //           duration: 50
        //         },
        //         lineWidthPlus: 1,
        //         marker: {},
        //         halo: {
        //           size: 10,
        //           opacity: 0.25
        //         }
        //       },
        //       select: {
        //         animation: {
        //           duration: 0
        //         }
        //       },
        //       inactive: {
        //         animation: {
        //           duration: 50
        //         },
        //         opacity: 0.2
        //       }
        //     },
        //     stickyTracking: true,
        //     turboThreshold: 1000,
        //     findNearestPointBy: "x",
        //     threshold: 0
        //   },
        //   spline: {
        //     lineWidth: 2,
        //     allowPointSelect: false,
        //     crisp: true,
        //     showCheckbox: false,
        //     animation: {
        //       duration: 1000
        //     },
        //     events: {},
        //     marker: {
        //       enabledThreshold: 2,
        //       lineColor: "#ffffff",
        //       lineWidth: 0,
        //       radius: 4,
        //       states: {
        //         normal: {
        //           animation: true
        //         },
        //         hover: {
        //           animation: {
        //             duration: 50
        //           },
        //           enabled: true,
        //           radiusPlus: 2,
        //           lineWidthPlus: 1
        //         },
        //         select: {
        //           fillColor: "#cccccc",
        //           lineColor: "#000000",
        //           lineWidth: 2
        //         }
        //       }
        //     },
        //     point: {
        //       events: {}
        //     },
        //     dataLabels: {
        //       animation: {},
        //       align: "center",
        //       defer: true,
        //       padding: 5,
        //       style: {
        //         fontSize: "11px",
        //         fontWeight: "bold",
        //         color: "contrast",
        //         textOutline: "1px contrast"
        //       },
        //       verticalAlign: "bottom",
        //       x: 0,
        //       y: 0
        //     },
        //     cropThreshold: 300,
        //     opacity: 1,
        //     pointRange: 0,
        //     softThreshold: true,
        //     states: {
        //       normal: {
        //         animation: true
        //       },
        //       hover: {
        //         animation: {
        //           duration: 50
        //         },
        //         lineWidthPlus: 1,
        //         marker: {},
        //         halo: {
        //           size: 10,
        //           opacity: 0.25
        //         }
        //       },
        //       select: {
        //         animation: {
        //           duration: 0
        //         }
        //       },
        //       inactive: {
        //         animation: {
        //           duration: 50
        //         },
        //         opacity: 0.2
        //       }
        //     },
        //     stickyTracking: true,
        //     turboThreshold: 1000,
        //     findNearestPointBy: "x"
        //   },
        //   areaspline: {
        //     lineWidth: 2,
        //     allowPointSelect: false,
        //     crisp: true,
        //     showCheckbox: false,
        //     animation: {
        //       duration: 1000
        //     },
        //     events: {},
        //     marker: {
        //       enabledThreshold: 2,
        //       lineColor: "#ffffff",
        //       lineWidth: 0,
        //       radius: 4,
        //       states: {
        //         normal: {
        //           animation: true
        //         },
        //         hover: {
        //           animation: {
        //             duration: 50
        //           },
        //           enabled: true,
        //           radiusPlus: 2,
        //           lineWidthPlus: 1
        //         },
        //         select: {
        //           fillColor: "#cccccc",
        //           lineColor: "#000000",
        //           lineWidth: 2
        //         }
        //       }
        //     },
        //     point: {
        //       events: {}
        //     },
        //     dataLabels: {
        //       animation: {},
        //       align: "center",
        //       defer: true,
        //       padding: 5,
        //       style: {
        //         fontSize: "11px",
        //         fontWeight: "bold",
        //         color: "contrast",
        //         textOutline: "1px contrast"
        //       },
        //       verticalAlign: "bottom",
        //       x: 0,
        //       y: 0
        //     },
        //     cropThreshold: 300,
        //     opacity: 1,
        //     pointRange: 0,
        //     softThreshold: true,
        //     states: {
        //       normal: {
        //         animation: true
        //       },
        //       hover: {
        //         animation: {
        //           duration: 50
        //         },
        //         lineWidthPlus: 1,
        //         marker: {},
        //         halo: {
        //           size: 10,
        //           opacity: 0.25
        //         }
        //       },
        //       select: {
        //         animation: {
        //           duration: 0
        //         }
        //       },
        //       inactive: {
        //         animation: {
        //           duration: 50
        //         },
        //         opacity: 0.2
        //       }
        //     },
        //     stickyTracking: true,
        //     turboThreshold: 1000,
        //     findNearestPointBy: "x",
        //     threshold: 0
        //   },
        //   column: {
        //     lineWidth: 2,
        //     allowPointSelect: false,
        //     crisp: true,
        //     showCheckbox: false,
        //     animation: {
        //       duration: 1000
        //     },
        //     events: {},
        //     marker: null,
        //     point: {
        //       events: {}
        //     },
        //     dataLabels: {
        //       animation: {},
        //       defer: true,
        //       padding: 5,
        //       style: {
        //         fontSize: "11px",
        //         fontWeight: "bold",
        //         color: "contrast",
        //         textOutline: "1px contrast"
        //       },
        //       x: 0
        //     },
        //     cropThreshold: 50,
        //     opacity: 1,
        //     pointRange: null,
        //     softThreshold: true,
        //     states: {
        //       normal: {
        //         animation: true
        //       },
        //       hover: {
        //         animation: {
        //           duration: 50
        //         },
        //         lineWidthPlus: 1,
        //         marker: {},
        //         halo: false,
        //         brightness: 0.1
        //       },
        //       select: {
        //         animation: {
        //           duration: 0
        //         },
        //         color: "#cccccc",
        //         borderColor: "#000000"
        //       },
        //       inactive: {
        //         animation: {
        //           duration: 50
        //         },
        //         opacity: 0.2
        //       }
        //     },
        //     stickyTracking: false,
        //     turboThreshold: 1000,
        //     findNearestPointBy: "x",
        //     borderRadius: 0,
        //     centerInCategory: false,
        //     groupPadding: 0.2,
        //     pointPadding: 0.1,
        //     minPointLength: 0,
        //     startFromThreshold: true,
        //     tooltip: {
        //       distance: 6
        //     },
        //     threshold: 0,
        //     borderColor: "#ffffff"
        //   },
        //   bar: {
        //     lineWidth: 2,
        //     allowPointSelect: false,
        //     crisp: true,
        //     showCheckbox: false,
        //     animation: {
        //       duration: 1000
        //     },
        //     events: {},
        //     marker: null,
        //     point: {
        //       events: {}
        //     },
        //     dataLabels: {
        //       animation: {},
        //       defer: true,
        //       padding: 5,
        //       style: {
        //         fontSize: "11px",
        //         fontWeight: "bold",
        //         color: "contrast",
        //         textOutline: "1px contrast"
        //       },
        //       x: 0
        //     },
        //     cropThreshold: 50,
        //     opacity: 1,
        //     pointRange: null,
        //     softThreshold: true,
        //     states: {
        //       normal: {
        //         animation: true
        //       },
        //       hover: {
        //         animation: {
        //           duration: 50
        //         },
        //         lineWidthPlus: 1,
        //         marker: {},
        //         halo: false,
        //         brightness: 0.1
        //       },
        //       select: {
        //         animation: {
        //           duration: 0
        //         },
        //         color: "#cccccc",
        //         borderColor: "#000000"
        //       },
        //       inactive: {
        //         animation: {
        //           duration: 50
        //         },
        //         opacity: 0.2
        //       }
        //     },
        //     stickyTracking: false,
        //     turboThreshold: 1000,
        //     findNearestPointBy: "x",
        //     borderRadius: 0,
        //     centerInCategory: false,
        //     groupPadding: 0.2,
        //     pointPadding: 0.1,
        //     minPointLength: 0,
        //     startFromThreshold: true,
        //     tooltip: {
        //       distance: 6
        //     },
        //     threshold: 0,
        //     borderColor: "#ffffff"
        //   },
        //   scatter: {
        //     lineWidth: 0,
        //     allowPointSelect: false,
        //     crisp: true,
        //     showCheckbox: false,
        //     animation: {
        //       duration: 1000
        //     },
        //     events: {},
        //     marker: {
        //       enabledThreshold: 2,
        //       lineColor: "#ffffff",
        //       lineWidth: 0,
        //       radius: 4,
        //       states: {
        //         normal: {
        //           animation: true
        //         },
        //         hover: {
        //           animation: {
        //             duration: 50
        //           },
        //           enabled: true,
        //           radiusPlus: 2,
        //           lineWidthPlus: 1
        //         },
        //         select: {
        //           fillColor: "#cccccc",
        //           lineColor: "#000000",
        //           lineWidth: 2
        //         }
        //       },
        //       enabled: true
        //     },
        //     point: {
        //       events: {}
        //     },
        //     dataLabels: {
        //       animation: {},
        //       align: "center",
        //       defer: true,
        //       padding: 5,
        //       style: {
        //         fontSize: "11px",
        //         fontWeight: "bold",
        //         color: "contrast",
        //         textOutline: "1px contrast"
        //       },
        //       verticalAlign: "bottom",
        //       x: 0,
        //       y: 0
        //     },
        //     cropThreshold: 300,
        //     opacity: 1,
        //     pointRange: 0,
        //     softThreshold: true,
        //     states: {
        //       normal: {
        //         animation: true
        //       },
        //       hover: {
        //         animation: {
        //           duration: 50
        //         },
        //         lineWidthPlus: 1,
        //         marker: {},
        //         halo: {
        //           size: 10,
        //           opacity: 0.25
        //         }
        //       },
        //       select: {
        //         animation: {
        //           duration: 0
        //         }
        //       },
        //       inactive: {
        //         animation: {
        //           duration: 50
        //         },
        //         opacity: 0.2
        //       }
        //     },
        //     stickyTracking: true,
        //     turboThreshold: 1000,
        //     findNearestPointBy: "xy",
        //     jitter: {
        //       x: 0,
        //       y: 0
        //     },
        //     tooltip: {
        //       headerFormat: "<span style=\"color:{point.color}\">●</span> <span style=\"font-size: 10px\"> {series.name}</span><br/>",
        //       pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        //     }
        //   },
        //   pie: {
        //     allowPointSelect: false,
        //     crisp: true,
        //     showCheckbox: false,
        //     animation: {
        //       duration: 1000
        //     },
        //     events: {},
        //     marker: null,
        //     point: {
        //       events: {}
        //     },
        //     dataLabels: {
        //       animation: {},
        //       align: "center",
        //       defer: true,
        //       padding: 5,
        //       style: {
        //         fontSize: "11px",
        //         fontWeight: "bold",
        //         color: "contrast",
        //         textOutline: "1px contrast"
        //       },
        //       verticalAlign: "bottom",
        //       x: 0,
        //       y: 0,
        //       allowOverlap: true,
        //       connectorPadding: 5,
        //       connectorShape: "fixedOffset",
        //       crookDistance: "70%",
        //       distance: 30,
        //       enabled: true,
        //       softConnector: true
        //     },
        //     cropThreshold: 300,
        //     opacity: 1,
        //     pointRange: 0,
        //     softThreshold: true,
        //     states: {
        //       normal: {
        //         animation: true
        //       },
        //       hover: {
        //         animation: {
        //           duration: 50
        //         },
        //         lineWidthPlus: 1,
        //         marker: {},
        //         halo: {
        //           size: 10,
        //           opacity: 0.25
        //         },
        //         brightness: 0.1
        //       },
        //       select: {
        //         animation: {
        //           duration: 0
        //         }
        //       },
        //       inactive: {
        //         animation: {
        //           duration: 50
        //         },
        //         opacity: 0.2
        //       }
        //     },
        //     stickyTracking: false,
        //     turboThreshold: 1000,
        //     findNearestPointBy: "x",
        //     center: [
        //       null,
        //       null
        //     ],
        //     clip: false,
        //     colorByPoint: true,
        //     ignoreHiddenPoint: true,
        //     inactiveOtherPoints: true,
        //     legendType: "point",
        //     size: null,
        //     showInLegend: false,
        //     slicedOffset: 10,
        //     tooltip: {
        //       followPointer: true
        //     },
        //     borderColor: "#ffffff",
        //     borderWidth: 1
        //   }
        // },
        labels: {
          style: {
            position: "absolute",
            color: "#333333"
          }
        },
        legend: {
          enabled: true,
          align: "right",
          alignColumns: true,
          layout:"vertical",
          floating:true,
          verticalAlign:"top",
          borderColor:"#CCC",
          backgroundColor:"#ffffff",
          text:"#000000",
          borderRadius: 0,
          navigation: {
            activeColor: "#003399",
            inactiveColor: "#cccccc"
          },
          itemStyle: {
            color: "#000000",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: "bold",
            textOverflow: "ellipsis"
          },
          itemHoverStyle: {
            color: "#000000"
          },
          itemHiddenStyle: {
            color: "#cccccc"
          },
          shadow: false,
          itemCheckboxStyle: {
            position: "absolute",
            width: "13px",
            height: "13px"
          },
          squareSymbol: true,
          symbolPadding: 5,
         
          x: 0,
          y: 0,
          title: {
            style: {
              fontWeight: "bold"
            }
          }
        },
        loading: {
          labelStyle: {
            fontWeight: "bold",
            position: "relative",
            top: "45%"
          },
          style: {
            position: "absolute",
            backgroundColor: "#ffffff",
            opacity: 0.5,
            textAlign: "center"
          }
        },
        tooltip: {
          enabled: true,
          animation: true,
          borderRadius: 3,
          dateTimeLabelFormats: {
            millisecond: "%A, %b %e, %H:%M:%S.%L",
            second: "%A, %b %e, %H:%M:%S",
            minute: "%A, %b %e, %H:%M",
            hour: "%A, %b %e, %H:%M",
            day: "%A, %b %e, %Y",
            week: "Week from %A, %b %e, %Y",
            month: "%B %Y",
            year: "%Y"
          },
          footerFormat: "",
          padding: 8,
          snap: 10,
          headerFormat: "<span style=\"font-size: 10px\">{point.key}</span><br/>",
          pointFormat: "<span style=\"color:{point.color}\">●</span> {series.name}: <b>{point.y}</b><br/>",
          backgroundColor: "rgba(247,247,247,0.85)",
          borderWidth: 1,
          shadow: true,
          style: {
            color: "#333333",
            cursor: "default",
            fontSize: "12px",
            whiteSpace: "nowrap"
          }
        },
        credits: {
          enabled: true,
          href: "https://www.highcharts.com?credits",
          position: {
            align: "right",
            x: -10,
            verticalAlign: "bottom",
            y: -5
          },
          style: {
            cursor: "pointer",
            color: "#999999",
            fontSize: "9px"
          },
          text: ""
        },
        xAxis: {
          gridLineColor: "#e6e6e6",
          labels: {
            style: {
              color: "#666666"
            }
          },
          lineColor: "#e6e6e6",
          minorGridLineColor: "#e6e6e6",
          tickColor: "#e6e6e6",
          title: {
            style: {
              color: "#666666"
            }
          }
        },
        yAxis: {
          gridLineColor: "#e6e6e6",
          labels: {
            style: {
              color: "#666666"
            }
          },
          lineColor: "#e6e6e6",
          minorGridLineColor: "#e6e6e6",
          tickColor: "#e6e6e6",
          tickWidth: 1,
          title: {
            style: {
              color: "#666666"
            }
          }
        },
        drilldown: {
          activeAxisLabelStyle: {
            color: "#F0F0F3"
          },
          activeDataLabelStyle: {
            color: "#F0F0F3"
          }
        },
        navigation: {
          buttonOptions: {
            symbolStroke: "#000000",
            theme: {
              fill: "#ffffff"
            }
          }
        },
        rangeSelector: {
          buttonTheme: {
            fill: "#505053",
            stroke: "#000000",
            style: {
              color: "#CCC"
            },
            states: {
              hover: {
                fill: "#707073",
                stroke: "#000000",
                style: {
                  color: "white"
                }
              },
              select: {
                fill: "#000003",
                stroke: "#000000",
                style: {
                  color: "white"
                }
              }
            }
          },
          inputBoxBorderColor: "#505053",
          inputStyle: {
            backgroundColor: "#333",
            color: "silver"
          },
          labelStyle: {
            color: "silver"
          }
        },
        navigator: {
          handles: {
            backgroundColor: "#666",
            borderColor: "#AAA"
          },
          outlineColor: "#CCC",
          maskFill: "rgba(255,255,255,0.1)",
          series: {
            color: "#7798BF",
            lineColor: "#A6C7ED"
          },
          xAxis: {
            gridLineColor: "#505053"
          }
        },
        scrollbar: {
          barBackgroundColor: "#000000",
          barBorderColor: "#000000",
          buttonArrowColor: "#000000",
          buttonBackgroundColor: "#000000",
          buttonBorderColor: "#000000",
          rifleColor: "#FFF",
          trackBackgroundColor: "#000000",
          trackBorderColor: "#000000"
        }
      }
    //  this.defaulttheme= {
    //     colors: ["#7cb5ec","#434348","#90ed7d","#f7a35c","#8085e9","#f15c80","#e4d354","#2b908f","#f45b5b","#91e8e1"],
    //      chart: {
    //         backgroundColor: '#fff',
    //         borderWidth: 0,
    //         plotBackgroundColor: '#fff',
    //         plotShadow: false,
    //         plotBorderWidth: 0
    //      },
    //      title: {
    //         style: {
    //               color: '#274b6d',//#3E576F',
    //               fontSize: '16px'
    //         }
    //      },
    //      subtitle: {
    //         style: {
    //               color: '#4d759e'
    //          }
    //      },
    //      xAxis: {
    //         gridLineWidth: 0,
    //         lineColor: '#C0D0E0',
    //         tickColor: '#C0D0E0',
    //         labels: {
    //            style: {
    //               color: '#666',
    //               cursor: 'default',
    //               fontSize: '11px',
    //               lineHeight: '14px'
    //            }
    //         },
    //         title: {
    //            style: {
    //                   color: '#4d759e',
    //                   fontWeight: 'bold'
    //           }
    //         }
    //      },
    //      yAxis: {
    //         minorTickInterval: null,
    //         lineColor: '#C0D0E0',
    //         lineWidth: 1,
    //         tickWidth: 1,
    //         tickColor: '#C0D0E0',
    //         labels: {
    //            style: {
    //               color: '#666',
    //               cursor: 'default',
    //               fontSize: '11px',
    //               lineHeight: '14px'
    //            }
    //         },
    //         title: {
    //            style: {
    //                   color: '#4d759e',
    //                   fontWeight: 'bold'
    //           }
    //         }
    //      },
    //      legend: {
    //         itemStyle: {
    //               color: '#274b6d',
    //               fontSize: '12px'
    //         },
    //         itemHoverStyle: {
    //            color: '#000'
    //         },
    //         itemHiddenStyle: {
    //            color: '#CCC'
    //         }
    //      },
    //      labels: {
    //         style: {
    //               color: '#3E576F'
    //           }
    //      },
      
    //      navigation: {
    //         buttonOptions: {
    //            theme: {
    //               stroke: '#CCCCCC'
    //            }
    //         }
    //      }
    //   }; 
}
}