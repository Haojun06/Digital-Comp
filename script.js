// Song database categorized by mood
const songDatabase = {
    happy: [
        { title: "Can't Stop the Feeling", artist: "Justin Timberlake", emoji: "🎉" },
        { title: "Happy", artist: "Pharrell Williams", emoji: "😊" },
        { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", emoji: "🕺" },
        { title: "Walking on Sunshine", artist: "Katrina & The Waves", emoji: "☀️" },
        { title: "Good Vibrations", artist: "The Beach Boys", emoji: "🌴" }
    ],
    sad: [
        { title: "Someone Like You", artist: "Adele", emoji: "💔" },
        { title: "The Sound of Silence", artist: "Simon & Garfunkel", emoji: "🤫" },
        { title: "Fix You", artist: "Coldplay", emoji: "🔧" },
        { title: "Hurt", artist: "Johnny Cash", emoji: "🥀" },
        { title: "All By Myself", artist: "Eric Carmen", emoji: "🚶‍♂️" }
    ],
    energetic: [
        { title: "Eye of the Tiger", artist: "Survivor", emoji: "🐯" },
        { title: "Lose Yourself", artist: "Eminem", emoji: "🎤" },
        { title: "Stronger", artist: "Kanye West", emoji: "💪" },
        { title: "Thunderstruck", artist: "AC/DC", emoji: "⚡" },
        { title: "Titanium", artist: "David Guetta ft. Sia", emoji: "🛡️" }
    ],
    calm: [
        { title: "Weightless", artist: "Marconi Union", emoji: "🌊" },
        { title: "Strawberry Swing", artist: "Coldplay", emoji: "🍓" },
        { title: "Watermark", artist: "Enya", emoji: "💧" },
        { title: "Gymnopédie No.1", artist: "Erik Satie", emoji: "🎹" },
        { title: "Ambient 1: Music for Airports", artist: "Brian Eno", emoji: "✈️" }
    ],
    romantic: [
        { title: "Perfect", artist: "Ed Sheeran", emoji: "💑" },
        { title: "At Last", artist: "Etta James", emoji: "🌟" },
        { title: "Unchained Melody", artist: "The Righteous Brothers", emoji: "🎶" },
        { title: "Thinking Out Loud", artist: "Ed Sheeran", emoji: "💞" },
        { title: "All of Me", artist: "John Legend", emoji: "❤️" }
    ],
    angry: [
        { title: "Killing In The Name", artist: "Rage Against The Machine", emoji: "🔥" },
        { title: "Break Stuff", artist: "Limp Bizkit", emoji: "💢" },
        { title: "You Oughta Know", artist: "Alanis Morissette", emoji: "⚡" },
        { title: "Master of Puppets", artist: "Metallica", emoji: "🎸" },
        { title: "Platypus (I Hate You)", artist: "Green Day", emoji: "🦆" }
    ],
    focused: [
        { title: "Focus", artist: "H.E.R.", emoji: "🎯" },
        { title: "Concentration", artist: "Hiroyuki Sawano", emoji: "🧠" },
        { title: "Time", artist: "Hans Zimmer", emoji: "⏳" },
        { title: "The Four Seasons", artist: "Antonio Vivaldi", emoji: "🎻" },
        { title: "Study Music", artist: "Brain Power", emoji: "📚" }
    ],
    nostalgic: [
        { title: "Yesterday", artist: "The Beatles", emoji: "📻" },
        { title: "Time After Time", artist: "Cyndi Lauper", emoji: "⏰" },
        { title: "Landslide", artist: "Fleetwood Mac", emoji: "🏔️" },
        { title: "The Way We Were", artist: "Barbra Streisand", emoji: "🎞️" },
        { title: "Summer of '69", artist: "Bryan Adams", emoji: "☀️" }
    ]
};

// Mood keyword mapping
const moodKeywords = {
    happy: ["happy", "joy", "excite", "celebrate", "good", "great", "awesome", "wonderful", "amazing", "bliss"],
    sad: ["sad", "depress", "blue", "unhappy", "cry", "tear", "grief", "heartbreak", "lonely", "miss"],
    energetic: ["energy", "pump", "workout", "exercise", "active", "dynamic", "intense", "power", "strong"],
    calm: ["calm", "peace", "relax", "chill", "serene", "tranquil", "quiet", "meditate", "zen"],
    romantic: ["love", "romantic", "heart", "date", "passion", "affection", "crush", "adore", "valentine"],
    angry: ["angry", "mad", "furious", "rage", "hate", "frustrat", "annoy", "irritat", "outrage"],
    focused: ["focus", "concentrate", "study", "work", "productive", "mind", "brain", "attention", "task"],
    nostalgic: ["nostalgic", "memory", "remember", "past", "old", "retro", "vintage", "childhood", "yearn"]
};

// DOM elements
const moodButtons = document.querySelectorAll('.mood-btn');
const customMoodInput = document.getElementById('custom-mood-input');
const findMusicBtn = document.getElementById('find-music-btn');
const resultsSection = document.getElementById('results-section');
const moodDisplay = document.getElementById('mood-display');
const songContainer = document.getElementById('song-container');

let selectedMood = '';

// Set mood when buttons are clicked
moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        moodButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Set selected mood
        selectedMood = button.getAttribute('data-mood');
        
        // Clear custom input
        customMoodInput.value = '';
    });
});

// Handle custom mood input
customMoodInput.addEventListener('input', () => {
    if (customMoodInput.value.trim() !== '') {
        // Remove active class from all buttons
        moodButtons.forEach(btn => btn.classList.remove('active'));
        
        // Set selected mood to custom
        selectedMood = 'custom';
    }
});

// Find music based on mood
findMusicBtn.addEventListener('click', () => {
    if (selectedMood === '' && customMoodInput.value.trim() === '') {
        alert('Please select or describe your mood first!');
        return;
    }
    
    let moodToUse = selectedMood;
    
    // If using custom mood, map it to one of our categories
    if (selectedMood === 'custom') {
        const customMood = customMoodInput.value.trim().toLowerCase();
        moodToUse = categorizeCustomMood(customMood);
    }
    
    // Display the results
    displaySongs(moodToUse);
});

// Categorize custom mood input
function categorizeCustomMood(customMood) {
    for (const [mood, keywords] of Object.entries(moodKeywords)) {
        for (const keyword of keywords) {
            if (customMood.includes(keyword)) {
                return mood;
            }
        }
    }
    
    // Default to happy for unrecognized moods
    return 'happy';
}

// Display songs based on mood
function displaySongs(mood) {
    // Update mood display text
    const moodText = mood.charAt(0).toUpperCase() + mood.slice(1);
    moodDisplay.textContent = moodText;
    
    // Clear previous songs
    songContainer.innerHTML = '';
    
    // Get songs for the selected mood
    const songs = songDatabase[mood];
    
    // Create song cards
    songs.forEach(song => {
        const songCard = document.createElement('div');
        songCard.className = 'song-card';
        
        songCard.innerHTML = `
            <div class="album-art">${song.emoji}</div>
            <div class="song-info">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        
        songContainer.appendChild(songCard);
    });
    
    // Show results section
    resultsSection.style.display = 'block';
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}