# Real-time Chat

A real-time chat application built with React, Node.js, Express, and Socket.io.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Features](#features)
5. [Future Features](#future-features)
6. [Contributing](#contributing)
7. [License](#license)

## Project Overview

This project is a real-time chat application built with React, Node.js, Express, and Socket.io. It allows users to create user accounts, login to user accounts, and send messages in real-time.

## Tech Stack

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Axios](https://www.npmjs.com/package/axios)
- [React Router](https://reactrouter.com/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repo

```sh
git clone https://github.com/chrisminnick/advanced-react.git
```

2. Make the real-time-chat/server directory your current directory

```sh
cd real-time-chat/server
```

3. Install dependencies

```sh
npm install
```

4. Create a .env file in the root directory and add the following environment variables

```sh
NODE_ENV=development

SERVER_PORT=8081

MONGO_URI=mongodb://127.0.0.1:27017

ACCESS_TOKEN_SECRET=secret

TOKEN_EXPIRATION=7200
```

5. Run the app

```sh
npm start
```

6. Make the real-time-chat/client directory your current directory

```sh
cd real-time-chat/client
```

7. Install dependencies

```sh
npm install
```

8. Run the app

```sh
npm start
```

## Features

- Create user accounts
- Login to user accounts
- Send messages in real-time

## Future Features

- Implement Error Boundaries
- Implement User settings / change password
- Implement lost password functionality
- Improve the UI
- Fix error message on signup
- Fix crashing bug on dupe signup.
- Create chat rooms
- See who is currently online in the chat room
- Save chat history
- Add a feature to allow users to send images
- Add a feature to allow users to send emojis
- Add a feature to allow users to send files
- Add a feature to allow users to send voice messages
- Add a feature to allow users to send videos
- Add a feature to allow users to send gifs
- Add a feature to allow users to send stickers
- Add a feature to allow users to send reactions
- Add a feature to allow users to send polls
- Add a feature to allow users to send locations
- Add a feature to allow users to send contacts
- Add a feature to allow users to send money
- Think up more features
- Submit a pull request to the repo
