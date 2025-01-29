type TranslationKey =
  | "welcome"
  | "homeDescription"
  | "contactUs"
  | "currentTheme"
  | "name"
  | "email"
  | "message"
  | "sendMessage"
  | "light"
  | "dark"
  | "system"
  | "home"
  | "about"
  | "works"
  | "projects"
  | "blog"
  | "aboutUs"
  | "aboutDescription"
  | "ourWorks"
  | "worksDescription"
  | "ourProjects"
  | "projectsDescription"
  | "latestPosts"
  | "blogDescription"
  | "systemLanguage"
  | "systemTheme"
  | "messageMinLength"

type Language = "en" | "id" | "zh" | "es" | "ms" | "ar"

const translations: Record<TranslationKey, Record<Language, string>> = {
  welcome: {
    en: "Welcome to Our Website",
    id: "Selamat Datang di Situs Kami",
    zh: "欢迎访问我们的网站",
    es: "Bienvenido a Nuestro Sitio Web",
    ms: "Selamat Datang ke Laman Web Kami",
    ar: "مرحبًا بكم في موقعنا",
  },
  homeDescription: {
    en: "This is the home page of our awesome website.",
    id: "Ini adalah halaman utama dari situs web kami yang luar biasa.",
    zh: "这是我们精彩网站的主页。",
    es: "Esta es la página de inicio de nuestro increíble sitio web.",
    ms: "Ini adalah halaman utama laman web kami yang mengagumkan.",
    ar: "هذه هي الصفحة الرئيسية لموقعنا الرائع.",
  },
  contactUs: {
    en: "Contact Us",
    id: "Hubungi Kami",
    zh: "联系我们",
    es: "Contáctenos",
    ms: "Hubungi Kami",
    ar: "اتصل بنا",
  },
  currentTheme: {
    en: "Current theme",
    id: "Tema saat ini",
    zh: "当前主题",
    es: "Tema actual",
    ms: "Tema semasa",
    ar: "السيم الحالي",
  },
  name: {
    en: "Name",
    id: "Nama",
    zh: "姓名",
    es: "Nombre",
    ms: "Nama",
    ar: "الاسم",
  },
  email: {
    en: "Email",
    id: "Surel",
    zh: "电子邮件",
    es: "Correo electrónico",
    ms: "E-mel",
    ar: "البريد الإلكتروني",
  },
  message: {
    en: "Message",
    id: "Pesan",
    zh: "消息",
    es: "Mensaje",
    ms: "Mesej",
    ar: "الرسالة",
  },
  sendMessage: {
    en: "Send Message",
    id: "Kirim Pesan",
    zh: "发送消息",
    es: "Enviar Mensaje",
    ms: "Hantar Mesej",
    ar: "إرسال رسالة",
  },
  light: {
    en: "Light",
    id: "Terang",
    zh: "明亮",
    es: "Claro",
    ms: "Cerah",
    ar: "ضوء",
  },
  dark: {
    en: "Dark",
    id: "Gelap",
    zh: "暗黑",
    es: "Oscuro",
    ms: "Gelap",
    ar: "ظلام",
  },
  system: {
    en: "System",
    id: "Sistem",
    zh: "系统",
    es: "Sistema",
    ms: "Sistem",
    ar: "نظام",
  },
  home: {
    en: "Home",
    id: "Beranda",
    zh: "首页",
    es: "Inicio",
    ms: "Laman Utama",
    ar: "الصفحة الرئيسية",
  },
  about: {
    en: "About",
    id: "Tentang",
    zh: "关于",
    es: "Acerca de",
    ms: "Tentang Kami",
    ar: "حول",
  },
  works: {
    en: "Works",
    id: "Karya",
    zh: "作品",
    es: "Trabajos",
    ms: "Karya",
    ar: "أعمال",
  },
  projects: {
    en: "Projects",
    id: "Proyek",
    zh: "项目",
    es: "Proyectos",
    ms: "Projek",
    ar: "مشاريع",
  },
  blog: {
    en: "Blog",
    id: "Blog",
    zh: "博客",
    es: "Blog",
    ms: "Blog",
    ar: "مدونة",
  },
  aboutUs: {
    en: "About Us",
    id: "Tentang Kami",
    zh: "关于我们",
    es: "Sobre Nosotros",
    ms: "Tentang Kami",
    ar: "معلومات عنا",
  },
  aboutDescription: {
    en: "Learn more about our company and our mission.",
    id: "Pelajari lebih lanjut tentang perusahaan kami dan misi kami.",
    zh: "了解更多关于我们公司和使命的信息。",
    es: "Aprenda más sobre nuestra empresa y nuestra misión.",
    ms: "Ketahui lebih lanjut tentang syarikat kami dan misi kami.",
    ar: "تعرف على المزيد حول شركتنا ورسالتنا.",
  },
  ourWorks: {
    en: "Our Works",
    id: "Karya Kami",
    zh: "我们的作品",
    es: "Nuestros Trabajos",
    ms: "Karya Kami",
    ar: "أعمالنا",
  },
  worksDescription: {
    en: "Explore our portfolio and past projects.",
    id: "Jelajahi portofolio dan proyek kami sebelumnya.",
    zh: "探索我们的作品集和过去的项目。",
    es: "Explore nuestro portafolio y proyectos anteriores.",
    ms: "Terokai portfolio dan projek-projek kami yang lepas.",
    ar: "استكشف محفظتنا والمشاريع السابقة.",
  },
  ourProjects: {
    en: "Our Projects",
    id: "Proyek Kami",
    zh: "我们的项目",
    es: "Nuestros Proyectos",
    ms: "Projek Kami",
    ar: "مشاريعنا",
  },
  projectsDescription: {
    en: "Check out our ongoing and completed projects.",
    id: "Lihat proyek yang sedang berjalan dan yang telah selesai.",
    zh: "查看我们正在进行和已完成的项目。",
    es: "Vea nuestros proyectos en curso y completados.",
    ms: "Lihat projek-projek kami yang sedang berjalan dan yang telah siap.",
    ar: "تحقق من مشاريعنا الجارية والمنتهية.",
  },
  latestPosts: {
    en: "Latest Posts",
    id: "Artikel Terbaru",
    zh: "最新文章",
    es: "Últimas Publicaciones",
    ms: "Artikel Terkini",
    ar: "آخر المواضيع",
  },
  blogDescription: {
    en: "Read our latest articles and updates.",
    id: "Baca artikel dan pembaruan terbaru kami.",
    zh: "阅读我们的最新文章和更新。",
    es: "Lea nuestros últimos artículos y actualizaciones.",
    ms: "Baca artikel dan kemas kini terkini kami.",
    ar: "اقرأ أحدث مقالاتنا وتحديثاتنا.",
  },
  systemLanguage: {
    en: "System Language",
    id: "Bahasa Sistem",
    zh: "系统语言",
    es: "Idioma del Sistema",
    ms: "Bahasa Sistem",
    ar: "لغة النظام",
  },
  systemTheme: {
    en: "System Theme",
    id: "Tema Sistem",
    zh: "系统主题",
    es: "Tema del Sistema",
    ms: "Tema Sistem",
    ar: "سمة النظام",
  },
  messageMinLength: {
    en: "Message must be at least 20 characters long",
    id: "Pesan harus minimal 20 karakter",
    zh: "消息必须至少20个字符长",
    es: "El mensaje debe tener al menos 20 caracteres",
    ms: "Mesej mestilah sekurang-kurangnya 20 aksara",
    ar: "يجب أن تكون الرسالة 20 حرفًا على الأقل",
  },
}

export const getTranslation = (key: TranslationKey, language: Language): string => {
  if (!translations[key]) {
    console.error(`Translation key "${key}" not found`)
    return key
  }
  return translations[key][language] || translations[key]["en"] || key
}

