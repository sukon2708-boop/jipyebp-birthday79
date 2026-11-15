const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
19ขวบเเร้วนะอ้วน ขอให้อ้วนมีความสุขในทุกๆวันยิ้มเยอะๆได้กินของอร่อยๆทุกวันน เเร้วก็ขอให้อ้วนไม่ป่วยขอให้เเข็งเเรงง💪🏻
เค้าอวยพรไม่เก่ง เเต่อยากจะบอกว่า เค้ารักอ้วนที่สุดด จุ้บๆๆ❣️❣️

`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
