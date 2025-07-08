// ระบบค้นหา

const provinces = [
  { name: "กรุงเทพมหานคร", link: "1.html" },
  { name: "กระบี่", link: "2.html" },
  { name: "กาญจนบุรี", link: "3.html" },
  { name: "กาฬสินธุ์", link: "4.html" },
  { name: "กำแพงเพชร", link: "5.html" },
  { name: "ขอนแก่น", link: "6.html" },
  { name: "จันทบุรี", link: "7.html" },
  { name: "ฉะเชิงเทรา", link: "8.html" },
  { name: "ชลบุรี", link: "9.html" },
  { name: "ชัยนาท", link: "10.html" },
  { name: "ชัยภูมิ", link: "11.html" },
  { name: "ชุมพร", link: "12.html" },
  { name: "เชียงราย", link: "13.html" },
  { name: "เชียงใหม่", link: "14.html" },
  { name: "ตรัง", link: "15.html" },
  { name: "ตราด", link: "16.html" },
  { name: "ตาก", link: "17.html" },
  { name: "นครนายก", link: "18.html" },
  { name: "นครปฐม", link: "19.html" },
  { name: "นครพนม", link: "20.html" },
  { name: "นครราชสีมา", link: "21.html" },
  { name: "นครศรีธรรมราช", link: "22.html" },
  { name: "นครสวรรค์", link: "23.html" },
  { name: "นนทบุรี", link: "24.html" },
  { name: "นราธิวาส", link: "25.html" },
  { name: "น่าน", link: "26.html" },
  { name: "บึงกาฬ", link: "27.html" },
  { name: "บุรีรัมย์", link: "28.html" },
  { name: "ปทุมธานี", link: "29.html" },
  { name: "ประจวบคีรีขันธ์", link: "30.html" },
  { name: "ปราจีนบุรี", link: "31.html" },
  { name: "ปัตตานี", link: "32.html" },
  { name: "พระนครศรีอยุธยา", link: "33.html" },
  { name: "พะเยา", link: "34.html" },
  { name: "พังงา", link: "35.html" },
  { name: "พัทลุง", link: "36.html" },
  { name: "พิจิตร", link: "37.html" },
  { name: "พิษณุโลก", link: "38.html" },
  { name: "เพชรบุรี", link: "39.html" },
  { name: "เพชรบูรณ์", link: "40.html" },
  { name: "แพร่", link: "41.html" },
  { name: "ภูเก็ต", link: "42.html" },
  { name: "มหาสารคาม", link: "43.html" },
  { name: "มุกดาหาร", link: "44.html" },
  { name: "แม่ฮ่องสอน", link: "45.html" },
  { name: "ยโสธร", link: "46.html" },
  { name: "ร้อยเอ็ด", link: "47.html" },
  { name: "ระนอง", link: "48.html" },
  { name: "ระยอง", link: "49.html" },
  { name: "ราชบุรี", link: "50.html" },
  { name: "ลพบุรี", link: "51.html" },
  { name: "ลำปาง", link: "52.html" },
  { name: "ลำพูน", link: "53.html" },
  { name: "เลย", link: "54.html" },
  { name: "ศรีสะเกษ", link: "55.html" },
  { name: "สกลนคร", link: "56.html" },
  { name: "สงขลา", link: "57.html" },
  { name: "สตูล", link: "58.html" },
  { name: "สมุทรปราการ", link: "59.html" },
  { name: "สมุทรสงคราม", link: "60.html" },
  { name: "สมุทรสาคร", link: "61.html" },
  { name: "สระแก้ว", link: "62.html" },
  { name: "สระบุรี", link: "63.html" },
  { name: "สิงห์บุรี", link: "64.html" },
  { name: "สุโขทัย", link: "65.html" },
  { name: "สุพรรณบุรี", link: "66.html" },
  { name: "สุราษฎร์ธานี", link: "67.html" },
  { name: "สุรินทร์", link: "68.html" },
  { name: "หนองคาย", link: "69.html" },
  { name: "หนองบัวลำภู", link: "70.html" },
  { name: "อ่างทอง", link: "71.html" },
  { name: "อำนาจเจริญ", link: "72.html" },
  { name: "อุดรธานี", link: "73.html" },
  { name: "อุตรดิตถ์", link: "74.html" },
  { name: "อุทัยธานี", link: "75.html" },
  { name: "อุบลราชธานี", link: "76.html" },
  { name: "ยะลา", link: "77.html" },
];

const input = document.getElementById("searchInput");
const list = document.getElementById("provinceList");

function renderProvinces(filter = "") {
  list.innerHTML = "";

  const filtered = provinces.filter(province =>
    province.name.includes(filter)
  );

  if (filtered.length > 0 && filter !== "") {
    list.classList.add("show");
  } else {
    list.classList.remove("show");
  }

  filtered.forEach(province => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = province.link;
    a.textContent = province.name;
    li.appendChild(a);
    list.appendChild(li);
  });
}

input.addEventListener("input", () => {
  renderProvinces(input.value.trim());
});

document.addEventListener("click", (e) => {
  if (!document.querySelector(".search-bar").contains(e.target)) {
    list.classList.remove("show");
  }
});

renderProvinces();

// สไล

function getScrollAmount() {
  return window.innerWidth <= 600 ? window.innerWidth : 240; // 220px + gap
}

function initScrollSystem(containerId, leftBtnId, rightBtnId) {
  const container = document.getElementById(containerId);
  const btnLeft = document.getElementById(leftBtnId);
  const btnRight = document.getElementById(rightBtnId);

  if (!container || !btnLeft || !btnRight) return;

  btnLeft.addEventListener('click', () => {
    container.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });

  btnRight.addEventListener('click', () => {
    container.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });

  setInterval(() => {
    const scrollAmount = getScrollAmount();
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, 3000);
}

// ✅ เรียกใช้หลายหมวดหมู่ (เพิ่มได้ตามต้องการ)
initScrollSystem("container1", "scrollLeft1", "scrollRight1");
initScrollSystem("container2", "scrollLeft2", "scrollRight2");

