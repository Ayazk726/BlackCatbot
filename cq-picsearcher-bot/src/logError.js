export default e => {
  if (typeof e === 'object') {
    if (e.stack) {
      console.error(e.stack);
      delete e.stack;
    }
    console.error(JSON.stringify(e, Object.getOwnPropertyNames(e), 2));
  } else console.error(e);
};
