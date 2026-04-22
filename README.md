# 🚀 Barba.js Series – 04 Dual Stair Reveal Transition

This project is part of my **Beginner → Advanced Barba.js Series**, where each project builds step-by-step toward creating modern, production-level page transitions.

👉 In this project, we upgrade the staircase animation into a **dual-direction stair reveal system**, where top and bottom layers animate together for a more refined and cinematic effect.

---

## 📌 Overview

Instead of a single-direction staircase, this project introduces **two synchronized stair layers (`.stair-top` & `.stair-bottom`)**.

💡 This approach:

* Creates a **split reveal effect (top + bottom)**
* Feels more controlled and polished
* Matches real-world **Awwwards-style transitions**
* Adds better visual balance during page change

---

## 🆕 What’s New in This Project

✨ Dual-layer stair animation (top + bottom)

✨ Center-based stagger for smoother motion

✨ Cleaner GSAP timeline structure

✨ Simple and beginner-friendly Barba.js integration

✨ Improved visual symmetry

---

## ⚙️ How the Transition Works

1. Top stairs slide down & bottom stairs slide up → cover screen
2. Page switches in the background
3. Stairs move back → reveal next page

👉 Creates a smooth **dual stair / split curtain effect**

---

## 🔹 GSAP Setup (Initial State)

```js id="js1"
const stair1 = document.querySelectorAll('.stair-top');
const stair2 = document.querySelectorAll('.stair-bottom');

gsap.set(stair1, { y: '-100%' });
gsap.set(stair2, { y: '100%' });
```

📍 Top stairs start above
📍 Bottom stairs start below

---

## 🔹 Animation Functions

### ▶️ Stairs In (Page Exit)

```js id="js2"
function stairsIn() {
    const tl = gsap.timeline();

    tl.to(stair1, {
        y: "0%",
        duration: 1.2,
        stagger: {
            amount: 0.5,
            from: "center"
        },
        ease: "power3.inOut"
    }, "start");

    tl.to(stair2, {
        y: "0%",
        duration: 1.2,
        stagger: {
            amount: 0.5,
            from: "center"
        },
        ease: "power3.inOut"
    }, "start");

    return tl;
}
```

✔️ Covers screen from both directions
✔️ Center-based stagger creates balanced motion
✔️ Smooth and cinematic feel

---

### ▶️ Stairs Out (Page Enter)

```js id="js3"
function stairsOut() {
    const tl = gsap.timeline();

    tl.to(stair1, {
        y: "-100%",
        duration: 1.1,
        stagger: { 
            amount: 0.5, 
            from: "center" 
        },
        ease: "power3.inOut"
    }, "start");

    tl.to(stair2, {
        y: "100%",
        duration: 1.1,
        stagger: { 
            amount: 0.5, 
            from: "center" 
        },
        ease: "power3.inOut"
    }, "start");

    return tl;
}
```

✔️ Reveals next page smoothly
✔️ Keeps animation loop reusable
✔️ Maintains consistent transition flow

---

## 🔹 Barba.js Integration

```js id="js4"
barba.init({
    transitions: [{
        name: "stair-transition",

        async leave() {
            await stairsIn();
        },

        async enter() {
            await stairsOut();
        }
    }]
});
```

---

## 🧠 Flow

* **leave()** → Dual stairs cover screen
* **enter()** → Dual stairs reveal next page
* **async/await** → Handles animation sequencing

---

## 🧱 HTML Structure

```html id="html1"
<div id="transition">
    <div class="upper-stair">
        <div class="stair stair-top"></div>
        <div class="stair stair-top"></div>
        <div class="stair stair-top"></div>
        <div class="stair stair-top"></div>
        <div class="stair stair-top"></div>
    </div>

    <div class="bottom-stair">
        <div class="stair stair-bottom"></div>
        <div class="stair stair-bottom"></div>
        <div class="stair stair-bottom"></div>
        <div class="stair stair-bottom"></div>
        <div class="stair stair-bottom"></div>
    </div>
</div>
```

---

## 🎨 CSS Structure

```css id="css1"
#transition {
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.upper-stair,
.bottom-stair {
    width: 100%;
    height: 50vh;
    display: flex;
}

.stair {
    flex: 1;
    height: 100%;
}

.stair-top,
.stair-bottom {
    background: #6F00FF;
}
```

📍 Ensures:

* Full-screen dual coverage
* Equal top & bottom split
* Smooth animation structure
* Clean layered layout

---

### 🌐 Live Demo

(https://barba-js-dual-stairs-04.vercel.app/)

---

## 🧠 Key Takeaways

* Dual-layer transitions feel more premium than single-layer
* Center-based stagger improves visual balance
* GSAP timelines enable smooth animation control
* Barba.js makes seamless page transitions easy
* This is a **clean and scalable transition pattern**

---

## ✍️ Author

**Nischint Singh**

LinkedIn: https://www.linkedin.com/in/nischint-singh-98a329314/
