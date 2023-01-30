const BASE_URL = "https://crudcrud.com/api/c13ed7a9d3a3483bbea1877988f18a77"; //can move to .env
export default async function apiCaller<T>(
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
  }).then(async (res) => {
    //API restpoint sends an empty body on PUT and DELETE causing JSON parse error
    if (method === "put" || method === "delete") return;
    return res?.json();
  });
}
