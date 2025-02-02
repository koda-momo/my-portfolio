import { CareerFlow, Footer, H2, Header, Wrapper } from "~/components";
import { careerList, itCareerList } from "~/const/career";

/**
 * 職歴.
 */
export default function Job() {
  return (
    <>
      <Header />
      <Wrapper>
        <div>
          <H2>経歴</H2>
          {careerList.map((career, index) => (
            <CareerFlow key={career.name} career={career} index={index} />
          ))}
        </div>
        <div className="mt-28">
          <H2>エンジニア歴</H2>
          <p className="mb-10">
            全てフロントエンドエンジニアとして、従事しております。
          </p>
          {itCareerList.map((career, index) => (
            <CareerFlow key={career.name} career={career} index={index} />
          ))}
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
