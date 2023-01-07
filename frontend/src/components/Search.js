import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

const Search = (props) => {
  const [word, setWord] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSearch(word);
    setWord("");
  };

  const changedHandler = (e) => {
    setWord(e.target.value);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs="12" md="8" lg="6">
          <Form onSubmit={submitHandler}>
            <Row className="align-items-center">
              <Col xs="9">
                <Form.Control
                  type="text"
                  onChange={changedHandler}
                  value={word}
                  placeholder="Search a new image"
                />
              </Col>
              <Col xs="3">
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
