let menu = [
    { "id": "1", "name": "Spl. Milk Tea", "category": "beverages", "price": 20 },
    { "id": "2", "name": "Hot Milk", "category": "beverages", "price": 20 },
    { "id": "3", "name": "Hot Coffee", "category": "beverages", "price": 70 },
    { "id": "4", "name": "Sweet Lassi", "category": "beverages", "price": 70 },
    { "id": "5", "name": "Cold Drinks", "category": "beverages", "price": "As Per Price" },
    
    { "id": "10", "name": "Plain Parantha", "category": "parantha", "price": 50 },
    { "id": "11", "name": "Aloo Parantha", "category": "parantha", "price": 50 },
    { "id": "12", "name": "Mix Parantha", "category": "parantha", "price": 60 },
    { "id": "13", "name": "Gobi Parantha", "category": "parantha", "price": 50 },
    { "id": "14", "name": "Paneer Parantha", "category": "parantha", "price": 70 },
    { "id": "15", "name": "Onion Parantha", "category": "parantha", "price": 50 },
    { "id": "16", "name": "Plain Salad", "category": "parantha", "price": 50 },
    { "id": "17", "name": "Green Salad", "category": "parantha", "price": 50 },
    { "id": "18", "name": "Dahi", "category": "parantha", "price": "50/100" },
    { "id": "19", "name": "Mix Raita", "category": "parantha", "price": 150 },

    { "id": "20", "name": "Dal Fry", "category": "veggies", "price": 150 },
    { "id": "21", "name": "Dal Makhni", "category": "veggies", "price": 200 },
    { "id": "22", "name": "Yellow Dal Fry", "category": "veggies", "price": 200 },
    { "id": "23", "name": "Mix Veg.", "category": "veggies", "price": 200 },
    { "id": "24", "name": "Aloo Zeera", "category": "veggies", "price": 180 },
    { "id": "25", "name": "Aloo Mutter", "category": "veggies", "price": 170 },
    { "id": "26", "name": "Malai Kofta", "category": "veggies", "price": 250 },
    { "id": "27", "name": "Cheese Tomato", "category": "veggies", "price": 250 },
    { "id": "28", "name": "Mutter Paneer", "category": "veggies", "price": 200 },
    { "id": "29", "name": "Shahi Paneer", "category": "veggies", "price": 250 },
    
    { "id": "30", "name": "Plain Roti", "category": "Roti", "price": 15 },
    { "id": "31", "name": "Butter Roti", "category": "Roti", "price": 20 },
    { "id": "32", "name": "Laccha Paratha", "category": "Roti", "price": 40 },
    { "id": "33", "name": "Plain Naan", "category": "Roti", "price": 50 },
    { "id": "34", "name": "Butter Naan", "category": "Roti", "price": 60 },
    { "id": "35", "name": "Makki Di Roti", "category": "Roti", "price": 30 },
    { "id": "36", "name": "Missi Roti", "category": "Roti", "price": 40 },
    { "id": "37", "name": "Garlic Naan", "category": "Roti", "price": 70 },
    { "id": "38", "name": "Papad", "category": "Roti", "price": 20 },
    { "id": "39", "name": "Masala Papad", "category": "Roti", "price": 70 },
    
    { "id": "40", "name": "Plain Rice", "category": "sides", "price": 100 },
    { "id": "41", "name": "Zeera Rice", "category": "sides", "price": 150 },
    { "id": "42", "name": "Veg. Fried Rice", "category": "sides", "price": 150 },
    { "id": "43", "name": "Paneer Fried Rice", "category": "sides", "price": 170 },
    { "id": "44", "name": "Veg Biryani", "category": "sides", "price": 150 },
    { "id": "45", "name": "Mutter Pulao", "category": "sides", "price": 150 },
    
    { "id": "50", "name": "Mutton", "category": "chicken", "price": 600 },
    { "id": "51", "name": "Punjabi Chicken", "category": "chicken", "price": 550 },
    { "id": "52", "name": "Butter Chicken", "category": "chicken", "price": 550 },
    { "id": "53", "name": "Kadai Chicken", "category": "chicken", "price": 550 },
    { "id": "54", "name": "Afghani Chicken", "category": "chicken", "price": 550 },
    { "id": "55", "name": "Chicken Fry", "category": "chicken", "price": 550 },
    { "id": "56", "name": "Half Butter Chicken", "category": "chicken", "price": 350 },
    { "id": "57", "name": "Half Kadai Chicken", "category": "chicken", "price": 350 },
    { "id": "58", "name": "Half Afghani Chicken", "category": "chicken", "price": 350 },
    { "id": "59", "name": "Half Chicken Fry", "category": "chicken", "price": 350 },
    
    { "id": "60", "name": "Chicken Pakoda", "category": "chicken", "price": 550 },
    { "id": "61", "name": "Half Chicken Pakoda", "category": "chicken", "price": 350 },
    { "id": "62", "name": "Boneless Chicken", "category": "chicken", "price": 550 },
    { "id": "63", "name": "Half Boneless Chicken", "category": "chicken", "price": 350 },
    { "id": "64", "name": "Fish Plate (8 pc)", "category": "chicken", "price": 400 },
    { "id": "65", "name": "Steam Chicken", "category": "chicken", "price": 550 },
    { "id": "66", "name": "Chilly Chicken", "category": "chicken", "price": 550 },
    { "id": "67", "name": "Masala Chicken", "category": "chicken", "price": 550 },
    { "id": "68", "name": "Chicken Biryani", "category": "chicken", "price": 300 },
    { "id": "69", "name": "Tandoori Chicken", "category": "chicken", "price": "350/550" },
    
    { "id": "70", "name": "Garlic Chicken", "category": "chicken", "price": 550 },
    { "id": "71", "name": "Rara Chicken", "category": "chicken", "price": 600 },
    
    { "id": "80", "name": "veg biryani", "category": "Other", "price": 170 },
    { "id": "81", "name": "Mutter Pulao", "category": "Other", "price": 150 },
    { "id": "82", "name": "half dahi", "category": "Other", "price": 40 },
    { "id": "83", "name": "half cream salad", "category": "Other", "price": 50 },
    { "id": "84", "name": "extra butter", "category": "Other", "price": 10 },
    { "id": "85", "name": "Water", "category": "Other", "price": 20 },
    { "id": "86", "name": "Soda", "category": "Other", "price": 20 },
    { "id": "87", "name": "chicken gravy", "category": "Other", "price": 150 },
    { "id": "88", "name": "veg gravy", "category": "Other", "price": 120 },
    
    { "id": "90", "name": "ITEM 10", "category": "Other", "price": 10 },
    { "id": "91", "name": "ITEM 20", "category": "Other", "price": 20 },
    { "id": "92", "name": "ITEM 40", "category": "Other", "price": 40 },
    { "id": "93", "name": "ITEM 95", "category": "Other", "price": 95 },
    { "id": "94", "name": "Gudd vali chaah", "category": "Other", "price": 25 },
    { "id": "95", "name": "Masala papd", "category": "Other", "price": 50 },
    { "id": "96", "name": "plane papad", "category": "Other", "price": 20 },
    { "id": "97", "name": "Mutter methi", "category": "Other", "price": 180 },
    { "id": "98", "name": "half ice", "category": "Other", "price": 30 }
]
;

