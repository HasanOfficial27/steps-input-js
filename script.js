const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();
const steps = document.querySelectorAll(".steps");
const step = document.querySelectorAll(".step h2");

const next_btn = document.getElementById("next");
const toggle_btn = document.getElementById("toggle_btn");

const u_name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");

const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");

const plan1 = document.getElementById("plan1");
const plan2 = document.getElementById("plan2");
const plan3 = document.getElementById("plan3");
const icon_con = document.querySelectorAll(".icon_con");
icon_con[0].style.background = "#d19719";
icon_con[1].style.background = "#bf0b8f";

const s_plan = document.getElementById("s_plan");
const s_name = document.getElementById("s_name");
const s_email = document.getElementById("s_email");
const s_number = document.getElementById("s_number");
const s_adds = document.getElementById("s_adds");

const container = document.getElementById("container");
const thanks_con = document.getElementById("thanks_con");
const confirm_email = document.getElementById("confirm_email");
const dismiss_btn = document.getElementById("dismiss_btn");

steps[0].style.display = "block";
step[0].classList.add("active");

function check_input() {
  if (u_name.value == "" || email.value == "" || number.value == "") {
    if (u_name.value == "") {
      u_name.classList.add("active");
    } else {
      u_name.classList.remove("active");
    }
    if (email.value == "") {
      email.classList.add("active");
    } else {
      email.classList.remove("active");
    }
    if (number.value == "") {
      number.classList.add("active");
    } else {
      number.classList.remove("active");
    }
  } else {
    const name_pattern = /^[a-zA-Z ]{3,30}$/;
    const mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    const number_format =
      /^(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    if (
      !name_pattern.test(u_name.value) ||
      !mail_format.test(email.value) ||
      !number_format.test(number.value)
    ) {
      if (!name_pattern.test(u_name.value)) {
        u_name.classList.add("active");
      } else {
        u_name.classList.remove("active");
      }
      if (!mail_format.test(email.value)) {
        email.classList.add("active");
      } else {
        email.classList.remove("active");
      }
      if (!number_format.test(number.value)) {
        number.classList.add("active");
      } else {
        number.classList.remove("active");
      }
    } else {
      u_name.classList.remove("active");
      email.classList.remove("active");
      number.classList.remove("active");
      next();
    }
  }
}
/*****next fff*****/
function next() {
  let i = add();
  if (i < steps.length) {
    steps[i].style.display = "block";
    steps[i - 1].style.display = "none";
    step[i].classList.add("active");
    step[i - 1].classList.remove("active");
    /***toggle btn year month***/
    toggle_btn.addEventListener("click", () => {
      toggle_btn.classList.toggle("active");
      if (toggle_btn.classList.contains("active")) {
        yearly.classList.add("active");
        monthly.classList.remove("active");
        plan1.innerHTML = "$96/ye";
        plan2.innerHTML = "$130/ye";
        plan3.innerHTML = "$165/ye";
      } else {
        monthly.classList.add("active");
        yearly.classList.remove("active");
        plan1.innerHTML = "$9/mo";
        plan2.innerHTML = "$12/mo";
        plan3.innerHTML = "$15/mo";
      }
    });
    /****plan select*****/
    const select_plan = document.querySelectorAll(".selects_plan");
    select_plan.forEach(function (val, i) {
      val.addEventListener("click", function () {
        if (i == 0) {
          select_plan[0].classList.add("active");
          select_plan[1].classList.remove("active");
          select_plan[2].classList.remove("active");
        } else if (i == 1) {
          select_plan[0].classList.remove("active");
          select_plan[1].classList.add("active");
          select_plan[2].classList.remove("active");
        } else if (i == 2) {
          select_plan[0].classList.remove("active");
          select_plan[1].classList.remove("active");
          select_plan[2].classList.add("active");
        }
      });
      select_plan[2].classList.add("active");
      if (select_plan[0].classList.contains("active")) {
        s_plan.innerHTML = plan1.textContent;
      } else if (select_plan[1].classList.contains("active")) {
        s_plan.innerHTML = plan2.textContent;
      } else if (select_plan[2].classList.contains("active")) {
        s_plan.innerHTML = plan3.textContent;
      }
    });
    /***Add-Ones***/
    if (i == 2) {
      const select_adds = document.querySelectorAll(".select_adds");
      select_adds.forEach(function (vall) {
        vall.addEventListener("click", function () {
          if (!this.classList.contains("active")) {
            this.classList.add("active");
          } else if (this.classList.contains("active")) {
            this.classList.remove("active");
          } else {
          }
        });
      });
    }
    /*****summary te output****/
    if (i == 3) {
      next_btn.innerHTML = "Submit";
      s_name.value = u_name.value;
      s_email.value = email.value;
      s_number.value = number.value;
    }
  } else {
    container.style.display = "none";
    thanks_con.style.display = "block";
    confirm_email.innerHTML = email.value;
    dismiss_btn.addEventListener("click", function () {
      thanks_con.style.display = "none";
    });
  }
}
/******/
/********
function back() {
  steps[0].style.display = "block";
  steps.style.display = "none";
  step[0].classList.add("active");
  step.classList.remove("active");
}
********/
