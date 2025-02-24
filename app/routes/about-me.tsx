import { Footer, H2, Header, Wrapper } from "~/components";
import { likeList, mindList, strengthList } from "~/const/about-me";

/**
 * 私について.
 */
export default function AboutMe() {
  return (
    <>
      <Header />

      <Wrapper>
        <div>
          <H2>つよみ</H2>
          <div>
            {strengthList.map((strength) => (
              <div key={strength.title}>
                <h3 className="text-lg mt-5">{strength.title}</h3>
                <p
                  className="text-sm mt-2 lg:text-base"
                  dangerouslySetInnerHTML={{
                    __html: strength.text,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <H2>仕事で意識していること</H2>
          <ul>
            {mindList.map((like) => (
              <li key={like} className="list-disc mx-5 mb-2">
                {like}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <H2>趣味 / 好きなこと</H2>
          <ul>
            {likeList.map((like) => (
              <li key={like} className="list-disc mx-5 mb-2">
                {like}
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
