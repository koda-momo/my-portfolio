import clsx from "clsx";
import { FC, useState } from "react";

type Props = {
  title: string;
  list: string[];
};

/**
 * アコーディオン.
 * @description PCの場合はデフォルトでopen
 */
export const Accordion: FC<Props> = ({ title, list }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-5 mt-4 lg:mt-0">
      <button
        className="flex justify-between w-[100%] lg:w-auto"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <h3 className="text-xl lg:text-2xl">{title}</h3>
        <div
          className={clsx(
            "w-3 h-3 border-tertiary border-b-2  border-solid lg:hidden transition-transform duration-300 ease-in-out",
            open ? "rotate-45 border-r-2" : "-rotate-45 border-l-2"
          )}
        />
      </button>

      {/* PC */}
      <ul className="hidden lg:block my-5">
        {list.map((listItem) => (
          <li key={listItem} className="list-disc mx-5 mb-2">
            {listItem}
          </li>
        ))}
      </ul>

      {/* SP */}
      {open && (
        <ul className="lg:hidden mt-4 mb-10">
          {list.map((listItem) => (
            <li key={listItem} className="list-disc mx-5 mb-2">
              {listItem}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
