import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";

import { QiitaList } from "../../components/QiitaList";

//components

import { QiitaTagType, QiitaType } from "../../types/qiitaType";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/**
 * その他情報ページ.
 */
const Other: NextPage<Props> = ({ userData, data }) => {
  return (
    <>
      <Image
        alt="プロフィール画像"
        src={userData.profileImageUrl}
        width={100}
        height={100}
      />
      <div>{userData.id}</div>
      <div>{userData.description}</div>
      記事一覧
      {data.map((item: QiitaType) => (
        <QiitaList data={item} key={item.id} />
      ))}
    </>
  );
};

/**
 * Qiitaデータの取得.
 */
export const getStaticProps: GetStaticProps = async () => {
  const key = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_QIITA_KEY}`,
    },
  };
  const res = await fetch(
    "https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=50",
    key
  );
  const jsonData = await res.json();

  //ユーザ情報
  const user = jsonData[0].user;
  const userData = {
    id: user.id,
    name: user.name,
    description: user.description,
    profileImageUrl: user.profile_image_url,
  };

  //記事情報(必要な情報だけ取得)
  const data = jsonData.map((item: QiitaType) => {
    const tagList = item.tags.map((tagItem: QiitaTagType) => {
      return tagItem.name;
    });

    return {
      id: item.id,
      page_views_count: item.page_views_count,
      likes_count: item.likes_count,
      comments_count: item.comments_count,
      created_at: item.created_at,
      updated_at: item.updated_at,
      url: item.url,
      tags: tagList,
      title: item.title,
    };
  });

  return {
    props: {
      userData,
      data,
    },
    revalidate: 10,
  };
};

export default Other;
