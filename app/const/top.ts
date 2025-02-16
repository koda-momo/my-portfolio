import { Url, UrlList } from "types";

// ページナビゲーション
export const pageNavList: Url[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "経歴",
    url: "/career",
  },
  {
    name: "スキル",
    url: "/skill",
  },
  {
    name: "私について",
    url: "/about-me",
  },
  {
    name: "このサイトについて",
    url: "/portfolio",
  },
];

// URL
const githubUrl = "https://github.com";
const githubImageUrl = "https://avatars.githubusercontent.com/u";

// 関連URL
export const urlList: UrlList = [
  {
    name: "GitHub",
    list: [
      {
        name: "旧アカウント(2019〜2023)",
        url: `${githubUrl}/koda-momo-old`,
        image: `${githubImageUrl}/93690995`,
        rounded: true,
      },
      {
        name: "現アカウント(2024〜)",
        url: `${githubUrl}/koda-momo`,
        image: `${githubImageUrl}/174192380`,
        rounded: true,
      },
    ],
  },
  {
    name: "article",
    list: [
      {
        name: "Qiita(2019〜2023)",
        url: "https://qiita.com/koda-momo",
        image: "/top/card/qiita-icon.png",
      },
      {
        name: "zenn(2024〜)",
        url: "https://zenn.dev/koda_momo",
        image: "/top/card/logo-only.svg",
      },
    ],
  },
] as const;
