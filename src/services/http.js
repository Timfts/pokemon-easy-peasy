import axios from "axios";

export async function makeRequest({ url, method = "get", payload, schema }) {
  const response = await axios({
    method: method,
    url
  });

  const { data } = response;

  return schema ? schema.cast(data, { stripUnknown: true }) : data;
}
