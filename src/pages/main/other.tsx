import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/**
 * その他情報ページ.
 */
const Other: NextPage<Props> = ({ data }) => {
  console.dir(data);
  return <>Other</>;
};

/**
 * Qiitaデータの取得.
 */
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://qiita.com/api/v2/users/koda-momo");
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};

export default Other;
