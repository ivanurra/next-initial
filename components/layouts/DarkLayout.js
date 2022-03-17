import styles from "./MainLayout.module.css";

export const DarkLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>DarkMode</h3>
      <div>{children}</div>
    </div>
  );
};
