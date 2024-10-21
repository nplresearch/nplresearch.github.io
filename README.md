# Maintenance Guide

> **Warning**
> Website is still under construction and updating data now might lead (most probably) to it being erased.

This is a small guide on how to make small changes on the website without having to clone the repo and re-building the site. Th list of things that are editable without messing with javascript html and etc:

1. [Recent Activity](#recent-activity)
2. [Publications](#publications)
3. [People](#people)

# 1. Change branch

Do not update changes in this branch as it wont reflect in the site. The first step is to change to the `gh-pages` branch.

# 2. Update toml files

The only editable files are the 3 `toml` files in `static/` each control a portion of the website. Commit changes in the end and the website should update.

## Recent activity

Add a new entry by appending to the top of the file `activity.toml` the following lines:

```toml
[[articles]]
title = "Title of the new thing that just happened"
description = "What really just happened"
date= "18-01-2023"
link=""
```

> **Note**
> Make sure that the `toml` is the the format `DD-MM-YYYY` or it will mess things up.
> You can add HTML in the description (e.g. to add links, check the toml file for examples)

The entries do not necessarily need to be in order in the file, there is a script that arranjes them before displaying.

## Publications

Add a new paper by appending to the top of the file `publications.toml` the following lines:

```toml
[[papers]]
title = "Extracting the Multiscale Causal Backbone of Brain Dynamics"
authors = [ "Gabriele, D.", "Bonchi, F.", "De Francisci Morales, G.", "Petri, G."]
journal = "CLeaR"
year = "2024"
link = "https://proceedings.mlr.press/v236/d-textsc-char13acunto24a"
github = "https://github.com/OfficiallyDAC/cb"
slides = ""
people = ["giovanni_petri"]
abstract = "......"
projects = ["higher_order", "topological_neuroscience"]
```

The sections are all mandatory. Pdfs and links can be empty, but they have to be there for formatting reasons.  
Maybe this could be a point to increase in the future (add stuff like doi or sonmething).

## People

Add a new NPC by appending to the **end** of the file `people.toml` the following lines:

```toml
[[researchers]]
name= "Marilyn Gatica"
tag= "marilyn_gatica"
title= "Post-Doc Researcher @ Network Science Institute"
bio=""
avatar="/static/people/marilyn_gatica.jpg"
hoverAvatar="/static/people/marilyn_gatica.jpg"
url="https://www.nulondon.ac.uk/faculty/marilyn-gatica/"
```

Make sure to add a picture of the NPC or else a random Danny Devito will take its place.

# 3. Commit Changes

Make sure to commit the changes to the `gh-pages` branch and the website will update soon enough.
**DO NOT DO THIS YET**

# Building from source
- Download the repository
- Install all dependencies
```shell
npm install
```
- Serve website locally
```shell
npm run dev
```
- Make Changes
- Publish changes
```
npm run deploy
```

# Potential Features
- [X] Add links to timeline.
- [X] Divide publications by topics, either by projects or publications types is a very easy extension to do. Its no done out-of-the box due to the low number of publications.
- [ ] Moving timeline to its own page intsad of main page?
- [ ] Add bibtex support for publications, substitute the toml [parser](https://github.com/yepengding/bibtex-js-parser)
- [ ] Add news list to individual pages in addition to papers
