import { lazy } from 'react'

const AboutPageAsync = lazy(() => new Promise((res) => {
  setTimeout(() => {
    //@ts-ignore
     res(import('./AboutPage'))
  }, 1000);
}));

export default AboutPageAsync;
