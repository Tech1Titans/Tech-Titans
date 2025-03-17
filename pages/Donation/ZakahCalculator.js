// // document.addEventListener("DOMContentLoaded", function () {
// //   // ---------- TAB SWITCHING FOR INFO TABS ----------
// //   const infoTabs = {
// //     money: {
// //       btn: document.getElementById("tab-money"),
// //       content: document.getElementById("content-money"),
// //     },
// //     gold: {
// //       btn: document.getElementById("tab-gold"),
// //       content: document.getElementById("content-gold"),
// //     },
// //     silver: {
// //       btn: document.getElementById("tab-silver"),
// //       content: document.getElementById("content-silver"),
// //     },
// //   };

// //   function switchInfoTab(activeTab) {
// //     for (const key in infoTabs) {
// //       if (infoTabs.hasOwnProperty(key)) {
// //         if (key === activeTab) {
// //           infoTabs[key].btn.classList.add(
// //             "bg-emerald-50",
// //             "text-emerald-800",
// //             "border-b-2",
// //             "border-emerald-600"
// //           );
// //           infoTabs[key].content.classList.remove("hidden");
// //         } else {
// //           infoTabs[key].btn.classList.remove(
// //             "bg-emerald-50",
// //             "text-emerald-800",
// //             "border-b-2",
// //             "border-emerald-600"
// //           );
// //           infoTabs[key].content.classList.add("hidden");
// //         }
// //       }
// //     }
// //   }

// //   infoTabs.money.btn.addEventListener("click", function () {
// //     switchInfoTab("money");
// //   });
// //   infoTabs.gold.btn.addEventListener("click", function () {
// //     switchInfoTab("gold");
// //   });
// //   infoTabs.silver.btn.addEventListener("click", function () {
// //     switchInfoTab("silver");
// //   });

// //   // ---------- SWITCHING CALCULATOR FORMS ----------
// //   const calcButtons = {
// //     money: document.getElementById("calc-money"),
// //     gold: document.getElementById("calc-gold"),
// //     silver: document.getElementById("calc-silver"),
// //   };

// //   const calcForms = {
// //     money: document.getElementById("form-money"),
// //     gold: document.getElementById("form-gold"),
// //     silver: document.getElementById("form-silver"),
// //   };

// //   function switchCalcForm(activeForm) {
// //     for (const key in calcForms) {
// //       if (calcForms.hasOwnProperty(key)) {
// //         if (key === activeForm) {
// //           calcForms[key].classList.remove("hidden");
// //         } else {
// //           calcForms[key].classList.add("hidden");
// //         }
// //       }
// //     }
// //     // Hide previous result card when switching forms
// //     document.getElementById("results-card").classList.add("hidden");
// //   }

// //   calcButtons.money.addEventListener("click", function () {
// //     switchCalcForm("money");
// //   });
// //   calcButtons.gold.addEventListener("click", function () {
// //     switchCalcForm("gold");
// //   });
// //   calcButtons.silver.addEventListener("click", function () {
// //     switchCalcForm("silver");
// //   });

// //   // ---------- CALCULATION FUNCTIONALITY ----------
// //   document
// //     .getElementById("calculate-btn")
// //     .addEventListener("click", function () {
// //       // Determine which form is active
// //       let activeForm = "";
// //       if (!calcForms.money.classList.contains("hidden")) {
// //         activeForm = "money";
// //       } else if (!calcForms.gold.classList.contains("hidden")) {
// //         activeForm = "gold";
// //       } else if (!calcForms.silver.classList.contains("hidden")) {
// //         activeForm = "silver";
// //       }

// //       let resultText = "";
// //       let zakatAmount = 0;
// //       let details = [];

// //       if (activeForm === "money") {
// //         // --- Money Calculation ---
// //         const moneyInput =
// //           parseFloat(document.getElementById("money-amount").value) || 0;
// //         const yearlyChecked = document.getElementById("money-yearly").checked;
// //         const goldPrice =
// //           parseFloat(document.getElementById("money-gold-price").value) || 0;

