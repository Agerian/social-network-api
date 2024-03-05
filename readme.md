# Social Network API

## Description

This project provides a foundational API for a social media application, leveraging  MongoDB for its flexibility in handling dynamic data.  The API enables core social network functionalities: user profile management, creating and sharing thoughts, reactions, and maintaining friend lists.

## Table of Contents

- [Installation] (#installation)
- [Usage] (#usage)
- [License] (#license)
- [Questions] #questions

## Installation
1. MongoDB: Ensure you have MongoDB installed and running. Refer to the MongoDB installation instructions for your operating system: https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb

2. Clone Repository: Clone this repository to your local machine.

3. Install Dependencies: Navigate to the project's directory and run <npm install> to install the required packages (Express, Mongoose, etc.).

## Usage

Start the Server: From the project directory, run node server.js (or your equivalent server start command).

Test with Insomnia: Use Insomnia (or a similar API testing tool) to test API endpoints. 

API Endpoints:

- Users: 
  - GET all users: /api/user
  - GET a single user by ID: /api/user/:id
  - POST a new user: /api/user
  - PUT to update a user by ID: /api/user/:id
  - DELETE a user by ID: /api/user/:id

- Thoughts:
  - GET all thoughts: /api/thought
  - GET a single thought by ID: /api/thought/:id
  - POST a new thought: /api/thought
  - PUT to update a thought by ID: /api/thought/:id
  - DELETE a thought by ID: /api/thought/:id

- Reactions:
  - POST a new reaction to a thought: /api/thought/:thoughtId/reactions
  - DELETE a reaction by ID: /api/thought/:thoughtId/reactions/:reactionId

- Friends:
  - POST to add a new friend: /api/user/:userId/friends/:friendId
  - DELETE to remove a friend: /api/user/:userId/friends/:friendId


## License

[![MIT License License](https://img.shields.io/badge/license-MIT%20License-green)](https://opensource.org/licenses/MIT%20License)

## Questions

- GitHub: [Agerian](https://github.com/Agerian)
- Email: ezereading@gmail.com    