let waiters = [
  {
    name: "Pick-up",
    id: "1",
  },

  {
    name: "waiter-1",
    id: "3",
  },
  {
    name: "waiter-2",
    id: "4",
  },
  {
    name: "waiter-3",
    id: "5",
  },

  {
    name: "waiter-4",
    id: "7",
  },
];

let categories = [
  "veggies",
  "beverages",
  "parantha",
  "sides",
  "chicken",
  "Roti",
  "Other",
];

let tables = {};

let paidBills = [];

let KOT = [];

let allTotals = [];

let paytmbills = [];

let numberoftables = 0;

let addTableBtn = document.getElementById("addtable");

let total = 0;

let selectedTable = null; // Variable to store the selected table

// Select the right-container div
const rightContainer = document.querySelector(".right-container");
const payContainer = document.querySelector(".pay-container");
const billContainer = document.querySelector(".bill-container");
const billContainer2 = document.querySelector(".bill-container2");
const modal = document.getElementById("largeModal");
const closeButton = document.querySelector(".modal-header .close");
const Modal2Content = document.getElementById("editOrder");

closeButton.addEventListener("click", closeModal);

function showModal() {
  const modal = document.getElementById("largeModal");
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
}

function closeModal() {
  const modal = document.getElementById("largeModal");
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}

function showModal2() {
  const modal = document.getElementById("Modal2");
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
}

function closeModal2() {
  const modal = document.getElementById("Modal2");
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}

function showModal3() {
  const modal = document.getElementById("Modal3");
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
}

function closeModal3() {
  const modal = document.getElementById("Modal3");
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}

function showModal4() {
  const modal = document.getElementById("Modal4");
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
}

function closeModal4() {
  const modal = document.getElementById("Modal4");
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}

function showModal5() {
  const modal = document.getElementById("Modal5");
  const modalInstance = new bootstrap.Modal(modal);
  modalInstance.show();
}

function closeModal5() {
  const modal = document.getElementById("Modal5");
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}

function retrieveTablesFromLocalStorage() {
  let storedTables = JSON.parse(localStorage.getItem("tables"));

  if (storedTables) {
    for (let key in storedTables) {
      if (storedTables.hasOwnProperty(key)) {
        let table = storedTables[key];

        let inputValue = table.tableId;

        if (document.getElementById(`table${inputValue}`)) {
          return;
        }

        let div = document.createElement("div");
        let div2 = document.createElement("div");

        numberoftables++;

        div.classList.add("btn", "btn-outline-secondary", "tablebtn");
        div.setAttribute("id", `table${inputValue}`);
        div.setAttribute("onClick", `generateBill('table${inputValue}')`);
        div2.classList.add("menu");

        div.innerText = "Table " + inputValue + "\n" + table.waiter;

        div2.appendChild(div);
        document.querySelector(".row").appendChild(div2);

        // Add a new key-value pair to the tables object
        tables[`table${inputValue}`] = {
          tableId: inputValue,
          order: table.order,
          finalorder: table.finalorder,
          total: table.total,
          waiter: table.waiter,
        };
      }
    }

    // Update paidBills and allTotals arrays from local storage
    let storedPaidBills = JSON.parse(localStorage.getItem("paidBills"));
    let storedAllTotals = JSON.parse(localStorage.getItem("allTotals"));
    let storedpaytmbills = JSON.parse(localStorage.getItem("paytm"));

    if (storedPaidBills) {
      paidBills = storedPaidBills;
    }

    if (storedAllTotals) {
      allTotals = storedAllTotals;
    }

    if (storedpaytmbills) {
      paytmbills = storedpaytmbills;
    }

    return tables;
  } else {
    return {};
  }
}

retrieveTablesFromLocalStorage();

function deleteAllData() {
  let askUser = prompt("type DELETE for deleting all data");

  if (askUser == "delete") {
    // PrintItemCountOnPaper(paidBills);
    // printStock();
    // Clear the variables
    tables = {};
    paidBills = [];
    allTotals = [];
    paytmbills = [];
    numberoftables = 0;

    // Clear the local storage
    localStorage.removeItem("tables");
    localStorage.removeItem("paidBills");
    localStorage.removeItem("allTotals");
    localStorage.removeItem("paytm");

    // Remove all table elements from the DOM
    const tableElements = document.querySelectorAll(".tablebtn");
    tableElements.forEach((element) => {
      element.parentNode.remove();
    });

    // Reset the selectedTable variable
    selectedTable = null;

    // updateItemCount();
    clearFetchedOrderIds();
    deleteAllEntries();

    alert("Data deleted successfully !!");
  } else {
  }
}

