function Flower(props) {
  
  const cardStyle = {
    backgroundColor: props.petalsColor,
    color: props.centerLeafColor,
    padding: "30px",
    borderRadius: "20px",
    textAlign: "center",
    width: "280px",
    margin: "20px auto",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    fontFamily: "Segoe UI, Tahoma, sans-serif",
    cursor: "pointer"
  };

  const flowerGraphicStyle = {
    width: "70px",
    height: "70px",
    backgroundColor: props.petalsColor, 
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
    backgroundColor: props.centerLeafColor,
    borderRadius: "50%",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
  };


  const handleClick = () => {
    alert(`אני פרח מסוג ${props.name}`);
  };

  return (
    <div style={cardStyle} onClick={handleClick}>
      <h2 style={{ margin: "0 0 8px 0", fontSize: "1.6rem" }}>{props.name}</h2>
      <div style={flowerGraphicStyle}>
        <div style={centerStyle}></div>
      </div>
    </div>
  );
}

export default Flower;