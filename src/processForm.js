export default function processForm(callbackOnSubmit) {
  const form = document.querySelector("form");
  const btn = form.querySelector("button");

  btn.addEventListener("click", () => {
    const input = form.querySelector("input").value;

    if (input) callbackOnSubmit(input);
    else callbackOnSubmit();
  });
}
