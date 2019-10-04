# mui-nextjs-data-demo
A charting demo built with Material-UI, Next.js, Redux and Typescript

## Getting Started

Clone the repository:
```sh
git clone https://github.com/ben-siewert/mui-nextjs-data-demo.git
```
```sh
cd mui-nextjs-data-demo
```
then install:

```sh
npm install
``` 
OR

```sh
yarn install
```

Then dev onward!

## Redux integration

Redux is used for any state changes that can occur frequently. React Context API is used for theme changes.

Install the Chrome Redux Devtools Extenion for Redux development:
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

## Static Deployment

<!-- Markdown snippet -->
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ben-siewert/mui-nextjs-data-demo)

**note**: you'll have to enter the build command and publish directory below in the Netlify dashboard, then trigger a deploy for this deploy button to work. 

Build Command:
```sh
yarn deploy
```

Publish Directory:
```sh
out
```
