// Data for political events
const politicalEvents = [
    {
        "id": 1,
        "title": "২১শে ফেব্রুয়ারি: ভাষা আন্দোলন",
        "date": "১৯৫২-০২-২১",
        "description": "বাংলাকে রাষ্ট্রভাষা করার দাবিতে পূর্ব পাকিস্তানে আন্দোলন শুরু হয়। এই দিনে ঢাকায় শিক্ষার্থীদের মিছিলে পুলিশ গুলি চালালে সালাম, বরকত, রফিক, জব্বার, শফিউর সহ অনেকে নিহত হন।"
    },
    {
        "id": 2,
        "title": "৬ দফা আন্দোলন",
        "date": "১৯৬৬-০২-০৫",
        "description": "বঙ্গবন্ধু শেখ মুজিবুর রহমান লাহোরে ৬ দফা পেশ করেন, যা বাঙালির স্বায়ত্তশাসনের সনদ হিসেবে পরিচিত।"
    },
    {
        "id": 3,
        "title": "গণঅভ্যুত্থান",
        "date": "১৯৬৯-০১-২৪",
        "description": "মৌলিক গণতন্ত্রের বিরুদ্ধে এবং শেখ মুজিবুর রহমানের মুক্তির দাবিতে গণআন্দোলন তীব্র রূপ ধারণ করে, যা গণঅভ্যুত্থানে রূপান্তরিত হয়।"
    },
    {
        "id": 4,
        "title": "সাধারণ নির্বাচন",
        "date": "১৯৭০-১২-০৭",
        "description": "পাকিস্তানের প্রথম সাধারণ নির্বাচনে আওয়ামী লীগ পূর্ব পাকিস্তানে নিরঙ্কুশ সংখ্যাগরিষ্ঠতা অর্জন করে।"
    },
    {
        "id": 5,
        "title": "মুক্তিযুদ্ধ শুরু",
        "date": "১৯৭১-০৩-২৬",
        "description": "পাকিস্তানি হানাদার বাহিনী অপারেশন সার্চলাইট শুরু করে এবং এর বিরুদ্ধে বঙ্গবন্ধু শেখ মুজিবুর রহমান স্বাধীনতার ঘোষণা দেন। শুরু হয় মুক্তিযুদ্ধ।"
    },
    {
        "id": 6,
        "title": "১৬ই ডিসেম্বর: বিজয় দিবস",
        "date": "১৯৭১-১২-১৬",
        "description": "৯ মাস রক্তক্ষয়ী যুদ্ধের পর পাকিস্তানি বাহিনী আত্মসমর্পণ করে এবং বাংলাদেশ স্বাধীন হয়।"
    },
    {
        "id": 7,
        "title": "বঙ্গবন্ধুর স্বদেশ প্রত্যাবর্তন",
        "date": "১৯৭২-০১-১০",
        "description": "জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমান পাকিস্তান কারাগার থেকে মুক্তি পেয়ে স্বাধীন বাংলাদেশে ফিরে আসেন।"
    },
    {
        "id": 8,
        "title": "জাতীয় সংসদ নির্বাচন",
        "date": "১৯৭৩-০৩-০৭",
        "description": "স্বাধীন বাংলাদেশের প্রথম সাধারণ নির্বাচন অনুষ্ঠিত হয়, যেখানে আওয়ামী লীগ বিপুল ভোটে জয়লাভ করে।"
    },
    {
        "id": 9,
        "title": "বঙ্গবন্ধুকে সপরিবারে হত্যা",
        "date": "১৯৭৫-০৮-১৫",
        "description": "জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমানকে সপরিবারে হত্যা করা হয়, যা বাংলাদেশের রাজনৈতিক ইতিহাসে একটি কালো অধ্যায়।"
    },
    {
        "id": 10,
        "title": "সামরিক শাসন জারি",
        "date": "১৯৮২-০৩-২৪",
        "description": "জেনারেল হুসেইন মুহাম্মদ এরশাদ ক্ষমতা গ্রহণ করেন এবং সামরিক শাসন জারি করেন।"
    },
    {
        "id": 11,
        "title": "স্বৈরাচার পতন ও গণতন্ত্র পুনঃপ্রতিষ্ঠা",
        "date": "১৯৯০-১২-০৬",
        "description": "গণআন্দোলনের মুখে এরশাদ সরকারের পতন হয় এবং বাংলাদেশে গণতন্ত্র পুনঃপ্রতিষ্ঠিত হয়।"
    },
    {
        "id": 12,
        "title": "কেয়ারটেকার সরকার ব্যবস্থা প্রবর্তন",
        "date": "১৯৯৬-০৩-২৬",
        "description": "তত্ত্বাবধায়ক সরকার ব্যবস্থার জন্য সংবিধানের ত্রয়োদশ সংশোধনী পাশ হয়।"
    },
    {
        "id": 13,
        "title": "১/১১ এর তত্ত্বাবধায়ক সরকার",
        "date": "২০০৭-০১-১১",
        "description": "তত্ত্বাবধায়ক সরকারের ক্ষমতা গ্রহণ এবং জরুরি অবস্থা জারি।"
    },
    {
        "id": 14,
        "title": "ডিজিটাল বাংলাদেশ ঘোষণা",
        "date": "২০০৮-১২-১২",
        "description": "আওয়ামী লীগের নির্বাচনী ইশতেহারে ডিজিটাল বাংলাদেশের রূপকল্প ঘোষণা করা হয়।"
    },
    {
        "id": 15,
        "title": "যুদ্ধাপরাধীদের বিচার শুরু",
        "date": "২০১০-০৩-২৫",
        "description": "আন্তর্জাতিক অপরাধ ট্রাইব্যুনাল (বাংলাদেশ) গঠন এবং যুদ্ধাপরাধীদের বিচার প্রক্রিয়া শুরু।"
    },
    {
        "id": 16,
        "title": "পদ্মা সেতু উদ্বোধন",
        "date": "২০২২-০৬-২৫",
        "description": "বাংলাদেশের দীর্ঘতম সেতু, পদ্মা বহুমুখী সেতু, যানবাহন চলাচলের জন্য উন্মুক্ত করা হয়, যা দেশের দক্ষিণ-পশ্চিমাঞ্চলের সাথে সরাসরি সংযোগ স্থাপন করে।"
    },
    {
        "id": 17,
        "title": "জাতীয় নির্বাচন ২০২৪",
        "date": "২০২৪-০১-০৭",
        "description": "বাংলাদেশের দ্বাদশ জাতীয় সংসদ নির্বাচন অনুষ্ঠিত হয়।"
    },
    {
        "id": 18,
        "title": "বঙ্গবন্ধু স্যাটেলাইট-১ উৎক্ষেপণ",
        "date": "২০১৮-০৫-১২",
        "description": "বাংলাদেশের প্রথম ভূস্থির যোগাযোগ উপগ্রহ বঙ্গবন্ধু স্যাটেলাইট-১ সফলভাবে উৎক্ষেপণ করা হয়, যা দেশকে মহাকাশ যুগে প্রবেশ করায়।"
    },
    {
        "id": 19,
        "title": "মেট্রোরেল উদ্বোধন",
        "date": "২০২২-১২-২৮",
        "description": "ঢাকার প্রথম মেট্রোরেল লাইন (উত্তরা থেকে আগারগাঁও) উদ্বোধন করা হয়, যা যানজট নিরসনে গুরুত্বপূর্ণ ভূমিকা রাখে।"
    },
    {
        "id": 20,
        "title": "রূপপুর পারমাণবিক বিদ্যুৎ কেন্দ্রের প্রথম ইউনিটের কাজ শুরু",
        "date": "২০২১-০২-১২",
        "description": "বাংলাদেশের প্রথম পারমাণবিক বিদ্যুৎ কেন্দ্র রূপপুরের প্রথম ইউনিটে পারমাণবিক জ্বালানি লোড করার কাজ শুরু হয়।"
    },
    {
        "id": 21,
        "title": "জুলাই অভ্যুত্থান ২০২৪: কোটা সংস্কার আন্দোলন ও গণমানুষের অংশগ্রহণ",
        "date": "২০২৪-০৭-২১",
        "description": "সরকারি চাকরিতে কোটা সংস্কারের দাবিতে শিক্ষার্থীদের আন্দোলন শুরু হয়, যা পরবর্তীতে দেশের গণমানুষের স্বতঃস্ফূর্ত অংশগ্রহণে একটি গণঅভ্যুত্থানে রূপ নেয়। এতে সরকার পতন হয় এবং ড. মুহাম্মদ ইউনূসের নেতৃত্বে অন্তর্বর্তীকালীন সরকার গঠিত হয়। এই আন্দোলনে সাধারণ মানুষ, শিক্ষার্থী, পেশাজীবীসহ সমাজের সর্বস্তরের মানুষ সক্রিয়ভাবে অংশ নেয়।"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.getElementById('event-list');
    const showEventsBtn = document.getElementById('show-events-btn');
    const searchInput = document.getElementById('search-input');
    const yearFilter = document.getElementById('year-filter');
    const sortOrder = document.getElementById('sort-order');
    const noResultsMessage = document.getElementById('no-results');

    let currentEvents = [...politicalEvents]; // To hold filtered/sorted events

    // Function to display events
    function displayEvents(eventsToDisplay) {
        eventList.innerHTML = ''; // Clear previous content
        if (eventsToDisplay.length === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
            eventsToDisplay.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.classList.add('event-card');
                eventCard.innerHTML = `
                    <h3>${event.title}</h3>
                    <span class="date">${event.date}</span>
                    <p>${event.description}</p>
                `;
                eventList.appendChild(eventCard);
            });
        }
    }

    // Function to populate year filter options
    function populateYearFilter() {
        // Clear previous options except the default one
        yearFilter.innerHTML = '<option value="">সকল বছর</option>'; 
        const years = new Set(politicalEvents.map(event => new Date(event.date).getFullYear()));
        const sortedYears = Array.from(years).sort((a, b) => a - b); // Sort years ascending

        sortedYears.forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearFilter.appendChild(option);
        });
    }

    // Function to apply search, filter, and sort
    function applyFiltersAndSort() {
        let filteredEvents = [...politicalEvents];

        // 1. Search Filtering
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            filteredEvents = filteredEvents.filter(event =>
                event.title.toLowerCase().includes(searchTerm) ||
                event.description.toLowerCase().includes(searchTerm)
            );
        }

        // 2. Year Filtering
        const selectedYear = yearFilter.value;
        if (selectedYear) {
            filteredEvents = filteredEvents.filter(event =>
                new Date(event.date).getFullYear() == selectedYear
            );
        }

        // 3. Sorting
        const order = sortOrder.value;
        filteredEvents.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            if (order === 'asc') {
                return dateA - dateB; // Oldest to Newest
            } else {
                return dateB - dateA; // Newest to Oldest
            }
        });

        currentEvents = filteredEvents; // Update currentEvents for display
        displayEvents(currentEvents);
    }

    // Event listeners for controls
    if (searchInput) {
        searchInput.addEventListener('input', applyFiltersAndSort);
    }
    if (yearFilter) {
        yearFilter.addEventListener('change', applyFiltersAndSort);
    }
    if (sortOrder) {
        sortOrder.addEventListener('change', applyFiltersAndSort);
    }

    // Event listener for the "Show Events" button
    if (showEventsBtn) {
        showEventsBtn.addEventListener('click', () => {
            // Scroll to the events section smoothly
            document.getElementById('events').scrollIntoView({
                behavior: 'smooth'
            });
            populateYearFilter(); // Populate years when events section is viewed
            applyFiltersAndSort(); // Initial display of events
        });
    }

    // --- Basic Navigation Scroll ---
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute('href').substring(1); // Get the section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                // If it's the events section, load data and controls
                if (targetId === 'events') {
                    populateYearFilter();
                    applyFiltersAndSort();
                }
            }
        });
    });

    // Optionally, load events on page load if you want them visible by default
    // populateYearFilter(); // Uncomment this line if you want the filter to be populated on initial page load
    // applyFiltersAndSort(); // Uncomment this line if you want events to display on initial page load
});