function deleteAllEntries() {
  fetch("/delete-all-orders", {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        console.log("All entries deleted successfully");
        // Optionally, you can also clear local storage or update the UI
        localStorage.removeItem("tables");
        localStorage.removeItem("fetchedOrderIds");
        localStorage.removeItem("paidBills");
        localStorage.removeItem("allTotals");
        localStorage.removeItem("paytm");
        // Update UI or refresh the page
        location.reload();
      } else {
        console.error("Failed to delete all entries");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

addTableBtn.addEventListener("click", function () {
  const inputElement = document.getElementById("inputTable");
  const inputValue = inputElement.value;

  // Check if the table already exists
  if (tables[`table${inputValue}`] || inputValue <= 0) {
    alert(`Table ${inputValue} cannot be added`);
    return;
  }

  ///////////////////  waiter selection ////////////////////////

  let waiter = "#";

  /////////////////////////////////////////////////////////////////

  let div = document.createElement("div");
  let div2 = document.createElement("div");

  numberoftables++;

  div.classList.add("btn", "btn-outline-secondary");
  div.setAttribute("id", `table${inputValue}`);
  div.setAttribute("onClick", `generateBill('table${inputValue}')`);
  div2.classList.add("menu");

  div.innerText = "Table " + inputValue + "\n" + waiter;

  div2.appendChild(div);
  document.querySelector(".row").appendChild(div2);

  // Add a new key-value pair to the tables object
  tables[`table${inputValue}`] = {
    tableId: inputValue,
    order: [],
    finalorder: [],
    total: 0,
    waiter: waiter,
  };
  localStorage.setItem("tables", JSON.stringify(tables));
  showModal3();
  selectedTable = `table${inputValue}`;
});

function createWaiters() {
  // Get the element where waiters will be appended
  const waiterContainer = document.getElementById("Modal3Content");

  // Clear any existing content in the container
  waiterContainer.innerHTML = "";

  // Loop through the waiters array
  for (let waiter of waiters) {
    // Create a new div element for each waiter
    const div = document.createElement("div");
    div.classList.add("btn", "btn-danger", "waiters");

    div.setAttribute("id", waiter.id);

    div.addEventListener("click", function () {
      selectWaiter(waiter);
    });

    // Set the content or styling for the waiter div
    div.textContent = waiter.name; // Replace with the appropriate waiter property

    // Append the waiter div to the waiter container
    waiterContainer.appendChild(div);
  }
}
createWaiters();
let phoneNumber;
function selectWaiter(waiter) {
  if (waiter.name == "PACKING") {
    phoneNumber = prompt("Enter mobile number");
    tables[selectedTable].waiter = phoneNumber;
    document.getElementById(selectedTable).innerText =
      "Table " + tables[selectedTable].tableId + "\n" + phoneNumber;
    closeModal3();
    generateBill(selectedTable);
  } else {
    tables[selectedTable].waiter = waiter.name;
    document.getElementById(selectedTable).innerText =
      "Table " + tables[selectedTable].tableId + "\n" + waiter.name;
    closeModal3();
    generateBill(selectedTable);
  }
}

function createMenu() {
  ////////////// categories
  for (let i = 0; i < categories.length; i++) {
    const item = categories[i];

    let div = document.createElement("div");
    div.classList.add("btn", "btn-primary", "categories");

    div.setAttribute("id", categories[i]);

    div.innerText = categories[i];

    div.addEventListener("click", function () {
      showMenu(item);
    });

    document.querySelector(".mid-container").appendChild(div);
  }
}
createMenu();

function showMenu(category) {
  const smallMidContainer = document.querySelector(".small-mid-container");
  smallMidContainer.innerHTML = "";
  if (category == "veggies") {
    smallMidContainer.innerHTML = `<div>${category}: </div>`;
    veggies();
  }

  if (category == "beverages") {
    smallMidContainer.innerHTML = `<div>${category}: </div>`;
    beverages();
  }

  if (category == "parantha") {
    smallMidContainer.innerHTML = `<div> EXTRAS : </div>`;
    parantha();
  }

  if (category == "sides") {
    smallMidContainer.innerHTML = `<div>${category}: </div>`;
    sides();
  }

  if (category == "chicken") {
    smallMidContainer.innerHTML = `<div>${category}: </div>`;
    chicken();
  }

  if (category == "Roti") {
    smallMidContainer.innerHTML = `<div>${category}: </div>`;
    Roti();
  }

  if (category == "Other") {
    smallMidContainer.innerHTML = `<div>${category}: </div>`;
    Other();
  }
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
function veggies() {
  ///////////////////////////////////// loop 1

  for (let i = 19; i < 28; i++) {
    const item = menu[i];

    let div = document.createElement("div");
    div.classList.add("btn", "btn-danger", "menuitems");

    div.setAttribute("id", item.id);

    div.innerText = item.name;

    div.addEventListener("click", function () {
      addToBill(item);
    });

    document.querySelector(".small-mid-container").appendChild(div);
  }
}

function beverages() {
  /////////////////// loop 2

  for (let i = 0; i < 4; i++) {
    const item = menu[i];

    let div = document.createElement("div");
    div.classList.add("btn", "btn-danger", "menuitems");

    div.setAttribute("id", item.id);

    div.innerText = item.name;

    div.addEventListener("click", function () {
      addToBill(item);
    });

    document.querySelector(".small-mid-container").appendChild(div);
  }
}

function parantha() {
  ////////////// loop 3
  for (let i = 9; i < 18; i++) {
    const item = menu[i];

    let div = document.createElement("div");
    div.classList.add("btn", "btn-danger", "menuitems");

    div.setAttribute("id", item.id);

    div.innerText = item.name;

    div.addEventListener("click", function () {
      addToBill(item);
    });

    document.querySelector(".small-mid-container").appendChild(div);
  }
  let div = document.createElement("div");
  div.classList.add("btn", "btn-success", "menuitems");

  div.setAttribute("id", "item.id");

  div.innerText = "+";

  div.addEventListener("click", function () {
    let newitem = {
      name: "HALF SABZI",
      id: "199",
      price: Number(prompt("PRICE")),
      img: "",
      category: "Other",
    };

    addToBill(newitem);
  });

  document.querySelector(".small-mid-container").appendChild(div);
}

function sides() {
  /////////// loop 4
  for (let i = 39; i < 44; i++) {
    const item = menu[i];

    let div = document.createElement("div");
    div.classList.add("btn", "btn-danger", "menuitems");

    div.setAttribute("id", item.id);

    div.innerText = item.name;

    div.addEventListener("click", function () {
      addToBill(item);
    });

    document.querySelector(".small-mid-container").appendChild(div);
  }
}

function chicken() {
  /////////// loop 5
  for (let i = 49; i < 70; i++) {
    const item = menu[i];

    let div = document.createElement("div");
    div.classList.add("btn", "btn-danger", "menuitems");

    div.setAttribute("id", item.id);

    div.innerText = item.name;

    div.addEventListener("click", function () {
      addToBill(item);
    });

    document.querySelector(".small-mid-container").appendChild(div);
  }
}

function Roti() {
  /////////// loop 6
  for (let i = 29; i < 38; i++) {
    const item = menu[i];

    let div = document.createElement("div");
    div.classList.add("btn", "btn-warning", "menuitems");

    div.setAttribute("id", item.id);

    div.innerText = item.name;

    div.addEventListener("click", function () {
      addRoti(item);
    });

    document.querySelector(".small-mid-container").appendChild(div);
  }
}

function Other() {
  /////////// loop 7
  for (let i = 79; i < 97; i++) {
    const item = menu[i];

    let div = document.createElement("div");
    div.classList.add("btn", "btn-danger", "menuitems");

    div.setAttribute("id", item.id);

    div.innerText = item.name;

    div.addEventListener("click", function () {
      addToBill(item);
    });

    document.querySelector(".small-mid-container").appendChild(div);
  }

  let div = document.createElement("div");
  div.classList.add("btn", "btn-success", "menuitems");

  div.setAttribute("id", "item.id");

  div.innerText = "+";

  div.addEventListener("click", function () {
    let newitem = {
      name: prompt("NAME"),
      id: "116",
      price: Number(prompt("PRICE")),
      img: "",
      category: "Other",
    };

    addToBill(newitem);
  });

  document.querySelector(".small-mid-container").appendChild(div);
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
function addRoti(item) {
  let count = Number(prompt("Please enter quantity: "));

  // Create a copy of the item
  const itemCopy = { ...item };
  itemCopy.count = count; // Add the count property
  itemCopy.price = count * itemCopy.price;

  const itemInfoDiv = document.createElement("div");
  itemInfoDiv.setAttribute("id", `bill${itemCopy.id}`);
  itemInfoDiv.setAttribute("class", "billing");
  itemInfoDiv.innerText = count + " " + itemCopy.name + " - " + itemCopy.price;
  billContainer.appendChild(itemInfoDiv);

  // Add the item copy to the order for the selected table
  if (selectedTable) {
    tables[selectedTable].order.push(itemCopy);
    tables[selectedTable].total += itemCopy.price;
  }

  total += itemCopy.price;

  // Add a click event listener to the item in the bill container
  itemInfoDiv.addEventListener("click", function () {
    deleteItem(itemInfoDiv.id);
  });

  console.log(itemCopy);
}

function addToBill(item) {
  const itemInfoDiv = document.createElement("div");
  itemInfoDiv.setAttribute("id", `bill${item.id}`);
  itemInfoDiv.setAttribute("class", "billing");
  itemInfoDiv.innerText = item.name + " - " + item.price;
  billContainer.appendChild(itemInfoDiv);

  // Add the item to the order for the selected table
  if (selectedTable) {
    tables[selectedTable].order.push(item);
    tables[selectedTable].total += item.price;
  }

  total += item.price;

  // Add a click event listener to the item in the bill container
  itemInfoDiv.addEventListener("click", function () {
    deleteItem(itemInfoDiv.id);
  });
}

function deleteItem(itemId) {
  // Remove the item from the bill container
  const itemElement = document.getElementById(itemId);
  itemElement.remove();
  let newitemelementID = itemId.replace("bill", "");

  for (let i = 0; i < tables[selectedTable].order.length; i++) {
    let item = tables[selectedTable].order[i].id;
    if (item == newitemelementID) {
      // Subtract the price of the deleted item from the total
      tables[selectedTable].total -= tables[selectedTable].order[i].price;

      // Remove the item from the order array
      tables[selectedTable].order.splice(i, 1);
      break;
    }
  }
}

function deleteItem2(itemId) {
  // Remove the item from the bill container
  const itemElement = document.getElementById(itemId);
  itemElement.remove();
  let newitemelementID = itemId.replace("bill", "");

  for (let i = 0; i < tables[selectedTable].finalorder.length; i++) {
    let item = tables[selectedTable].finalorder[i].id;
    if (item == newitemelementID) {
      // Subtract the price of the deleted item from the total
      tables[selectedTable].total -= tables[selectedTable].finalorder[i].price;

      // Remove the item from the order array
      tables[selectedTable].finalorder.splice(i, 1);

      break;
    }
  }
}

function clearbill() {
  // Remove all child elements from the bill container
  while (billContainer.firstChild) {
    billContainer.removeChild(billContainer.firstChild);
  }
  // Save the data to local storage
  localStorage.setItem("tables", JSON.stringify(tables));

  // Save the total amount of the bill and the items to an array/object
  const activeTable = selectedTable;

  closeModal();
  // Reset the total to 0
}

function deleteTable() {
  const activeTable = selectedTable;

  let ask = prompt("type DELETE for deleting the table");

  if (ask == "delete") {
    // Remove the table from the tables object
    delete tables[activeTable];

    selectedTable = null; // Reset the selectedTable variable

    // Remove the table from the DOM
    const tableElement = document.getElementById(activeTable);
    if (tableElement) {
      tableElement.parentNode.remove();
    }

    localStorage.setItem("tables", JSON.stringify(tables));
    closeModal();
  } else {
    alert("Table cannot be deleted !");
  }
}

function paidButton() {
  closeModal();
  showModal4();
  createCashInput();
}

function createCashInput() {
  // Get the modal content element
  const modalContent = document.getElementById("Modal4Content");

  // Clear the existing content
  modalContent.innerHTML = "";

  // Create the cash input section
  const cashInputSection = document.createElement("div");
  cashInputSection.classList.add("cash2");
  cashInputSection.setAttribute("id", "cash2");

  // Create the input group
  const inputGroup = document.createElement("div");
  inputGroup.classList.add("input-group", "input-group-lg");

  // Create the input group prepend element
  const inputGroupPrepend = document.createElement("div");
  inputGroupPrepend.classList.add("input-group-prepend");

  // Create the cash input element
  const cashInput = document.createElement("input");
  cashInput.id = "cashinput";
  cashInput.type = "number";
  cashInput.classList.add("form-control");
  cashInput.setAttribute("aria-label", "Large");
  cashInput.setAttribute("aria-describedby", "inputGroup-sizing-sm");

  // Create the cash input button
  const cashInputBtn = document.createElement("button");
  cashInputBtn.classList.add("btn", "btn-success");
  cashInputBtn.id = "cashinputbtn";
  cashInputBtn.style.width = "200px";
  cashInputBtn.textContent = "DONE";
  cashInputBtn.addEventListener("click", cashdone);

  // Append the input and button to the input group
  inputGroup.appendChild(inputGroupPrepend);
  inputGroup.appendChild(cashInput);
  inputGroup.appendChild(cashInputBtn);

  // Append the input group to the cash input section
  cashInputSection.appendChild(inputGroup);

  // Create the cash buttons
  const cashValues = [100, 200, 300, 400, 500, 1000, 1500, 2000];
  for (let value of cashValues) {
    const cashButton = document.createElement("div");
    cashButton.classList.add("btn", "btn-primary", "cash");
    cashButton.textContent = value;
    cashButton.addEventListener("click", function () {
      cashInput.value = value;
    });
    cashInputSection.appendChild(cashButton);
  }

  // Create the skip button element
  const skipButton = document.createElement("div");
  skipButton.classList.add("btn", "btn-warning", "cash");
  skipButton.textContent = "PAYTM";
  skipButton.addEventListener("click", skipcash);
  cashInputSection.appendChild(skipButton);
  // Append the cash input section to the modal content
  modalContent.appendChild(cashInputSection);
}

function skipcash() {
  paytmbills.push(tables[selectedTable].total);
  console.log(paytmbills);

  clearbill2();
  closeModal4();
}

function cashdone() {
  let cash = Number(document.getElementById("cashinput").value);

  if (cash >= tables[selectedTable].total) {
    const modalContent = document.getElementById("Modal4Content");
    modalContent.innerHTML = "";

    // Create the "Cash accepted" div
    const cashAcceptedDiv = document.createElement("div");
    cashAcceptedDiv.classList.add("btn", "btn-warning", "sukh");
    cashAcceptedDiv.textContent = "Cash accepted: " + cash;

    // Create the "Bill" div
    const billDiv = document.createElement("div");
    billDiv.classList.add("btn", "btn-danger", "sukh");
    billDiv.textContent = "Bill: " + tables[selectedTable].total;

    // Create the "Change due" div
    const changeDueDiv = document.createElement("div");
    changeDueDiv.classList.add("btn", "btn-success", "sukh");
    const change = cash - tables[selectedTable].total;
    changeDueDiv.textContent = "Change due: " + change;

    // Append the divs to the modal content
    modalContent.appendChild(cashAcceptedDiv);
    modalContent.appendChild(billDiv);
    modalContent.appendChild(changeDueDiv);

    clearbill2();
  } else {
    const div = document.createElement("div");
    div.classList.add("btn", "btn-warning");
    div.textContent = "insufficient cash !";

    document.getElementById("Modal4Content").prepend(div);
  }

  closeModal4AfterDelay();
}

function closeModal4AfterDelay() {
  setTimeout(closeModal4, 5000); // Close modal after 5 seconds (5000 milliseconds)
}

function clearbill2() {
  const activeTable = selectedTable;
  const tableNumber = activeTable.replace("table", "");
  const itemsToMove = tables[activeTable].order.splice(0);
  tables[activeTable].finalorder.push(...itemsToMove);

  const paidBill = {
    tableId: tableNumber,
    totalAmount: tables[activeTable].total,
    items: [...tables[activeTable].finalorder],
  };
  paidBills.push(paidBill);
  allTotals.push(tables[activeTable].total);
  total = 0;

  // Remove the table from the tables object
  delete tables[activeTable];

  selectedTable = null; // Reset the selectedTable variable

  // Remove the table from the DOM
  const tableElement = document.getElementById(activeTable);
  if (tableElement) {
    tableElement.parentNode.remove();
  }

  // Save the data to local storage
  localStorage.setItem("tables", JSON.stringify(tables));
  localStorage.setItem("paidBills", JSON.stringify(paidBills));
  localStorage.setItem("allTotals", JSON.stringify(allTotals));
  localStorage.setItem("paytm", JSON.stringify(paytmbills));

  closeModal();
}

function printAllBills() {
  let receiptContent;
  for (let i = 0; i < paidBills.length; i++) {
    const paidBill = paidBills[i];
    receiptContent += generateReceiptContent(paidBill);
  }
  // Open a new window and write the receipt content to it
  let printWindow = window.open("", "Print", "height=600,width=800");
  printWindow.document.write(receiptContent);
  // Print the receipt
  printWindow.print();
  printWindow.close();
}

function Printpaidbill() {
  let tableId = Number(prompt("Enter table ID: "));

  for (let i = 0; i < paidBills.length; i++) {
    let sukh = paidBills[i].tableId;
    if (sukh == tableId) {
      paidBill = paidBills[i];
    }
  }

  if (paidBill) {
    const receiptContent = generateReceiptContent(paidBill);

    // Open a new window and write the receipt content to it
    let printWindow = window.open("", "Print", "height=600,width=800");
    printWindow.document.write(receiptContent);

    // Print the receipt
    printWindow.print();
    printWindow.close();
  } else {
    alert(`Table ${tableId} does not have a paid bill.`);
  }
}

function generateReceiptContent(paidBill) {
  const tableNumber = paidBill.tableId;
  let receiptContent = "<h1>Indian Restaurant - Table " + tableNumber + "</h1>";
  receiptContent += "<ul>";

  // Loop through the items in the paidBill and add them to the receipt content
  for (let i = 0; i < paidBill.items.length; i++) {
    const item = paidBill.items[i];
    receiptContent += "<li>" + item.name + " - $" + item.price + "</li>";
  }

  receiptContent += "</ul>";

  // Add the total amount to the receipt content
  receiptContent += "<h2>Total: " + paidBill.totalAmount + "</h2>";

  return receiptContent;
}

function showOrder() {
  while (Modal2Content.firstElementChild) {
    Modal2Content.firstElementChild.remove();
  }
  Modal2Content.innerText =
    "Table " +
    tables[selectedTable].tableId +
    " " +
    tables[selectedTable].waiter;

  /////////////////////////// /////////////////////
  order = tables[selectedTable].finalorder;

  for (let i = 0; i < order.length; i++) {
    const itemInfoDiv = document.createElement("div");
    itemInfoDiv.setAttribute("id", `bill${order[i].id}`);
    itemInfoDiv.setAttribute("class", "billing");
    // Add a click event listener to the item in the bill container
    itemInfoDiv.addEventListener("click", function () {
      deleteItem2(itemInfoDiv.id);
    });

    if (order[i].count) {
      itemInfoDiv.innerText +=
        order[i].count + " " + order[i].name + " - " + order[i].price;
    } else {
      itemInfoDiv.innerText += order[i].name + " - " + order[i].price;
    }
    Modal2Content.appendChild(itemInfoDiv);
  }
  closeModal();
  showModal2();
}

function generateBill(tableId) {
  selectedTable = tableId;

  showModal();

  if (tables[selectedTable].waiter == "#") {
    showModal3();
  }

  document.querySelector(".modal-title").innerHTML =
    "Table " +
    tables[selectedTable].tableId +
    " " +
    tables[selectedTable].waiter;

  ////////////////////////////////     BILL CONTAINER -  1

  let order = tables[tableId].order;
  billContainer.innerHTML = "KOT: ";

  for (let i = 0; i < order.length; i++) {
    const itemInfoDiv = document.createElement("div");
    itemInfoDiv.setAttribute("id", `bill${order[i].id}`);
    itemInfoDiv.setAttribute("class", "billing");
    // Add a click event listener to the item in the bill container
    itemInfoDiv.addEventListener("click", function () {
      deleteItem(itemInfoDiv.id);
    });

    if (order[i].count) {
      itemInfoDiv.innerText +=
        order[i].count + " " + order[i].name + " - " + order[i].price;
    } else {
      itemInfoDiv.innerText += order[i].name + " - " + order[i].price;
    }

    billContainer.appendChild(itemInfoDiv);
  }

  ////////////////////////////////     BILL CONTAINER -  2
  order = tables[tableId].finalorder;
  total = 0;
  billContainer2.innerHTML = "BILL: ";

  for (let i = 0; i < order.length; i++) {
    const itemInfoDiv = document.createElement("div");
    // itemInfoDiv.setAttribute("id", `bill${order[i].id}`);
    itemInfoDiv.setAttribute("class", "billing2");

    if (order[i].count) {
      itemInfoDiv.innerText +=
        order[i].count + " " + order[i].name + " - " + order[i].price;
    } else {
      itemInfoDiv.innerText += order[i].name + " - " + order[i].price;
    }
    billContainer2.appendChild(itemInfoDiv);
    total += order[i].price;
  }

  document.getElementById(
    "total"
  ).innerText = `total = ${tables[tableId].total}`;
}
function printKOT() {
  const activeTable = selectedTable;
  const tableNumber = activeTable.replace("table", "");
  let receiptContent = `
  <h1 style="text-align: center; ">Indian Restaurant</h1>
  <h2 style="text-align: center; ">Table ${tableNumber} - ${tables[selectedTable].waiter}</h2>
  <hr style="border: none; border-bottom: 1px solid #eee; margin: 10px 0;">
  <ul style="list-style: none; padding: 0; margin: 0; text-align: center; font-size:30px;">
  `;

  // Loop through the items in the bill container and add them to the receipt content
  for (let i = 0; i < tables[selectedTable].order.length; i++) {
    if (tables[selectedTable].order[i].count) {
      receiptContent +=
        "<li><span class='h3'>" +
        tables[selectedTable].order[i].count +
        " " +
        tables[selectedTable].order[i].name +
        "</span></li>";
    } else {
      receiptContent += "<li>" + tables[selectedTable].order[i].name + "</li>";
    }
  }

  receiptContent += `</ul><hr style="border: none; border-bottom: 1px solid #eee; margin: 10px 0;">`;

  // Open a new window and write the receipt content to it
  let printWindow = window.open("", "Print", "height=600,width=800");
  printWindow.document.write(receiptContent);

  // Print the receipt
  printWindow.print();
  printWindow.close();

  // Generate a random 4-digit order ID
  const randomOrderID = Math.floor(1000 + Math.random() * 9000).toString();

  // Prepare payload for server with the generated order ID
  const payload = {
    tableNumber: tableNumber,
    finalOrder: tables[activeTable].order,
    waiter: tables[activeTable].waiter,
    orderID: randomOrderID, // Add the generated order ID to the payload
  };

  // Send payload to server
  fetch("/submit-final-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (response.ok) {
        // Additional success handling code here
      } else {
        console.error("Error sending final order:", response.statusText);
        // Additional error handling code here
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      // Additional exception handling code here
    });

  // Move the items from the order array to the finalorder array of the selected table
  const itemsToMove = tables[activeTable].order.splice(0);
  if (!tables[activeTable].finalorder) {
    tables[activeTable].finalorder = [];
  }
  tables[activeTable].finalorder.push(...itemsToMove);

  // Remove all child elements from the bill container
  while (billContainer.firstChild) {
    billContainer.removeChild(billContainer.firstChild);
  }

  // Save the data to local storage
  localStorage.setItem("tables", JSON.stringify(tables));
  clearbadge(`${selectedTable}`);

  closeModal();
}

function printReceipt() {
  const activeTable = selectedTable;
  const itemsToMove = tables[activeTable].order.splice(0);
  tables[activeTable].finalorder.push(...itemsToMove);
  const tableNumber = activeTable.replace("table", "");
  let receiptContent = `
    <h1 style="text-align: center; ">Indian Restaurant</h1>
    <h2 style="text-align: center; ">Table ${tableNumber}</h2>
    <hr style="border: none; border-bottom: 1px solid #eee; margin: 10px 0;">
    <ul style="list-style: none; padding: 0; margin: 0;">
`;

  // Loop through the items in the bill container and add them to the receipt content

  for (let i = 0; i < tables[selectedTable].finalorder.length; i++) {
    if (tables[selectedTable].finalorder[i].count) {
      receiptContent +=
        "<li>" +
        tables[selectedTable].finalorder[i].count +
        " " +
        tables[selectedTable].finalorder[i].name +
        " - " +
        tables[selectedTable].finalorder[i].price +
        "</li>";
    } else {
      receiptContent +=
        "<li>" +
        tables[selectedTable].finalorder[i].name +
        " - " +
        tables[selectedTable].finalorder[i].price +
        "</li>";
    }
  }

  receiptContent += `<hr style="border: none; border-bottom: 1px solid #eee; margin: 10px 0;">`;

  // tax system///////////////////////////

  let tax = document.getElementById("tax").value;
  let discount = document.getElementById("discount").value;
  if (tax > 0) {
    tables[selectedTable].total += (tables[selectedTable].total * tax) / 100;
    receiptContent +=
      `<p>Tax (${tax}%) :` + (tables[selectedTable].total * tax) / 100 + "<p>";
  }

  if (discount > 0) {
    tables[selectedTable].total -= discount;
    receiptContent += "<p>discount: " + discount + "<p>";
  }

  // round off
  tables[selectedTable].total =
    Math.round(tables[selectedTable].total / 10) * 10;

  // Add the total amount to the receipt content

  receiptContent += `
  <div style="text-align: center; margin-top: 20px;">
    <h2>Total:${tables[selectedTable].total}</h2>
  </div>
`;
  // Open a new window and write the receipt content to it
  let printWindow = window.open("", "Print", "height=auto,width=800");
  printWindow.document.write(receiptContent);

  // Print the receipt

  printWindow.print();

  printWindow.resizeTo(500, 500);

  printWindow.close();

  // reset tax and discount
  document.getElementById("tax").value = null;
  document.getElementById("discount").value = null;
}

document.getElementById("pay").addEventListener("click", function () {
  if (selectedTable) {
    printReceipt();
    clearbill();
  } else {
    alert("Please select a table to generate the bill.");
  }
});

// var myModal = new bootstrap.Modal(
//   document.getElementById("exampleModalCenter")
// );
// document.getElementById("openModal").addEventListener("click", function () {
//   myModal.show();
// });

function printTotalSale() {
  let sum = 0;
  let count = 1;
  let output =
    "<h1> Indian Restaurant SALE </h1>" + "<br>" + "ALL BILLS: " + "<br>" + "<br>";
  for (const total of allTotals) {
    output += `bill  ${count}:  ` + total + "<br>";
    sum += total;
    count++;
  }
  output += "<br>" + "<br>" + "PAYTM/ONLINE BILLS" + "<br>" + "<br>";
  count = 1;
  let sum2 = 0;
  for (const total of paytmbills) {
    output += `bill  ${count}:  ` + total + "<br>";
    sum2 += total;
    count++;
  }

  output += "<br>" + "PAYTM/ONLINE: " + sum2 + "<br>" + "<br>";
  output += "CASH: " + (sum - sum2) + "<br>" + "<br>";

  output += "Total sale for the day: " + sum;

  let printWindow = window.open("", "", "height=500,width=500");
  printWindow.document.write("<html><head><title>Total Sale</title>");
  printWindow.document.write("</head><body >");
  printWindow.document.write(output);
  printWindow.document.write("</body></html>");
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

let MenuItems = {};

function countItemsWithZero(menu) {
  for (let i = 94; i < menu.length; i++) {
    MenuItems[menu[i].name] = { count: 0, instock: 0, balance: 0 };
  }

  localStorage.setItem("menuItems", JSON.stringify(MenuItems));
  return MenuItems;
}

function updateItemCount() {
  for (const key in MenuItems) {
    let item = MenuItems[key];
    // console.log(item.count + ":: " + item.instock);
    item.instock = item.balance;
    item.count = 0;
    item.balance = 0;
  }
  localStorage.setItem("menuItems", JSON.stringify(MenuItems));
  refreshCount(MenuItems);
}

function refreshCount(MenuItems) {
  // Assuming MenuItems is already populated correctly
  const stockTable = document.getElementById("stockTable");

  // Clear existing rows, except for the header
  while (stockTable.rows.length > 1) {
    stockTable.deleteRow(1);
  }
  // Iterate through MenuItems and add a row for each
  for (const itemName in MenuItems) {
    const item = MenuItems[itemName];
    const row = stockTable.insertRow(-1); // Add a new row at the end of the table

    // Insert cells (`<td>`) and text for each column
    const cellItem = row.insertCell(0);
    cellItem.innerHTML = `<span class="btn btn-light stockbtns">${itemName}</span>`; // Item name with Bootstrap button class

    const cellTotalStock = row.insertCell(1);
    cellTotalStock.textContent = item.instock; // Total stock

    const cellCount = row.insertCell(2);
    cellCount.textContent = item.count; // Count

    const cellBalance = row.insertCell(3);
    item.balance = item.instock - item.count;
    cellBalance.textContent = item.balance; // Balance

    cellItem.addEventListener("click", () => Addstock(item));
  }
  localStorage.setItem("menuItems", JSON.stringify(MenuItems));
}

function Addstock(item) {
  let quantity = Number(prompt("enter the quantity"));
  item.instock += quantity;

  refreshCount(MenuItems);
  localStorage.setItem("menuItems", JSON.stringify(MenuItems));
}

function retrieveMenuItems() {
  let storedMenuItems = JSON.parse(localStorage.getItem("menuItems"));
  if (storedMenuItems) {
    MenuItems = storedMenuItems;
  }
}

retrieveMenuItems();

function printStock() {
  paidBills.forEach((bill) => {
    bill.items.forEach((item) => {
      console.log(item.id);
      if (item.id > 94 && item.id < 106) {
        MenuItems[item.name] = MenuItems[item.name] || { count: 0 };
        MenuItems[item.name].count++;
      }
    });
  });

  refreshCount(MenuItems);
}

refreshCount(MenuItems);

function PrintItemCountOnPaper(paidBills) {
  paidBills.forEach((bill) => {
    bill.items.forEach((item) => {
      MenuItems[item.name] = MenuItems[item.name] || { count: 0 };
      MenuItems[item.name].count++;
    });
  });

  const receiptContent =
    `Item Receipt\n\nItem Name\tCount\n-------------------------\n` +
    Object.entries(MenuItems)
      .map(([name, { count }]) => `${name}\t${count}`)
      .join("\n");

  console.log(receiptContent);

  if (typeof window !== "undefined") {
    const printWindow = window.open("", "PRINT", "height=600,width=800");
    printWindow.document.write(
      `
      <html>
      <head>
        <title>Item Receipt</title>
      </head>
      <body>
        <h2>Item Receipt</h2>
        <table>
          <tr><th>Item Name</th><th>Count</th></tr>` +
        Object.entries(MenuItems)
          .map(
            ([name, { count }]) => `<tr><td>${name}</td><td>${count}</td></tr>`
          )
          .join("") +
        `</table>
      </body>
      </html>`
    );
    countItemsWithZero(menu);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  }
}

let ordersWithPhoneNumber = [];

document.addEventListener("DOMContentLoaded", function () {
  function fetchOrdersWithPhoneNumber() {
    // Retrieve already fetched order IDs from local storage
    const fetchedOrderIds =
      JSON.parse(localStorage.getItem("fetchedOrderIds")) || [];

    fetch("/fetch-orders-with-phone")
      .then((response) => response.json())
      .then((data) => {
        // Filter out already fetched orders
        const newOrders = data.filter(
          (order) => !fetchedOrderIds.includes(order._id)
        );

        if (newOrders.length > 0) {
          // Store the fetched orders in the array
          ordersWithPhoneNumber = newOrders;

          // Update local storage with new fetched order IDs
          const newOrderIds = newOrders.map((order) => order._id);
          const updatedFetchedOrderIds = [...fetchedOrderIds, ...newOrderIds];
          localStorage.setItem(
            "fetchedOrderIds",
            JSON.stringify(updatedFetchedOrderIds)
          );

          console.log(
            "Fetched orders with phone numbers:",
            ordersWithPhoneNumber
          );

          updateOrders();
        }
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }

  // Fetch the orders when the page loads
  fetchOrdersWithPhoneNumber();

  // Set an interval to fetch new orders every 5 seconds
  setInterval(() => {
    fetchOrdersWithPhoneNumber();

    retrieveTablesFromLocalStorage();
  }, 5000);
});

function updateOrders() {
  // Process fetched orders for existing tables
  for (const storedTable in tables) {
    for (const fetchedTable of ordersWithPhoneNumber) {
      if (storedTable === fetchedTable.orderID) {
        tables[storedTable].order.push(...fetchedTable.items);
        console.log(tables[storedTable]);
        addBadge(storedTable, [...fetchedTable.items].length);
      }
    }
  }

  // Process fetched orders for new tables
  for (const fetchedTable of ordersWithPhoneNumber) {
    const tableKey = `table${fetchedTable.orderID.replace(/\D/g, "")}`;
    if (!tables[tableKey]) {
      let billtotal = 0;
      [...fetchedTable.items].forEach((item) => (billtotal += item.price));

      tables[tableKey] = {
        tableId: fetchedTable.orderID.replace(/\D/g, ""),
        order: [...fetchedTable.items],
        finalorder: [],
        total: billtotal,
        waiter: fetchedTable.name !== "dine" ? fetchedTable.name : "Mobile",
      };
      // console.log(`Created new table entry: ${tableKey}`);
      createtablebtn(
        `${fetchedTable.orderID.replace(/\D/g, "")}`,
        tables[`${tableKey}`].waiter
      );
    }
  }

  localStorage.setItem("tables", JSON.stringify(tables));
}

// function updateOrders() {
//   for (const storedTable in tables) {
//     for (const fetchedTable of ordersWithPhoneNumber) {
//       if (storedTable == fetchedTable.orderID) {
//         tables[storedTable].order.push(...fetchedTable.items);
//         console.log(tables[storedTable]);
//         addBadge(storedTable, [...fetchedTable.items].length);
//       } else if (
//         storedTable !== fetchedTable.orderID &&
//         fetchedTable.phoneNumber === "in"
//       ) {
//         const tableKey = `table${fetchedTable.orderID.replace(/\D/g, "")}`;
//         tables[tableKey] = {
//           tableId: fetchedTable.orderID.replace(/\D/g, ""),
//           order: [...fetchedTable.items],
//           finalorder: [],
//           total: 0,
//           waiter: "NA",
//         };
//       }
//     }
//   }
//   localStorage.setItem("tables", JSON.stringify(tables));
// }

function addBadge(tableid, count) {
  ////////////////////////////////  badge  //////////////
  document.getElementById(
    `${tableid}`
  ).innerHTML += `<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="badge${tableid}" >
${count}
<span class="visually-hidden">unread messages</span>
</span>`;
}

function clearbadge(tableid) {
  var element = document.getElementById(`badge${tableid}`);
  if (element) {
    element.remove();
  }
}

function clearFetchedOrderIds() {
  localStorage.removeItem("fetchedOrderIds");
  console.log("Cleared fetched order IDs from local storage");
}
function createtablebtn(inputValue, waiter) {
  let div = document.createElement("div");
  let div2 = document.createElement("div");

  numberoftables++;

  div.classList.add("btn", "btn-outline-secondary", "tablebtn");
  div.setAttribute("id", `table${inputValue}`);
  div.setAttribute("onClick", `generateBill('table${inputValue}')`);
  div2.classList.add("menu");

  div.innerHTML =
    "Table " +
    inputValue +
    "\n" +
    waiter +
    `<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
  Mobile
  <span class="visually-hidden">unread messages</span>
  </span>`;
  div2.appendChild(div);
  document.querySelector(".row").appendChild(div2);
}
