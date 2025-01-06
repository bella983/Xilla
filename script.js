// Configuration
const TASKS = [
    {
        id: 1,
        title: 'Join Main Channel',
        reward: 500,
        channelUrl: 'https://t.me/coinxilla_main'
    },
    {
        id: 2,
        title: 'Join Announcement Channel',
        reward: 300,
        channelUrl: 'https://t.me/coinxilla_announcements'
    },
    // Add 8 more tasks here with different channels
    {
        id: 3,
        title: 'Join Community Group',
        reward: 400,
        channelUrl: 'https://t.me/coinxilla_community'
    },
    {
        id: 4,
        title: 'Join Trading Channel',
        reward: 350,
        channelUrl: 'https://t.me/coinxilla_trading'
    },
    {
        id: 5,
        title: 'Join NFT Channel',
        reward: 450,
        channelUrl: 'https://t.me/coinxilla_nft'
    },
    {
        id: 6,
        title: 'Join Airdrop Channel',
        reward: 600,
        channelUrl: 'https://t.me/coinxilla_airdrops'
    },
    {
        id: 7,
        title: 'Join Global Chat',
        reward: 250,
        channelUrl: 'https://t.me/coinxilla_global'
    },
    {
        id: 8,
        title: 'Join News Channel',
        reward: 300,
        channelUrl: 'https://t.me/coinxilla_news'
    },
    {
        id: 9,
        title: 'Join Support Channel',
        reward: 400,
        channelUrl: 'https://t.me/coinxilla_support'
    },
    {
        id: 10,
        title: 'Join VIP Channel',
        reward: 700,
        channelUrl: 'https://t.me/coinxilla_vip'
    }
];

// User data structure
let userData = {
    uid: '',
    points: 0,
    referees: 0,
    completedTasks: [],
    referralTimestamp: null,
    dailySpins: 3,
    lastSpin: null,
    spinWinnings: 0,
    referralEarnings: 0
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    initializeTasks();
    initializeWheel();
    initializeLeaderboard();
});

// Navigation
function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    
    // Show selected section
    document.getElementById(`${section}-section`).classList.remove('hidden');
    
    // Update navigation
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="showSection('${section}')"]`).classList.add('active');
}

// Tasks handling
function initializeTasks() {
    const container = document.getElementById('tasks-container');
    container.innerHTML = '';