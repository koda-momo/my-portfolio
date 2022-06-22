import { QiitaType, QiitaTagType, GetQiitaType } from "../types/qiitaType";

/**
 * Qiitaの情報を取得するメソッド.
 * @returns Qiitaプロフィール、記事データ
 */
export const getQiitaData = async () => {
  //キー
  const key = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_QIITA_KEY}`,
    },
  };

  //情報取得
  const res = await fetch(
    "https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=50",
    key
  );
  const jsonData = await res.json();

  //ユーザ情報の作成
  const user = jsonData[0].user;
  const userData = {
    id: user.id,
    name: user.name,
    description: user.description,
    profileImageUrl: user.profile_image_url,
  };

  //記事情報の作成
  const data: Array<GetQiitaType> = jsonData.map((item: QiitaType) => {
    //タグリストの作成(タグ名だけ使う)
    const tagList = item.tags.map((tagItem: QiitaTagType) => {
      return tagItem.name;
    });

    return {
      id: item.id,
      page_views_count: item.page_views_count, //閲覧数
      likes_count: item.likes_count, //いいね数
      comments_count: item.comments_count, //コメント数
      created_at: item.created_at, //作成日
      updated_at: item.updated_at, //更新日
      url: item.url, //記事URL
      tags: tagList, //タグ
      title: item.title, //記事タイトル
    };
  });

  return { userData, data };
};
