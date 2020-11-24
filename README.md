# Awesome authentication project

The project has some setup but still requires some efforts to make it awesome. Therefore, we need someone to help us to make it production ready.

Note: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Returning your solution

- Make a copy of this repository in your github/bitbucket/gitlab account.
- Make changes, commit them, and push them into your repository.
- Share us the url of your source code and deployed url link after completion.

## Prerequisite

- To help you, all the necessary packages are already specified in the package.json
- Run app locally in development mode using `yarn && yarn start`.
- Launch the test runner in the interactive watch mode using `yarn test`.
- Build the app for production to the build folder using `yarn build`.

## Exercises

## Attempting all the questions is not a must however, your efforts will be rewarded. Note:- Exercise 1, 2 and 3 are mandatory.

Hints: Use material design for the [ui](https://material-ui.com/) and feel free to use your own ideas for the design.

### [1] Create register form for user account creation --(Completed)--

- The form should include Email, password and confirm password fields.
- Include validations for the fields, for example email (must be a valid email) and, password (must be at least 8 characters long and include at least a number and an alphabet) and also match with confirm password field.
- Show success message on registration success and navigate user to login page
- You can use browser local storage to persist the users account information.

### [2] Build login form so that user can login using the credentials from exercise [1]. --(Completed)--

- Add email and password field in the login form with field validations.
- On successful login the user will be greeted with welcome message and navigated to the authenticated page.

### [3] Deploy to netlify (--(Completed)--)

- Deploy your app to netlify/heroku

### [4] Testing (I'm extremely new to this, so couldn't do it.)

- Write unit test for the app. (tips: [testing-library](https://testing-library.c

### [5] Documentation (Updated as per my knowledge)

- Remember to update the README

### [6] Docker (I got tons of errors while installing Docker and because of deadline couldn't give more time on this.)

- Make the app run in the docker

                            //In the response to the exercises provided by the manager//

I have created a registration and login system using material UI as per provided exercises. I have used Fake AWT auth server in order to get the JWT token and authorize users on login. The authorization is based on the token provided by the server. In order to run the project, please run both fake api server and the react project. I have uploaded server and project to different repositories because of error occurred when adding them on same repo.

For Server, type "npm run start-auth" and for the project "yarn start".
