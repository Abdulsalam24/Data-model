
# Kenzie MERN Starter Template

## Getting Started

You will need to install the following tools: 

### Yarn

Yarn is a package manager, just like NPM.  However, yarn is a bit more modern and easy to use.  We will be using yarn to build and run our apps.

[https://classic.yarnpkg.com/en/docs/install/](https://classic.yarnpkg.com/en/docs/install/)

Follow the steps for your operating system to install yarn.  

### MongoDB

Install MongoDB and start your server: [MongoDB instructions](https://docs.mongodb.com/manual/administration/install-community/)

#### Mac OS

Run these commands: 

```bash
xcode-select --install
```
If you get an error message saying that you've already installed these command line tools, that's not a problem.

Continue with the rest of these commands:

```bash
brew tap mongodb/brew
brew install mongodb-community@4.4
brew services start mongodb-community@4.4
```

Or, follow the guide here: [Install MongoDB on MacOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

#### Windows

First, download the [MongoDB Community Server](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.6-signed.msi) MSI and install it.  You can use all of the default options. 

When that is finished installing, you can close "MongoDB Compass" if that pops up.  

Then you must start the MongoDB Service:

1. Click the start menu and type "services", Click the Services console.
2. From the Services console, locate the MongoDB service (The list is alphabetical)
3. Right-click on the MongoDB service and click Start.

Then download the [MongoDB Database Tools](https://fastdl.mongodb.org/tools/db/mongodb-database-tools-windows-x86_64-100.3.1.msi)

Those should download to a path like: `C:/Program Files/MongoDB/Tools/100/bin`  Take note of that path when you install them.

Next, open GitBash.  

cd to your home directory, `cd ~`

Then run 

`echo "PATH=$PATH/c/Program\ Files/MongoDB/Tools/100/bin" > .bashrc`

Where that path should match the path that you installed the MongoDB Database Tools.  This will make all of the tools accessible to you on GitBash.

and run:

`touch .bash_profile`

Now **close the GitBash window and re-open it before continuing**.

If you get stuck, you can reference the guide here: [Install MongoDB on Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)


## Running the application

This app is configured to run both the frontend and the backend from the root directory of this project.

First, install all of the dependencies.  You should only need to do this once.

```
yarn install
```

You can start the entire application by doing: 

```
yarn start
```

_Note that you must be in the root folder of this repository to run both the front and backend!_

### Folder structure

The front and backend are held inside of `packages/client/` and `packages/server/`

If you `cd` into those folders, you can run them individually by using `yarn start`. 


### Adding packages
During development, you can add dependencies to the frontend or backend from the root folder:
```
yarn workspace client add react-router-dom 
yarn workspace server add mongoose
```

This would add a "react-router-dom" dependency to the frontend, and a "mongoose" dependency to the backend. 

## Project Plan

_(Put your project plan here. It could be pseudocode, an outline-style development plan, etc. But whatever form you choose, it should be detailed enough that another developer could feasibly use it to implement your solution.)_

I began by creating an AlbumPage route using the packages/client/src/index.js file.

I copied the hompage code and changed the path that the server uses to fetch data to "/admin."


I created a model for the album collection in packages/server/model/album.js with the necessary fields and songs arrays.

Then, to make a GET whenever the website loads, I constructed an example initial array of collections.

To find every object in the mongodb, an album variable is created in the route.

A new object with the Album model will be created and assigned the album variable if the mongodb is empty.


The last line is what will be return to the frontend after checking the condition


Getting back to the client side, this time using packages/client/src/AlbumPage.js

Whenever a request is made, the useApiFetch hook returns a response.

This returns a set of data that is being styled and mapped out for the AlbumPage.

convertDuration is a function that converts durations from seconds to the format min:ss.

The function creates a min and sec.

I created a variable stringSec and convert the sec to string so i can check for the zeros in secound

I then return the min and sec in a string

The duration of each song on the album is added together in the totalDur variable using the reduce function.

I follwed the desing from the assinment



## Reflection

What different approaches or techniques did you consider when planning your implementation? What were the advantages and disadvantages of those alternatives?

_(Put your reflection answer here.)_

