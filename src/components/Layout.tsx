import { FC, memo, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";

//components
import { Header } from "./Header";

//MUI
import { styled } from "@mui/material/styles";

type Props = {
  children: ReactNode;
};

/**
 * 全体のレイアウト用コンポーネント.
 */
export const Layout: FC<Props> = memo(({ children }) => {
  const router = useRouter();

  const [title, setTitle] = useState("");

  /**
   * パスからページタイトルを作成.
   */
  useEffect(() => {
    //パスからタイトルを取得 → 頭の/を削除
    const url = router.pathname;
    const urlLength = url.length;
    const titleName = url.slice(1, urlLength + 1);

    //PathがindexならばHomeを代入
    if (url === "/") {
      setTitle("Home");
    } else {
      //それ以外は頭の文字だけ大文字にして代入
      const initial = titleName[0].toUpperCase();
      const behind = titleName.slice(1, titleName.length + 1);
      setTitle(initial + behind);
    }
  }, []);

  return (
    <>
      <Header title={title} />
      <_Main>{children}</_Main>
    </>
  );
});

const _Main = styled("main")(() => ({
  position: "absolute",
  left: 50,
  top: 150,
}));
