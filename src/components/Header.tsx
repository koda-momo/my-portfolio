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
    <>
      <_Title>{title}</_Title>
      <_Line />
    </>
  );
});

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
