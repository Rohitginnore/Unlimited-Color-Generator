# Unlimited-Color-Generator
# 🎨 Unlimited Color Generator

A simple JavaScript project that changes the background color continuously with random colors — until you stop it!

## 🚀 Features
- Generates random hex colors using JavaScript
- Starts and stops the color change with buttons
- Demonstrates DOM manipulation, `setInterval`, and event handling

## 🧰 Technologies Used
- HTML
- CSS
- JavaScript (ES6)

## 📸 Preview
<img width="1911" height="901" alt="image" src="https://github.com/user-attachments/assets/5c0a91e6-011a-4f33-9db2-c3369c36b2cf" />
<img width="1911" height="901" alt="image" src="https://github.com/user-attachments/assets/497d5c3f-181b-45ad-bf07-d5cfe4d1c37a" />
<img width="1873" height="915" alt="image" src="https://github.com/user-attachments/assets/d4f28a13-0981-4f49-bbd9-7b3dc6ec6a0a" />



## 💡 How It Works
1. Click on the **Start** button — the background color will start changing randomly.
2. Click on the **Stop** button — it will freeze the current color.

The random color is generated using this logic:
```js
const hex = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
  color += hex[Math.floor(Math.random() * 16)];
}
