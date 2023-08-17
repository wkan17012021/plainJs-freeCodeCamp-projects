const sidebar = document.querySelector(".sidebar");
// const burgerIcon = document.querySelector(".sidebar-toggle");
// const closeIcon = document.querySelector(".close-btn");

const allBtns = document.getElementsByTagName("button");

for (let index = 0; index < allBtns.length; index++) {
    allBtns[index].addEventListener("click", () => {
        //   console.log(allBtns);
          sidebar.classList.toggle("show-sidebar");
        });
}