// //         // Calculate nisab based on gold price for 85 grams of 24K gold
// //         const nisab = 85 * goldPrice;
// //         details.push(`قيمة المال المدخلة: ${moneyInput.toFixed(2)} ر.س`);
// //         details.push(`سعر الذهب: ${goldPrice.toFixed(2)} ر.س/جرام`);
// //         details.push(`النصاب المحسوب (85 جرام ذهب): ${nisab.toFixed(2)} ر.س`);

// //         if (!yearlyChecked) {
// //           resultText = "لم يمر عليه حول كامل";
// //         } else if (moneyInput < nisab) {
// //           resultText = "لم يبلغ النصاب";
// //         } else {
// //           zakatAmount = moneyInput * 0.025;
// //           resultText = "بلغ النصاب";
// //         }
// //         details.push(
// //           `حالة الحول: ${
// //             yearlyChecked ? "مر عليه حول كامل" : "لم يمر عليه حول كامل"
// //           }`
// //         );
// //         details.push(
// //           `الزكاة (2.5%): ${
// //             moneyInput < nisab || !yearlyChecked
// //               ? "0.00"
// //               : zakatAmount.toFixed(2)
// //           } ر.س`
// //         );
// //       } else if (activeForm === "gold") {
// //         // --- Gold Calculation ---
// //         const goldWeight =
// //           parseFloat(document.getElementById("gold-weight").value) || 0;
// //         const goldKarat =
// //           parseFloat(document.getElementById("gold-karat").value) || 24;
// //         const yearlyChecked = document.getElementById("gold-yearly").checked;
// //         const goldPrice =
// //           parseFloat(document.getElementById("gold-price").value) || 0;

// //         // Calculate pure gold weight based on karat (24K = pure)
// //         const pureGoldWeight = goldWeight * (goldKarat / 24);
// //         details.push(`وزن الذهب المدخل: ${goldWeight.toFixed(2)} جرام`);
// //         details.push(`عيار الذهب: ${goldKarat} قيراط`);
// //         details.push(`الوزن الصافي للذهب: ${pureGoldWeight.toFixed(2)} جرام`);
// //         details.push(`سعر الذهب (عيار 24): ${goldPrice.toFixed(2)} ر.س/جرام`);

// //         const nisab = 85; // 85 grams of pure gold
// //         details.push(`النصاب المحسوب: ${nisab.toFixed(2)} جرام ذهب خالص`);

// //         if (!yearlyChecked) {
// //           resultText = "لم يمر عليه حول كامل";
// //         } else if (pureGoldWeight < nisab) {
// //           resultText = "لم يبلغ النصاب";
// //         } else {
// //           // Value is calculated based on pure weight * gold price
// //           const goldValue = pureGoldWeight * goldPrice;
// //           zakatAmount = goldValue * 0.025;
// //           resultText = "بلغ النصاب";
// //           details.push(`قيمة الذهب: ${goldValue.toFixed(2)} ر.س`);
// //         }
// //         details.push(
// //           `حالة الحول: ${
// //             yearlyChecked ? "مر عليه حول كامل" : "لم يمر عليه حول كامل"
// //           }`
// //         );
// //         details.push(
// //           `الزكاة (2.5%): ${
// //             pureGoldWeight < nisab || !yearlyChecked
// //               ? "0.00"
// //               : zakatAmount.toFixed(2)
// //           } ر.س`
// //         );
// //       } else if (activeForm === "silver") {
// //         // --- Silver Calculation ---
// //         const silverWeight =
// //           parseFloat(document.getElementById("silver-weight").value) || 0;
// //         const silverPurity =
// //           parseFloat(document.getElementById("silver-purity").value) || 999;
// //         const yearlyChecked = document.getElementById("silver-yearly").checked;
// //         const silverPrice =
// //           parseFloat(document.getElementById("silver-price").value) || 0;

