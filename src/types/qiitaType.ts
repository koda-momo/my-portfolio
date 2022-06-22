/**
 * 記事データに含まれるタグ配列.
 */
export type QiitaTagType = {
  name: string;
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

/**
 * 取得後Qiita記事型.
 */
export type GetQiitaType = {
  id: string;
  page_views_count: string;
  likes_count: number;
  comments_count: number;
  created_at: string;
  updated_at: string;
  url: string;
  title: string;
  tags: Array<string>;
};

/**
 * Qiitaユーザ型.
 */
export type QiitaUserType = {
  id: string;
  name: string;
  description: string;
  profileImageUrl: string;
};
