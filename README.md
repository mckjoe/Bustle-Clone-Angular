# BustleClone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5. BustleClone is a clone of the real website `bustle.com`.  The site should allow users to view a list of blogs or articles, and let them click on the one they would like to view.

#### By Joseph McKinney on May 4th, 2018 and will continuue through may 11th, 2018.

## Description

The BustleClone is a website people can visit and find interesting articles/blogs to read. The articles are displayed as boxes on the screen with an image, a quick description of what the article contains and the authors name.  Users should be able to click on an article and be routed to a new page that contains the full article, as well as a series of photos that are much larger than the ones in the thumb nails.  One thing that seemed to me like Bustle is missing as far as a user standpoint goes is that there is no clear button that will take you back to the main page where you started from, so I think I will try to add that to each article instead of having more articles appear as you scroll down the screen.  

## Setup and Installation Requirements
### To clone this project to your computer:
* Clone the path from github
* change directories into desktop with the command line
* Enter "git clone + 'path'"
* Change directories into newly cloned directory on your desktop
* Enter "npm install" with the command line
### To view source
 * Make sure you're in the project root directory
 * Enter "atom ." with command line
 * Atom will open and the project should be ready to work with.
### To view with live development server
 * Follow instructions below under "Development Server" heading.


## Plain English Specs

behavior | input | output
---------|-------|-------
Create article objects | article name, article description, article author, article body | input used in displaying articles
user can click on display and see article | click | thanks for clicking
user can add article to page | article title, article blurb, article author, and article body| article added to display

## My Process

1.  Create one object in root component out of hard coded values of an article title, and article blurb or teaser, article author, and then an article.  

2.  I would like to display an image with the article, so I will then try to make an image be part of each of the articles display, just like on the Bustle website.  I don't have any experience adding an image to an object that I can think of, so if this proves more difficult than I am picturing I will come back to this task as a later addition to the project when I have a little more practice with angular.

3. next I will add more articles to my root component that are then displayed for the user on the actual page.



## Known Bugs

There are no known bugs at this time.

## Support and contact details

If you encounter any issues, or would like to reach the creater of this webpage, please email me at mckinney.a.joe@gmail.com



## Development server

Run `ng serve --open` for a dev server.  Adding the --open allows for auto-open or, use `ng serve` and navigate  to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### License

Copyright (c) <2018> <Joseph McKinney>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
