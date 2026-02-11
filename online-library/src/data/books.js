const books = [
  // FICTION
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    description: "A shepherd boy travels across the desert in search of treasure and discovers his destiny.",
    rating: 4.5
  },
  {
    id: 2,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    description: "A tragic story of love, wealth, and illusion in the roaring twenties.",
    rating: 4.4
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    description: "A powerful story about justice and racial inequality in the American South.",
    rating: 4.8
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Fiction",
    description: "A romantic novel that critiques the British landed gentry of the early 19th century.",
    rating: 4.6
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "Fiction",
    description: "A teenage boy's journey through alienation and self-discovery.",
    rating: 4.2
  },

  // NON-FICTION
  {
    id: 6,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Non-Fiction",
    description: "A practical guide to building good habits and breaking bad ones.",
    rating: 4.8
  },
  {
    id: 7,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    description: "A brief history of humankind from the Stone Age to the modern era.",
    rating: 4.7
  },
  {
    id: 8,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Non-Fiction",
    description: "Rules for focused success in a distracted world.",
    rating: 4.5
  },
  {
    id: 9,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    category: "Non-Fiction",
    description: "Explains the science behind habit formation and change.",
    rating: 4.4
  },
  {
    id: 10,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    category: "Non-Fiction",
    description: "A motivational classic focused on mindset and financial success.",
    rating: 4.3
  },

  // SCI-FI
  {
    id: 11,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    description: "A science fiction epic about politics, religion, and ecology on a desert planet.",
    rating: 4.9
  },
  {
    id: 12,
    title: "The Martian",
    author: "Andy Weir",
    category: "Sci-Fi",
    description: "An astronaut stranded on Mars must rely on science to survive.",
    rating: 4.6
  },
  {
    id: 13,
    title: "Foundation",
    author: "Isaac Asimov",
    category: "Sci-Fi",
    description: "A mathematician predicts the fall of a galactic empire.",
    rating: 4.7
  },
  {
    id: 14,
    title: "Neuromancer",
    author: "William Gibson",
    category: "Sci-Fi",
    description: "A cyberpunk novel that defined a genre.",
    rating: 4.3
  },
  {
    id: 15,
    title: "Brave New World",
    author: "Aldous Huxley",
    category: "Sci-Fi",
    description: "A dystopian vision of a genetically engineered future society.",
    rating: 4.5
  },

  // BIOGRAPHY
  {
    id: 16,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    category: "Biography",
    description: "The definitive biography of Apple co-founder Steve Jobs.",
    rating: 4.6
  },
  {
    id: 17,
    title: "Becoming",
    author: "Michelle Obama",
    category: "Biography",
    description: "The inspiring memoir of former First Lady Michelle Obama.",
    rating: 4.8
  },
  {
    id: 18,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    category: "Biography",
    description: "The powerful wartime diary of Anne Frank.",
    rating: 4.9
  },
  {
    id: 19,
    title: "Long Walk to Freedom",
    author: "Nelson Mandela",
    category: "Biography",
    description: "The autobiography of South Africa’s first black president.",
    rating: 4.8
  },
  {
    id: 20,
    title: "Elon Musk",
    author: "Ashlee Vance",
    category: "Biography",
    description: "The life and ambition of a tech entrepreneur.",
    rating: 4.5
  }
];

// Generate additional realistic entries up to 50
const extraTitles = [
  "The Silent Patient",
  "Educated",
  "The Hobbit",
  "The Subtle Art of Not Giving a F*ck",
  "The Midnight Library",
  "Life of Pi",
  "The Psychology of Money",
  "The Kite Runner",
  "The Road",
  "The Girl on the Train"
];

let nextId = 21;
extraTitles.forEach((title, index) => {
  books.push({
    id: nextId++,
    title,
    author: `Author ${index + 1}`,
    category: ["Fiction", "Non-Fiction", "Sci-Fi", "Biography"][index % 4],
    description: `A compelling story that explores deep human emotions and experiences.`,
    rating: Number((Math.random() * 2 + 3).toFixed(1))
  });
});

export default books;
