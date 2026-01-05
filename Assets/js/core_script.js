document.addEventListener("DOMContentLoaded", () => {
  // Forgiving parser + preview UI
  const container = document.querySelector('.flipdown-container');
  const flipdownEl = document.getElementById('flipdown');

  function parseFlexibleDateTime(dateStr, timeStr) {
    if (!dateStr) return null;
    const raw = dateStr.trim();

    // If full ISO or includes T or space with time, try Date constructor
    if (/T|\s/.test(raw)) {
      const parsed = new Date(raw);
      if (!isNaN(parsed.getTime())) return parsed;
    }

    // Try YYYY-MM-DD
    let m = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (m) {
      const y = parseInt(m[1], 10);
      const mo = parseInt(m[2], 10) - 1;
      const d = parseInt(m[3], 10);
      return applyTime(new Date(y, mo, d), timeStr);
    }

    // Try DD-MM-YYYY or DD/MM/YYYY
    m = raw.match(/^(\d{2})[\/-](\d{2})[\/-](\d{4})$/);
    if (m) {
      const d = parseInt(m[1], 10);
      const mo = parseInt(m[2], 10) - 1;
      const y = parseInt(m[3], 10);
      return applyTime(new Date(y, mo, d), timeStr);
    }

    return null;
  }

  function applyTime(dateObj, timeStr) {
    if (!timeStr) return dateObj;
    const t = timeStr.trim();
    const tm = t.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/);
    if (!tm) return null;
    dateObj.setHours(parseInt(tm[1], 10), parseInt(tm[2], 10), tm[3] ? parseInt(tm[3], 10) : 0, 0);
    return dateObj;
  }

  function parseDateTimeFromContainer(el) {
    if (!el) return null;
    const { event, date, time } = el.dataset || {};

    // Try full event attribute first
    if (event) {
      const parsed = new Date(event);
      if (!isNaN(parsed.getTime())) return parsed;
    }

    // Try date/time attributes with flexible formats
    if (date) {
      const parsed = parseFlexibleDateTime(date, time);
      if (parsed) return parsed;
    }

    return null;
  }

  function initFlipdownUsingDate(dateObj) {
    if (!flipdownEl) return;

    // clear existing HTML to allow re-init
    flipdownEl.innerHTML = '';

    const timer_ = Math.floor(dateObj.getTime() / 1000);

    if (timer_ <= Math.floor(Date.now() / 1000)) {
      flipdownEl.innerHTML = `<h2>Acara telah dimulai</h2>`;
      return;
    }

    const f = new FlipDown(timer_);
    f.start();
    f.ifEnded(() => {
      flipdownEl.innerHTML = `<h2>Acara dimulai</h2>`;
    });

    return f;
  }

  // Initial load
  let eventDate = parseDateTimeFromContainer(container);
  if (!eventDate) eventDate = new Date(2045, 11, 13, 9, 0, 0); // default
  initFlipdownUsingDate(eventDate);

  // Admin preview UI (hidden by default). Show when URL contains ?admin=1
  const flipdownAdmin = document.getElementById('flipdownAdmin');
  const previewBtn = document.getElementById('previewBtn');
  const adminDate = document.getElementById('adminDate');
  const adminTime = document.getElementById('adminTime');
  const previewResult = document.getElementById('previewResult');

  // Show admin UI if URL param admin=1 is present
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === '1') {
      if (flipdownAdmin) flipdownAdmin.style.display = '';
    }
  } catch (e) {
    // ignore in environments without URL support
  }

  if (previewBtn) {
    previewBtn.addEventListener('click', () => {
      const dVal = adminDate.value.trim();
      const tVal = adminTime.value.trim();

      if (!dVal) {
        previewResult.textContent = 'Masukkan tanggal (mis. 2026-05-10 atau 10-05-2026).';
        previewResult.style.color = 'red';
        return;
      }

      const parsed = parseFlexibleDateTime(dVal, tVal || undefined);
      if (!parsed || isNaN(parsed.getTime())) {
        previewResult.textContent = 'Format tanggal/waktu tidak valid.';
        previewResult.style.color = 'red';
        return;
      }

      // Update dataset on container so the attribute reflects the previewed date
      if (container) {
        // store normalized date/time parts
        const yyyy = parsed.getFullYear();
        const mm = String(parsed.getMonth() + 1).padStart(2, '0');
        const dd = String(parsed.getDate()).padStart(2, '0');
        const hh = String(parsed.getHours()).padStart(2, '0');
        const min = String(parsed.getMinutes()).padStart(2, '0');
        const sec = String(parsed.getSeconds()).padStart(2, '0');

        container.dataset.date = `${yyyy}-${mm}-${dd}`;
        container.dataset.time = `${hh}:${min}:${sec}`;
        // Also set data-event in ISO local format (without timezone) as convenience
        container.dataset.event = `${yyyy}-${mm}-${dd}T${hh}:${min}:${sec}`;
      }

      initFlipdownUsingDate(parsed);

      previewResult.textContent = `Preview: ${parsed.toLocaleString()}`;
      previewResult.style.color = 'green';
    });
  }
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
