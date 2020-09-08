export const createItemLocal = (name: string, isError?: boolean) => {
  return new Promise((resolve, reject) => {
    let item = {
      id: Math.random(),
      name,
      checked: false
    };
    setTimeout(() => {
      if (isError) reject("Error");
      else resolve(item);
    }, 500);
  });
};

export const loadItemsLocal = (isError?: boolean) => {
  return new Promise((resolve, reject) => {
    let item = ["One", "Two", "Three", "Four"];
    setTimeout(() => {
      if (isError) reject("Error");
      else resolve(item);
    }, 500);
  });
};

export const createItemApi = (name: string) => {
  return postData("/items", { name });
};

export const loadItems = () => {
  return getData(
    "https://hub.kbr.com/es/_api/lists?$select=Title"
  ).then((res) => res.d.results.map((l: any) => l.Title));
};

function postData(url = "", data = {}) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then((response) => response.json());
}

function getData(url = "") {
  return fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json;odata=verbose"
    }
  }).then((response) => response.json());
}
