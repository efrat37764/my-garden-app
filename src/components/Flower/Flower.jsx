function Flower() {
  const flowerName = "שושנת העמקים";
  const petalsColor = "pink";
  const centerLeafColor = "gold";

  const cardStyle = {
    backgroundColor: "#fff",
    border: "2px dashed #81c784",
    borderRadius: "12px",
    padding: "15px",
    textAlign: "center",
    width: "200px",
    margin: "10px auto"
  };

  const graphicStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: petalsColor,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  };

  const centerStyle = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: centerLeafColor
  };

  return (
    <div style={cardStyle}>
      <h2>{flowerName}</h2>
      <div style={graphicStyle}>
        <div style={centerStyle}></div>
      </div>
    </div>
  );
}

export default Flower;