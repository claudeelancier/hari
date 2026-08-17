/* Centralized image + content config for Srimurugan Travel.
   Replace Unsplash URLs with local assets when available. */
window.SMT = window.SMT || {};

SMT.img = function (id, w) {
  w = w || 1600;
  return "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=" + w + "&q=80";
};

SMT.heroSlides = [
  {
    id: "maldives",
    image: SMT.img("photo-1514282401047-d79a71a590e8", 1920),
    label: "International · Honeymoon",
    title: "Discover Paradise",
    subtitle: "Unforgettable Maldives escapes with lagoon villas, island hops and still-blue horizons.",
    cta: "Explore Maldives",
    href: "international.html#maldives"
  },
  {
    id: "dubai",
    image: SMT.img("photo-1512453979798-5ea266f8880c", 1920),
    label: "International · City Break",
    title: "The City of Gold",
    subtitle: "Dubai and Abu Dhabi — skyline nights, desert evenings and polished luxury stays.",
    cta: "Explore Dubai",
    href: "international.html#dubai"
  },
  {
    id: "singapore",
    image: SMT.img("photo-1525625293386-3f8f99389edd", 1920),
    label: "International · Family",
    title: "Garden by the Bay",
    subtitle: "Singapore done beautifully — gardens, harbour lights and effortless family touring.",
    cta: "Explore Singapore",
    href: "international.html#singapore"
  },
  {
    id: "bali",
    image: SMT.img("photo-1537996194471-e657df975ab4", 1920),
    label: "International · Leisure",
    title: "Island Serenity",
    subtitle: "Bali temples, rice terraces and quiet villas — a slower, richer kind of holiday.",
    cta: "Explore Bali",
    href: "international.html#bali"
  },
  {
    id: "thailand",
    image: SMT.img("photo-1552465011-b4e21bf6e79a", 1920),
    label: "International · Tropical",
    title: "Tropical Rhythm",
    subtitle: "Bangkok, Pattaya, Phuket and Krabi — temples, islands and warm Thai hospitality.",
    cta: "Explore Thailand",
    href: "international.html#thailand"
  },
  {
    id: "europe",
    image: SMT.img("photo-1502602898657-3e91760cbb34", 1920),
    label: "International · Grand Tour",
    title: "Europe, Unhurried",
    subtitle: "Coach and flight itineraries across iconic capitals, alpine towns and coastal villages.",
    cta: "Explore Europe",
    href: "international.html#europe"
  },
  {
    id: "kashmir",
    image: SMT.img("photo-1595815771614-ade9d652a65d", 1920),
    label: "Domestic · Mountains",
    title: "Heaven on Earth",
    subtitle: "Kashmir and Gulmarg — shikaras, snow meadows and houseboats on Dal Lake.",
    cta: "Explore Kashmir",
    href: "domestic.html#kashmir"
  },
  {
    id: "kerala",
    image: SMT.img("photo-1602216056096-3b40cc0c9944", 1920),
    label: "Domestic · Backwaters",
    title: "God's Own Country",
    subtitle: "Kerala backwaters, Munnar tea hills and houseboat nights on the lagoon.",
    cta: "Explore Kerala",
    href: "domestic.html#kerala"
  },
  {
    id: "rajasthan",
    image: SMT.img("photo-1477587458883-47145ed94245", 1920),
    label: "Domestic · Heritage",
    title: "The Royal Circuit",
    subtitle: "Jaipur, Udaipur and the desert — palaces, forts and the colour of Rajasthan.",
    cta: "Explore Rajasthan",
    href: "domestic.html#rajasthan"
  },
  {
    id: "goa",
    image: SMT.img("photo-1512343879784-a960bf40e7f2", 1920),
    label: "Domestic · Coast",
    title: "Goa, Golden Hour",
    subtitle: "Beaches, churches and easy days on the Arabian Sea — crafted for families and couples.",
    cta: "Explore Goa",
    href: "domestic.html#goa"
  },
  {
    id: "manali",
    image: SMT.img("photo-1626621341517-bbf3d9990a23", 1920),
    label: "Domestic · Himalaya",
    title: "Himalayan Calling",
    subtitle: "Manali, Shimla and Kullu — pine forests, mountain roads and cool Himachal air.",
    cta: "Explore Himachal",
    href: "domestic.html#himachal"
  }
];

