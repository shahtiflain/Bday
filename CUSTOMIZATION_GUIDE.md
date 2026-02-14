# 🎨 Customization Guide

Everything you need to customize is now in **ONE file**: `src/config/birthdayConfig.js`

## 📝 Quick Start

1. Open `src/config/birthdayConfig.js`
2. Edit the values you want to change
3. Save the file
4. That's it! All changes will appear automatically

---

## ✏️ What You Can Customize

### 1. 👤 Person's Name
```javascript
name: "Cutiepie",  // Change this to the person's name
```
This will automatically replace `{name}` throughout the entire app!

### 2. 🎂 Age & Birthday Info
```javascript
age: 21,  // Change to the person's age
birthdayText: "years ago",  // You can change this to "years young" or anything you like
```

### 3. 📝 Intro Screen Text
```javascript
introTitle: "A {name} was born today, {age} {birthdayText}!",
introSubtitle: "Yes, it's YOU! A little surprise awaits...",
introButtonText: "Start the surprise",
```

### 4. 🎂 Cake Screen Text
```javascript
cakeTitle: "Happy Birthday, {name}!",
cakeButtonText: "Light the Candle",
cakeNextButtonText: "Next",
```

### 5. 📸 Photos Screen Text
```javascript
photosTitle: "Some Sweet Moments",
photosSubtitle: "(Swipe or click for more)",
photosButtonText: "Open My Message",
```

### 6. 💌 Message Screen Text
```javascript
messageTitle: "A Special Message",
messageSubtitle: "Tap to open",
messageOpenedSubtitle: "💕",
```

### 7. 📸 Photo Paths
```javascript
photos: [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  // Add more photos here:
  "/images/5.jpg",
  "/images/6.jpg",
],
```

**To add more photos:**
1. Place your photos in `public/images/` folder
2. Add the paths to the `photos` array above
3. Example: `"/images/your-photo.jpg"`

### 8. 💌 Final Message (The Most Important!)
```javascript
finalMessage: {
  paragraph1: "Happy Birthday, {name}! 🎉 You deserve all the happiness...",
  paragraph2: "I hope your day is filled with laughter...",
  paragraph3: "Wishing you endless happiness, success... 💗✨"
}
```

**Write your personal message here!** The `{name}` will automatically be replaced with the person's name.

---

## 🎯 Example Customization

Let's say you want to customize it for "Sarah" who is turning 25:

```javascript
export const birthdayConfig = {
  name: "Sarah",
  age: 25,
  birthdayText: "years young",
  
  introTitle: "A {name} was born today, {age} {birthdayText}!",
  // This becomes: "A Sarah was born today, 25 years young!"
  
  cakeTitle: "Happy Birthday, {name}!",
  // This becomes: "Happy Birthday, Sarah!"
  
  finalMessage: {
    paragraph1: "Happy Birthday, {name}! 🎉 You're the most amazing person I know...",
    // This becomes: "Happy Birthday, Sarah! 🎉 You're the most amazing person I know..."
  }
}
```

---

## 📸 Adding Photos

1. **Add photos to the folder:**
   - Place your photos in `public/images/`
   - Name them anything (e.g., `photo1.jpg`, `memories.png`)

2. **Update the config:**
   ```javascript
   photos: [
     "/images/photo1.jpg",
     "/images/memories.png",
     "/images/another-photo.jpg",
   ]
   ```

3. **That's it!** The photos will appear in the photo gallery automatically.

---

## 💡 Tips

- Use `{name}` anywhere in text to automatically insert the person's name
- Use `{age}` to insert the age
- You can add emojis anywhere! 🎉💖✨
- The message can be as long or short as you want
- Add as many photos as you like!

---

## 🚀 After Making Changes

1. Save `src/config/birthdayConfig.js`
2. The changes will appear automatically when you refresh the page
3. No need to restart the server!

---

## ❓ Need Help?

- All text uses the `{name}` placeholder - it will be replaced automatically
- Make sure photo paths start with `/images/`
- Photo paths are relative to the `public` folder
- You can use any image format: `.jpg`, `.png`, `.webp`, etc.

Happy customizing! 🎂💖
