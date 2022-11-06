import React, { useState, useEffect } from "react";
import { Container, Alert } from "react-bootstrap";
import Posts from "./Posts";
import createRequest from "../api/createRequest";

export default function Main() {
  const [posts, setPosts] = useState([]);

  const onDelete = async (id) => {
    await createRequest({ id, method: "delete" });
    const response = await createRequest({ method: "get" });
    setPosts([...response]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await createRequest({ method: "get" });
      setPosts([...response]);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Alert variant={"success"}>ALL SUPER Posts</Alert>
      <hr />
      <Posts onDelete={onDelete} posts={posts} />
    </Container>
  );
}