SMT.destinations = [
  { name: "Maldives", region: "Indian Ocean", desc: "Atolls, overwater stays and still lagoons.", tours: "International", href: "international.html#maldives", image: SMT.img("photo-1573843981267-be1999ff37cd", 900), size: "lg" },
  { name: "Dubai", region: "UAE", desc: "Skyline luxury, desert evenings, family fun.", tours: "International", href: "international.html#dubai", image: SMT.img("photo-1518684079542-3150a3e4eb62", 900), size: "md" },
  { name: "Bali", region: "Indonesia", desc: "Temples, terraces and villa quiet.", tours: "International", href: "international.html#bali", image: SMT.img("photo-1518548419970-58e3b4079ab2", 900), size: "md" },
  { name: "Singapore", region: "Southeast Asia", desc: "Gardens, harbour lights, easy touring.", tours: "International", href: "international.html#singapore", image: SMT.img("photo-1565967511849-41158aaa188b", 900), size: "sm" },
  { name: "Thailand", region: "Southeast Asia", desc: "Islands, palaces and Thai warmth.", tours: "International", href: "international.html#thailand", image: SMT.img("photo-1528183429752-ae74d9767a24", 900), size: "sm" },
  { name: "Europe", region: "Continent", desc: "Capitals, coasts and alpine towns.", tours: "International", href: "international.html#europe", image: SMT.img("photo-1467269204594-9661b134dd2b", 900), size: "sm" },
  { name: "Kashmir", region: "India", desc: "Lakes, meadows and mountain light.", tours: "Domestic", href: "domestic.html#kashmir", image: SMT.img("photo-1564507592333-c60657eea523", 900), size: "md" },
  { name: "Kerala", region: "India", desc: "Backwaters, tea hills, monsoon green.", tours: "Domestic", href: "domestic.html#kerala", image: SMT.img("photo-1593693411515-2b394738cbae", 900), size: "md" }
];

SMT.internationalTours = [
  { code: "F20", title: "Maldives Special", dest: "Maldives", days: "5D / 4N", price: "64,990", href: "international.html#maldives", image: SMT.img("photo-1540202404-a2f29016b523", 800), highlights: ["Island stay", "Water villa option", "Return flights"] },
  { code: "F5", title: "Dubai / Abu Dhabi", dest: "UAE", days: "5D / 4N", price: "79,990", href: "international.html#dubai", image: SMT.img("photo-1526495124232-a04e0c4a1dd0", 800), highlights: ["City tour", "Desert safari", "Marina evening"] },
  { code: "F1", title: "Singapore / Malaysia", dest: "Singapore", days: "6D / 5N", price: "1,19,990", href: "international.html#singapore", image: SMT.img("photo-1496939376851-89342e90adcd", 800), highlights: ["Gardens by the Bay", "Sentosa", "Kuala Lumpur"] },
  { code: "F13", title: "Indonesia Bali", dest: "Bali", days: "6D / 5N", price: "94,990", href: "international.html#bali", image: SMT.img("photo-1558005530-a7958896ec60", 800), highlights: ["Ubud temples", "Beach day", "Cultural evening"] },
  { code: "F7", title: "Bangkok / Pattaya", dest: "Thailand", days: "5D / 4N", price: "64,990", href: "international.html#thailand", image: SMT.img("photo-1508009603885-50cf7c8dd0d5", 800), highlights: ["Temple circuit", "Coral island", "Night markets"] },
  { code: "F41", title: "Europe Countries", dest: "Europe", days: "12D / 11N", price: "3,70,000", href: "international.html#europe", image: SMT.img("photo-1473951574080-01fe45ec8643", 800), highlights: ["Multi-country", "Coach touring", "Iconic capitals"] },
  { code: "F11", title: "Sri Lanka Special", dest: "Sri Lanka", days: "5D / 4N", price: "54,990", href: "international.html#srilanka", image: SMT.img("photo-1566296311134-c3b5e5e3c0b1", 800), highlights: ["Kandy", "Coastal stay", "Cultural sites"] },
  { code: "F33", title: "Malaysia", dest: "Malaysia", days: "5D / 4N", price: "64,990", href: "international.html#malaysia", image: SMT.img("photo-1596422846543-75c6fc197f07", 800), highlights: ["KL towers", "Genting", "City & hills"] }
];

