/**
 * 記事データに含まれるタグ配列.
 */
export type QiitaTagType = {
  name: string;
  versions: Array<string>;
};

/**
 * Qiita記事型.
 */
export type QiitaType = {
  id: string;
  page_views_count: string;
  likes_count: number;
  comments_count: number;
  created_at: string;
  updated_at: string;
  url: string;
  title: string;
  tags: Array<QiitaTagType>;
};
