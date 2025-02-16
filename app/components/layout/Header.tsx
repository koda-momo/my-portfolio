import clsx from "clsx";
import { FC, useState } from "react";
import { pageNavList } from "~/const/top";

/**
 * Headerコンポーネント.
 */
export const Header: FC = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <header className="relative px-10 h-28 flex lg:gap-20 items-center justify-between lg:justify-start">
      <a href="/" className="hover:opacity-70">
        <img
          src="/top/top-title.png"
          alt="kodamomoのポートフォリオサイト"
          className="w-40 lg:w-60"
        />
      </a>

      {/* PC */}
      <nav className="hidden lg:block">
        <ul className="flex lg:gap-5">
          {pageNavList.map(({ url, name }) => (
            <li key={name}>
              <a href={url} className="hover:text-secondary">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* SP */}
      <div className="lg:hidden">
        <button
          className={clsx(
            "text-4xl z-[20] absolute top-5",
            hamburgerOpen && "text-secondary"
          )}
          onClick={() => setHamburgerOpen((prev) => !prev)}
        >
          {hamburgerOpen ? "×" : "≡"}
        </button>

        {hamburgerOpen && (
          <nav className="bg-tertiary text-primary p-5 pt-16 z-[10] absolute top-0 right-0 w-[50%] h-[100vh]">
            <ul>
              {pageNavList.map(({ url, name }) => (
                <li key={name}>
                  <a href={url} className="py-2 w-[100%] h-[100%] block">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
