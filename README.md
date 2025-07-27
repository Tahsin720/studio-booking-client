[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/hbHlGgof)

[![View Deployed Website](https://img.shields.io/badge/View%20Deployed%20Website-Click%20Here-brightgreen)](https://git-repo-stars.netlify.app/)

# GitHub Repository Dashboard

## Introduction

The aim of this task is to develop a web application dashboard for GitHub repositories, focusing on those with the highest number of stars per programming language.

To maintain consistency with our project, we prefer the use of Angular for the frontend with [Syncfusion Angular UI Components](https://www.syncfusion.com/angular-components).

## API

We'll be utilizing the following public API to fetch a list of public repositories from GitHub: [search-repositories](https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-repositories).

## The Task

Your task is to create a web application representing a dashboard with the following features:

1. Display the first 50 repositories with the highest number of stars for a selected language. A tentative URL could be: https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&page=1&per_page=50.
2. Obtain the list of supported languages by GitHub from: [languages](https://api.github.com/languages).
3. Implement pagination on scroll or infinite scroll to load the next 50 repositories and so on.
4. For each repository, display:

- Name
- Description
- Language
- Number of stars (stargazers_count)
- Last updated date (updated_at)
- Owner's username (owner.login)
- URL to repository (html_url)

5. Include an option to change the selected language.
6. Include an option to change the sorting order.
7. Provide two views: card view and grid view. Users should be able to switch between the two views, and the selected language and sorting order should persist between views.

## Bonus

In addition to the core requirements, consider the following bonus features:

- Implement appropriate unit and end-to-end tests to ensure the robustness of the system.
- Implement virtualized scrolling over the data to enhance performance.
- Include charts to provide a meaningful quick summary of the data, enhancing the dashboard's visual appeal and usability.
- We highly appreciate if you could deploy this solution on Azure or any other platform.

## What We Look For

- Adherence to specifications
- Consistent code style
- Application of design patterns and principles
- Good development practices such as committing discipline and unit testing

## Submission

- Please switch to `solution` branch to continue working.
- Create PR against `main` when you are done.

Remember, you will not be able to push after the deadline. So, complete your assignments before the deadline anyhow.
