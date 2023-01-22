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
```

> **Note**
> Make sure that the `toml` is the the format `DD-MM-YYYY` or it will mess things up.

The entries do not necessarily need to be in order in the file, there is a script that arranjes them before displaying.

## Publications

Add a new paper by appending to the top of the file `publications.toml` the following lines:

```toml
[[papers]]
title = "Title of the paper"
authors = ["John Doe", "Peter Parker", "Mary Jane"]
abstract= "Abstract of the paper"
[[papers.links]]
pdf = "https://arxiv.org/pdf/2007.14900.pdf"
code = "www.github.io"
```

The section `[[papers.links]]` and everything under is not mandatory but at least the pdf link should be there for aesthetic reasons. You can add more links than the ones presented and the site will generate a button for each of them. However only the keywords: `pdf`, `code` and `bib` have custom icons. Maybe this could be a pointo to increase in the future (add stuff like doi or sonmething).

## People

Add a new NPC by appending to the **end** of the file `people.toml` the following lines:

```toml
[[researchers]]
name= "Person McName"
title= "NPC Title"
bio="This person does this and that it was them that started this and that is now doing that. Reach by here or there."
avatar="static/faces/npc_face.jpg"
url="link_to_npc.com"
```

Make sure to add a picture of the NPC or else a random Danny Devito will take its place.

# 3. Commit Changes

Make sure to commit the changes to the `gh-pages` branch and the website will update soon enough.

# Potential Features

- [ ] Divide publications by topics, either by projects or publications types is a very easy extension to do. Its no done out-of-the box due to the low number of publications.
- [ ] Moving timeline to its own page intsad of main page?
