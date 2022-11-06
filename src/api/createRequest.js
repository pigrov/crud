import React from "react";

const createRequest = async ({ id, payload, method }) => {
  const baseURL = "http://localhost:7777/posts/";
  const requestURL = method === "delete" ? baseURL + `${id}` : baseURL;

  try {
    const request = await fetch(requestURL, {
      method: method,
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    return <p>Error: {err}</p>;
  }
};

export default createRequest;
