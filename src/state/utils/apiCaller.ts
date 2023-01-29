const BASE_URL = "https://crudcrud.com/api/9a06185f6ecf4155bdd1b08e282110fd"; //can move to .env
export default function apiCaller<T>(
  method: string,
  path: string,
  data?: any
): Promise<T[] | null> {
  return fetch(BASE_URL + path, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  }).then((res) => {
    return res?.json(); //TODO FIX ERROR HERE
  });
}
