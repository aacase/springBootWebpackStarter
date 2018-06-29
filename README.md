# Spring Boot Webpack Starter

This is all made possible by Justin Calleja’s incredibly handy blog post: [Serving a Webpack bundle in Spring Boot](http://justincalleja.com/2016/04/17/serving-a-webpack-bundle-in-spring-boot/)

This work was essential in creating this project, however it had one drawback that didn't work for me as a front-end developer: The backend has a dependency on the front end. Hot reloading in Spring Boot is INCREDIBLY slow compared to webpack, and editing front end code in Eclipse is light years behind editors like Visual Studio Code and Atom.  

The work we've done here allows us to keep the best parts of spring, and grab the new fun features that the front end world has to offer. Have a great backend but you've decided you want to move your whole project to React or Vue from Angular? No sweat, now you can develop a brand new front end without blowing up your old one. The backend and front end are completely independent of each other until we bundle the project for release.

## Getting Started

* Clone the repo
* Open a terminal window and navigate to the Parent directory
* Run the following command
.. 
    ```
    sudo mvn clean install
    ```
* You should get a successful build message

## Bundling for Deploy

From the parent directory run the following:

    ```
    sudo mvn package
    ```
The bundled file you'll find in the parent/bundle/target directory is your bundled application, front and back end. 

## Running in Development Mode

Webpack-dev-server is a dependency of this project and is included in our package.json file. I suggest you install it globally in your node environment for ease of use in the terminal

 ```
    npm install -g webpack-dev-server
 ```

 Our dev server config is located in the front-end project in the webpack config file. 

 ``` javascript
  devServer: {
    port: 9192,
    proxy: {
      //route dev-server which is on 9192 requests to the 8080 where backend server runs
      '/api/*': {
        target: 'http://localhost:8080',
        secure: false
      }
    }
  }
```
We can make the port whatever we want, but it's important that it's not the same port we define on the backend server. You can configue that port via the application.properties config file in the backend project.

To start the front end, make sure your terminal is navigated to the front end folder of the project

```
    npm start
```

You'll see your modules compile and you'll be all set.

To start our backend, you can use whichever IDE you prefer to write your JAVA. If you're like me and can't stand eclipse and won't be changing much on the backend, you can start the application via the terminal after you've bundled. Navigate to the parent/bundle/target folder and run the following command

```
    sudo java -jar YOURBUNDLENAME-SNAPSHOT-repackaged.jar
```

Your bundle name can be whatever you want. You can change in in the Bundle's pom.xml file. 

That's it! Happy developing