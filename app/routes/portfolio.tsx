import { Footer, Header, Wrapper } from "~/components";
import { portfolioList } from "~/const/portfolio";

/**
 * 本サイトについて.
 */
export default function Like() {
  return (
    <>
      <Header />

      <Wrapper>
        本サイトを作成するにあたり、下記を利用しております。
        <a href="https://remix.run/" target="_blank" rel="noreferrer">
          <img
            src="/portfolio/logo-dark.png"
            alt="Remix"
            className="w-[200px]"
          />
        </a>
        {/* リンク */}
        <ul className="mt-10 mx-6">
          {portfolioList.map(({ url, name }) => (
            <li key={name} className="list-disc mb-3">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </Wrapper>
      <Footer />
    </>
  );
}
