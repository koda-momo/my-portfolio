import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/**
 * H2ヘッダー.
 */
export const H2: FC<Props> = ({ children }) => {
  return (
    <h2 className="text-xl mb-4 lg:text-3xl lg:mb-10 text-secondary">
      {children}
    </h2>
  );
};
