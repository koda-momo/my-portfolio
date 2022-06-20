import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useFormatDate } from "../../hooks/useFormatDate";
import { QiitaTagType, QiitaType } from "../../types/qiitaType";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/**
 * その他情報ページ.
 */
const Other: NextPage<Props> = ({ userData, data }) => {
  const { formatDate } = useFormatDate();

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
      <Link href={data[0].url}>
        <a>{data[0].title}</a>
      </Link>
      <div>いいね数:{data[0].likesCount}</div>
      <div>コメント数:{data[0].commentsCount}</div>
      <div>作成日:{formatDate(data[0].createdAt)}</div>
      <div>更新日:{formatDate(data[0].updatedAt)}</div>
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
      pageViewsCount: item.page_views_count,
      likesCount: item.likes_count,
      commentsCount: item.comments_count,
      createdAt: item.created_at,
      updatedAt: item.updated_at,
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
