import { FC, memo, useState } from "react";
import Link from "next/link";

/**
 * メニューバーコンポーネント.
 */
export const Menubar: FC = memo(() => {
  const [menuList] = useState([
    { id: 1, name: "Home" },
    { id: 2, name: "develop" },
    { id: 3, name: "skill" },
    { id: 4, name: "other" },
  ]);
  return (
    <>
      menu
      <ul>
        {menuList.map((item) => (
          <li key={item.id}>
            {item.name === "Home" ? (
              <Link href="/">
                <a>{item.name}</a>
              </Link>
            ) : (
              <Link href={`/${item.name}`}>
                <a>{item.name}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
});
