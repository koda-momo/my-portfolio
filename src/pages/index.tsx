import type { NextPage } from "next";
import { User } from "../components/home/User";
import Image from "next/image";

//MUI
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";

/**
 * Home画面.
 */
const Home: NextPage = () => {
  //仮データ
  const siteList = [
    "https://hiyokoyarou.com/wp-content/uploads/2022/06/kirakiraomeme.png",
    "https://hiyokoyarou.com/wp-content/uploads/2022/06/kobuta.png",
    "https://hiyokoyarou.com/wp-content/uploads/2022/05/gorilla_angry.png",
  ];

  return (
    <>
      <User />
      ここに実際は開発物を並べる
      <_Flex>
        <_Wrap>
          <_Ul>
            {siteList.map((item, i) => (
              <_Item key={i}>
                <_Image src={item} width={600} height={300} alt="サイト画像" />
              </_Item>
            ))}
          </_Ul>
          <_Ul>
            {siteList.map((item, i) => (
              <_Item key={i}>
                <_Image src={item} width={600} height={300} alt="サイト画像" />
              </_Item>
            ))}
          </_Ul>
        </_Wrap>
      </_Flex>
    </>
  );
};

const siteImage = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }`;

const _Wrap = styled("div")(() => ({
  display: "flex",
  overflow: "hidden",
  width: 700,
}));

const _Ul = styled("ul")(() => ({
  display: "flex",
  listStyle: "none",
  animation: `${siteImage} 40s infinite linear 1s both`,
  marginLeft: 0,
  padding: 0,
}));

const _Item = styled("li")(() => ({
  width: "calc(100vw / 6)",
  marginLeft: 10,
}));

const _Image = styled(Image)(() => ({
  width: "100%",
}));

const _Flex = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
}));

export default Home;
