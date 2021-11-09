// const list = document.querySelector("#players");
// const list = document.getElementById("players");
// console.log(list);
// const student = document.querySelector(".student-li");
// console.log(student);
const students = document.querySelector("ul.student-list");
// console.log(students);
students.insertAdjacentHTML("beforeend", "<li class='student-li' >YiYao</li>");
// console.log(students.innerHTML);
// console.log(students.innerText);
const gary = students.querySelector(".student-li");
// console.log(gary);
// console.log(studentItems);
const utku = "<li class='student-li'>Utku</li>";
students.insertAdjacentHTML("beforeend", utku);
const studentItems = document.querySelectorAll(".student-li");
// studentItems.forEach((item) => {
//   console.log(item.innerText);
//   // console.log(item.innerHTML);
// });
// gary.style = "color: red";
// gary.style.color = "red";
studentItems.forEach((item) => {
  item.classList.toggle("blue");
});

// const input = document.querySelector("input");
// console.log("before", input.value);
// input.value = "good bye";
// console.log("after", input.value);
// const link = document.querySelector("a");
// console.log(link.attributes.href.value);
// console.log(gary.dataset);
students.addEventListener("click", (event) => {
  //   console.log("hello");
  console.log(event);
  console.log(event.currentTarget);
  const hiddenH2 = document.querySelector("h2");
  //   hiddenH2.classList.remove("hidden");
});
debugger;
studentItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("red");
  });
});
