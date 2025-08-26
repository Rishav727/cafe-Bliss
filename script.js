// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Explore Menu Button
document.getElementById("exploreMenuBtn").addEventListener("click", () => {
  document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
});

// Reservation Modal
const modal = document.getElementById("reserveModal");
const reserveBtn = document.getElementById("reserveBtn");
const closeModal = document.getElementById("closeModal");
const reserveForm = document.getElementById("reserveForm");

reserveBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

reserveForm.addEventListener("submit", e => {
  e.preventDefault();
  alert("✅ Table reserved successfully!");
  modal.style.display = "none";
  reserveForm.reset();
});

// Contact Form
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", e => {
  e.preventDefault();
  alert("📩 Thanks for contacting Café Bliss! We’ll reply soon.");
  contactForm.reset();
});
new CloudinaryImage("cafebg.jpg")
  .resize(scale().width(1000))
  .delivery(quality(auto()))
  .delivery(format(auto()));

  // Open popup
document.querySelector(".btn-primary").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("reservationPopup").style.display = "flex";
});

// Close popup
document.querySelector(".close-btn").addEventListener("click", () => {
  document.getElementById("reservationPopup").style.display = "none";
});

// Submit form
document.getElementById("popupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("🎉 Your table is reserved!");
  document.getElementById("reservationPopup").style.display = "none";
});
document.querySelector(".reservation-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("🎉 Your table has been reserved successfully!");
});