// //         // Calculate pure silver weight (assuming purity out of 1000)
// //         const pureSilverWeight = silverWeight * (silverPurity / 1000);
// //         details.push(`وزن الفضة المدخل: ${silverWeight.toFixed(2)} جرام`);
// //         details.push(`نقاء الفضة: ${silverPurity}`);
// //         details.push(`الوزن الصافي للفضة: ${pureSilverWeight.toFixed(2)} جرام`);
// //         details.push(`سعر الفضة: ${silverPrice.toFixed(2)} ر.س/جرام`);

// //         const nisab = 595; // 595 grams of pure silver
// //         details.push(`النصاب المحسوب: ${nisab.toFixed(2)} جرام فضة خالصة`);

// //         if (!yearlyChecked) {
// //           resultText = "لم يمر عليه حول كامل";
// //         } else if (pureSilverWeight < nisab) {
// //           resultText = "لم يبلغ النصاب";
// //         } else {
// //           const silverValue = pureSilverWeight * silverPrice;
// //           zakatAmount = silverValue * 0.025;
// //           resultText = "بلغ النصاب";
// //           details.push(`قيمة الفضة: ${silverValue.toFixed(2)} ر.س`);
// //         }
// //         details.push(
// //           `حالة الحول: ${
// //             yearlyChecked ? "مر عليه حول كامل" : "لم يمر عليه حول كامل"
// //           }`
// //         );
// //         details.push(
// //           `الزكاة (2.5%): ${
// //             pureSilverWeight < nisab || !yearlyChecked
// //               ? "0.00"
// //               : zakatAmount.toFixed(2)
// //           } ر.س`
// //         );
// //       }

// //       // ---------- DISPLAY RESULTS ----------
// //       document.getElementById("nisab-result").textContent = resultText;
// //       document.getElementById("zakat-amount").textContent = `${(
// //         zakatAmount || 0
// //       ).toFixed(2)} ر.س`;

// //       // Populate calculation details
// //       const detailsContainer = document.getElementById("calculation-details");
// //       detailsContainer.innerHTML = "";
// //       details.forEach(function (line) {
// //         const p = document.createElement("p");
// //         p.textContent = line;
// //         detailsContainer.appendChild(p);
// //       });

// //       // Show result card
// //       document.getElementById("results-card").classList.remove("hidden");
// //     });
// // });
// document.addEventListener("DOMContentLoaded", function () {
//   // عناصر التبويبات الرئيسية في قسم الأحكام
//   const tabMoney = document.getElementById("tab-money");
//   const tabGold = document.getElementById("tab-gold");
//   const tabSilver = document.getElementById("tab-silver");

//   // محتويات التبويبات
//   const contentMoney = document.getElementById("content-money");
//   const contentGold = document.getElementById("content-gold");
//   const contentSilver = document.getElementById("content-silver");

//   // أزرار اختيار نوع الحساب في الحاسبة
//   const calcMoney = document.getElementById("calc-money");
//   const calcGold = document.getElementById("calc-gold");
//   const calcSilver = document.getElementById("calc-silver");

//   // نماذج الحساب المختلفة
//   const formMoney = document.getElementById("form-money");
//   const formGold = document.getElementById("form-gold");
//   const formSilver = document.getElementById("form-silver");

//   // زر الحساب
//   const calculateBtn = document.getElementById("calculate-btn");

//   // حفظ واسترجاع اختيار نوع الحساب من localStorage
//   const storedCalcType = localStorage.getItem("calcType") || "money";
//   switchCalcForm(storedCalcType);

//   // حفظ واسترجاع القيم المدخلة
//   loadFormValues();

