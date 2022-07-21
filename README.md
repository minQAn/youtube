### Youtube Clone Coding using React.

It's made of using Youtube API to get 25 of most popular videos, and to search by keyword that user types.
Also each video can be clicked to direct to the detail page with the video that can be played.

- Service component

  Service component is separated to keep youtube's service logic and made by class component which is more suitable than functional.

- PostCss

  CSS files are named like 'app.module.css'.
  This advantage of using this is that prevents overwritting by giving a unique class name.

```
// in css, .app is same after styles.
import styles from './app.module.css';
<div className={styles.app}></div>
```

- env

  to keep safe API KEY
  in react, must be like pre REACT*APP*
  can use like below

```
process.env.REACT_APP_
```

- useEffect

  it's used to bring 25 of the most popular vidoes when the app first starts.

- useCallback, memo

  These are used to optimize by preventing unnecessary re-rendering for the SearchHeader and VideoItem component. But have to use it only when really need it because it takes up memory.
  Even if used memo, if the function received in prop changes, it will be re-rendered. So used useCallback for the props function.

- Media Querry

  to make the website responsive

- Loading Spinner and Error Message

  made it using useState and catch in case the internet is slow or API call fails.

- Axios library

  update fetch to axios.
  doesn't have to convert to json format after get request.
  don't have to list all parameters in the string.
  can set key as fixed parameter
  
  ```
  // Dependency Injection
  const httpClient = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: { key: process.env.REACT_APP_YOUTUBE_API_KEY }, // set fixed key
  });
  const youtube = new Youtube(httpClient);
  ```
