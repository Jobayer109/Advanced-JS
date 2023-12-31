const axios = require("axios").default;

const url = "https://jsonplaceholder.typicode.com/posts";

async function getData() {
  const { data } = await axios.get(url);

  // console.time("map");
  // const res = data.slice(0, 10).map((post) => {
  //   return {
  //     id: post.id,
  //     userId: post.userId,
  //     title: post.title,
  //   };
  // });
  // console.timeEnd("map");
  // return res;

  const result = data.slice(0, 10).reduce((acc, cur) => {
    acc[cur.id] = { ...cur };
    delete acc[cur.id].body;
    return acc;
  }, {});
  return result;
}

getData()
  .then((data) => console.log(data))
  .catch((e) => console.log(e.message));
