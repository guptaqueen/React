import styles from "./Foodinput.module.css";
const Foodinput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Enter  Food item here"
      className={styles.foodinput}
      onChange={handleOnChange}
    />
  );
};
export default Foodinput;
