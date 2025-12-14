//Sequence of action
//First identify which key is being typed --> Done
//Then match it with currentString currentIdx --> Dome
//How to color the current text on which i am to green or red --> Done 
//wordCount lgana --> Done

// to show wpm after completion of time
//Timer lgana when the first key strikes
//Sounds on wrong type
//After completion to show wpm
//

//To implement 
//1. To start the timer when the user type the first button --> Done 
//2. To stop the timer when the 
document.addEventListener('DOMContentLoaded',()=>{
    const randomParagraph = document.querySelector('#random-paragraph');
    const body = document.querySelector('body')
    const timerDisplay = document.querySelector('#timer-display')
    const wpmDisplay = document.querySelector('#wpm-display')
    let currIdx = 0
    let wordCount = 0
    let start = false
    let timer = 0 ;
    let timerInterval;
    //let audio = new Audio("mixkit-hard-single-key-press-in-a-laptop-2542.wav")
    

    const paragraphs = [
        "Books are a gateway to knowledge and imagination. Reading not only enhances vocabulary but also broadens perspectives. Whether it's fiction, non-fiction, or biographies, every book has something valuable to offer. Developing a habit of reading can boost creativity and improve focus. In today's digital age, where distractions are plenty, reading provides an escape into a world of wisdom and learning.",
        "Nature is full of wonders that inspire and refresh the mind. From towering mountains to serene rivers, every part of nature has a story to tell. The chirping of birds, the rustling of leaves, and the scent of fresh flowers create a peaceful environment. Spending time in nature helps reduce stress and rejuvenates the soul.",
        "Success does not come overnight. It requires dedication, perseverance, and consistent effort. Hard work is the key to turning dreams into reality. While talent may give an initial advantage, true success comes from discipline and continuous learning. The greatest achievers in history have always emphasized the value of hard work.",
        "Technology has revolutionized the way we live, work, and communicate. The internet has made information accessible within seconds, while smartphones keep us connected. Artificial intelligence, automation, and robotics are transforming industries. However, excessive reliance on technology can reduce human interactions and creativity.",
        "Managing time effectively is essential for success. Setting priorities, making schedules, and avoiding procrastination help achieve goals efficiently. People who master time management are often more productive and less stressed. Developing a daily routine and sticking to it can significantly improve efficiency.",
        "Meditation is a powerful tool for mental clarity and relaxation. It helps reduce stress, improve concentration, and enhance emotional well-being. Even a few minutes of daily meditation can make a big difference in one's outlook on life. Many successful people practice meditation to stay focused and calm.",
        "A balanced diet plays a crucial role in maintaining good health. Eating fresh fruits, vegetables, and whole grains provides essential nutrients to the body. Avoiding processed food, excessive sugar, and unhealthy fats can prevent lifestyle diseases. Drinking enough water and having a proper meal schedule also contribute to overall wellness.",
        "Traveling opens the door to new experiences and cultures. Exploring different places allows people to gain knowledge and create unforgettable memories. Whether it's a road trip, an international tour, or a visit to a historical site, every journey adds value to life.",
        "Failure is not the end but a lesson that paves the way for success. Every successful person has faced failures at some point. The key is to learn from mistakes, adapt, and keep moving forward. Resilience and determination help in turning failures into stepping stones for growth.",
        "True friends are a source of joy and support. Good friendships bring positivity and comfort in life. They stand by each other through thick and thin, making life's journey more meaningful. Building strong friendships requires trust, honesty, and kindness.",
        "Social media has changed how we connect and share information. While it helps in networking and staying updated, excessive use can be addictive. It is important to use social media responsibly and ensure it adds value to life rather than consuming too much time.",
        "Regular physical activity keeps the body fit and mind active. Exercise strengthens muscles, improves heart health, and boosts immunity. Simple activities like walking, yoga, or cycling can have great benefits. Developing a habit of exercising daily ensures a long and healthy life.",
        "Self-discipline is essential for personal and professional growth. It helps in staying focused, achieving goals, and resisting distractions. People with strong self-discipline are more likely to succeed in their endeavors. Cultivating this habit takes effort but leads to a more fulfilling life.",
        "Music has the power to uplift moods and bring people together. Different genres of music evoke different emotions. Whether it's classical, rock, jazz, or pop, music plays an integral role in everyday life. It can be a source of motivation, relaxation, and even healing.",
        "A positive mindset can change the way we perceive challenges. Optimistic people tend to be more successful and happier in life. Instead of dwelling on problems, focusing on solutions helps overcome obstacles. Surrounding oneself with positivity enhances overall well-being.",
        "Working together as a team brings better results than working alone. Collaboration allows individuals to share ideas, support each other, and achieve common goals efficiently. Effective communication and mutual respect are key to successful teamwork.",
        "Financial stability requires good saving habits. Setting aside a portion of earnings ensures security in times of need. Budgeting and avoiding unnecessary expenses help in long-term financial growth. The earlier one starts saving, the better their future will be.",
        "Education is the foundation of a progressive society. It empowers individuals with knowledge and skills that shape their future. Learning is not limited to classrooms; it continues throughout life. An educated society contributes to innovation and development.",
        "A small act of kindness can brighten someone's day. Whether it's a smile, a kind word, or a helping hand, kindness spreads positivity. In a world that often feels fast-paced and competitive, being kind makes a huge difference.",
        "Sleep is crucial for overall health and well-being. A good night's sleep improves concentration, boosts mood, and enhances productivity. Poor sleep can lead to stress and health issues. Developing a sleep routine and avoiding screens before bedtime improve sleep quality."
    ]

    const randomIdx = Math.floor(Math.random() * paragraphs.length)
    // console.log(paragraphs[randomIdx])
    // randomParagraph.textContent = paragraphs[randomIdx]
    const currentString = paragraphs[randomIdx]
    const chars = currentString.split("")
    console.log(chars)

    // console.log(date.getSeconds())
    randomParagraph.innerHTML = chars.map(char => `<span>${char}</span>`).join("");
    // const arr = chars.map(char =>  `<span>${char}</span>`).join("")
    // console.log(arr)
    const spans = document.querySelectorAll("#random-paragraph span");

    //Now i have to think while i am typing how to get the paragraph i am typing
    //and currently i am on which word

    function startTimer(){
        timer = 0
        timerDisplay.textContent = `Time : ${timer} sec`
        timerInterval = setInterval(() => {
            timer++
            timerDisplay.textContent = `Time : ${timer} sec`
            console.log(timer)
            if (timer >= 60) {
                wpmDisplay.textContent = `Word per minute : ${wordCount}`
                clearInterval(timerInterval);
                alert("Time's up!"); // Notify user// can do some better UI work
                body.removeEventListener('keydown', handleTyping); // Stop typing
            }
    
        }, 1000);
    }


    function handleTyping(e){
        console.log(e.key)
        if(e.key=== "CapsLock") return

        if(!start){
            start = true
            console.log(`startFlag : ${start}`)
            startTimer()
        }
            
        if(timer===30) return
        const span = spans[currIdx];
            
        if(e.key===chars[currIdx]){
            
            span.classList.add("correct")
            span.classList.remove("incorrect")
            if(chars[currIdx] === " "){
                span.classList.add("space-correct")
                span.classList.remove("space-incorrect")
                wordCount++
                console.log(wordCount);
            }
            // randomParagraph.style.color = "green"
            console.log("true")
            currIdx++
            //audio.play()
        }else{
            if(chars[currIdx]===" "){
                span.classList.add("space-incorrect")
                span.classList.remove("space-correct")
            }
            // randomParagraph.style.color = "red"
            span.classList.remove("correct")
            span.classList.add("incorrect")
            console.log("false")
        }
    }   

    body.addEventListener('keydown',handleTyping)

})