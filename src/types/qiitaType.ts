export type QiitaTagType = {
  name: string;
  versions: Array<string>;
};

export type QiitaType = {
  page_views_count: string;
  likes_count: number;
  comments_count: number;
  created_at: Date;
  updated_at: Date;
  url: string;
  title: string;
  tags: Array<QiitaTagType>;
};
