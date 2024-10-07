# Event Manager - Frontend

This frontend application is developed as part of a technical challenge for a Fullstack Developer role. The project focuses on managing events, providing essential CRUD functionalities (Create, Read, Update, Delete) for events. Users can interact with the UI to create, view, edit, and delete events, and the frontend communicates with a backend API for data persistence.

## Technologies Used
- **React**: The main library for building the user interface.
- **Material UI**: For styling the components and creating a clean user interface.
- **JavaScript (ES6)**: For handling the logic and interactions.
- **Docker**: Used for containerizing the application.

## Prerequisites
Before running the application, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Running the Application

### 1. Clone the repository
First, you need to clone the repository to your local machine:
```bash
git clone https://github.com/eduardoMichell/event-manager-ui.git
cd event-manager-ui
```

### 2. Install dependencies
Install the required npm dependencies:
```bash
npm install
```

### 3. Run the application locally
To run the application locally, use the following command:
```bash
npm start
```

By default, the application will be available at `http://localhost:3000`.

### 4. Run the application using Docker
To run the application using Docker Compose, ensure Docker is installed on your machine. Then follow these steps:

1. Build and run the application using Docker Compose:
   ```bash
   docker-compose up --build
   ```

This command will:
- **Build** the Docker image for the frontend.
- **Run** the frontend application in a container.

This will start the frontend on `http://localhost:3000`.

## Environment Variables
The application relies on the following environment variable to connect to the backend API:

- `REACT_APP_API_URL`: The URL of the backend API. By default, it is set to `http://localhost:8080/api/events`.

You can configure this variable in the `.env` file located at the root of the project.

Example `.env` file:
```env
REACT_APP_API_URL=http://localhost:8080/api/events
```

