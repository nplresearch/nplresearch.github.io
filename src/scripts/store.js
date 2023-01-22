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
  console.log("articles loaded");
  return readable(data["articles"]);
}

async function loadPapers() {
  const response = await fetch("static/publications.toml");
  const tomlString = await response.text();
  const data = parse(tomlString);
  console.log("publications loaded");
  return readable(data["papers"]);
}

async function loadPeople() {
  const response = await fetch("static/people.toml");
  const tomlString = await response.text();
  const data = parse(tomlString);
  return readable(data["researchers"]);
}

export const articles = await loadActivity();
export const papers = await loadPapers();
export const people = await loadPeople();
