// rewards array ของรางวัล
const rewards = [
    "สมุดโน้ต z.com", "แก้วน้ำลายไทย", "ตุ๊กตาหมี", "Apple Watch",
    "เงินสด 500 บาท", "บัตร Starbucks", "หูฟัง Sony", "บัตรเติมเงิน 300 บาท",
    "iPad Mini", "เครื่องฟอกอากาศ", "Power Bank", "Gift Card 1000 บาท",
    "Nespresso", "รางวัลพิเศษ", "ลำโพง Bluetooth", "โน้ตบุ๊ค",
    "โทรศัพท์ Android", "กล้องถ่ายรูป", "กระเป๋าเดินทาง", "รองเท้ากีฬา",
    "น้ำหอม", "iMac", "PS5", "Xbox", "เงินสด 1000 บาท",
    "เสื้อแบรนด์เนม", "ทองคำ", "สร้อยคอ", "สมุดโน้ต z.com", "จักรยานไฟฟ้า",
    "ลำโพง Soundbar", "Smartphone", "ตั๋วเครื่องบิน", "กล้อง GoPro",
    "Apple Pencil", "แก้วน้ำเก็บความเย็น", "ของขวัญพิเศษ", "กระเป๋าสตางค์",
    "สมาร์ทโฟน", "ตุ๊กตาหมี", "เมาส์ Gaming", "คีย์บอร์ด Gaming",
    "Tablet", "หูฟัง Gaming", "หนังสือ", "รางวัลปริศนา", "กาแฟฟรี 1 ปี",
    "บัตรชมภาพยนตร์", "หมวกแบรนด์เนม", "Voucher 2000 บาท"
  ];
  
  const gridContainer = document.getElementById("scratchGrid");
  const savedScratchData = JSON.parse(localStorage.getItem("scratchData")) || {}; // โหลดข้อมูลที่บันทึกไว้
  
  // สร้าง 50 การ์ดรางวัล
  for (let i = 0; i < 50; i++) {
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
    ctx.font = "30px Arial";
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
    }});
  });
  
  
  
  
  