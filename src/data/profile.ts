/**
 * 網站所有文字內容集中在這裡，改內容只要動這個檔案。
 * 舊站的文字一字不改地保留，年份欄位是從原文拆出來方便排版用的。
 */

export const profile = {
  handle: 'cheese_ge',
  quip: '- 要不要加底線是我的自由',
  tags: ['資訊', '音樂'],
  tagline: '資訊，音樂',
};

export const education = [
  { school: '新北市立中和高中', note: '' },
  { school: '逢甲大學', note: '資訊工程學系' },
];

/**
 * 時間軸項目。contests / performances 照時間由舊到新排，
 * Timeline 會把「連續相同年份」併成一組，年份只顯示一次。
 * 經歷是區間而非時間點，改用下面的 ExperienceItem。
 */
export type Entry = { year: string; text: string; highlight?: boolean };

/**
 * 經歷：一段經歷是一段「時間區間」，不是一個時間點，所以獨立於時間軸的
 * Entry，period 直接寫成人看得懂的字串（'2025'、'2025 夏'、'2025 – 2026' 都可以）。
 */
export type ExperienceItem = {
  period: string;
  org: string;
  role: string;
  highlight?: boolean;
};

export const experience: ExperienceItem[] = [
  { period: '2022 ~ 2023', org: '中和流行音樂社16th', role: '器材' },
  { period: '2024 ~ present', org: 'APCS 模擬測驗團隊 x APCS Guide 聯合營隊', role: '工人/講師/隊輔' },
  { period: '2025 ~ 2016', org: '逢甲大學黑客社 12th', role: '學術' },
  { period: '2026 ~ present', org: '逢甲大學黑客社 13th', role: '社長', highlight: true },
];

/**
 * 教課經驗：列教過的課程主題。context 寫場合或對象（在哪教、教誰）。
 * 這一區與「經歷」各自獨立，經歷記的是身分與期間，這裡記的是教了什麼。
 */
export type TeachingTopic = { topic: string; context: string };

export const teaching: TeachingTopic[] = [
  { topic: '逆向工程', context: 'AIS3 中區資安體驗營' },
];

/** 檢定：沒有時間軸概念，單獨一區。 */
export type Certification = { name: string; result: string };

export const certifications: Certification[] = [
  { name: 'APCS', result: '觀念4 實作4' },
  { name: 'CPE', result: '5題' },
];

export const contests: Entry[] = [
  { year: '2022', text: '新北市學科能力競賽 資訊科 佳作' },
  { year: '2023', text: '新北市學科能力競賽 資訊科 佳作' },
  { year: '2024', text: 'NCPC rk.115 "起司電神帶我飛orz"' },
  { year: '2025', text: 'PUPC 銀獎 "cheeseOMG"' },
  { year: '2025', text: 'NCPC rk.56 "Cheese Burger"' },
  { year: '2025', text: 'TOPC rk.188 "Cheese Burger"' },
  { year: '2025', text: '神盾盃 Quals rk.10 Final rk.7 "宵夜吃什麼"' },
  { year: '2026', text: 'AIS3 Pre-Exam rk.170 "cheese_ge"' },
  { year: '2026', text: 'PUPC 金獎 "Strawberrry"', highlight: true },
];

export const performances: Entry[] = [
  { year: '2023', text: '02/10《Enchanted to meet you》五校流音聯展' },
  { year: '2023', text: '04/09 中和流行音樂社 16th 獨立大成《音你而流下的回憶》' },
  { year: '2024', text: '12/10 逢甲大學琴韻吉他社 米吉杯' },
  { year: '2025', text: '05/23 逢甲大學資訊系系學會 資訊之夜' },
];

/** 聯絡方式：href 是真實連結時卡片可點；href 為 '#' 且 copy 為 true 時，整張卡片按一下複製。 */
export type Contact = {
  label: string;
  value: string;
  href: string;
  icon: 'mail' | 'github' | 'discord' | 'instagram';
  copy?: boolean;
};

export const contacts: Contact[] = [
  {
    label: 'Email',
    value: 'me@cheesege.com',
    href: 'mailto:me@cheesege.com',
    icon: 'mail',
    copy: true,
  },
  {
    label: 'GitHub',
    value: '@cheesege',
    href: 'https://github.com/cheesege',
    icon: 'github',
  },
  {
    label: 'Discord',
    value: 'cheese_ge',
    href: '#',
    icon: 'discord',
    copy: true,
  },
  {
    label: 'Instagram',
    value: '@chen.cheese.ge',
    href: '#',
    icon: 'instagram',
    copy: true,
  },
];

/** 友站：把 name 與 href 換成真實資料即可，href 為 '#' 時卡片不可點。 */
export type FriendSite = {
  name: string;
  href: string;
};

export const friendSites: FriendSite[] = [
  { name: '黑客社', href: 'https://hackersir.org' },
];

export const nav = [
  { id: 'about', label: '關於' },
  { id: 'experience', label: '經歷' },
  { id: 'teaching', label: '教課' },
  { id: 'contest', label: '比賽' },
  { id: 'cert', label: '檢定' },
  { id: 'performance', label: '表演' },
  { id: 'contact', label: '聯絡方式' },
  { id: 'friends', label: '友站' },
];
