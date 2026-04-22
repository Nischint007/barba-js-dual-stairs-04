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
✨ Structured layout using upper & bottom containers
✨ Cleaner GSAP timeline control
✨ Better Barba.js synchronization using `this.async()`
✨ More scalable and production-ready setup

---

## ⚙️ How the Transition Works

1. Top stairs slide down & bottom stairs slide up → cover screen
2. Page switches in the background
3. Stairs return to original positions → reveal next page

👉 Creates a smooth **split curtain / dual stair reveal effect**

---

## 🔹 GSAP Setup (Initial State)

```js id="a1b2c3"
const stair1 = document.querySelectorAll('.stair-top');
const stair2 = document.querySelectorAll('.stair-bottom');

gsap.set(stair1, { yPercent: -100 });
gsap.set(stair2, { yPercent: 100 });
```

📍 Top stairs start above
📍 Bottom stairs start below

---

## 🔹 Animation Functions

### ▶️ Stairs In (Page Exit)

```js id="d4e5f6"
function stairsIn() {
    return gsap.timeline()
        .to(stair1, {
            yPercent: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power3.inOut"
        }, 0)
        .to(stair2, {
            yPercent: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power3.inOut"
        }, 0);
}
```

✔️ Covers screen from both directions
✔️ Symmetrical and smooth motion
✔️ Creates a premium layered feel

---

### ▶️ Stairs Out (Page Enter)

```js id="g7h8i9"
function stairsOut() {
    return gsap.timeline()
        .to(stair1, {
            yPercent: -100,
            duration: 1.1,
            stagger: 0.1,
            ease: "power3.inOut"
        }, 0)
        .to(stair2, {
            yPercent: 100,
            duration: 1.1,
            stagger: 0.1,
            ease: "power3.inOut"
        }, 0);
}
```

✔️ Reveals next page smoothly
✔️ Resets animation loop
✔️ Maintains consistent transition behavior

---

## 🔹 Barba.js Integration

```js id="j1k2l3"
barba.init({
    transitions: [{
        name: "dual-stair-transition",

        leave() {
            const done = this.async();
            stairsIn().eventCallback("onComplete", done);
        },

        enter() {
            const done = this.async();

            const stair1 = document.querySelectorAll('.stair-top');
            const stair2 = document.querySelectorAll('.stair-bottom');

            gsap.set(stair1, { yPercent: -100 });
            gsap.set(stair2, { yPercent: 100 });

            stairsOut().eventCallback("onComplete", done);
        }
    }]
});
```

---

## 🧠 Flow

* **leave()** → Dual stairs cover screen
* **enter()** → Dual stairs reveal next page
* **this.async()** → Ensures proper animation timing

---

## 🧱 HTML Structure

```html id="m4n5o6"
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

```css id="p7q8r9"
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
* Smooth GPU-based animation
* Clean layered layout

---

### 🌐 Live Demo

(https://your-new-project-link.vercel.app/)

---

## 🧠 Key Takeaways

* Dual-layer transitions feel more premium than single-layer
* Split animations create better visual balance
* GSAP timelines give precise control
* Barba.js enables seamless page transitions
* This is a **production-ready animation pattern**

---

## ✍️ Author

**Nischint Singh**
LinkedIn: https://www.linkedin.com/in/nis
