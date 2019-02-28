let startDay = moment("2019-02-28");
let today = moment();
let day = today.diff(startDay, "days") + 1;
console.log(day);

getUrlVars = () => {
  let vars = {};
  let parts = window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    (m, key, value) => {
      vars[key] = value;
    }
  );
  return vars;
};

const dayNumber = getUrlVars()["day"] || day;

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
