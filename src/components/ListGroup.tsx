import { useState } from "react";

//interface in TS can be used to decide the shape of an object
interface Props {
  items: string[];
  heading: string;
  // (item: string)=>void
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr[0] //variable (selectIndex)
  //   arr[1] // updater function
  // exple    const[name, setName] = useState('');

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group ">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
