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


class Smoothie {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
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
};

const smoothie1 = new Smoothie("Tropical Smoothie", ["Banana", "Mango", "Pineapple"]);
smoothie1.serveIt();
const smoothie2 = new Smoothie("Berry Blast", ["Strawberries", "Blueberries", "Raspberries"]);
smoothie2.serveIt();
const smoothie3 = new Smoothie("Green Machine", ["Spinach", "Kale", "Avocado"]);
smoothie3.serveIt();