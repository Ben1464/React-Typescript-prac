function listGrroup() {
  let items = ["Nairobi", "Nanyuki", "Embu", "Kirinyaga"];
  return (
    <>
      <h1>List Items</h1>
      {items.length ===0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key= {item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default listGrroup;
