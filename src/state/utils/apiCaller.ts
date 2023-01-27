const BASE_URL = "https://crudcrud.com/api/f28eb06e260c4e359bbaa59664cb4a1c"; //can move to .env
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
  }).then((res) => res.json());
}
