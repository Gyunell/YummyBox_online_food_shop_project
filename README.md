# 🍱 YummyBox — My First Full-Scale Food Shop Project 

Hi there! 👋 I'm **Gunel**. My goal was to create a digital space that feels as "yummy" and aesthetic as the treats themselves, while maintaining high technical standards.

**🔗 [Take a look at the Live Demo!](https://gyunell.github.io/YummyBox_online_food_shop_project/)**

---

## 👩‍💻 Why I built this
I wanted to challenge myself beyond just "making things look pretty." My goal was to handle real data. I spent a lot of time figuring out how to make a shopping cart that actually *remembers* you even if you refresh the page.

## ✨ What it can do
* **The Cart actually works:** You can add your favorite Dango or Mochi, and the sidebar will slide out with your updated total.
* **WhatsApp Ordering:** I thought, "What's the easiest way to buy?" So I linked the checkout button directly to WhatsApp. It sends the whole list of treats automatically ! ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧
* **Mobile First:** I tested this a thousand times on my phone to make sure the grid looks perfect and nothing "leaks" off the screen.
* **Smooth Vibes:** I used custom CSS animations and hover effects to make the buttons feel "clickable" and fun.

---

## 🛠 Technical Skills & Competencies

| **Category** | **Details** |
| :--- | :--- |
| **Frontend Development** | **Modern HTML5 & Semantic Web:** I prioritize clean, accessible, and SEO-friendly structures. <br> **Advanced CSS3:** I love working with **CSS Grid** and **Flexbox** to create complex, fluid layouts. I pay close attention to custom animations and transitions to make the UI feel alive. <br> **Responsive Web Design (RWD):** I use a mobile-first strategy. I’ve spent hours testing media queries to ensure the site looks perfect on every device. |
| **JavaScript & Logic** | **Vanilla JavaScript (ES6+):** I have a deep interest in core concepts like DOM Manipulation and Event Propagation. <br> **State Management:** I implemented persistent data handling using the **Web Storage API (LocalStorage)**. <br> **Integration:** I developed a custom checkout flow that formats the cart data and sends it directly via the WhatsApp API. |

---

## 🧠 Technical Case Studies (How I solve problems)

> #### 1. Optimization of Event Handling
> **The Challenge:** Attaching listeners to every "Add to Cart" button was inefficient.
> **My Solution:** I implemented **Event Delegation**, attaching a single listener to the document. This improved performance and ensured that any dynamically added products would automatically inherit the shopping logic.

> #### 2. Cross-Page Script Stability
> **The Challenge:** JavaScript errors occurred when scripts tried to access elements (like contact forms) that didn't exist on every page.
> **My Solution:** I used conditional initialization patterns to verify the existence of elements before execution, ensuring a clean, error-free console across the entire site.

> #### 3. UX-Driven Checkout
> **The Challenge:** I wanted to make ordering as easy as possible for mobile users.
> **My Solution:** I designed a logic that parses the shopping cart array into a URL-encoded string for WhatsApp, creating a seamless "One-Click Order" experience.

---

## 🧠 What I learned (The hard way)
The biggest challenge was the **Event Delegation**. At first, my "Add to Cart" buttons wouldn't work on new items, but I learned how to listen for clicks on the whole page instead. Also, making the footer stay at the bottom of the card regardless of text length was a fun CSS puzzle to solve!

---

## 📂 Contact Information
* **LinkedIn:** [Gunel Mammadzade](https://www.linkedin.com/in/gunel-mammadzade-856214375/)
* **Email:** [gunel1mammadzade@gmail.com](mailto:gunel1mammadzade@gmail.com)

<p align="center">Built with 💖</p>
