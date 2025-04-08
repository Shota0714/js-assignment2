const header = document.querySelector("header");
const section = document.querySelector("section");

const h1 = document.createElement("h1");
h1.textContent = "Welcome to Georgian Smoothies!";
header.appendChild(h1);

const form = document.createElement("form");
section.appendChild(form);
const label = document.createElement("label");
label.textContent = "Slect a Smoothie: ";
form.appendChild(label);
const select = document.createElement("select");
form.appendChild(select);

const form2 = document.createElement("form");
section.appendChild(form2);
const label2 = document.createElement("label");
label2.textContent = "Slect size: ";
form2.appendChild(label2);
const select2 = document.createElement("select");
form2.appendChild(select2);


class Smoothie {
    constructor(name, ingredients, price) {
        this.name = name;
        this.ingredients = ingredients;
        this.price = price;
    };

    serveIt() {
        const option = document.createElement("option");
        option.textContent = this.name;
        select.appendChild(option);

        const h3 = document.createElement("h3");
        h3.textContent = `${this.name}`;
        section.appendChild(h3);
        const ul = document.createElement("ul");
        h3.appendChild(ul);
        for (let i = 0; i < this.ingredients.length; i++) {
            const li = document.createElement("li");
            li.textContent = this.ingredients[i];
            ul.appendChild(li);
        };
    };

    calculatePrice() {
        let size = 0;
        switch (select2.value) {
            case "small":
                size = 0;
                break;
            case "medium":
                size = 1.00;
                break;
            case "large":
                size = 2.00;
                break;
            default:
                size = 0;
            };
        return size;
    };
};

const sizeOptions = ["small", "medium", "large"];
for (let i = 0; i < sizeOptions.length; i++) {
    const option = document.createElement("option");
    option.textContent = sizeOptions[i];
    select2.appendChild(option);
};

const button = document.createElement("button");
button.textContent = "Order";
document.body.appendChild(button);

button.addEventListener("click", function(event) {
    event.preventDefault();
    const selectedSmoothieName = select.value;
    const selectedSize = select2.value;
    let selectedSmoothie;
    
    if (selectedSmoothieName === smoothie1.name) {
        selectedSmoothie = smoothie1;
    } else if (selectedSmoothieName === smoothie2.name) {
        selectedSmoothie = smoothie2;
    } else if (selectedSmoothieName === smoothie3.name) {
        selectedSmoothie = smoothie3;
    };

    if (selectedSmoothie) {
        const sizePrice = selectedSmoothie.calculatePrice(selectedSize);
        const price = selectedSmoothie.price + sizePrice;
        const h4 = document.createElement("h4");
        h4.textContent = `Your order: ${selectedSize} ${selectedSmoothie.name}  $${price.toFixed(2)}`;
        section.appendChild(h4);
    };
});

const smoothie1 = new Smoothie("Tropical Smoothie", ["Banana", "Mango", "Pineapple"], 4.99);
smoothie1.serveIt();
const smoothie2 = new Smoothie("Berry Blast", ["Strawberries", "Blueberries", "Raspberries"], 5.99);
smoothie2.serveIt();
const smoothie3 = new Smoothie("Green Machine", ["Spinach", "Kale", "Avocado"], 7.99);
smoothie3.serveIt();