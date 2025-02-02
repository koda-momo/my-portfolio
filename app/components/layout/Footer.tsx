import { FC } from "react";

/**
 * Footerコンポーネント.
 */
export const Footer: FC = () => {
  return (
    <footer className="fixed bottom-0 w-[95%]">
      <a href="/" className="block w-[270px] ml-auto mb-10 group">
        <img
          src="/goback-home.png"
          alt="Homeにもどる"
          className="w-[150px] mt-10"
        />
        <img
          src="/top/top-right.png"
          alt="羊宇宙飛行士"
          className="w-[150px] ml-auto rotate-12 mt-[-50px] group-hover:rotate-0 group-hover:transition"
        />
      </a>
    </footer>
  );
};
