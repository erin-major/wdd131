const year = document.querySelector("#currentyear");
const modifiedDate = document.querySelector("#lastModified");
const productDropdown = document.querySelector("#productOptions");
const leaveReview = document.querySelector("input[type='submit']");

const today = new Date();

year.innerHTML = `©️ <span id="currentyear">${today.getFullYear()}</span> | Erin Major | Utah, United States`;
modifiedDate.innerHTML = `Last Modification: ${today}`;

function displayProducts(products) {
    const html = products.map(
        (product) => `
        <option value="${product.id}">${product.name}</option>`
    );
    productDropdown.innerHTML = html.join("");
};

leaveReview.addEventListener('click', () => {   
    const visits = localStorage.getItem("numberOfSubmits");

    if (visits == null) {        
        localStorage.setItem("numberOfSubmits", "1");
    }
    
    else {
        let visitsNum = parseInt(visits);
        visitsNum += 1;
        localStorage.setItem("numberOfSubmits", visitsNum.toString());
    };
});

const products = [
    {
      id: fc-1888,
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: fc-2050,
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: fs-1987,
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: ac-2000,
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: jj-1969,
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];