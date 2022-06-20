import { FC, memo, ReactNode } from "react";

//components
import { Header } from "./Header";

//MUI
import { styled } from "@mui/material/styles";
import { useMakeTitle } from "../hooks/useMakeTitle";
import { Menubar } from "./Menubar";

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
      <_Main>
        <_Contents>{children}</_Contents>

        <div>
          <Menubar />
        </div>
      </_Main>
    </>
  );
});

const _Main = styled("main")(() => ({
  marginTop: 170,
  marginLeft: 70,
  display: "flex",
  gap: "10%",
  width: "90%",
}));

const _Contents = styled("div")(() => ({
  width: "100%",
}));
