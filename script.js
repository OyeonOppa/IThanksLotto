const backgroundMusic = document.getElementById("backgroundMusic");

// ตั้งค่าเสียงเริ่มต้นที่ 10%
backgroundMusic.volume = 0.1;

// rewards array ของรางวัล
const rewards = [

    "ยินดีด้วย !! No.43","ขอบคุณนะ:)","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.49","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.05",
    "ขอบคุณนะ:)","ยินดีด้วย !! No.11","ขอบคุณนะ:)","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.02","ขอบคุณนะ:)","ยินดีด้วย !! No.30",
    "ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.01","ยินดีด้วย !! No.42","ขอบคุณนะ:)","ขอบคุณนะ:)","ขอบคุณนะ:)",
    "ขอบคุณนะ:)","ยินดีด้วย !! No.28","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.12","ขอบคุณนะ:)","ยินดีด้วย !! No.32","ขอบคุณนะ:)",
    "ขอบคุณนะ:)","ยินดีด้วย !! No.17","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.06","ขอบคุณนะ:)","ยินดีด้วย !! No.56","ขอบคุณนะ:)",
    "ยินดีด้วย !! No.51","ขอบคุณนะ:)","ขอบคุณนะ:)","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.23","ขอบคุณนะ:)","ยินดีด้วย !! No.36",
    "ขอบคุณนะ:)","ยินดีด้วย !! No.10","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.20","ขอบคุณนะ:)","ขอบคุณนะ:)",
    "ขอบคุณนะ:)","ยินดีด้วย !! No.40","ขอบคุณนะ:)","ยินดีด้วย !! No.39","ขอบคุณนะ:)","ยินดีด้วย !! No.33","ขอบคุณนะ:)","ขอบคุณนะ:)",
    "ขอบคุณนะ:)","ยินดีด้วย !! No.47","ขอบคุณนะ:)","ยินดีด้วย !! No.57","ขอบคุณนะ:)","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.53",
    "ขอบคุณนะ:)","ยินดีด้วย !! No.22","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.31","ขอบคุณนะ:)","ขอบคุณนะ:)",
    "ยินดีด้วย !! No.38","ขอบคุณนะ:)","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.45","ขอบคุณนะ:)","ขอบคุณนะ:)",
    "ขอบคุณนะ:)","ยินดีด้วย !! No.08","ขอบคุณนะ:)","ขอบคุณนะ:)", "ยินดีด้วย !! No.03","ขอบคุณนะ:)","ขอบคุณนะ:)",
    "ขอบคุณนะ:)","ยินดีด้วย !! No.15","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.18","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.13",
    "ขอบคุณนะ:)","ยินดีด้วย !! No.29","ขอบคุณนะ:)","ยินดีด้วย !! No.54","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.50","ขอบคุณนะ:)",
    "ขอบคุณนะ:)","ยินดีด้วย !! No.55","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.46","ขอบคุณนะ:)","ขอบคุณนะ:)",
    "ขอบคุณนะ:)","ขอบคุณนะ:)","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.60","ขอบคุณนะ:)","ยินดีด้วย !! No.44",
    "ขอบคุณนะ:)","ยินดีด้วย !! No.48","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.09","ขอบคุณนะ:)","ขอบคุณนะ:)",
    "ขอบคุณนะ:)","ยินดีด้วย !! No.24","ขอบคุณนะ:)","ขอบคุณนะ:)","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.16",
    "ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.52","ขอบคุณนะ:)","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.37",
    "ขอบคุณนะ:)","ยินดีด้วย !! No.21","ขอบคุณนะ:)","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.19","ขอบคุณนะ:)",
    "ยินดีด้วย !! No.59","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.14","ขอบคุณนะ:)","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.26",
    "ขอบคุณนะ:)","ยินดีด้วย !! No.35","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.07","ขอบคุณนะ:)","ยินดีด้วย !! No.41","ขอบคุณนะ:)",
    "ยินดีด้วย !! No.34","ขอบคุณนะ:)","ยินดีด้วย !! No.58","ขอบคุณนะ:)","ขอบคุณนะ:)","ยินดีด้วย !! No.25","ขอบคุณนะ:)","ขอบคุณนะ:)",
    "ขอบคุณนะ:)","ยินดีด้วย !! No.04","ยินดีด้วย !! No.27","ขอบคุณนะ:)","ขอบคุณนะ:)","ขอบคุณนะ:)","ขอบคุณนะ:)",
    
  ];
  
  const gridContainer = document.getElementById("scratchGrid");
  const savedScratchData = JSON.parse(localStorage.getItem("scratchData")) || {}; // โหลดข้อมูลที่บันทึกไว้
  
  // สร้าง 50 การ์ดรางวัล
  for (let i = 0; i < 180; i++) {
    const card = document.createElement("div");
    card.classList.add("scratch-card");
  
    const canvas = document.createElement("canvas");
    const rewardText = document.createElement("div");
    rewardText.classList.add("reward-text");
    rewardText.textContent = `🎁 ${rewards[i]}`;
  
    card.appendChild(canvas);
    card.appendChild(rewardText);
    gridContainer.appendChild(card);
  
    setupScratchCanvas(canvas, rewardText, i);  // ส่ง index ไปเพื่อบันทึกสถานะ
  }
  
  // ฟังก์ชันตั้งค่าการขูดสำหรับแต่ละการ์ด
  function setupScratchCanvas(canvas, rewardText, index) {
    const ctx = canvas.getContext("2d");
  
    // ตั้งค่าขนาดแคนวาส
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  
    // วาดพื้นหลังสีเทาที่จะขูด
    ctx.fillStyle = "#cccccc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    ctx.fillStyle = "#888";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.fillText(`IT Lotto`, canvas.width / 2, canvas.height / 2-10);
    ctx.fillText(`${index + 1}`, canvas.width / 2, canvas.height / 2+30);

    let isScratching = false;
  
    // ฟังก์ชันเริ่มขูด
    function startScratch(e) {
      isScratching = true;
      scratch(e);
    }
  
    // ฟังก์ชันขูด
    function scratch(e) {
      if (!isScratching) return;
  
      const rect = canvas.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
  
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, Math.PI * 2, true);
      ctx.fill();
    }
  
    // ฟังก์ชันหยุดขูด
    function stopScratch() {
      isScratching = false;
  
      // ตรวจสอบพื้นที่ขูด ถ้าขูดเกิน 60% จะโชว์รางวัล
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let clearedPixels = 0;
      for (let i = 0; i < imageData.data.length; i += 4) {
        if (imageData.data[i + 3] === 0) clearedPixels++;
      }
  
      const clearedPercentage = (clearedPixels / (canvas.width * canvas.height)) * 100;
      if (clearedPercentage > 60) {
        canvas.style.display = "none"; // ซ่อนแคนวาส
        rewardText.style.zIndex = "1"; // แสดงรางวัล
        saveScratchStatus(index); // บันทึกสถานะการขูด
      }
    }
  
    // เช็คสถานะการขูดที่บันทึกไว้
    if (savedScratchData[index]) {
      canvas.style.display = "none";  // ซ่อนแคนวาส
      rewardText.style.zIndex = "1";  // แสดงรางวัล
    }
  
    canvas.addEventListener("mousedown", startScratch);
    canvas.addEventListener("mousemove", scratch);
    canvas.addEventListener("mouseup", stopScratch);
    canvas.addEventListener("touchstart", startScratch);
    canvas.addEventListener("touchmove", scratch);
    canvas.addEventListener("touchend", stopScratch);
  }
  
  // ฟังก์ชันบันทึกสถานะการขูด
  function saveScratchStatus(index) {
    savedScratchData[index] = true;
    localStorage.setItem("scratchData", JSON.stringify(savedScratchData)); // เก็บใน Local Storage
  }

  // ค่ารหัสผ่านที่กำหนดไว้ล่วงหน้า (สามารถเปลี่ยนเป็นรหัสที่ต้องการ)
const password = "KPIp@ssw0rd"; // รหัสผ่านสำหรับยืนยันการรีเซต

  
  // ฟังก์ชันรีเซตสถานะการขูด
  document.addEventListener("DOMContentLoaded", function() {
    const resetButton = document.getElementById("resetScratch");
    
    resetButton.addEventListener("click", () => {
      console.log("รีเซตปุ่มถูกกด");

        // ขอดูรหัสผ่าน
  const enteredPassword = prompt("กรุณากรอกรหัสผ่านเพื่อรีเซต:");
  // ตรวจสอบรหัสผ่าน
  if (enteredPassword === password) {
      if (confirm("คุณแน่ใจหรือไม่ว่าต้องการรีเซตทั้งหมด?")) {
        console.log("ยืนยันการรีเซต");
        localStorage.removeItem("scratchData");
        console.log("ข้อมูลใน LocalStorage ถูกลบ");
        location.reload(); // โหลดหน้าเว็บใหม่
      }
    } else {
      alert("รหัสผ่านไม่ถูกต้อง! กรุณาลองใหม่.");
    }
    });
  });
  
  
  
  
  