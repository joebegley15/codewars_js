function formatDuration(seconds) {
  if (seconds === 0) return "now";
  const timeDurations = {
    year: 31536000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };
  let timeArr = [];
  Object.keys(timeDurations).forEach(timeDuration => {
    const n = Math.floor(seconds / timeDurations[timeDuration]);
    n && timeArr.push([timeDuration, n]);
    seconds = seconds % timeDurations[timeDuration];
  });
  timeArr = timeArr.map(t => {
    return `${t[1]} ${t[0]}${t[1] > 1 ? "s" : ""}`;
  });
  if (timeArr.length <= 2) {
    return timeArr.join(" and ");
  }
  let returnStr = "";
  timeArr.forEach((el, i) => {
    if (i === 0) {
      returnStr += el;
    } else if (i !== timeArr.length - 1) {
      returnStr += ", " + el;
    } else {
      returnStr += " and " + el;
    }
  });
  return returnStr;
}
