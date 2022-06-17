// LOCAL FAKE  DATA

const reviews = [
  {
    name: "Revan Isa",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciun  excepturi modi corrupti ipsa possimus voluptatem, similique, at nobis doloremque aliquam autem? Reiciendis accusantium temporibus, ducimus   amet inventore quaerat eius nam?",
  },
  {
    name: "Émile Antonius",
    text: "To get the process started, the job seeker is asked to copy and paste his or her resume into a box on the Careers page.",
  },
  {
    name: "Enn Paško",
    text: "Even if you copy and paste your basic details each time, adding information related to the specific ad will let the recipient know you paid attention to his or her message.",
  },

  {
    name: "Jakša Manius",
    text: "The following code was taken from PCPlanets.com, a good source of free copy and paste Myspace music codes.",
  },
  {
    name: "Edvin Leon",
    text: "Just copy and paste this code in the About Me box and save the changes. ",
  },
  {
    name: "Havel Settimio",
    text: "Open your photo files, then copy and paste each image onto the colored rectangles you've just created.",
  },
];

// WEB API

const author = document.getElementById("author");
const info = document.getElementById("info");

const prevBtn = document.getElementById("prev-btn");
const randomBtn = document.getElementById("random-btn");
const nextBtn = document.getElementById("next-btn");

// current item

let currentItem = 0;

// LOAD INITIAL ITEM

window.addEventListener("DOMContentLoaded", () => {
  showInfo();
});

function showInfo() {
  let item = reviews[currentItem];
  author.textContent = item.name;
  info.textContent = item.text;
}

// NEXT PERSON

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showInfo();
});

// PREVIOUS PERSON

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showInfo(currentItem);
});

// RANDOM PERSON

randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showInfo(currentItem);
});
