/* eslint-disable react/prop-types */
import styles from "./bubble.module.css";

const HighlightText = ({ text, className }) => {
  return (
    <h2 className={className}>
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default HighlightText;