SMT.domesticTours = [
  { code: "DF111", title: "Kashmir – Gulmarg", dest: "Kashmir", days: "6D / 5N", price: "44,990", href: "domestic.html#kashmir", image: SMT.img("photo-1506905925346-21bda4d32df4", 800), highlights: ["Dal Lake", "Gulmarg", "Houseboat option"] },
  { code: "DF23", title: "Goa", dest: "Goa", days: "4D / 3N", price: "19,990", href: "domestic.html#goa", image: SMT.img("photo-1454391304352-2bf4678b1a7a", 800), highlights: ["Beaches", "Old Goa", "Leisure days"] },
  { code: "KERALA", title: "Cochin – Munnar – Thekkady – Alappuzha", dest: "Kerala", days: "6D / 5N", price: "16,000", href: "domestic.html#kerala", image: SMT.img("photo-1582510003544-4d00b85f831c", 800), highlights: ["Tea gardens", "Houseboat", "Spice hills"] },
  { code: "DF22", title: "Rajasthan Special", dest: "Rajasthan", days: "7D / 6N", price: "34,990", href: "domestic.html#rajasthan", image: SMT.img("photo-1524492412937-b28074a5d7da", 800), highlights: ["Jaipur", "Udaipur", "Desert evening"] },
  { code: "SS1", title: "Kulu – Manali – Agra", dest: "Himachal", days: "8D / 7N", price: "29,990", href: "domestic.html#himachal", image: SMT.img("photo-1581793745862-99fde7fa73d2", 800), highlights: ["Manali", "Kullu", "Taj Mahal"] },
  { code: "DF11", title: "Andaman – Havelock", dest: "Andaman", days: "6D / 5N", price: "29,990", href: "domestic.html#andaman", image: SMT.img("photo-1582967788606-a171c1080cb0", 800), highlights: ["Havelock", "Radhanagar", "Island hops"] },
  { code: "DF6", title: "Kasi Special", dest: "Varanasi", days: "5D / 4N", price: "24,990", href: "domestic.html#kasi", image: SMT.img("photo-1561361513-2d000cb66656", 800), highlights: ["Ganga aarti", "Temples", "Guided darshan"] },
  { code: "DF7", title: "Ayodhya Ram Mandir Special", dest: "Ayodhya", days: "4D / 3N", price: "24,990", href: "domestic.html#ayodhya", image: SMT.img("photo-1548013146-72479768bada", 800), highlights: ["Ram Mandir", "Sarayu", "Pilgrim circuit"] }
];

SMT.trainTours = [
  { code: "F", title: "Shirdi – Pandharpur – Mantralayam", dest: "Pilgrimage", days: "Train", price: "8,490", href: "train.html", image: SMT.img("photo-1544620341-11cb2cdcd534", 800), highlights: ["Temple circuit", "AC coach", "Escorted"] },
  { code: "GA", title: "Agra – Mathura – Allahabad – Ayodhya – Kasi", dest: "North India", days: "Train", price: "13,990", href: "train.html", image: SMT.img("photo-1524492412937-b28074a5d7da", 800), highlights: ["Golden circuit", "Pilgrim stays", "Group touring"] },
  { code: "CB", title: "Delhi – Kashmir – Amritsar – Vaishno Devi", dest: "Himalaya", days: "Train", price: "23,990", href: "train.html", image: SMT.img("photo-1477587458883-47145ed94245", 800), highlights: ["Kashmir", "Golden Temple", "Vaishno Devi"] },
  { code: "KARNATAKA", title: "Udupi – Murudeshwar – Kollur – Dharmasthala", dest: "Karnataka", days: "Train", price: "16,000", href: "train.html", image: SMT.img("photo-1582510003544-4d00b85f831c", 800), highlights: ["Coastal temples", "Hill shrines", "Escorted"] }
];

SMT.gallery = [
  { alt: "Maldives lagoon aerial", image: SMT.img("photo-1512100356356-de1b84283e18", 900) },
  { alt: "Dubai skyline at dusk", image: SMT.img("photo-1489516408517-0bb3701686d2", 900) },
  { alt: "Kerala houseboat", image: SMT.img("photo-1593693397690-362cb9666fc2", 900) },
  { alt: "Rajasthan palace courtyard", image: SMT.img("photo-1599661046289-e31897883e4f", 900) },
  { alt: "Himalayan valley", image: SMT.img("photo-1501785888041-af3ef285b470", 900) },
  { alt: "Goa coastline", image: SMT.img("photo-1507525428034-b723cf961d3e", 900) },
  { alt: "Bali temple gates", image: SMT.img("photo-1555400038-63f5ba517a47", 900) },
  { alt: "Singapore Marina Bay", image: SMT.img("photo-1496939376851-89342e90adcd", 900) }
];

/* Existing homepage copy from the live project — not newly invented reviews */
SMT.testimonials = [
  { name: "R. Kumaresan", place: "Train Pilgrimage Tour", quote: "Our pilgrimage tour was seamless from start to finish — every stay and transfer was handled with real care.", initial: "R" },
  { name: "S. & P. Anand", place: "Honeymoon Tour", quote: "Booked our honeymoon package here — beautifully planned itinerary and the team was reachable throughout.", initial: "S" },
  { name: "M. Lakshmi", place: "Domestic Tour", quote: "Great value for a fully inclusive domestic trip. Guides were knowledgeable and hotels were comfortable.", initial: "M" }
];
