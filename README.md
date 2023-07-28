# Node/Express/MongoDB starter boilerplate

The MEN-starter project provides a basic structure for building a MEN (MongoDB, Express, Node.js) stack application

## Structure

**MEN-starter**: This is the root folder of the project.

**src**: This folder contains the source code of the project.

**controllers**: This folder holds the controller files responsible for handling business logic and interacting with the data model.

**controller.js**: This file is an example controller file that contains the logic for handling various API endpoints and business logic for the application.

**models**: This folder contains the model files that define the data schema and interact with the database.

**model.js**: This file is an example model file that defines the data schema and interacts with the MongoDB database.

**routes**: This folder contains the route files responsible for defining the API endpoints and routing incoming requests to the appropriate controller.

**route.js**: This file is an example route file that defines the API endpoints and their corresponding controller methods for handling incoming requests.

**app.js**: This is the main application file that sets up the Express server, middleware, and connects to the database. It also imports and uses the defined routes and controllers.

**.env**: This file is used to store environment variables for the application, such as database connection strings, API keys, or other sensitive information.

**.gitignore**: This file specifies which files and folders should be excluded from version control when using Git. It is used to prevent sensitive or unnecessary files from being committed to the repository.

**package.json**: This file contains metadata about the project and lists the project dependencies. It also includes scripts for running, testing, and building the project.

# Setup

1. Environment Variable (MONGODB_URL):

    Create a new file named .env in the root of the project.

    Add the following line to the .env file, replacing *your_mongodb_connection_string* with your MongoDB connection string (either local MongoDB or MongoDB Atlas):

    `MONGODB_URL=your_mongodb_connection_string`

    Save the .env file. This file will store your MongoDB connection string and will be used by the application to connect to the database.

2. Install Dependencies:

    Open a terminal or command prompt in the MEN-starter project directory.
    Run the following command to install the project dependencies:

    `npm install`

    This will install all the required dependencies specified in the package.json file.

3. Run the Server:

    After the dependencies are installed, run the following command to start the server:

    `npm start`

    The server will start and connect to the MongoDB database using the connection string provided in the .env file.

4. Access the Application:

    Once the server is running, you can access the application by visiting http://localhost:3000 in your web browser or using API client tools like Postman or Insomnia.