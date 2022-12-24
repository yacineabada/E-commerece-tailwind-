export const handledelete = (id, products) => {
  const newarray = products.filter((i) => i.id !== id);

  console.log(newarray);

  return newarray;
};

export const increamentItem = (id, products) => {
  const newarray = products.map((i) =>
    i.id === id ? { ...i, quantity: i.quantity + 1 } : i
  );

  return newarray;
};

export const dicreamentItem = (id, products) => {
  const newarray = products.map((i) =>
    i.id === id || i.quantity > 0 ? { ...i, quantity: i.quantity - 1 } : i
  );

  return newarray;
};
