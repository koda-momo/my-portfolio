import { memo, FC } from "react";

//MUI
import { styled } from "@mui/material/styles";

type Props = {
  title: string;
};

/**
 * ヘッダーコンポーネント.
 */
export const Header: FC<Props> = memo(({ title }) => {
  return (
    <_Header>
      <_Title>{title}</_Title>
      <_Line />
      <_Background />
    </_Header>
  );
});

const _Header = styled("div")(() => ({
  position: "absolute",
  left: 0,
  top: 0,
  height: "100%",
}));

const _Background = styled("div")(() => ({
  background: "#E0DECA",
  width: 100,
  height: "100%",
}));

const _Line = styled("div")(() => ({
  position: "absolute",
  left: 0,
  top: 130,
  background: "#FCF9C6",
  width: 500,
  height: 10,
}));

const _Title = styled("div")(() => ({
  position: "absolute",
  left: 10,
  top: 30,
  color: "#9EB23B",
  fontSize: 70,
}));
