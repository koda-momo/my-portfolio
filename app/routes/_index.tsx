import { Card } from "~/components";
import { pageNavList, urlList } from "~/const/top";
import axios from "axios";
import { useLoaderData } from "@remix-run/react";
import { ZennData } from "types";

/**
 * zennのデータ取得.
 */
export const loader = async () => {
  try {
    const response = await axios.get<{ articles: ZennData[] }>(
      "https://zenn.dev/api/articles?username=koda_momo&order=latest"
    );
    const data = response.data.articles;

    return new Response(JSON.stringify({ zennData: data, error: null }), {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ zennData: null, error: e }), {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  }
};

/**
 * Home.
 */
export default function Index() {
  const { zennData, error } = useLoaderData<typeof loader>();

  return (
    <div>
      <div className="pt-10 lg:pt-0 flex gap-4 w-[70%] justify-center items-center mx-auto">
        <img
          src="/top/top-right.png"
          alt="羊宇宙飛行士"
          className="h-[70px] lg:h-[200px] -scale-x-100 -rotate-12"
        />
        <img
          src="/top/top-title.png"
          alt="kodamomoのポートフォリオ"
          className="h-[70px] lg:h-[200px]"
        />
        <img
          src="/top/top-right.png"
          alt="羊宇宙飛行士"
          className="h-[70px] lg:h-[200px] rotate-12"
        />
      </div>

      <p className="my-16 text-center">2021年10月〜 フロントエンドエンジニア</p>

      <div className="w-[90%] lg:w-[70%] mx-auto pb-20">
        {/* カード */}
        <div className="xl:flex xl:flex-wrap xl:flex-nowrap xl:gap-[10%]">
          {urlList.map(({ name, list }) => (
            <div key={name} className="mt-10 xl:mt-5">
              <h2 className="text-4xl">{name}</h2>
              <div className="flex mt-2 gap-3">
                {list.map((item) => (
                  <Card key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 他ページ */}
        <div className="mt-20">
          <h2 className="text-4xl">他ページ</h2>
          <div className="flex flex-col lg:flex-row gap-3 mt-5">
            {pageNavList.map(
              (item) =>
                item.name !== "Home" && <Card key={item.name} item={item} />
            )}
          </div>
        </div>

        {zennData && !error && (
          <div className="mt-20">
            <h2 className="text-4xl">Zenn 記事一覧</h2>
            <ul className="mt-10 h-[200px] overflow-y-scroll border-2 border-tertiary rounded-md p-5">
              {zennData.map((article: ZennData) => (
                <li key={article.title} className="list-disc mb-5 flex gap-3">
                  <p>{article.emoji}</p>
                  <a
                    href={`https://zenn.dev/${article.path}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-secondary"
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
