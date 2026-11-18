Conversation Log
buatkan saya websiye ayam geprek "BG PUN" berlokasi di pringsewu deket RS wismarini
    name: "Kulit Ayam Crispy Geprek",
    category: "sidedish",
    price: 8000,
    badge: "Super Renyah 💥",
    badgeColor: "bg-amber-500",
    description: "Kulit ayam bumbu rempah digoreng garing renyah kress, bisa dimakan original atau digeprek sambal pedas.",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
    allowSpicyLevel: true,
    allowSambalChoice: true
  },
  {
    id: "side-02",
    name: "Terong Goreng Crispy Tepung",
    category: "sidedish",
    price: 5000,
    badge: "Wajib Coba",
    badgeColor: "bg-purple-600",
    description: "Irisan terong ungu dibalut tepung berbumbu gurih renyah di luar, lembut manis di dalam.",
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=600&q=80",
    allowSpicyLevel: true,
    allowSambalChoice: true
  },
  {
    id: "side-03",
    name: "Tahu & Tempe Crispy Geprek (Isi 4)",
    category: "sidedish",
    price: 6000,
    badge: "Lauk Mantap",
    badgeColor: "bg-emerald-600",
    description: "2 buah tahu krispi + 2 buah tempe krispi digeprek sambal bawang dadakan.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    allowSpicyLevel: true,
    allowSambalChoice: true
  },
  {
    id: "side-04",
    name: "Ati Ampela Crispy Geprek",
    category: "sidedish",
    price: 7000,
    badge: "Gurih Nagih",
    badgeColor: "bg-red-600",
    description: "1 pasang ati ampela goreng gurih renyah digeprek dengan sambal cabai pilihan.",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80",
    allowSpicyLevel: true,
    allowSambalChoice: true
  },
  {
    id: "side-05",
    name: "Kol Goreng Manis Gurih",
    category: "sidedish",
    price: 4000,
    badge: "Favorit Sambal",
    badgeColor: "bg-lime-600",
    description: "Kol segar digoreng renyah dengan rasa karamelisasi manis gurih alami.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    allowSpicyLevel: false,
    allowSambalChoice: false
  },
  {
    id: "min-01",
    name: "Es Teh Jumbo Manis Segar",
    category: "minuman",
    price: 4000,
    badge: "Best Drink 🥤",
    badgeColor: "bg-amber-600",
      Conversation Log
buatkan saya websiye ayam geprek "BG PUN" berlokasi di pringsewu deket RS wismarini
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80",
    allowSpicyLevel: false,
    allowSambalChoice: false
  },
  {
    id: "min-03",
    name: "Nutrisari Dingin Aneka Rasa",
    category: "minuman",
    price: 5000,
    badge: "Segar Dingin",
    badgeColor: "bg-yellow-500",
    description: "Pilihan rasa: Jeruk Manis, Jeruk Peras, Florida Orange, atau Mangga Gandaria dingin segar.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    allowSpicyLevel: false,
    allowSambalChoice: false
  },
  {
    id: "min-04",
    name: "Air Mineral Botol Dingin",
    category: "minuman",
    price: 4000,
    badge: "Higienis",
    badgeColor: "bg-cyan-600",
    description: "Air mineral botol 600ml dingin dan higienis.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80",
    allowSpicyLevel: false,
    allowSambalChoice: false
  }
];
// Tingkat Kepedasan
const SPICY_LEVELS = [
  { level: 0, label: "Level 0: Ramah Anak (Tanpa Cabe)", icon: "🌱" },
  { level: 1, label: "Level 1: Sedang (3 Cabe Rawit)", icon: "🌶️" },
  { level: 2, label: "Level 2: Pedas Nikmat (7 Cabe Rawit)", icon: "🌶️🌶️" },
  { level: 3, label: "Level 3: Pedas Nampol (12 Cabe Rawit)", icon: "🌶️🌶️🌶️" },
  { level: 4, label: "Level 4: Pedas Gila (18 Cabe Rawit)", icon: "🔥🌶️🔥" },
  { level: 5, label: "Level 5: Pedas Dewa Bang Pun (25+ Cabe!)", icon: "💥🔥☠️" }
];
// Pilihan Sambal
const SAMBAL_OPTIONS = [
  "Sambal Bawang Korek (Khas BG PUN)",
  "Sambal Ijo Padang Gurih",
  "Sambal Matah Bali Segar",
  "Sambal Dipisah (Tidak digeprek campur)"
];
// State Aplikasi
let state = {
  currentCategory: "all",
  searchKeyword: "",
  cart: JSON.parse(localStorage.getItem('bgpun_cart')) || [],
  selectedMenuItem: null
};
// Format Rupiah
function formatRupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(amount);
}
// Inisialisasi Saat Dokumen Siap
