import { createReadStream } from "fs";

export const getDataFromCsv = () => {
  let filename = "testData/accountactivity.csv";

  const readStream = createReadStream(filename, {
    encoding: "utf8",
  });

  return new Promise((resolve, reject) => {
    let dataList = [];
    readStream.on("data", (data) => {
      dataList.push(data);
    });

    readStream.on("error", (err) => {
      reject(err);
    });

    readStream.on("close", () => {
      resolve(dataList);
    });
  });
};