//   // تفعيل التبويبات في قسم الأحكام
//   tabMoney.addEventListener("click", function () {
//     activateTab("money");
//   });
//   tabGold.addEventListener("click", function () {
//     activateTab("gold");
//   });
//   tabSilver.addEventListener("click", function () {
//     activateTab("silver");
//   });

//   // تفعيل أزرار اختيار نوع الحساب
//   calcMoney.addEventListener("click", function () {
//     switchCalcForm("money");
//   });
//   calcGold.addEventListener("click", function () {
//     switchCalcForm("gold");
//   });
//   calcSilver.addEventListener("click", function () {
//     switchCalcForm("silver");
//   });

//   // عند تغيير قيمة أي مدخل، نحفظ القيمة في localStorage
//   document.querySelectorAll("input, select").forEach(function (element) {
//     element.addEventListener("input", function () {
//       localStorage.setItem(element.id, element.value);
//     });
//     // بالنسبة لعنصر checkbox
//     if (element.type === "checkbox") {
//       element.addEventListener("change", function () {
//         localStorage.setItem(element.id, element.checked);
//       });
//     }
//   });

//   // زر الحساب: هنا مثال بسيط لحساب الزكاة في حالة المال
//   calculateBtn.addEventListener("click", function () {
//     // إخفاء نتائج الحساب قبل إعادة الحساب
//     const resultsCard = document.getElementById("results-card");
//     resultsCard.classList.add("hidden");

//     // الحصول على نوع الحساب المختار من localStorage أو القيمة الحالية
//     const calcType = localStorage.getItem("calcType") || "money";
//     let result = 0;
//     let details = "";

//     if (calcType === "money") {
//       const moneyAmount =
//         parseFloat(document.getElementById("money-amount").value) || 0;
//       const moneyYearly = document.getElementById("money-yearly").checked;
//       const goldPrice =
//         parseFloat(document.getElementById("money-gold-price").value) || 0;

//       // مثال: حساب الزكاة 2.5% إذا مر عليه حول كامل والمال بلغ النصاب
//       const nisab = 85 * goldPrice; // تقريب للنصاب باستخدام سعر الذهب
//       if (moneyAmount >= nisab && moneyYearly) {
//         result = moneyAmount * 0.025;
//         details = `المبلغ: ${moneyAmount} ر.س، النصاب: ${nisab.toFixed(
//           2
//         )} ر.س، الزكاة: ${result.toFixed(2)} ر.س`;
//       } else {
//         details = "المال لم يبلغ النصاب أو لم يمر عليه الحول.";
//       }
//     }
//     // يمكنك إضافة حسابات الذهب والفضة بنفس الطريقة مع معادلات مناسبة.
//     // على سبيل المثال:
//     else if (calcType === "gold") {
//       const goldWeight =
//         parseFloat(document.getElementById("gold-weight").value) || 0;
//       const goldYearly = document.getElementById("gold-yearly").checked;
//       const goldPrice =
//         parseFloat(document.getElementById("gold-price").value) || 0;
//       const karat = parseInt(document.getElementById("gold-karat").value);
//       // حساب قيمة الذهب بناءً على العيار (مثلاً للعيار 24، القيمة هي كاملة الوزن)
//       const pureGoldWeight = (karat / 24) * goldWeight;
//       const nisab = 85; // الوزن بالنظام الأساسي
//       if (pureGoldWeight >= nisab && goldYearly) {
//         result = pureGoldWeight * goldPrice * 0.025;
//         details = `وزن الذهب الخالص: ${pureGoldWeight.toFixed(
//           2
//         )} جرام، النصاب: ${nisab} جرام، الزكاة: ${result.toFixed(2)} ر.س`;
//       } else {
//         details = "الذهب لم يبلغ النصاب أو لم يمر عليه الحول.";
//       }
//     } else if (calcType === "silver") {
//       const silverWeight =
//         parseFloat(document.getElementById("silver-weight").value) || 0;
//       const silverYearly = document.getElementById("silver-yearly").checked;
//       const silverPrice =
//         parseFloat(document.getElementById("silver-price").value) || 0;
//       const nisab = 595; // جرام
//       if (silverWeight >= nisab && silverYearly) {
//         result = silverWeight * silverPrice * 0.025;
//         details = `وزن الفضة: ${silverWeight.toFixed(
//           2
//         )} جرام، النصاب: ${nisab} جرام، الزكاة: ${result.toFixed(2)} ر.س`;
//       } else {
//         details = "الفضة لم تبلغ النصاب أو لم يمر عليها الحول.";
//       }
//     }

