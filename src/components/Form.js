import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import createRequest from "../api/createRequest";
import { useNavigate } from "react-router-dom";

export default function (props) {
  const [content, setContent] = useState();
  const navigate = useNavigate();

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.post.value;
    const payload = { content };
    await createRequest({ payload, method: "post" });
    navigate("/");

    // const response = await createRequest({ method: "get" });
    // setPosts([...response]);
    // setContent("");
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="post">
        <Form.Label>Text your new post:</Form.Label>
        <Form.Control
          required
          as="textarea"
          rows={3}
          onChange={onChange}
          value={content}
        />
        <hr />
        <Button className="m-3" variant="primary" type="submit">
          Submit
        </Button>
        <Button
          className="m-3"
          variant="secondary"
          type="button"
          onClick={() => navigate("/")}
        >
          Back
        </Button>
      </Form.Group>
    </Form>
  );
}
