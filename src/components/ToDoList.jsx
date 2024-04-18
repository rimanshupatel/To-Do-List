import { MdDelete } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
export default function TodoList(props) {
  const handleDelete = () => {
    console.log("delete chal rha hai");
  };
  const handleEdit = () => {
    console.log("edit chal rha hai");
  };
  const handleCheckbox = (e) => {
    let id = e.target.name;
    todoList.filter();
  };
  return (
    <li
      key={props.keys}
      className="flex props-center justify-between py-2 px-3 my-3 primary-color rounded"
    >
      <input
        type="checkbox"
        className="h-6 w-5 mr-4"
        onChange={handleCheckbox}
        name={props.id}
        value={props.completed}
      />
      <p className={props.completed ? "line-through w-full" : "w-full"}>
        {" "}
        {props.task}
      </p>
      <div className="flex">
        <button className="text-2xl mx-2">
          <BiSolidEdit onClick={handleEdit} />
        </button>
        <button className="text-2xl">
          <MdDelete onClick={handleDelete} />
        </button>
      </div>
    </li>
  );
}
