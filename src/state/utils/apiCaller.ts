const BASE_URL = "https://crudcrud.com/api/01a46669019b443b93672f5cbae32185"; //can move to .env
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
