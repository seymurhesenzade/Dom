const addBtn = document.getElementById("btn");
const clearBtn = document.getElementById("clearbtn");
const toDoContainer = document.getElementById("toDoContainer");
const inputText = document.getElementById("inputText");

// -------------------------------------------------------
addBtn.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  toDoContainer.appendChild(paragraph);
  paragraph.innerHTML = inputText.value;
  inputText.value = "";

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
  });

  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});

clearBtn.addEventListener("click", function () {
  while (toDoContainer.firstChild) {
    toDoContainer.removeChild(toDoContainer.firstChild);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your todo has been deleted.",
          icon: "warning",
        });
      }
    });
  }
});

inputText.addEventListener("click", function () {
  if (inputText.value === null || inputText.value === "") {
    inputText.classList.add("error-border");
  }
});
