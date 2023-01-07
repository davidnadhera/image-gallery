import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

function App(word) {
  const searchHandler = (word) => {
    console.log(word);
  };

  return (
    <div className="App">
      <Header title="Image Gallery" />
      <Search onSearch={searchHandler} />
    </div>
  );
}

export default App;
