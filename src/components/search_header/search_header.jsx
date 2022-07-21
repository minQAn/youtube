import styles from './search_header.module.css';

import React, { memo, useRef } from 'react';

// ** Even though I used memo here, redendering occurs because props is still changing.
// That's why I have to use useCallback hook.
const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyDown = (event) => {
    // console.log(event.keyCode); // 13 is same as 'Enter'
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // to check re-rendering like memo and useCallback
  // console.log('Header!!');

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="logo" />
        <h1 className={styles.img}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Saerch..."
        onKeyDown={onKeyDown}
      />
      <button className={styles.button} type="submit" onClick={handleSearch}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
});

export default SearchHeader;
