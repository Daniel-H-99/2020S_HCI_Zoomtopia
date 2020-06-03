# 2020S_HCI
This is for Design Project in HCI lecture in KAIST. 


## Libraries
    - Front-end: React.js
    - Back-end: Firebase
    - Hosting: Firebase Hosting
    - Dependencies : react-create-app, react-router-dom, styled-components, firebase

## Target User
    The university students lodgers who go back to their hometown need to offer a short-term house rental quickly during vacation 

## Re-state Point of View (POV)
    The university students lodgers who go back to their hometown need to offer a short-term house rental quickly during vacation because  in current platform, it is hard for providers to advertise efficiently to specific group of consumers who satisfy with the providers’ short-term conditions.

## Tasks
    1. Advertise your room with introducing video.
    2. Advertise your room on sale by emailing to KAIST group.
    3. Review requests and confirm all appropriate ones.

## Implementation
    1. Main Page (Include Log-in)
    2. Sign Up Page
    3. Register Room page
    4. My page
    5. Item Info
    6. Request Management

1,2(황)/ 3(email, video)(김)/ 4,5(+ db)(엄) /6(홍)
Due 6.3(wed) 23:59 

## DB
    /userID/myregister/
    - RoomName
    - Location
    - Cost/
        perDay
        perWeek
        perMonth
    - Term/
        origin
        available
        not
    - RoomStructure
    - RoomSize (float)
    - Options/ [array]
    - AdvertiseTo/ [array]
    - Explanation (str)
    - IntroVideo (youtube url)
    - Request/ [Jsonarray]

    /userID/credential/
    - Name
    - Password
    - Email


--- 
--- 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
