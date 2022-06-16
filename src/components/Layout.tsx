import { FC, memo, ReactNode, useEffect, useState } from "react";

//components
import { Header } from "./Header";

//MUI
import { styled } from "@mui/material/styles";
import { useMakeTitle } from "../hooks/useMakeTitle";

type Props = {
  children: ReactNode;
};

/**
 * 全体のレイアウト用コンポーネント.
 */
export const Layout: FC<Props> = memo(({ children }) => {
  //ページタイトル
  const [title, setTitle] = useState("");

  const { makeTitle } = useMakeTitle();

  /**
   * パスからページタイトルを作成.
   */
  useEffect(() => {
    setTitle(makeTitle());
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
