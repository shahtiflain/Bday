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
    paragraph1: "Happy Birthday, {name}! 🎉 You deserve all the happiness, love, and smiles in the world today and always. You have this special way of making everything around you brighter, your smile, your kindness, and the way you make people feel truly cared for.",
    paragraph2: "I hope your day is filled with laughter, surprises, and moments that make your heart happy. You're truly one of a kind, and I just want you to know how special you are. Keep being the amazing person you are, spreading joy wherever you go.",
    paragraph3: "Wishing you endless happiness, success, and all the sweet things life has to offer. 💗✨"
  }
}

// Helper function to replace {name} and {age} placeholders
export function formatText(text, config = birthdayConfig) {
  return text
    .replace(/{name}/g, config.name)
    .replace(/{age}/g, config.age)
    .replace(/{birthdayText}/g, config.birthdayText)
}
