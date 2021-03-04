const getDefaultStyle = (styles) => {
  // const { results } = response.data;
  for (let i = 0; i < styles.length; i += 1) {
    if (styles[i]['default?'] === true) {
      return styles[i];
    }
  }
  return styles[0];
};

export default getDefaultStyle;
