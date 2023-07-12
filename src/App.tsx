import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  const [alertVisible, setVisibility] = useState(false);
  let items = ["NEw york", "brussels", "PAris", "Tunis", "Doha"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      }
      <h2>
        ---------------------------------------------------------------------------
      </h2>
      {alertVisible && (
        <Alert onClose={() => setVisibility(false)}>
          Hello world <span>frs</span>firas
        </Alert>
      )}
      <Button color="danger" onClick={() => setVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;
