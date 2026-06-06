const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

const msg = document.getElementById("message");

const messages = [
    "Oh c'mon 👉👈",
    "Pretty please? 🎀",
    "Nthuvadeyy 🥲",
    "Hear me out...",
    "Angana paranja patoolaaa 😗",
    "Vazhakk idan alla 🫠",
    "Fine, your choice now 🙂"
];

let count = 0;
let yesSize = 1;

noBtn.addEventListener("click", (e) => {

    e.preventDefault();

    if (count < messages.length) {
        msg.textContent = messages[count];
    }

    const container = document.querySelector(".buttons");

    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    yesSize += 0.15;

    yesBtn.style.transform = `scale(${yesSize})`;

    count++;
});

yesBtn.addEventListener("click", () => {

    page1.classList.add("hidden");

    page2.classList.remove("hidden");

});



/* ==========================
   DATE SELECTION CARDS
========================== */

const dateCards = document.getElementById("dateCards");
const selectedDate = document.getElementById("selectedDate");

for (let i = 0; i < 21; i++) {

    let d = new Date();

    d.setDate(d.getDate() + i);

    const card = document.createElement("div");

    card.className = "option-card";

    card.innerText = d.toDateString();

    card.onclick = () => {

        document
            .querySelectorAll("#dateCards .option-card")
            .forEach(c => c.classList.remove("selected"));

        card.classList.add("selected");

        selectedDate.value = d.toDateString();
    };

    dateCards.appendChild(card);
}



const callDate = document.createElement("div");

callDate.className = "option-card";

callDate.innerText = "📞 I'll call you";

callDate.onclick = () => {

    document
        .querySelectorAll("#dateCards .option-card")
        .forEach(c => c.classList.remove("selected"));

    callDate.classList.add("selected");

    selectedDate.value = "I'll call you";
};

dateCards.appendChild(callDate);



/* ==========================
   TIME SELECTION CARDS
========================== */

const timeCards = document.getElementById("timeCards");
const selectedTime = document.getElementById("selectedTime");

for (let h = 5; h <= 22; h++) {

    let display =
        (h > 12 ? h - 12 : h) +
        ":00 " +
        (h >= 12 ? "PM" : "AM");

    const card = document.createElement("div");

    card.className = "option-card";

    card.innerText = display;

    card.onclick = () => {

        document
            .querySelectorAll("#timeCards .option-card")
            .forEach(c => c.classList.remove("selected"));

        card.classList.add("selected");

        selectedTime.value = display;
    };

    timeCards.appendChild(card);
}



const callTime = document.createElement("div");

callTime.className = "option-card";

callTime.innerText = "📞 I'll call you";

callTime.onclick = () => {

    document
        .querySelectorAll("#timeCards .option-card")
        .forEach(c => c.classList.remove("selected"));

    callTime.classList.add("selected");

    selectedTime.value = "I'll call you";
};

timeCards.appendChild(callTime);



/* ==========================
   FORM VALIDATION
========================== */

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    if (!selectedDate.value) {

        e.preventDefault();

        alert("Select a date 😌");

        return;
    }

    if (!selectedTime.value) {

        e.preventDefault();

        alert("Select a time 😌");

        return;
    }

});