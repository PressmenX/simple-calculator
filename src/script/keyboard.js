const keymap = {
  "=": "equal",
  Enter: "equal",
  Delete: "clear",
  "*": "×",
  "/": "÷",
};

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") e.preventDefault();

  const btn = document.querySelector(
    `[data-type='${keymap[e.key]}'], 
    [data-action='${keymap[e.key]}'],
    [data-value='${keymap[e.key] ?? e.key}']`,
  );
  if (btn) {
    btn.click();
  }
});
