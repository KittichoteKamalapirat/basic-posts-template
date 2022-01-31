export const fetchData = (url: string) => {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error));
};

export const postData = (url: string, input: any) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error));
};
