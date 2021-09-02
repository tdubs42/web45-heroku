const Style = {
  base: [
    "color: #fff",
    "background-color: #444",
    "padding: 2px 4px",
    "border-radius: 2px"
  ],
  warning: [
    "color: #eee",
    "background-color: red"
  ],
  success: [
    "background-color: green"
  ]
}

const logSuccess = (text) => {
  let style = Style.success.join(';') + ';';
  console.log(`%c${text}`, style);
}

module.exports = {logSuccess}
