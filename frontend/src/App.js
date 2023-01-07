import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import Welcome from "./components/Welcome";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App(word) {
  const [images, setImages] = useState([]);

  const searchHandler = (word) => {
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        data.title = word;
        setImages([...images, data]);
      })
      .catch((err) => console.log(err));
  };

  const deleteClickHandler = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div className="App">
      <Header title="Image Gallery" />
      <Search onSearch={searchHandler} />
      {images.length ? (
        <Container className="mt-4">
          <Row xs="1" md="2" lg="3">
            {images.map((image) => (
              <Col key={image.id} className="pb-4">
                <ImageCard image={image} onDeleteClick={deleteClickHandler} />
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <Welcome />
      )}
    </div>
  );
}

export default App;
