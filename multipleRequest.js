const request1 = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res1) => {
    return res1.json();
  }
);
const request2 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res2) => {
    return res2.json();
  }
);

Promise.all([request1, request2])
  .then((Response) => {
    const [users, posts] = Response;

    console.log("Users: ", users);

    console.log("Posts", posts);
  })
  .catch((error) => {
    console.error(error);
  });
