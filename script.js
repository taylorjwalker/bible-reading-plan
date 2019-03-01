let startDay = moment("2019-02-28");
let today = moment();
let day = today.diff(startDay, "days") + 1;

let dayNumber = window.location.href.match(new RegExp("/day/(.*)"))[1] || day;

let scripture = [];

READING_PLAN.forEach(list => {
  scripture.push(list[(dayNumber - 1) % list.length]);
});

substring = "";
scripture.forEach(chapter => {
  substring += chapter + ", ";
});

let url = `https://www.biblegateway.com/passage/?search=${substring}&version=CSB`;

console.log(scripture);
console.log(url);
