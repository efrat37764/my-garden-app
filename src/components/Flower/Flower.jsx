function Flower() {
  const flowerName = "שושנת העמקים";
  const petalsColor = "#FFC1E3";     
  const centerLeafColor = "#f358c9";

  const cardStyle = {
    backgroundColor: petalsColor,
    color: centerLeafColor,
    padding: "30px",
    borderRadius: "20px",
    textAlign: "center",
    width: "280px",
    margin: "20px auto",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    fontFamily: "Segoe UI, Tahoma, sans-serif"
  };

  const flowerGraphicStyle = {
    width: "70px",
    height: "70px",
    backgroundColor: "#ef94d5", 
    borderRadius: "50%",
    margin: "20px auto 0 auto",
    position: "relative",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  const centerStyle = {
    width: "30px",
    height: "30px",
    backgroundColor: centerLeafColor, // מציג את הצבע מהמשתנה
    borderRadius: "50%",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ margin: "0 0 8px 0", fontSize: "1.6rem" }}>{flowerName}</h2>
      <div style={flowerGraphicStyle}>
        <div style={centerStyle}></div>
      </div>
    </div>
  );
}

export default Flower;