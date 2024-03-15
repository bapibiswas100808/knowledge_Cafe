// Get Data From LS
const getDataFromLS = () => {
  const storedData = localStorage.getItem("data");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

// Set Data to LS
const setDataToLS = (data) => {
  const getData = getDataFromLS();
  getData.push(data);
  saveDataToLS(getData);
};
// save to LS
const saveDataToLS = (data) => {
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem("data", stringifiedData);
};

// Remove from LS
const removeDataFromLS = (prof) => {
  const storedData = getDataFromLS();
  const updatedData = storedData.filter((item) => item !== prof);
  saveDataToLS(updatedData);
};

export { getDataFromLS, saveDataToLS, setDataToLS, removeDataFromLS };
