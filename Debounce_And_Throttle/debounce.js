function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId); //cancel last call
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const search = (query) => {
  console.log(`Search query:${query}`);
};

const searchWithDebounce = debounce(search, 1000);
searchWithDebounce("h");
searchWithDebounce("ha");
searchWithDebounce("har");
searchWithDebounce("hard");
searchWithDebounce("hard j");
searchWithDebounce("har js");
