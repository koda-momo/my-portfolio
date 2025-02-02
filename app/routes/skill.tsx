import { Footer, H2, Header, Wrapper } from "~/components";
import { otherSkillList, outsideList, skillList } from "~/const/skill";

/**
 * スキル.
 */
export default function Skill() {
  return (
    <>
      <Header />

      <Wrapper>
        <div>
          <H2>スキル(現場経験あり)</H2>
          <div className="flex flex-wrap gap-3">
            {skillList.map(({ name, list }) => (
              <div key={name} className="px-5">
                <h3 className="text-2xl">{name}</h3>
                <ul className="my-5">
                  {list.map((listItem) => (
                    <li key={listItem} className="list-disc mx-5 mb-2">
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <H2>スキル(現場経験なし)</H2>
          <div className="flex flex-wrap gap-3">
            {otherSkillList.map(({ name, list }) => (
              <div key={name} className="px-5">
                <h3 className="text-2xl">{name}</h3>
                <ul className="my-5">
                  {list.map((listItem) => (
                    <li key={listItem} className="list-disc mx-5 mb-2">
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <H2>業務外</H2>
          <ul>
            {outsideList.map((listItem) => (
              <li key={listItem} className="list-disc mx-5 mb-2">
                {listItem}
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
