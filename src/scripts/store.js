import { readable } from "svelte/store";
import moment from "moment";
import { parse } from "toml";

async function loadActivity() {
  const response = await fetch("static/activity.toml");
  const tomlString = await response.text();
  const data = parse(tomlString);
  //sort by date
  data["articles"].sort(function (a, b) {
    const dateA = moment(a.date, "DD-MM-YYYY");
    const dateB = moment(b.date, "DD-MM-YYYY");
    if (dateA.isBefore(dateB)) {
      return 1;
    } else if (dateA.isAfter(dateB)) {
      return -1;
    } else {
      return 0;
    }
  });

  return readable(data["articles"]);
}

export const loadedActivity = await loadActivity();

//read all data and write into readable stoers

// async function loadPapers() {
//     const response = await fetch("static/publications.toml");
//     const tomlString = await response.text();
//     const data = parse(tomlString);
//     return data;
//   }

// async function loadPeople() {
//   const response = await fetch("static/people.toml");
//   const tomlString = await response.text();
//   const data = parse(tomlString);
//   return data["researchers"];
// }
