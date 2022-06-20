import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

//components
import { QiitaList } from "../../components/other/QiitaList";
import { QiitaUser } from "../../components/other/QiitaUser";
import { GetQiitaType } from "../../types/qiitaType";

//MUI
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { getQiitaData } from "../../ulils/GetQiitaData";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/**
 * その他情報ページ.
 */
const Other: NextPage<Props> = ({ userData, data }) => {
  return (
    <>
      <h1>Qiita</h1>
      <_User>
        <QiitaUser data={userData} />
      </_User>
      記事一覧:
      <Link href={`https://qiita.com/${userData.id}`}>
        <_A>もっと見る</_A>
      </Link>
      <_Qiita>
        {data.map((item: GetQiitaType) => (
          <QiitaList data={item} key={item.id} />
        ))}
      </_Qiita>
    </>
  );
};

const _A = styled("a")(() => ({
  ":hover": {
    opacity: "40%",
  },
}));

const _User = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  margin: "50px auto 70px 80px",
}));

const _Qiita = styled("div")(() => ({
  marginBottom: 100,
  overflow: "auto",
  height: 300,
  width: "auto",
  "&::-webkit-scrollbar": { display: "none" },
}));

/**
 * Qiitaデータの取得.
 */
export const getStaticProps: GetStaticProps = async () => {
  const { userData, data } = await getQiitaData();

  return {
    props: {
      userData,
      data,
    },
    revalidate: 10,
  };
};

export default Other;
