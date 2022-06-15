import { FC, memo, ReactNode } from "react";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

/**
 * 全体のレイアウト用コンポーネント.
 */
export const Layout: FC<Props> = memo(({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
});
