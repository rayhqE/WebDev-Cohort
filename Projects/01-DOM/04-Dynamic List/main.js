const addBtn = document.getElementById("addBtn");
const inputField = document.getElementById("iteminput");
const ul = document.getElementById("list");

addBtn.addEventListener("click", () => {
  if (inputField.value === "") {
    alert("Input Field can't be Empty");
    return;
  }
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  editBtn.textContent = "Edit";
  delBtn.classList.add("delete");
  delBtn.addEventListener("click", () => {
    ul.removeChild(li);
  });
  li.textContent = inputField.value;
  li.appendChild(delBtn);

  li.addEventListener("dblclick", () => {
    li.appendChild(editBtn);
  });

  ul.appendChild(li);
  inputField.value = "";
});