//     // عرض النتائج في البطاقة
//     document.getElementById("nisab-result").innerText = details;
//     document.getElementById("zakat-amount").innerText = `${result.toFixed(
//       2
//     )} ر.س`;

//     // إظهار بطاقة النتائج
//     resultsCard.classList.remove("hidden");
//   });

//   // دالة لتفعيل تبويب الأحكام
//   function activateTab(tabName) {
//     // إعادة تعيين التبويبات
//     [tabMoney, tabGold, tabSilver].forEach(function (tab) {
//       tab.classList.remove(
//         "border-b-2",
//         "bg-emerald-50",
//         "text-emerald-800",
//         "hover:bg-amber-50",
//         "hover:text-amber-800",
//         "hover:bg-slate-50",
//         "hover:text-slate-800"
//       );
//     });
//     // إخفاء جميع المحتويات
//     [contentMoney, contentGold, contentSilver].forEach(function (content) {
//       content.classList.add("hidden");
//     });

//     if (tabName === "money") {
//       tabMoney.classList.add(
//         "bg-emerald-50",
//         "text-emerald-800",
//         "border-b-2",
//         "border-emerald-600"
//       );
//       contentMoney.classList.remove("hidden");
//     } else if (tabName === "gold") {
//       tabGold.classList.add(
//         "bg-amber-50",
//         "text-amber-800",
//         "border-b-2",
//         "border-amber-600"
//       );
//       contentGold.classList.remove("hidden");
//     } else if (tabName === "silver") {
//       tabSilver.classList.add(
//         "bg-slate-50",
//         "text-slate-800",
//         "border-b-2",
//         "border-slate-600"
//       );
//       contentSilver.classList.remove("hidden");
//     }
//   }

//   // دالة لتبديل نماذج الحاسبة بناءً على اختيار المستخدم
//   function switchCalcForm(type) {
//     // تخزين اختيار المستخدم في localStorage
//     localStorage.setItem("calcType", type);

//     // إخفاء جميع النماذج
//     [formMoney, formGold, formSilver].forEach(function (form) {
//       form.classList.add("hidden");
//     });
//     // إزالة التنسيق من أزرار الحساب
//     [calcMoney, calcGold, calcSilver].forEach(function (btn) {
//       btn.classList.remove(
//         "bg-emerald-700",
//         "text-white",
//         "bg-amber-200",
//         "bg-slate-200"
//       );
//     });
//     // تفعيل النموذج المناسب
//     if (type === "money") {
//       formMoney.classList.remove("hidden");
//       calcMoney.classList.add("bg-emerald-700", "text-white");
//     } else if (type === "gold") {
//       formGold.classList.remove("hidden");
//       calcGold.classList.add("bg-amber-200", "text-white");
//     } else if (type === "silver") {
//       formSilver.classList.remove("hidden");
//       calcSilver.classList.add("bg-slate-200", "text-white");
//     }
//   }

//   // دالة لاسترجاع القيم المخزنة في localStorage
//   function loadFormValues() {
//     document.querySelectorAll("input, select").forEach(function (element) {
//       const storedValue = localStorage.getItem(element.id);
//       if (storedValue !== null) {
//         if (element.type === "checkbox") {
//           element.checked = storedValue === "true";
//         } else {
//           element.value = storedValue;
//         }
//       }
//     });
//   }
// });
