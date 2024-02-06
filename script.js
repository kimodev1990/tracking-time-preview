const info = `[
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]`;

const dataInfo = JSON.parse(info);

/* Testing
console.log(dataInfo[0].title);
*/

const dailyButton = document.getElementById("daily-button");
const weeklyButton = document.getElementById("weekly-button");
const monthlyButton = document.getElementById("monthly-button");

const currentHours = document.querySelectorAll("#current-hours");
const lastHours = document.querySelectorAll("#last-hours");

dailyButton.addEventListener("click", () => {
  currentHours.forEach((items, index) => {
    items.innerHTML = dataInfo[index].timeframes.daily.current + "hrs";
  });
  lastHours.forEach((items, index) => {
    items.innerHTML =
      "Last Day - " + dataInfo[index].timeframes.daily.previous + "hrs";
  });
});

weeklyButton.addEventListener("click", () => {
  currentHours.forEach((items, index) => {
    items.innerHTML = dataInfo[index].timeframes.weekly.current + "hrs";
  });
  lastHours.forEach((items, index) => {
    items.innerHTML =
      "Last Week - " + dataInfo[index].timeframes.weekly.previous + "hrs";
  });
});

monthlyButton.addEventListener("click", () => {
  currentHours.forEach((items, index) => {
    items.innerHTML = dataInfo[index].timeframes.monthly.current + "hrs";
  });
  lastHours.forEach((items, index) => {
    items.innerHTML =
      "Last Month - " + dataInfo[index].timeframes.monthly.previous + "hrs";
  });
});
