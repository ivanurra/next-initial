import { useRouter } from "next/router";
import Link from "next/link";

const style = {
  color: "red",
  textDecoration: "underline",
};

export const ActiveLink = ({ href, text }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : null}>{text}</a>
    </Link>
  );
};
