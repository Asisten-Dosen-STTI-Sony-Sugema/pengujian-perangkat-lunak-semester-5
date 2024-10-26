const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data berhasil diambil");
    }, 1000);
  });
};

module.exports = fetchData;
