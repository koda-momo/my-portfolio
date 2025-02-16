import { FC } from "react";
import clsx from "clsx";
import { Url } from "types";

type Props = {
  item: Url;
};

/**
 * リンクカード.
 */
export const Card: FC<Props> = ({ item }) => {
  return (
    <div className="px-3 w-[100%] lg:w-64 lg:h-40 border-2 border-tertiary rounded-md text-center hover:bg-secondary hover:border-secondary hover:text-primary">
      <a
        href={item.url}
        target={item.url?.includes("http") ? "_blank" : "_self"}
        rel={item.url?.includes("http") ? "noreferrer" : ""}
        className={clsx(
          "w-full h-full p-5",
          !item.image && "flex justify-center items-center"
        )}
      >
        {item.image && (
          <img
            src={item.image}
            alt="イメージ画像"
            className={clsx(
              "w-12 lg:w-20 mx-auto",
              item.rounded && "rounded-full"
            )}
          />
        )}

        <p className={clsx(item.image ? "mt-3" : "text-xl")}>{item.name}</p>
      </a>
    </div>
  );
};
