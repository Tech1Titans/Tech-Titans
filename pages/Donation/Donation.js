// // Static data for cards
// const cardsData = [
//   {
//     id: 1,
//     reason: "مساعدة المرضى",
//     total_debt: "1000",
//     remaining_debt: "500",
//     category: "مساعدة المرضى",
//   },
//   {
//     id: 2,
//     reason: "فك كربة السجناء",
//     total_debt: "2000",
//     remaining_debt: "300",
//     category: "فك كربة السجناء",
//   },
//   {
//     id: 3,
//     reason: "سداد ديون الأسر",
//     total_debt: "1500",
//     remaining_debt: "750",
//     category: "سداد ديون الأسر",
//   },
//   {
//     id: 4,
//     reason: "سداد ديون التعليم",
//     total_debt: "2500",
//     remaining_debt: "500",
//     category: "سداد ديون التعليم",
//   },
// ];

// let searchTerm = "";
// let filterValue = "all";
// let categoryFilter = "all";

// // DOM Elements
// const searchInput = document.getElementById("searchInput");
// const filterSelect = document.getElementById("filterSelect");
// const cardsGrid = document.getElementById("cardsGrid");
// const categoryButtons = document.querySelectorAll(".category-btn");

// // Event Listeners
// searchInput.addEventListener("input", (e) => {
//   searchTerm = e.target.value;
//   renderCards();
// });

// filterSelect.addEventListener("change", (e) => {
//   filterValue = e.target.value;
//   renderCards();
// });

// categoryButtons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const cat = btn.getAttribute("data-category");
//     categoryFilter = categoryFilter === cat ? "all" : cat;
//     // Toggle active state styling
//     categoryButtons.forEach((b) => b.classList.remove("active"));
//     if (categoryFilter !== "all") {
//       btn.classList.add("active");
//     }
//     renderCards();
//   });
// });

// // Render Cards Function
// function renderCards() {
//   const filteredCards = cardsData.filter((card) => {
//     // Calculate collection percentage
//     const totalDebt = parseFloat(card.total_debt || 0);
//     const remainingDebt = parseFloat(card.remaining_debt || 0);
//     const collectionPercentage =
//       Math.round((1 - remainingDebt / totalDebt) * 100) || 0;

//     // Filter by search term
//     const matchesSearch =
//       card.id.toString().includes(searchTerm) ||
//       card.reason.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       card.remaining_debt.toString().includes(searchTerm);

//     // Filter by select options
//     const matchesFilter =
//       filterValue === "all" ||
//       (filterValue === "low" && collectionPercentage < 50) ||
//       (filterValue === "medium" &&
//         collectionPercentage >= 50 &&
//         collectionPercentage < 80) ||
//       (filterValue === "high" && collectionPercentage >= 80);

//     // Filter by category button if active
//     const matchesCategory =
//       categoryFilter === "all" || card.category === categoryFilter;

//     return matchesSearch && matchesFilter && matchesCategory;
//   });

//   cardsGrid.innerHTML = "";
//   if (filteredCards.length > 0) {
//     filteredCards.forEach((card) => {
//       const totalDebt = parseFloat(card.total_debt || 0);
//       const remainingDebt = parseFloat(card.remaining_debt || 0);
//       const collectionPercentage =
//         Math.round((1 - remainingDebt / totalDebt) * 100) || 0;

//       const cardEl = document.createElement("div");
//       cardEl.className =
//         "bg-white rounded-lg shadow-md overflow-hidden card-hover";
//       cardEl.innerHTML = `
//               <div class="bg-secondary p-4 relative">
//                 <div class="bg-white rounded-lg p-4 mt-2 mb-6">
//                   <p class="text-center font-medium text-primary">
//                     عليه أمر بالتنفيذ وحكم بالسجن بسبب ${card.reason}<br />
//                     متبقي عليه مبلغ ${parseFloat(
//                       remainingDebt
//                     ).toLocaleString()} دينار
//                   </p>
//                 </div>
//                 <div class="absolute bottom-0 left-0 h-2 bg-light progress-bar" style="width: ${collectionPercentage}%;"></div>
//                 <div class="absolute bottom-0 right-0 bg-primary px-2 rounded-tl-md text-white text-sm">
//                   ${collectionPercentage}%
//                 </div>
//               </div>
//               <div class="flex justify-between items-center px-4 py-2 border-b text-primary">
//                 <div>رقم الفاتورة: ${card.id}</div>
//               </div>
//               <div class="flex justify-between items-center p-4">
//                 <div class="text-right">
//                   <p class="text-primary mb-1">تم جمع</p>
//                   <p class="font-bold text-lg">${collectionPercentage}%</p>
//                 </div>
//                 <div class="text-right">
//                   <p class="text-primary mb-1">المبلغ المتبقي</p>
//                   <p class="font-bold text-lg">د.أ ${parseFloat(
//                     remainingDebt
//                   ).toLocaleString()}</p>
//                 </div>
//               </div>
//               <div class="flex p-4 gap-2">
//                 <button class="donate-btn bg-primary hover:bg-primary text-white px-4 py-2 rounded-md w-1/3" onclick="handleDonateClick(${
//                   card.id
//                 })">
//                   تبرع الآن
//                 </button>
//                 <div class="flex border rounded-md w-2/3">
//                   <input type="number" class="w-full px-3 py-2 text-right donation-input outline-none" placeholder="مبلغ التبرع" />
//                   <span class="bg-gray-100 px-3 py-2 text-gray-600 border-l">د.أ</span>
//                 </div>
//               </div>
//               <div class="p-4 text-center border-t">
//                 <button class="text-primary font-bold hover:cursor-pointer hover:text-primary-dark" onclick="handleDetailsClick(${
//                   card.id
//                 })">
//                   عرض التفاصيل
//                 </button>
//               </div>
//             `;
//       cardsGrid.appendChild(cardEl);
//     });
//   } else {
//     cardsGrid.innerHTML = `<div class="col-span-3 text-center py-12 text-primary">لا توجد بيانات متاحة</div>`;
//   }
// }

// // Navigation functions (update URLs as needed)
// function handleDonateClick(id) {
//   window.location.href = `/single-page/${id}`;
// }
// function handleDetailsClick(id) {
//   window.location.href = `/single-page/${id}`;
// }

// // Initial render
// renderCards();
