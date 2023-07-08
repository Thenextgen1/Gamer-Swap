interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const Button = ({ children }: Props) => {
  return <button className="bg-[#2c6e49]  hover:bg-lightColor hover:font-semibold rounded-md p-2 px-4 mx-2  text-white">{children}</button>;
};
