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

4.  I want users to be able to click on the display and for the full article to appear on the screen.  Eventually I would like to rout the user to a new page that displays the article with a few images, but for now I will start by triggering an alert to notify a user they have clicked to view an article and then I will change it so that when they click they are presented with the full article.

5.  I also want users to be able to add their own article to the page.  For that I will create a button and a display that will allow a user to enter all their own information and that will add another article to my page.

6.  I want users to be able to easily go back to the previous page, so I will also add a button that will hide the article they are viewing and take them back to the page which displays all of the available articles.

7. Please view the component-layout file to see the components I plan on using in this website.  That list may change as the project progresses, but I see those as the main pieces of functionality that I need to start with.

# Finished/Not Finished
### Finished
I was able to get most of my original specs done today.  I was able to get the webpage to display a series of hard coded article examples, and when you click on the article it will display the full article for the user and it will let you click a button to return to the main page of articles.  Users who want to are able to add new articles to the page, they are just asked to include a title, a quick blerb to display on the main page, the authors name, and a url for an image to show up in the display.  Users can also choose to remove articles from the page that they don't want to see anymore.  The page will keep track of how many times a particular article has been clicked on, and that number will turn green if the article has been viewed more than 5 times.
### Not Finished
I still have a lot of styling to do.  I feel like the basic functionality is there as far as mimicking what people do on Bustle.com, but the site doesn't look too much like the original site.  Once of the first things I want to work on going forward is the display of the article that has been clicked to be viewed.  Currently it ends up being pushed to the side of all of the display boxes because the display boxes are just floated for placement.  I need to go back and do a lot of styling to at least make things readable.  I also want to change the input box for people creating a new article so that they have a bigger box for writing their article.   
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
