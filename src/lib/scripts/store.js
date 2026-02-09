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

async function loadPapers() {
  const response = await fetch("static/publications/publications.toml");
  const tomlString = await response.text();
  const data = parse(tomlString);
  data["papers"].sort(function (a, b) {
    const yearA = moment(a.date || a.year, ["DD-MM-YYYY", "YYYY"]).year();
    const yearB = moment(b.date || b.year, ["DD-MM-YYYY", "YYYY"]).year();

    if (yearA < yearB) {
      return 1;
    } else if (yearA > yearB) {
      return -1;
    } else {
      return 0;
    }
  });
  return { featured: readable(data["featured"]), papers: readable(data["papers"]) };
}

async function loadPeople() {
  const response = await fetch("static/people/people.toml");
  const tomlString = await response.text();
  const data = parse(tomlString);
  return { people: readable(data["researchers"]), alumni: readable(data["alumni"]) };
}

async function loadProjects() {
  const response = await fetch("static/projects/projects.toml");
  const tomlString = await response.text();
  const data = parse(tomlString);
  return readable(data["projects"]);
}

async function loadCode() {
  const response = await fetch("static/code/code.toml");
  const tomlString = await response.text();
  const data = parse(tomlString);
  return readable(data["repos"]);
}

export const articles = await loadActivity();
export const {featured, papers} = await loadPapers();
export const {people, alumni} = await loadPeople();
export const projects = await loadProjects();
export const repos = await loadCode();
