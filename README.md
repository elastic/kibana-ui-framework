# Kibana UI framework

[elastic.github.io/kibana-ui-framework](https://elastic.github.io/kibana-ui-framework)

This framework exposes Angular components and SCSS styles. You can use these
components to build Kibana plugins more quickly, and be assured that your
plugin's UI will fit into the overall Kibana UI.

## Development

* Install node modules `npm install`
* Start development server `npm start`
* Deploy to GitHub Pages `npm run deploy`

## Production

In production we can either run the development server, or serve the assets statically.

* To build the assets run `npm run build` and serve static assets from `/build`

## Goals

The ultimate goal is to make engineers' lives easier, in a number of ways.

### Make CSS easier to reason about

The goal of this framework is to make our CSS easier to reason about and,
eventually, remove CSS from the equation entirely, by abstracting it behind a
JS interface (e.g. Angular directives, React components).

### Expedite UI development

Half (most?) of this framework will consist of documentation: visual examples
you can interact with, source code examples, and written descriptions of the
UI role of the different components. This will make it easier for engineers
to find the components to solve their specific UI problems.

### Faster UI-specific tests

By encapsulating component-specific unit tests within this framework, we can
rest assured that our UI layer is tested and remove some of that burden
from out integration/end-to-end tests.
