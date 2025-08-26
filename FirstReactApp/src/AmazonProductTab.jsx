import AmazonProduct from "./AmazonProduct";

export default function AmazonProductTab() {
    let styles = {
        display : "flex",
        flexWrap : "wrap",
        justifyContent : "center",
        alignItem : "center"
    }
  return (
    <div style={styles}>
      
      <AmazonProduct title="Logitech MX Master" idx={0}/>
      <AmazonProduct title="Apple Pencil" idx={1}/>
      <AmazonProduct title="Zebronics Keyboard" idx={2}/>
      <AmazonProduct title="Patronics Mouse" idx={3}/>
    </div>
  );
}
 