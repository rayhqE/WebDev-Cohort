const button = document.getElementById("togglebutton");

button.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  //Assignment Part
  button.innerText = isDark ? "Toggle to Light Mode!" : "Toggle to Dark Mode!";
});
