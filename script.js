// Song database categorized by mood
const songDatabase = {
    happy: [
        { title: "Can't Stop the Feeling", artist: "Justin Timberlake", emoji: "🎉" },
        { title: "Happy", artist: "Pharrell Williams", emoji: "😊" },
        { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", emoji: "🕺" },
        { title: "Walking on Sunshine", artist: "Katrina & The Waves", emoji: "☀️" },
        { title: "Good Vibrations", artist: "The Beach Boys", emoji: "🌴" },
        { title: "Don't Stop Me Now", artist: "Queen", emoji: "👑" },
        { title: "I Gotta Feeling", artist: "The Black Eyed Peas", emoji: "🎊" },
        { title: "Best Day of My Life", artist: "American Authors", emoji: "📅" }
    ],
    sad: [
        { title: "Someone Like You", artist: "Adele", emoji: "💔" },
        { title: "The Sound of Silence", artist: "Simon & Garfunkel", emoji: "🤫" },
        { title: "Fix You", artist: "Coldplay", emoji: "🔧" },
        { title: "Hurt", artist: "Johnny Cash", emoji: "🥀" },
        { title: "All By Myself", artist: "Eric Carmen", emoji: "🚶‍♂️" },
        { title: "Say Something", artist: "A Great Big World", emoji: "💬" },
        { title: "Skinny Love", artist: "Bon Iver", emoji: "💙" },
        { title: "Nothing Compares 2 U", artist: "Sinéad O'Connor", emoji: "🥺" }
    ],
    energetic: [
        { title: "Eye of the Tiger", artist: "Survivor", emoji: "🐯" },
        { title: "Lose Yourself", artist: "Eminem", emoji: "🎤" },
        { title: "Stronger", artist: "Kanye West", emoji: "💪" },
        { title: "Thunderstruck", artist: "AC/DC", emoji: "⚡" },
        { title: "Titanium", artist: "David Guetta ft. Sia", emoji: "🛡️" },
        { title: "Pump It", artist: "The Black Eyed Peas", emoji: "🔥" },
        { title: "Can't Hold Us", artist: "Macklemore & Ryan Lewis", emoji: "💥" },
        { title: "Work Hard", artist: "Britney Spears", emoji: "💃" }
    ],
    calm: [
        { title: "Weightless", artist: "Marconi Union", emoji: "🌊" },
        { title: "Strawberry Swing", artist: "Coldplay", emoji: "🍓" },
        { title: "Watermark", artist: "Enya", emoji: "💧" },
        { title: "Gymnopédie No.1", artist: "Erik Satie", emoji: "🎹" },
        { title: "Ambient 1: Music for Airports", artist: "Brian Eno", emoji: "✈️" },
        { title: "Clair de Lune", artist: "Claude Debussy", emoji: "🌙" },
        { title: "Spiegel im Spiegel", artist: "Arvo Pärt", emoji: "🪞" },
        { title: "Deep Blue Day", artist: "Brian Eno", emoji: "🔵" }
    ],
    romantic: [
        { title: "Perfect", artist: "Ed Sheeran", emoji: "💑" },
        { title: "At Last", artist: "Etta James", emoji: "🌟" },
        { title: "Unchained Melody", artist: "The Righteous Brothers", emoji: "🎶" },
        { title: "Thinking Out Loud", artist: "Ed Sheeran", emoji: "💞" },
        { title: "All of Me", artist: "John Legend", emoji: "❤️" },
        { title: "Can't Help Falling in Love", artist: "Elvis Presley", emoji: "🎸" },
        { title: "Your Song", artist: "Elton John", emoji: "🎹" },
        { title: "Just the Way You Are", artist: "Bruno Mars", emoji: "💎" }
    ],
    angry: [
        { title: "Killing In The Name", artist: "Rage Against The Machine", emoji: "🔥" },
        { title: "Break Stuff", artist: "Limp Bizkit", emoji: "💢" },
        { title: "You Oughta Know", artist: "Alanis Morissette", emoji: "⚡" },
        { title: "Master of Puppets", artist: "Metallica", emoji: "🎸" },
        { title: "Platypus (I Hate You)", artist: "Green Day", emoji: "🦆" },
        { title: "Duality", artist: "Slipknot", emoji: "🤡" },
        { title: "Bulls on Parade", artist: "Rage Against The Machine", emoji: "🐂" },
        { title: "Last Resort", artist: "Papa Roach", emoji: "🪳" }
    ],
    focused: [
        { title: "Focus", artist: "H.E.R.", emoji: "🎯" },
        { title: "Concentration", artist: "Hiroyuki Sawano", emoji: "🧠" },
        { title: "Time", artist: "Hans Zimmer", emoji: "⏳" },
        { title: "The Four Seasons", artist: "Antonio Vivaldi", emoji: "🎻" },
        { title: "Study Music", artist: "Brain Power", emoji: "📚" },
        { title: "River Flows in You", artist: "Yiruma", emoji: "🌊" },
        { title: "Comptine d'un autre été", artist: "Yann Tiersen", emoji: "🎹" },
        { title: "Nocturne in E-flat major", artist: "Frédéric Chopin", emoji: "🌃" }
    ],
    nostalgic: [
        { title: "Yesterday", artist: "The Beatles", emoji: "📻" },
        { title: "Time After Time", artist: "Cyndi Lauper", emoji: "⏰" },
        { title: "Landslide", artist: "Fleetwood Mac", emoji: "🏔️" },
        { title: "The Way We Were", artist: "Barbra Streisand", emoji: "🎞️" },
        { title: "Summer of '69", artist: "Bryan Adams", emoji: "☀️" },
        { title: "Bohemian Rhapsody", artist: "Queen", emoji: "👑" },
        { title: "Hotel California", artist: "Eagles", emoji: "🏨" },
        { title: "Sweet Child O' Mine", artist: "Guns N' Roses", emoji: "🌹" }
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
        moodButtons.forEach(btn => btn.classList.remove('active')); // remove active from all
        button.classList.add('active'); // highlight selected
        selectedMood = button.getAttribute('data-mood'); // set mood
        customMoodInput.value = ''; // clear custom input
    });
});

