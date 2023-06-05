let string = "";
let buttons = document.querySelectorAll(".btns");
const pattern = /[\d\+\-\*\/\.\%\^]+/;
let isActive = true;
console.log(buttons);

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.value;
    console.log(value);

    if (value === "on/off") {
      isActive = !isActive;
      return;
    }
    if (isActive === false) {
      return;
    }

    if (value === "=") {
      if (string?.includes("%")) {
        const [num1, num2] = string.split("%"); // "5%100" -> [5, 100]
        string = (num1 / 100) * num2;
      }

      if (string.includes("^")) {
        let [anynum_1, anynum_2] = string.split("^");
        string = anynum_1 ** anynum_2;
      }

      string = eval(string);
    }
    if (value === "AC") {
      string = "";
    }
    if (value === "d") {
      string = string.slice(0, -1);
    }
    // if (value === "%") {
    //   string = Number(string) / 100;
    // }
    if (value.match(pattern)) {
      string += value;
    }

    document.querySelector("#result").value = string;
  });
});
