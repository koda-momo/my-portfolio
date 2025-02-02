import { FC } from "react";
import { pageNavList } from "~/const/top";

/**
 * Headerコンポーネント.
 */
export const Header: FC = () => {
  return (
    <header className="px-10 h-28 flex gap-20 items-center">
      <a href="/" className="hover:opacity-70">
        <img
          src="/top/top-title.png"
          alt="kodamomoのポートフォリオサイト"
          className="w-60"
        />
      </a>

      <nav>
        <ul className="flex gap-5">
          {pageNavList.map(({ url, name }) => (
            <li key={name}>
              <a href={url} className="hover:text-secondary">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
