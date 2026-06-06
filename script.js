const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

const msg = document.getElementById("message");
const counter = document.getElementById("counter");

/* STARTING POSITION */

window.addEventListener("load", () => {

    noBtn.style.left =
        (window.innerWidth - 120) + "px";

    noBtn.style.top =
        (window.innerHeight - 120) + "px";

});

/* MESSAGES */

const messages = [
    "Oh c'mon 👉👈",
    "Pretty please? 🎀",
    "Nthuvadeyy 🥲",
    "Hear me out...",
    "Angana paranja patoolaaa 😗",
    "Vazhakk idan alla 🫠",
    "Just one conversation 😌",
    "I even made a website 😭",
    "This button is working overtime 😂",
    "Fine... your choice now 🙂"
];

let count = 0;
let yesSize = 1;

/* Initial position */

window.addEventListener("load", () => {

    noBtn.style.left = "65%";
    noBtn.style.top = "65%";

});

/* NO BUTTON */

noBtn.addEventListener("click", (e) => {

    e.preventDefault();

    if (count < messages.length) {
        msg.textContent = messages[count];
    }

    counter.textContent =
        `Escape attempts: ${count + 1} 🤨`;

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX =
        window.innerWidth -
        buttonWidth -
        20;

    const maxY =
        window.innerHeight -
        buttonHeight -
        20;

    const randomX =
        Math.random() * maxX;

    const randomY =
        Math.random() * maxY;

    noBtn.style.left =
        randomX + "px";

    noBtn.style.top =
        randomY + "px";

    yesSize += 0.08;

    yesBtn.style.transform =
        `scale(${yesSize})`;

    count++;
});

/* YES BUTTON */

yesBtn.addEventListener("click", () => {

    noBtn.style.display = "none";

    page1.classList.add("hidden");

    page2.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* DATE CARDS */

const dateCards =
    document.getElementById("dateCards");

const selectedDate =
    document.getElementById("selectedDate");

for (let i = 0; i < 21; i++) {

    const d = new Date();

    d.setDate(
        d.getDate() + i
    );

    const card =
        document.createElement("div");

    card.className =
        "option-card";

    card.innerText =
        d.toDateString();

    card.addEventListener(
        "click",
        () => {

            document
                .querySelectorAll(
                    "#dateCards .option-card"
                )
                .forEach(card =>
                    card.classList.remove(
                        "selected"
                    )
                );

            card.classList.add(
                "selected"
            );

            selectedDate.value =
                d.toDateString();

        }
    );

    dateCards.appendChild(card);
}

/* CALL OPTION */

const callDate =
    document.createElement("div");

callDate.className =
    "option-card";

callDate.innerText =
    "📞 I'll call you";

callDate.addEventListener(
    "click",
    () => {

        document
            .querySelectorAll(
                "#dateCards .option-card"
            )
            .forEach(card =>
                card.classList.remove(
                    "selected"
                )
            );

        callDate.classList.add(
            "selected"
        );

        selectedDate.value =
            "I'll call you";

    }
);

dateCards.appendChild(callDate);

/* TIME CARDS */

const timeCards =
    document.getElementById("timeCards");

const selectedTime =
    document.getElementById("selectedTime");

for (let h = 5; h <= 22; h++) {

    const card =
        document.createElement("div");

    card.className =
        "option-card";

    let display =
        (h > 12 ? h - 12 : h) +
        ":00 " +
        (h >= 12 ? "PM" : "AM");

    card.innerText =
        display;

    card.addEventListener(
        "click",
        () => {

            document
                .querySelectorAll(
                    "#timeCards .option-card"
                )
                .forEach(card =>
                    card.classList.remove(
                        "selected"
                    )
                );

            card.classList.add(
                "selected"
            );

            selectedTime.value =
                display;

        }
    );

    timeCards.appendChild(card);
}

/* CALL OPTION */

const callTime =
    document.createElement("div");

callTime.className =
    "option-card";

callTime.innerText =
    "📞 I'll call you";

callTime.addEventListener(
    "click",
    () => {

        document
            .querySelectorAll(
                "#timeCards .option-card"
            )
            .forEach(card =>
                card.classList.remove(
                    "selected"
                )
            );

        callTime.classList.add(
            "selected"
        );

        selectedTime.value =
            "I'll call you";

    }
);

timeCards.appendChild(callTime);

/* FORM VALIDATION */

const form =
    document.querySelector("form");

form.addEventListener(
    "submit",
    (e) => {

        if (
            !selectedDate.value
        ) {

            e.preventDefault();

            alert(
                "Pick a date 😌"
            );

            return;
        }

        if (
            !selectedTime.value
        ) {

            e.preventDefault();

            alert(
                "Pick a time 😌"
            );

            return;
        }

    }
);