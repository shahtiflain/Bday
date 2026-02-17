// 🎂 Birthday Configuration
// Edit this file to customize all the text, name, photos, and message!

export const birthdayConfig = {
  // 👤 Person's Name (change this throughout the app)
  name: "Rashiii",
  
  // 🎂 Age/Birthday Info
  age: 22,
  birthdayText: "years ago",
  
  // 📝 Intro Screen Text
  introTitle: "A Cutie was born today, {age} {birthdayText}!",
  introSubtitle: "Yes, it's YOU! A little surprise awaits...",
  introButtonText: "Start the surprise",
  
  // 🎂 Cake Screen Text
  cakeTitle: "Happy Birthday, {name}!",
  cakeButtonText: "Light the Candle",
  cakeNextButtonText: "Next",
  
  // 📸 Photos Screen Text
  photosTitle: "Some Sweet Moments",
  photosSubtitle: "(Swipe or click for more)",
  photosButtonText: "Open My Message",
  
  // 💌 Message Screen Text
  messageTitle: "A Special Message",
  messageSubtitle: "Tap to open",
  messageOpenedSubtitle: "💕",
  
  // 📸 Photo Paths (add your photo paths here)
  photos: [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
    "/images/14.jpg",
    // Add more photos here when you add them to public/images/ folder:
    // "/images/5.jpg",
    // "/images/6.jpg",
    // "/images/7.jpg",
    // "/images/8.jpg",
  ],
  
  // 💌 Final Message (edit this with your personal message)
  finalMessage: {
    paragraph1: "Happy Birthday, {name}! (Gelludi) and to the biggest harry potter fan I have ever met and the magical girl.🎉 ",
    paragraph2: "Enjoy your day and remember, you are the most amazing person I know. Keep smiling and spreading joy! 💕✨",
    paragraph3: "Maze kr bakchodi pel khush reh aur khoon peeti rhna aur jaan bhi khana mt bhulna  💗✨"
  }
}

// Helper function to replace {name} and {age} placeholders
export function formatText(text, config = birthdayConfig) {
  return text
    .replace(/{name}/g, config.name)
    .replace(/{age}/g, config.age)
    .replace(/{birthdayText}/g, config.birthdayText)
}
