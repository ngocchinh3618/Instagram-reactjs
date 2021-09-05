export async function callApi(){
  const getApi = await fetch("https://60a675f2b970910017eb1ad2.mockapi.io/users");
  const getApiUser = await getApi.json();
  console.log("object", getApiUser);
}