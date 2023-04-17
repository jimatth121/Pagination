let rowPerPage = 5;
let start = 0;
let end = rowPerPage;

let data = [];

for (let i = 0; i < 20; i++) {
  data.push({
    name: "mat " + (i + 1),
    id: "uuid " + (i + 1),
  });
}

const indexBtnDisplay = () => {
  const lengthOfBtn = Math.ceil(data.length / rowPerPage);
  for (let i = 1; i <= lengthOfBtn; i++) {
    const newBtn = document.createElement("button");
    newBtn.textContent = i;
    newBtn.addEventListener('click', function(){
       indexBtnClick(i) 
    })
    console.log(indexBtn);
    console.log(newBtn);
    indexBtn.appendChild(newBtn);
  }
};

function indexBtnClick(i) {
  console.log(i);

  start = (i-1) * rowPerPage;
  end = start + rowPerPage;
  console.log(start, end);
  displayData();
}

indexBtnDisplay();

function displayData() {
  //   console.log(data);
  const newData = data.slice(start, end).map((item) => {
    return `<div id=${item.id}>${item.name}</div>`;
    // const list = document.createElement('p')
    // list.textContent = item.name
    // list.setAttribute('id',`${item.id}`)
    // console.log(list);
    // display.appendChild(list)
  });

  display.innerHTML = newData.join("");
}

displayData();

next.addEventListener("click", function () {
  console.log("next Click");

  if (end >= data.length) {
    return;
  }

  start = end;
  end += rowPerPage;

  console.log(start, end);

  displayData();
});

prev.addEventListener("click", function () {
  console.log("next Click");

  if (start < 1) {
    return;
  }

  start -= rowPerPage;
  end -= rowPerPage;

  console.log(start, end);

  displayData();
});
