# Notification Service

This project is a microservice responsible to send notification to the user. The project was created to understand how to best architect a microservice to have it decoupled from any external technology and that is highly scalable, following the best practices of programming with this type of architecture and the most modern technologies of the moment in the world of NodeJS.

---

## Frameworks and Technologies used

- Node.js
- NestJs
- Prisma
- Typescript
- Jest
- Kafka Apache

---

## Installation

```bash
# Clone this repository
$ https://github.com/pipe102/notification-service.git

# Open terminal/cmd on the folder of the project
$ cd notification-service

# Install dependencies
$ npm install
# Or in the case you use yarn
$ yarn install

# After installing the dependencies a .env file will need to be created that will have a variables
DATABASE_URL="file:./dev.db"

# Start using npm
$ npm run start:dev
# Start using yarn
$ yarn start:dev

# The server will start at port 3000 - access in <http://localhost:3000>
```

---

## Tests

```bash
# Run all using npm
$ npm run test
# Run all using yarn
$ yarn test

# Run tests and watch changes (development) with npm
$ npm run test:watch
# Run tests and watch changes (development) with yarn
$ yarn test:watch
```
