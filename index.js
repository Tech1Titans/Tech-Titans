// وظيفة العد التنازلي لوقت الإفطار
function startCountdown() {
  // حدد موعد الإفطار (مثال: اليوم التالي 6:00 مساءً)
  const now = new Date();
  let iftarTime = new Date();
  iftarTime.setHours(18, 0, 0, 0);
  // إذا كان الوقت الحالي بعد الإفطار، نحدد اليوم التالي
  if (now > iftarTime) {
    iftarTime.setDate(iftarTime.getDate() + 1);
  }

  const countdownElement = document.getElementById("countdown");
  function updateCountdown() {
    const now = new Date();
    const diff = iftarTime - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    countdownElement.textContent = `وقت الإفطار: ${seconds} : ${minutes} : ${hours}`;
    if (diff < 0) {
      countdownElement.textContent = "حان وقت الإفطار!";
    }
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function loadGallery() {
  const gallery = document.getElementById("gallery");
  // مصفوفة لصور رمضانية (يمكنك استبدال الروابط بصورك المفضلة)
  const images = [
    "../../img/page4.jpeg",
    "../../img/page5.jpeg",
    "../../img/page6.jpeg",
    "../../img/page7.jpeg",
    "../../img/page8.jpeg",
    "../../img/page9.jpeg",
  ];
  gallery.innerHTML = "";
  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "صورة رمضانية";
    img.className =
      "w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform border-4 border-[#EC8305]";
    gallery.appendChild(img);
  });
}

// التعامل مع زر القائمة الجانبية
function setupSidebar() {
  const toggleSidebar = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("closeSidebar");

  toggleSidebar.addEventListener("click", () => {
    sidebar.classList.remove("translate-x-full");
  });
  closeSidebar.addEventListener("click", () => {
    sidebar.classList.add("translate-x-full");
  });
}

// بدء وظائف التطبيق عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  startCountdown();
  loadGallery();
  setupSidebar();
});
