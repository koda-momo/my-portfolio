export type Career = {
  name: string;
  start: `${number}年${number}月${number}日`;
  end: `${number}年${number}月${number}日` | "現在";
  description: string;
};

export type CareerList = Career[];
