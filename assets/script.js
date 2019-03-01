let startDay = moment("2019-02-28");
let today = moment();
let day = today.diff(startDay, "days") + 1;

let dayNumber;
try {
  dayNumber = window.location.href.match(new RegExp("/day/(.*)"))[1];
} catch {
  dayNumber = -1;
}

if (!isNaN(dayNumber) && +dayNumber > 0) {
  let scripture = [];

  READING_PLAN.forEach(list => {
    scripture.push(list[(dayNumber - 1) % list.length]);
  });

  const passageListString = scripture.join(", ").replace(/ /g, "+");
  const url = `https://www.biblegateway.com/passage/?search=${passageListString}&version=CSB`;

  console.log(scripture);
  console.log(url);
} else {
  window.location.href = day;
}