// Handle custom mood input
customMoodInput.addEventListener('input', () => {
    if (customMoodInput.value.trim() !== '') {
        moodButtons.forEach(btn => btn.classList.remove('active'));
        selectedMood = 'custom';
    }
});

// Find music based on mood
findMusicBtn.addEventListener('click', () => {
    if (selectedMood === '' && customMoodInput.value.trim() === '') {
        alert('Please select or describe your mood first!');
        return;
    }

    let moodResult;
    if (selectedMood === 'custom') {
        const customMood = customMoodInput.value.trim().toLowerCase();
        moodResult = categorizeCustomMood(customMood);
    } else {
        moodResult = { mood: selectedMood, understood: true };
    }

    displaySongs(moodResult.mood, moodResult.understood);
});

// Categorize custom mood input
function categorizeCustomMood(customMood) {
    for (const [mood, keywords] of Object.entries(moodKeywords)) {
        for (const keyword of keywords) {
            if (customMood.includes(keyword)) {
                return { mood, understood: true };
            }
        }
    }
    return { mood: 'happy', understood: false }; // fallback
}

// Display songs based on mood
function displaySongs(mood, understood = true) {
    const moodText = mood.charAt(0).toUpperCase() + mood.slice(1);
    moodDisplay.textContent = moodText;

    songContainer.innerHTML = ''; // clear previous

    // Add notice if mood not recognized
    const oldNotice = resultsSection.querySelector(".notice");
    if (oldNotice) oldNotice.remove();

    if (!understood) {
        const notice = document.createElement("p");
        notice.className = "notice";
        notice.innerHTML = `We couldn’t recognize your mood, so we’ll recommend songs for <strong>Happy</strong> 😊`;
        resultsSection.insertAdjacentElement("afterbegin", notice);
    }

    const songs = songDatabase[mood];
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

    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}
