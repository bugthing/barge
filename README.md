Barge
=====

Manage docker containers.

Development
-----------

You need to have node installed. As the modules are downloaded
and installed locally and you need to be able to reference
the executables, ensure you set add `./node_modules/.bin` to
your PATH. (e.g `export PATH="node_modules/.bin:$PATH" `)

    $ npm install

### Build

You can get webpack to build the app and place the resulting
code in `./dist/`

    $ webpack

You can view the result by pointing your browser at the
resulting `./dist/index.html`


### Serve

To make development easier, you can use a server to build, serve
and auto-reload to application.

    $ npm start

Now point your browser at:

    http://localhost:8080/

### Tests

When the server is running, you can run all the tests (jasmine + protractor)

Ensure the webdriver bits are installed

    $ webdriver-manager update

Run tests like so

    $ npm test

Run end2end tests like so:

.. start the webserver

    $ npm start

.. run the tests

    $ npm run e2e

References
----------

[webpack](http://webpack.github.io/docs/tutorials/getting-started/)
[webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html)
[react](https://facebook.github.io/react/)
[flux](https://facebook.github.io/flux/)
[d3](http://d3js.org/)
