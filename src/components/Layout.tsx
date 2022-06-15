import { FC, memo, ReactNode } from "react";
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
  return (
    <>
      <Header title="Home" />
      <_Main>{children}</_Main>
    </>
  );
});

const _Main = styled("main")(() => ({
  position: "absolute",
  left: 50,
  top: 150,
}));
