import React from "react";
import { Container, Button } from "react-bootstrap";
import { Routes, Route, NavLink } from "react-router-dom";
import Main from "./components/Main";
import Post from "./components/Post";
import Form from "./components/Form";

function Menu() {
  return (
    <Container>
      <NavLink className="menu__item" to="/">
        <Button className="m-2">HomePage</Button>
      </NavLink>
      <NavLink className="menu__item" to="/posts/new">
        <Button className="m-2">NewPost</Button>
      </NavLink>
    </Container>
  );
}

export default function App() {
  return (
    <Container>
      <Menu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/posts/new" element={<Form />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </Container>
  );
}
