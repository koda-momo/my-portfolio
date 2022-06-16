import { FC, memo, ReactNode } from "react";

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
  const { makeTitle } = useMakeTitle();

  return (
    <>
      <Header title={makeTitle()} />
      <_Main>{children}</_Main>
    </>
  );
});

const _Main = styled("main")(() => ({
  position: "absolute",
  left: 50,
  top: 150,
}));
