import { FC, memo, useState } from "react";
import Link from "next/link";

/**
 * メニューバーコンポーネント.
 */
export const Menubar: FC = memo(() => {
  const [menuList] = useState([
    { id: 1, name: "Home" },
    { id: 2, name: "Develop" },
    { id: 3, name: "Skill" },
    { id: 4, name: "Other" },
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
              <Link href={`/${item.name.toLocaleLowerCase()}`}>
                <a>{item.name}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
});
