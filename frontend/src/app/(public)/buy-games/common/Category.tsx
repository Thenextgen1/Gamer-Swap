const Category = () => {
  const category = [
    { id: 1, title: "Board Games" },

    { id: 2, title: "Kids Games" },
    { id: 3, title: "Mobile Games" },
    { id: 4, title: "Card Games" },
    { id: 5, title: "Video Games" },
  ];

  return (
    <ul>
      {category.map((details) => {
        return <li key={details.id + details.title}>{details.title}</li>;
      })}
    </ul>
  );
};

export default Category;
