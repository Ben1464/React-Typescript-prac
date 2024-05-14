function listGrroup() {
  const items = ["Nairobi", "Nanyuki", "Embu", "Kirinyaga"];
  return (
    <>
      <h1>List Items</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key= {item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default listGrroup;
