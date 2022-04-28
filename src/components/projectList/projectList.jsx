import "./projectList.scss";

export default function WorkList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "workList active" : "workList"}
      onClick={() => {
        setSelected(id);
      }}
    >
      {title}
    </li>
  );
}
