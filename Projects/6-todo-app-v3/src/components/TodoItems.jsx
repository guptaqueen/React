import TodoItem from "./TodoItem";
import styles from "./ItemContainer.css"

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.Kg-item}>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
