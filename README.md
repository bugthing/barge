Barge
=====

Manage docker containers.

Development
-----------

You need to have node installed. As the modules are downloaded
and installed locally and you need to be able to reference
the executables, ensure you set add `./node_modules/.bin` to
your PATH. (e.g `export PATH="node_modules/.bin:$PATH" `)

    npm install

### Build

You can get webpack to build the app and place the resulting
code in `./dist/`

    webpack

You can view the result by pointing your browser at the
resulting `./dist/index.html`


### Serve

To make development easier, you can use a server to build, serve
and auto-reload to application.

    webpack-dev-server --content-base dist/ --hot

Now point your browser at:

    http://localhost:8080/

Currently u need to turn off web-security as I have not got CORS right (yet):

    google-chrome-stable --disable-web-security

References
----------

[webpack](http://webpack.github.io/docs/tutorials/getting-started/)
[webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html)
