# reactjs-todo
ToDo application is one of the more beautifully designed application in ReactJS. It offers most of the features you'd want in a to-do list application, including allow to add new todo, show list of all Todos, update a Todo item, delete a Todo item.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. We have created two module one is for backend which name is springboot-rest and another one is ReactJS-todo for front-end.

### Prerequisites

1. Java version - 8  download and install from here : https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html and https://www.guru99.com/install-java.html
2. Apche tomact - download and install from  here : https://tomcat.apache.org/download-90.cgi
3. MySQL - download and install from  here : https://www.mysql.com/

#### Install ReactJS

1. Install nodejs, go the homepage https://nodejs.org/en/download/

2. Install ReactJS
    Here we are using rekit stuido as IDE. To install rekit studio.
    `npm install -g rekit` -- https://rekit.js.org/docs/get-started.html
    Start rekit studio using 
    `cd TodoApplication`
    `npm install`
    `npm start`
    Now server will start on http://localhost:6075 and rekit studio will open using http://localhost:6076.
    
   Extra library

	`npm install react-bootstrap bootstrap`	-- https://www.freecodecamp.org/news/using-rekit-studio-in-an-existing-react-project-39713d9667b/

	`npm install --save reactstrap react react-dom` -- https://reactstrap.github.io/

	`npm install --save react-toastify` -- https://www.npmjs.com/package/react-toastify
  
#### Add Springboot sts and ReactJs plugins in eclipse

1. We have to add sts eclipse plugin
2. Go to eclipse market place(preference/eclipse market place)
3. Type spring and search and install it
4. You can find spring tool 3 add on http://marketplace.eclipse.org/content/spring-tools-3-add-aka-spring-tool-suite-3

#### Import Spring, ReactJs modules in eclipse and sql file in MySql

1. Find springboot-rest module from downloaded git repository trunk folder and import it into eclipse.
2. Right click on springboot-rest and maven clean-install from eclipse
3. Import todo_manager.sql in mysql from downloaded git repository sql folder.
4. Find application.properties from springboot-rest and change username and password according to MySql(Also change port if required)

#### Run projects
1. Right click on springboot-rest and run as Java Application
2. Select JavaApplication SpringDemoApplication (from package todoweb.SpringDemoApplication.java)

#### Common Errors
1. The requested profile "pom.xml" could not be activated because it does not exist.

	Step - 1 Right click on your project in Eclipse

	Step - 2 Click Properties

	Step - 3 Select Maven in the left hand side list

	Step - 4 You will notice "pom.xml" in the Active Maven Profiles text box on the right hand side. Clear it and click Apply.

2. Ignore pom.xml error

3. Access denied for user 'root'@'localhost' (using password: NO) : Please check your application.properties from springboot-rest
