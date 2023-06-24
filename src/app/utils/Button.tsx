interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const Button = ({ children }: Props) => {
  return <button className="">{children}</button>;
};
