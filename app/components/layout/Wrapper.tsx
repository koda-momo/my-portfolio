import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/**
 * ページwrapper.
 */
export const Wrapper: FC<Props> = ({ children }) => {
  return (
    <div className="px-5 pb-40 lg:pt-10 lg:px-20 lg:pb-20">{children}</div>
  );
};
