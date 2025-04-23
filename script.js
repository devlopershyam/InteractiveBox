
const sizes = ["S", "M", "L", "XL"];
const colors = ["Black", "White", "Red", "Green"];

document.addEventListener("DOMContentLoaded", function showOptions() {
  document.querySelectorAll(".size-dropdown").forEach((drop) => {
    sizes.forEach((size) => {
      const option = document.createElement("option");
      option.value = size;
      option.text = size;
      drop.appendChild(option);
    });
  });

  document.querySelectorAll(".color-dropdown").forEach((drop) => {
    colors.forEach((color) => {
      const option = document.createElement("option");
      option.value = color;
      option.text = color;
      drop.appendChild(option);
    });
  });

 
});

function boxClicks() {
    const boxes = document.querySelectorAll(".color-box");
    boxes.forEach((box) => {
      box.addEventListener("click", function(e) {
        boxes.forEach((b) => b.classList.remove("active"));
        box.classList.add("active");
        box.classList.add("expanded-option");

        // update Total when user click on box
        const value = box.querySelector('.discount-price');
        const discount = value.textContent;
        console.log(discount);
        const totalamt = document.getElementById("totalPrice");
        totalamt.textContent = `${discount}`;

        document.querySelectorAll('.radio-unit').forEach(radio => {
          radio.checked = false;
        });
        const radio = box.querySelector('input[type="radio"]');
        if(radio){
          radio.checked = true;
        }
      });
    });
  }

  
  boxClicks();