import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/**
 * ページwrapper.
 */
export const Wrapper: FC<Props> = ({ children }) => {
  return <div className="pt-10 pb-20 px-20">{children}</div>;
};
