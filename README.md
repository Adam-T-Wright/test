# General

## Structure

The application is split into two parts. A REST API written with Java +
Spring, and a front-end web application written with React.js. The
backend application is built using Maven, while the front-end is built 
using webpack. You shouldn't need to download any of Maven, node, 
webpack etc. manually. I've included a Maven wrapper under .mvn and a 
script called mvnw that (provided they work!) will fetch a version of 
Maven for you to carry out the build. Part of the Maven build then 
includes locally downloading node, npm, webpack etc. and triggering the 
front-end build (so you shouldn't have to worry about any of this).

## My specs while developing

java version "1.8.0_51"

Java(TM) SE Runtime Environment (build 1.8.0_51-b16)

Java HotSpot(TM) 64-Bit Server VM (build 25.51-b03, mixed mode)

javac 1.8.0_51

Any version of Java 8 should be good enough to run the application, so
your specs don't have to match these exactly :)

## Installing and running

To get the source code for the project run:

```
git clone https://github.com/Adam-T-Wright/test.git your_directory/
```

where 'your_directory/' is the directory you wish to clone into. Then 
move into this directory:

```
cd <your_directory>
```
 
From here there are a couple of ways to go about running the 
application. The fastest way is as follows:

```
./mvnw spring-boot:run
```

However, if you wish to carry out a full build with tests included:

```
./mvnw package
java -jar target/product-0.0.1-SNAPSHOT.jar
```

Once deployed, visiting http://localhost:8080/ should yield the 
front-end web application.

## Other information

The backend application makes use of h2, an in-memory Java database to
store data (this database is populated at startup using Spring's 
CommandLineRunner). I don't believe this should cause any issues, but
if you do run into any at the database level this may be relevant.

Additionally, in the brief two services are discussed. One is the
location service that takes a customer id and returns a location id.
The other is the catalogue service that takes a location id and returns
products available for the location with that id. The backend has 
endpoints for both of these services, however, I have an additional one 
that effectively rolls both of these operations into one ("/catalogue"). 
This is just so that I only have to make on call from the front-end.

Thanks,

Adam