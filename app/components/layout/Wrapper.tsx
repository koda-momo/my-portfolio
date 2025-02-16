import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/**
 * ページwrapper.
 */
export const Wrapper: FC<Props> = ({ children }) => {
  return <div className="pt-10 pb-72 px-20 xl:pb-20">{children}</div>;
};