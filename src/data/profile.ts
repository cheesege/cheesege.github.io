/**
 * 網站所有文字內容集中在這裡，改內容只要動這個檔案。
 * 舊站的文字一字不改地保留，年份欄位是從原文拆出來方便排版用的。
 */

export const profile = {
  handle: 'cheese_ge',
  aliases: '起司 / 起司哥 / cheese / cheesege',
  quip: '- 要不要加底線是我的自由',
  tags: ['資訊', '音樂'],
  tagline: '資訊，音樂',
};

export const education = [
  { school: '新北市立中和高中', note: '' },
  { school: '逢甲大學', note: '資訊工程學系' },
];

export type Entry = { year: string; text: string; highlight?: boolean };

export const experience: Entry[] = [
  { year: '', text: '中和流行音樂社16th 器材' },
  { year: '2024', text: '夏 APCS 模擬測驗團隊 x APCS Guide 聯合營隊 工人' },
  { year: '2025', text: '冬 APCS 模擬測驗團隊 x APCS Guide 聯合營隊 講師' },
  { year: '2025', text: '夏 APCS 模擬測驗團隊 x APCS Guide 聯合營隊 講師' },
  { year: '', text: '逢甲大學黑客社 12th 學術' },
  { year: '2025', text: 'AIS3 CLUB 中區資安體驗營 講師' },
  { year: '2026', text: '冬 APCS 模擬測驗團隊 x APCS Guide 聯合營隊 講師/隊輔' },
  { year: '', text: '逢甲大學黑客社 13th 社長', highlight: true },
  { year: '2026', text: '夏 APCS 模擬測驗團隊 x APCS Guide 聯合營隊 講師/隊輔' },
];

export const contests: Entry[] = [
  { year: '', text: 'APCS 觀念4 實作4' },
  { year: '', text: 'CPE 5題' },
  { year: '2022', text: '新北市學科能力競賽 資訊科 佳作' },
  { year: '2023', text: '新北市學科能力競賽 資訊科 佳作' },
  { year: '2024', text: 'NCPC rk.115 "起司電神帶我飛orz"' },
  { year: '2025', text: 'PUPC 銀獎 "cheeseOMG"' },
  { year: '2025', text: 'NCPC rk.56 "Cheese Burger"' },
  { year: '2025', text: 'TOPC rk.188 "Cheese Burger"' },
  { year: '2025', text: '神盾盃 rk.7 "宵夜吃什麼"' },
  { year: '2026', text: 'AIS3 Pre-Exam rk.170 "cheese_ge"' },
  { year: '2026', text: 'PUPC 金獎 "Strawberrry"', highlight: true },
];

export const performances: Entry[] = [
  { year: '2023', text: '02/10《Enchanted to meet you》五校流音聯展' },
  { year: '2023', text: '04/09 中和流行音樂社 16th 獨立大成《音你而流下的回憶》' },
  { year: '2024', text: '12/10 逢甲大學琴韻吉他社 米吉杯' },
  { year: '2025', text: '05/23 逢甲大學資訊系系學會 資訊之夜' },
];

/** 聯絡方式：href 直接改成自己的連結即可，copy 為 true 時卡片會提供「複製」按鈕。 */
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
    value: 'cheese5skin@gmail.com',
    href: 'mailto:cheese5skin@gmail.com',
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
    value: '@cheese_ge',
    href: '#',
    icon: 'instagram',
  },
];

/** 友站：目前為佔位資料，改成真實的站名 / 描述 / 網址即可。 */
export type FriendSite = {
  name: string;
  owner: string;
  description: string;
  href: string;
  placeholder?: boolean;
};

export const friendSites: FriendSite[] = [
  {
    name: '友站名稱 A',
    owner: 'someone',
    description: '一句話介紹這個站在寫什麼。',
    href: '#',
    placeholder: true,
  },
  {
    name: '友站名稱 B',
    owner: 'someone',
    description: '一句話介紹這個站在寫什麼。',
    href: '#',
    placeholder: true,
  },
  {
    name: '友站名稱 C',
    owner: 'someone',
    description: '一句話介紹這個站在寫什麼。',
    href: '#',
    placeholder: true,
  },
  {
    name: '友站名稱 D',
    owner: 'someone',
    description: '一句話介紹這個站在寫什麼。',
    href: '#',
    placeholder: true,
  },
];

export const nav = [
  { id: 'about', label: '關於' },
  { id: 'experience', label: '經歷' },
  { id: 'contest', label: '比賽/檢定' },
  { id: 'performance', label: '表演' },
  { id: 'contact', label: '聯絡方式' },
  { id: 'friends', label: '友站' },
];
