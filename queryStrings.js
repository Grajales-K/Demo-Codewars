// This function takes a query string as input and returns
// an object containing the key-value pairs from the query string. 
// The query string is expected to be in the format "key=value&key2=value2". 
// The function handles cases where the value may contain '=' characters 
// by joining the remaining parts after splitting on '='.

function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split('&');
  console.log(keyValuePairs);

  for (const pair of keyValuePairs) {
    const [key, ...rest] = pair.split('=');

    const value = rest.join('=');
    queryParams[key] = value;
  }

  return queryParams;
}


console.log(parseQueryString("sort=lowest==45*&colour=yellow"));

