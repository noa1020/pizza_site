//timer
const weAreOpen = document.getElementById('weAreOpen');
const weWillOpenIn = document.getElementById('weWillOpenIn');
const timeImg = document.getElementById('timeImg');
const timer = document.getElementById('timer');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
let sumcost = 0;
const cost = document.getElementById('cost');
const costButton = document.getElementById('costButton');


function updatePickupTime() {
  var now = new Date();
  var openingHour = 10;
  var closingHour = 23;
  if (now.getHours() >= closingHour || now.getHours() < openingHour) {
    weAreOpen.innerHTML = "אנחנו סגורים!";
    weWillOpenIn.innerHTML = "המסעדה תפתח בעוד:"
    timeImg.src = "./תמונות/close.png";
    timer.style.backgroundColor = "rgb(223, 108, 108)";
    var nextOpeningHour = now.getHours() < openingHour ? openingHour : openingHour + 24;
    hours.textContent = nextOpeningHour - now.getHours() - 1;
    minutes.textContent = 59 - now.getMinutes();
    seconds.textContent = 59 - now.getSeconds();
  } else {
    weAreOpen.innerHTML = "אנחנו פתוחים!";
    weWillOpenIn.innerHTML = "המסעדה תסגר בעוד:"
    timeImg.src = "./תמונות/open.png"
    timer.style.backgroundColor = "rgb(153, 226, 167)";
    hours.textContent = closingHour - now.getHours() - 1;
    minutes.innerHTML = 59 - now.getMinutes();
    seconds.textContent = 59 - now.getSeconds();

  }

}
setInterval(updatePickupTime, 1000);
window.onload = () => {
  changeName();
  if (JSON.parse(sessionStorage.getItem('delivery'))) {
    sumcost = 15;
  }
  else {
    sumcost = 0;
  }
  cost.innerHTML = sumcost;
}
//שם בשלום אורח
const changeName = () => {
  const guest = document.getElementById('guest');
  const det = JSON.parse(localStorage.getItem(JSON.parse(sessionStorage.getItem('phone'))));
  if (det) {
    guest.innerHTML = det.name;
    changeDetailForDelivery();
  }
}
//משלוח
const changeDetailForDelivery = () => {
  const det = JSON.parse(localStorage.getItem(JSON.parse(sessionStorage.getItem('phone'))));
  const adressForDelivery = document.getElementById('adressForDelivery');
  const time = document.getElementById('time');
  const adress = document.getElementById('adress');
  const delCost = document.getElementById('delCost');
  if (JSON.parse(sessionStorage.getItem('delivery'))) {
    adressForDelivery.innerHTML = "כתובת למשלוח: ";
    time.innerHTML = "זמן משוער למשלוח: 75 דקות"
    adress.innerHTML = det.city + ", " + det.street + ", " + det.apartment;
    delCost.style.display = "block";
    delCost.style.height = "70px";
  }
  else {
    adressForDelivery.innerHTML = "כתובת ההזמנה לאיסוף עצמי:";
    time.innerHTML = "זמן ההכנה משוער: 25 דקות"
    adress.innerHTML = "רשבא 11, מודיעין עילית";
    delCost.style.display = "none";
    delCost.style.height = "0";
  }
}
const changeDel = document.getElementById('changeDel');
changeDel.onclick = () => {
  const det = JSON.parse(localStorage.getItem(JSON.parse(sessionStorage.getItem('phone'))));
  const popup = document.createElement('div');

  const detailsDiv1 = document.createElement("div");
  detailsDiv1.id = "detailsDiv1";

  // const divPhone = document.createElement("div");
  // const phone = document.createElement("label");
  // phone.innerHTML = "מס' טלפון: ";
  // phone.classList.add("col-lg-3");
  // divPhone.appendChild(phone);
  // const iphone = document.createElement("input");
  // iphone.setAttribute('type','text');
  // iphone.setAttribute('maxlength','10');
  //iphone.setAttribute('oninput','validateInput(this)') ;
  // iphone.value = det.phone;
  //iphone.classList.add("col-lg-8");
  // divPhone.appendChild(iphone);
  // detailsDiv1.appendChild(divPhone);
  // iphone.onchange=()=>{
  //  sessionStorage.setItem('phone', JSON.stringify(iphone.value));
  //    det = JSON.parse(localStorage.getItem(iphone.value));
  // }

  const divName = document.createElement("div");
  const name = document.createElement("label");
  name.innerHTML = "שם: ";
  name.classList.add("col-lg-3");
  divName.appendChild(name);
  const iname = document.createElement("input");
  iname.type = "text";
  iname.value = det.name;
  iname.classList.add("col-lg-8");
  divName.appendChild(iname);
  detailsDiv1.appendChild(divName);
  const close = document.createElement("button");
  close.id = "closeChange";
  close.innerHTML = "X";
  popup.appendChild(close);
  popup.appendChild(detailsDiv1);


  const div = document.createElement("div");
  div.id = "divChange";
  const but1 = document.createElement("button");
  const but2 = document.createElement("button");
  but1.id = "deliveryChange";
  but1.innerHTML = "משלוח";
  but1.classList.add("btn-secondary");
  but2.id = "pickUpChange";
  but2.innerHTML = "איסוף עצמי";
  but2.classList.add("btn-secondary");
  div.appendChild(but1);
  div.appendChild(but2);
  popup.appendChild(div);
  const page = document.createElement('div');
  page.id = "page1";
  document.body.appendChild(page);
  page.style.display = "block";
  popup.id = "popupdel";
  document.body.appendChild(popup);
  popup.style.display = "block";

  close.onclick=()=>{
    document.body.removeChild(popup);
    document.body.removeChild(page);

  }
  but1.onclick = () => {
    const check = document.getElementById("detailsDiv");
    if (!check) {
      const detailsDiv = document.createElement("div")
      detailsDiv.id = "detailsDiv";

      const divCity = document.createElement("div")
      const city = document.createElement("label");
      city.innerHTML = "עיר: ";
      city.classList.add("col-lg-2");
      divCity.appendChild(city);
      const icity = document.createElement("input");
      icity.type = "text";
      icity.value = det.city;
      icity.classList.add("col-lg-10");
      divCity.appendChild(icity);
      detailsDiv.appendChild(divCity);

      const divStreet = document.createElement("div")
      const street = document.createElement("label");
      street.innerHTML = "רחוב: ";
      street.classList.add("col-lg-2");
      divStreet.appendChild(street);
      const istreet = document.createElement("input");
      istreet.type = "text";
      istreet.value = det.street;
      istreet.classList.add("col-lg-10");
      divStreet.appendChild(istreet);
      detailsDiv.appendChild(divStreet);

      const divApartment = document.createElement("div")
      const ap = document.createElement("label");
      ap.innerHTML = "מס' בית:";
      ap.classList.add("col-lg-2");
      divApartment.appendChild(ap);
      const iAp = document.createElement("input");
      iAp.type = "number";
      iAp.value = det.apartment;
      iAp.classList.add("col-lg-2");
      divApartment.appendChild(iAp);

      const floor = document.createElement("label");
      floor.innerHTML = "קומה:";
      floor.classList.add("col-lg-2");
      divApartment.appendChild(floor);
      const ifloor = document.createElement("input");
      ifloor.type = "number";
      ifloor.value = det.floor;
      ifloor.classList.add("col-lg-2");
      divApartment.appendChild(ifloor);

      const login = document.createElement("label");
      login.innerHTML = "דירה:";
      login.classList.add("col-lg-2");
      divApartment.appendChild(login);
      const ilogin = document.createElement("input");
      ilogin.type = "number";
      ilogin.value = det.login;
      ilogin.classList.add("col-lg-2");
      divApartment.appendChild(ilogin);
      detailsDiv.appendChild(divApartment);

      const divNotes = document.createElement("div");
      const notes = document.createElement("label");
      notes.innerHTML = "הערות לשליח: ";
      notes.classList.add("col-lg-2");
      divNotes.appendChild(notes);
      const inotes = document.createElement("textarea");
      inotes.type = "text";
      inotes.value = det.notes;
      inotes.classList.add("col-lg-10");
      divNotes.appendChild(inotes);
      detailsDiv.appendChild(divNotes);

      const send = document.createElement("button");
      send.innerHTML = "אישור";
      send.classList.add("btn-secondary");
      send.id = "send";
      detailsDiv.appendChild(send);
      popup.appendChild(detailsDiv);
      send.onclick = () => {
        if (icity.value === '' || istreet.value === '' || iAp.value === '') {
          alert('צריך למלא את כל הפרטים');
        }
        else {
          if (!JSON.parse(sessionStorage.getItem('delivery'))) {
            sumcost += 15;
            cost.innerHTML = sumcost;
          }
          sessionStorage.setItem('delivery', JSON.stringify(true));
          det.name = iname.value;
          det.city = icity.value;
          det.street = istreet.value;
          det.apartment = iAp.value;
          det.floor = ifloor.value;
          det.login = ilogin.value;
          det.notes = inotes.value;
          localStorage.setItem(det.phone, JSON.stringify(det));
          changeDetailForDelivery();
          changeName();
          document.body.removeChild(popup);
          document.body.removeChild(page);
        }
      }
    }
  }

  but2.onclick = () => {
    if (JSON.parse(sessionStorage.getItem('delivery'))) {
      sumcost -= 15;
      cost.innerHTML = sumcost;
    }
    sessionStorage.setItem('delivery', JSON.stringify(false));
    det.name = iname.value;
    localStorage.setItem(det.phone, JSON.stringify(det));
    changeDetailForDelivery();
    changeName();
    document.body.removeChild(popup);
    document.body.removeChild(page);
  }
}



