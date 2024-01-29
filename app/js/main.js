const valutes = document.querySelectorAll(".valute");
const courseValue = document.querySelectorAll(".course");
const times = document.querySelectorAll(".time");
const prices = document.querySelectorAll(".level-price");
const nameLogo = document.querySelector(".name-logo");

async function removeClass(data) {
  data.classList.remove("side-off");
  data.classList.add("side-on");
}

let value = 0;
for (let i of prices) {
  if (value === 0) {
    value = value + 1;
    setTimeout(() => {
      removeClass(i);
    }, 100);
  } else if (value === 1) {
    value = value + 1;

    setTimeout(() => {
      removeClass(i);
    }, 500);
  } else {
    setTimeout(() => {
      removeClass(i);
    }, 900);
  }
}

function changeCourse(data) {
  for (let i of courseValue) {
    if (data == "$") {
      const result = (Number(i.textContent) * 89).toFixed(2);
      i.textContent = result;
    } else if (data == "₽") {
      const result = ((Number(i.textContent) / 89) * 1).toFixed(2);
      i.textContent = result;
    } else {
      const result = (Number(i.textContent) / 1).toFixed(2);
      i.textContent = result;
    }
  }
}

for (let i of valutes) {
  i.addEventListener("click", function (event) {
    const value = event.target.textContent;

    for (let x of valutes) {
      if (value == "$") {
        x.textContent = "₽";
      } else if (value == "₽") {
        x.textContent = "€";
      } else {
        x.textContent = "$";
      }
    }
    changeCourse(value);
  });
}

for (let i of times) {
  i.addEventListener("click", function (event) {
    const text = event.target.textContent;

    if (text == "/Months") {
      for (z of times) {
        z.textContent = "/Day";
      }
      for (let x of courseValue) {
        console.log(x.textContent);
        x.textContent = (Number(x.textContent) / 30).toFixed(2);
      }
    } else {
      for (z of times) {
        z.textContent = "/Months";
      }
      for (let x of courseValue) {
        console.log(x.textContent);
        x.textContent = (Number(x.textContent) * 30).toFixed(2);
      }
    }
  });
}

nameLogo.addEventListener("click", function () {
  if (document.querySelector(".div-block") == null) {
    const divLogo = document.querySelector(".div-name-logo");

    divBlock = document.createElement("div");
    divBlock.classList.add("div-block");
    divBlock.addEventListener("click", function () {
      document.querySelector(".div-drop-down").remove();
      divBlock.remove();
    });
    document.querySelector(".app").append(divBlock);

    const div = document.createElement("div");
    div.classList.add("div-drop-down");

    const ul = document.createElement("ul");
    ul.classList.add("list-drop-down");

    function createItem(data) {
      const li = document.createElement("li");
      li.classList.add("item-drop-down");
      li.textContent = data;
      li.addEventListener("click", function () {
        document.querySelector(".div-drop-down").remove();
        divBlock.remove();
      });

      ul.append(li);
    }

    createItem("About Us");
    createItem("Features");
    createItem("Pricing");
    createItem("Product");
    createItem("Contact");

    div.append(ul);

    divLogo.append(div);
  }
});
