document.addEventListener("DOMContentLoaded", () => {
  // Flexible parser: reads data-event or data-date + data-time from .flipdown-container
  const container = document.querySelector('.flipdown-container');
  const flipdownEl = document.querySelector('.flipdown');

  function parseFlexibleDateTime(dateStr, timeStr) {
    if (!dateStr) return null;
    const raw = dateStr.trim();

    if (/T|\s/.test(raw)) {
      const parsed = new Date(raw);
      if (!isNaN(parsed.getTime())) return parsed;
    }

    let m = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (m) {
      return applyTime(new Date(parseInt(m[1],10), parseInt(m[2],10)-1, parseInt(m[3],10)), timeStr);
    }

    m = raw.match(/^(\d{2})[\/-](\d{2})[\/-](\d{4})$/);
    if (m) {
      return applyTime(new Date(parseInt(m[3],10), parseInt(m[2],10)-1, parseInt(m[1],10)), timeStr);
    }

    return null;
  }

  function applyTime(dateObj, timeStr) {
    if (!timeStr) return dateObj;
    const tm = timeStr.trim().match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/);
    if (!tm) return null;
    dateObj.setHours(parseInt(tm[1],10), parseInt(tm[2],10), tm[3] ? parseInt(tm[3],10) : 0, 0);
    return dateObj;
  }

  function parseDateTimeFromContainer(el) {
    if (!el) return null;
    const { event, date, time } = el.dataset || {};
    if (event) {
      const parsed = new Date(event);
      if (!isNaN(parsed.getTime())) return parsed;
    }
    if (date) {
      const parsed = parseFlexibleDateTime(date, time);
      if (parsed) return parsed;
    }
    return null;
  }

  function initFlipdownUsingDate(dateObj) {
    if (!flipdownEl) return;
    flipdownEl.innerHTML = '';
    const timer_ = Math.floor(dateObj.getTime() / 1000);
    if (timer_ <= Math.floor(Date.now() / 1000)) {
      flipdownEl.innerHTML = `<h2>Acara telah dimulai</h2>`;
      return;
    }
    const flipdown = new FlipDown(timer_);
    flipdown.start();
    flipdown.ifEnded(() => {
      flipdownEl.innerHTML = `<h2>Acara telah dimulai</h2>`;
    });
  }

  let eventDate = parseDateTimeFromContainer(container);
  if (!eventDate) eventDate = new Date(2045, 11, 13, 9, 0, 0);
  initFlipdownUsingDate(eventDate);
});

function scrollToTop() {
  const container = document.getElementById("submittedData");
  container.scrollTo({
    top: -1000,
  });
}

const data = [
  { name: "Bari", status: "Hadir", message: "Selamat Ya" },
  { name: "Ali", status: "Tidak Hadir", message: "Maaf, tidak bisa hadir" },
  { name: "Sara", status: "Hadir", message: "Semoga bahagia selalu" },
];

for (let i = 0; i < 3; i++) {
  const submittedDataDiv = document.getElementById("submittedData");

  const newItem = document.createElement("div");
  newItem.classList.add("submitted-item");

  newItem.innerHTML = `
    <h3>${data[i].name} (${data[i].status})</h3>
    <p>${data[i].message}</p>
  `;

  submittedDataDiv.appendChild(newItem);
}

document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const attendance = document.querySelector(
    'input[name="attendance"]:checked'
  ).value;
  const message = document.getElementById("message").value;

  const submittedDataDiv = document.getElementById("submittedData");

  const newItem = document.createElement("div");
  newItem.classList.add("submitted-item");

  newItem.innerHTML = `
  <h3>${name} (${attendance})</h3>
  <p>${message}</p>
  `;

  submittedDataDiv.appendChild(newItem);

  document.getElementById("rsvpForm").reset();
  scrollToTop();
});

const audio = document.getElementById("myAudio");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playButton.classList.add("playing");
    playButton.classList.remove("paused");
  } else {
    audio.pause();
    playButton.classList.add("paused");
    playButton.classList.remove("playing");
  }
});

let slideIndex = 1;

function showSlide(n) {
  let i;
  let slides = document.querySelectorAll(".mySlide");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

showSlide(slideIndex);

function plusSlide(n) {
  showSlide((slideIndex += n));
}
