import { Footer, H2, Header, Wrapper } from "~/components";
import { likeList, strengthList } from "~/const/about-me";

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
          <ul>
            {strengthList.map((strength) => (
              <li key={strength} className="list-disc mx-5 mb-2">
                {strength}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <H2>趣味/好きなこと</H2>
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
