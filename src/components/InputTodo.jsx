import React from "react";

// const style = {
//     background: "#c1ffff"
//     width: "var(--w)",
//     height: "30px",
//     padding: "var(--p)",
//     margin: "var(--m)",
//     border-radius: "var(--border-r)"
// }

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
