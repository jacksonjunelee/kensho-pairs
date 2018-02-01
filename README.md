# KenshoPairs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

To install angular-cli and run ng commands run: npm install -g @angular/cli
To install the dependencies run: npm install

Description:
My main focus was making sure that the data comes back from the service calls, display the data correctly to the user and unit tests. My approach was to have a container component that offloads all the logic handling and event delegation and have the child components responsible for displaying the UI.

I designed it in such a way that on page load the container makes a service call to the Ticker endpoint to grab the list of tickers, pass the data to it's associated child component and display the list of tickers as button. After that the user is able to click on the buttons to select which ticker pairs they want to display (the tickers selected are saved in an object). When the user clicks 'Show Pairs', the data is outputted to the container that makes a service call to the pairs endpoint; the data is then passed to the chart component and a modal is displayed with the pairs data. User has the ability to close the modal.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
