import { CSSProperties, FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const style: CSSProperties = {
  color: "red",
  textDecoration: "underline",
};

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({ href, text }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