//products from json
let myArray = ['מנות פתיחה', 'סלטים', 'מהטאבון', 'מוקרמים', 'קינוחים', 'שתיה'];
const divProducts = document.getElementById('products');
$.ajax({
  url: "./product.json",
  success: (result) => {
    const products = result;
    let i = 0;
    let title = ` <div  id="title-${i}"class="col-lg-12  title shadow-lg  p-3 bg-body-tertiary  bg-light  m-3  gray row-lg-8 center border-radius"><h4 class="gold text-start ">${myArray[i]}:</h4></div>`;
    let categories = ` <div id="divProducts-0" class="col-lg-12 pt-4  shadow-lg p-3 bg-body-tertiary  bg-light  m-3  row-lg-8 center border-radius"></div>`;
    $("#divProducts").append(title);
    $("#divProducts").append(categories);
    products.forEach(product => {
      if (product.category == i) {
        let html = `
    <div class=" bg-light mt-4 border-radius proCard">
    <div class="d-flex">
      <img class="pro-img"  src="./תמונות/${product.src}">
      <div class="d-flex flex-column justify-content-between w-100 p-2">
        <div class="d-flex justify-content-between align-items-start">
          <h5 class="gold">${product.name}</h5>
          <h4 class="gold">${product.price}₪</h4>
        </div>
          ${product.description ? `<h6 class=" text-center">${product.description}</h6>` : ''}
          <div class="d-flex justify-content-end  mt-auto">
            <button id="addToCard" class="border-radius  ">+ הוסף</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

        $("#divProducts-" + i).append(html);

      }
      else {
        i++;
        let categories = ` <div id="divProducts-${i}" class="col-lg-12 pt-4  shadow-lg p-3 bg-body-tertiary  bg-light m-3  row-lg-8 center border-radius"></div>`;
        let title = ` <div id="title-${i}"  class="col-lg-12  gray  shadow-lg   bg-body-tertiary p-3 bg-light  m-3  row-lg-8 center border-radius"><h4 class="gold text-start ">${myArray[i]}:</h4></div>`;
        $("#divProducts").append(title);
        $("#divProducts").append(categories);

      }

    });
    popup();
  },
  error: (err) => {
    console.error(err);
  }
})
//ניווט
let catBut = document.querySelectorAll('.cat-but');
catBut.forEach(but => {
  but.onclick = () => {
    const targetElement = document.getElementById('title-' + but.id);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
});
//חיפוש במסך קטן
const searchButton = document.querySelector('#searchIconButton');
const top1 = document.getElementById('searchN');
const searchText = document.createElement('input');
searchText.id="searchText";
searchButton.onclick = () => {
    top1.appendChild(searchText);
};
searchText.onchange = () => {
  searchTextf(searchText.value);
};

//חיפוש
const search = document.getElementById('search');
search.onchange = () => {
  searchTextf(search.value);
}
const searchTextf=(searchv)=>{
  const categories = document.querySelector('#categories');
  const catSearch = document.getElementById('cat-search');
  if (catSearch) {
    var parent = document.getElementById("divProducts");
    var child2 = document.getElementById("title-search");
    parent.removeChild(child2);
    if (searchv === "") {
      categories.removeChild(catSearch.parentNode);
      var child1 = document.getElementById("divProducts-search");
      parent.removeChild(child1);
    }
    else {
      catSearch.innerHTML = searchv;
      const divProductsSearch = document.getElementById('divProducts-search');
      if (!divProductsSearch) {
        const categoriesearch = `<div id="divProducts-search" class="col-lg-12 pt-4 shadow-lg p-3 bg-body-tertiary bg-light m-3 row-lg-8 center border-radius"></div>`;
        $("#divProducts").prepend(categoriesearch);
      }
      const titleSearch = ` <div id="title-search"  class="col-lg-12  gray  shadow-lg   bg-body-tertiary p-3 bg-light  m-3  row-lg-8 center border-radius"><h4 id="title-search-h4" class="gold text-start ">תוצאות עבור: ${searchv}</h4></div>`;
      $("#divProducts").prepend(titleSearch);
      const titleSearchh4 = document.getElementById('title-search-h4');
      titleSearchh4.innerHTML = "תוצאות עבור: " + searchv;
      fill(searchv);
    }
  } else {
    if (searchv !== "") {
      const li = document.createElement('li');
      li.setAttribute('id', 'li-search')
      const button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.setAttribute('id', 'cat-search');
      button.setAttribute('class', 'btn btn-outline-secondary border-0 p-3');
      button.innerText = searchv;
      li.appendChild(button);

      const firstChild = categories.firstChild;
      categories.insertBefore(li, firstChild);

      const categoriesearch = `<div id="divProducts-search" class="col-lg-12 pt-4 shadow-lg p-3 bg-body-tertiary bg-light m-3 row-lg-8 center border-radius"></div>`;
      $("#divProducts").prepend(categoriesearch);
      const titleSearch = ` <div id="title-search"  class="col-lg-12  gray  shadow-lg   bg-body-tertiary p-3 bg-light  m-3  row-lg-8 center border-radius"><h4 id="title-search-h4" class="gold text-start ">תוצאות עבור: ${searchv}</h4></div>`;
      $("#divProducts").prepend(titleSearch);
      fill(searchv);
      const liSearch = document.getElementById('li-search');
      if (liSearch) {
        liSearch.onclick = () => {
          const targetElement = document.getElementById('title-search');
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }
}

const fill = (searchv) => {
  const divProductsSearch = document.getElementById("divProducts-search");
  divProductsSearch.innerHTML = "";
  const proCards = document.querySelectorAll('.proCard');
  proCards.forEach(proCard => {
    const h5 = proCard.querySelector('div > h5');
    const h6 = proCard.querySelector('div > h6');
    if (h5.textContent.includes(searchv)) {
      const copiedCard = proCard.cloneNode(true);
      divProductsSearch.appendChild(copiedCard);
      copiedCard.onclick = () => {
        bigShow(copiedCard.querySelector('img').src,copiedCard.querySelector('h5').innerText,copiedCard.querySelector('h6'),copiedCard.querySelector('h4').innerText);
      }
    }
    else {
      if (h6) {
        if (h6.textContent.includes(searchv)) {
          const copiedCard = proCard.cloneNode(true);
          divProductsSearch.appendChild(copiedCard);
          copiedCard.onclick = () => {
            bigShow(copiedCard.querySelector('img').src,copiedCard.querySelector('h5').innerText,copiedCard.querySelector('h6'),copiedCard.querySelector('h4').innerText);
          }
        }
      }
    }
  });
  if (divProductsSearch.innerHTML === "") {
    var parent = document.getElementById("divProducts");
    var child1 = document.getElementById("divProducts-search");
    const titleSearchh4 = document.getElementById("title-search-h4");
    titleSearchh4.innerHTML = "לא נמצאו תוצאות עבור: " + searchv;
    parent.removeChild(child1);
  }
}
//תצוגת מוצר בגדול
popup = () => {
  const proCards = document.querySelectorAll('.proCard');
  proCards.forEach(card => {
    card.onclick = () => {
      bigShow(card.querySelector('img').src,card.querySelector('h5').innerText,card.querySelector('h6'),card.querySelector('h4').innerText);
    };
  });
}
bigShow = (src,title,details,price,countp,name,note,card0,costCadr) => {
  const popupWindow = document.createElement("div");
  popupWindow.classList.add("popup-window");
  const upper = document.createElement("div");
  upper.id = "upper";
  const lower = document.createElement("div");
  lower.id = "lower";
  const img = document.createElement("img");
  img.src = src;

  const leftDiv = document.createElement("div");
  leftDiv.id = "leftDiv";
  const leftTop = document.createElement("div");
  leftTop.id = "leftTop";
  const h4 = document.createElement("h4");
  h4.innerText = title;
  const close = document.createElement("button");
  close.id = "close";
  close.innerHTML = "X";
  close.classList.add("green");
  leftTop.appendChild(h4);
  leftTop.appendChild(close);
  leftDiv.appendChild(leftTop);

  if (details) {
    const h6 = document.createElement("h6");
    h6.innerText = details.innerText;
    leftDiv.appendChild(h6);
  }
  const h3 = document.createElement("h4");
  h3.innerText = price;
  leftDiv.appendChild(h3);

  const sum = document.createElement("h5");
  sum.innerText = 'כמות לבחירה';
  leftDiv.appendChild(sum);

  const count = document.createElement("div");
  count.id = "countDiv";
  const minus = document.createElement("button");
  const label = document.createElement("label");
  label.id = "count";
  const plus = document.createElement("button");
  if(countp)
  label.innerText = countp;
else
  label.innerText = '1';
  const ip=document.createElement("span");
plus.appendChild(ip);
ip.innerHTML="+";
const im=document.createElement("span");
im.innerText = '-';
minus.appendChild(im);
ip.classList.add("ipim");
im.classList.add("ipim");

  plus.classList.add("green");
  minus.classList.add("green");

  count.appendChild(plus);


  count.appendChild(label);
  count.appendChild(minus);
  leftDiv.appendChild(count);

  upper.appendChild(img);
  upper.appendChild(leftDiv);

  const lowh5 = document.createElement("h5");
  lowh5.innerHTML = "הערות מיוחדות?";
  lower.appendChild(lowh5);

  const inputs = document.createElement("div");
  inputs.id = "inputs";
  const in1 = document.createElement("textarea");
  const in2 = document.createElement("textarea");
  in1.type = "text";
  in2.type = "text";
  in1.placeholder = "הערות";
  if(note){
    in1.value=note;
  }
  in2.placeholder = "שם למנה";
  if(name){
    in2.value=name;
  }
  inputs.appendChild(in1);
  inputs.appendChild(in2);
  lower.appendChild(inputs);

  const addbutton = document.createElement('button');
  addbutton.id = "addbutton";
  addbutton.innerHTML = "הוסף להזמנה"
  lower.appendChild(addbutton);
  popupWindow.appendChild(upper);
  popupWindow.appendChild(lower);
  document.body.appendChild(popupWindow);
  popupWindow.style.display = "block";
  const page = document.createElement('div');
  page.id = "page";
  document.body.appendChild(page);
  page.style.display = "block";

  plus.onclick = () => {
    label.innerHTML++;
  }
  minus.onclick = () => {
    if (label.innerHTML > 1)
      label.innerHTML--;
  }
  close.onclick = () => {
    document.body.removeChild(popupWindow);
    document.body.removeChild(page);
  }
  addbutton.onclick = () => {
   addToCard(img.src,h4.innerHTML,details,h3.innerHTML.slice(0, h3.innerHTML.length - 1),label.innerHTML, in1.value, in2.value,card0,costCadr);
    document.body.removeChild(popupWindow);
    document.body.removeChild(page);
  }
};

addToCard = (image,name,details1,price,count, note, namein,card0,costCadr) => {
  const proCard=document.getElementById('proCard');
if(card0){
  proCard.removeChild(card0);
}
if(costCadr){
  sumcost-=costCadr;
  cost.innerHTML=sumcost;
}
 const textCard=document.getElementById('textCard');
 if(textCard){
 proCard.removeChild(textCard);}
costButton.style.visibility= "visible";
sumcost+=price*count ;
cost.innerHTML=sumcost;
const card=document.createElement("div");
card.setAttribute('class', 'border-bottom pb-3 pt-3 productInCard');
const rdiv=document.createElement("div");
rdiv.setAttribute('class', 'rdiv');

const img=document.createElement("img");
img.src=image;
img.id="imageInCard"
rdiv.appendChild(img);

const miDiv=document.createElement("div");
miDiv.setAttribute('class', 'p-1 mr-1 ');

const nameFood=document.createElement("h5")
nameFood.setAttribute('class', ' gold nameFood ');
nameFood.innerHTML=name;
miDiv.appendChild(nameFood);

const pricef=document.createElement("h5")
pricef.setAttribute('class', 'pricef');
pricef.innerHTML=price*count+"₪";
if(namein!=""){
  pricef.innerHTML+=" | "+namein;

}
miDiv.appendChild(pricef);

if(note!=""){
  const noteF=document.createElement("h5")
  noteF.setAttribute('class', ' gold noteF ');
  noteF.innerHTML="הערות:";
  miDiv.appendChild(noteF);

  const noteFH6=document.createElement("h5");
  noteFH6.setAttribute('class', ' noteFH6 ');
  noteFH6.innerHTML=note;
  miDiv.appendChild(noteFH6);

}
rdiv.appendChild(miDiv);
card.appendChild(rdiv);


const leDiv=document.createElement("div");
leDiv.setAttribute('class', 'changeFoodDiv p-1 mt-2 ml-2');

const change=document.createElement("button");
change.setAttribute('class', 'changeButtons changeFood');
const i=document.createElement("i");
i.setAttribute('class', 'fas fa-pen gold pen');
change.appendChild(i);
leDiv.appendChild(change);

const minus=document.createElement("button");
minus.setAttribute('class', 'changeButtons minus mr-2');
const im=document.createElement("i");
minus.appendChild(im);

if(count>1)
im.innerHTML="-";
else
im.innerHTML="x";

leDiv.appendChild(minus);

const cnt=document.createElement("button");
cnt.setAttribute('class', 'changeButtons cnt mr-2');
cnt.innerHTML=count;
leDiv.appendChild(cnt);

const plus=document.createElement("button");
plus.setAttribute('class', 'changeButtons plus mr-2');
const ip=document.createElement("i");
plus.appendChild(ip);
ip.innerHTML="+";
leDiv.appendChild(plus);
card.appendChild(leDiv);
$("#proCard").prepend(card);
plus.onclick=()=>{
  im.innerHTML="-";
  sumcost-=count*price;
  count++;
  cnt.innerHTML=count;
  pricef.innerHTML=price*count+"₪";
  if(namein!=""){
    pricef.innerHTML+=" | "+namein;
  }
  sumcost+=count*price;
cost.innerHTML=sumcost;
}
minus.onclick=()=>{
if(im.innerHTML==="-"){
  sumcost-=count*price;
  count--;
if(count>1)
im.innerHTML="-";
else
im.innerHTML="x";

  cnt.innerHTML=count;
  pricef.innerHTML=price*count+"₪";
  if(namein!=""){
    pricef.innerHTML+=" | "+namein;
  }
  sumcost+=count*price;
cost.innerHTML=sumcost;
}
else{
  sumcost-=price;
  cost.innerHTML=sumcost;  
  proCard.removeChild(card);
  if(sumcost===0||(sumcost===15&&JSON.parse(sessionStorage.getItem('delivery')))){
    $("#proCard").prepend(textCard);
costButton.style.visibility="hidden";

  }
}
}
change.onclick=()=>{
  bigShow(image,name,details1,price+"₪",count, namein,note,card,price*count);

}
}
costButton.onclick=()=>{
  sessionStorage.setItem('cost', JSON.stringify(sumcost));
  window.location.href='payment.html';
}
const scButton=document.getElementById("scButton");
scButton.onclick=()=>{
  const closecard=document.getElementById('close-card');
  closecard.style.visibility="visible";
  const page = document.createElement('div');
  page.id = "page1";
  document.body.appendChild(page);
  page.style.display = "block";
card.style.visibility="visible";
closecard.onclick=()=>{
  document.body.removeChild(page);
  closecard.style.visibility="hidden";
  card.style.visibility="hidden";


}
}