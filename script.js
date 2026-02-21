function showTime() {
    const now = new Date();
    
    // ดึงเวลาในรูปแบบไทย (15:30:45)
    const timeString = now.toLocaleTimeString('th-TH');

    alert("วันที่: " + timeString);
}

function displayMessage() {
    const message = document.getElementById('userInput').value;

    if (message === "") {
        alert("กรุณากรอกข้อความก่อนกดปุ่มครับ!");
    } else {
        alert("ข้อความที่คุณกรอกคือ: " + message);
    }
}

let name = "Nattapong Muanprasan";
let midtern_score = 100;
let final_score = 100;

let person ={
    name: "Nattapong Muanprasan",
    midtern_score: 100,
    final_score: 100
};

console.log("ตรวจสอบข้อมูล Person:", person);

// 2. แสดงผลบนหน้าเว็บที่ <p id="person"></p>
// เราจะเข้าถึง property ด้วยจุด (.) เช่น person.name
document.getElementById("human").innerHTML = 
    `ชื่อ: ${person.name} <br> คะแนนกลางภาค: ${person.midtern_score} <br>
    คะแนนปลายภาค: ${person.midtern_score} <br> คะแนนรวม: ${person.midtern_score + person.final_score}`;
    