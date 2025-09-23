function array(str) {
  let parts = str.split(",");   
  if (parts.length < 3) return null;
  return parts.slice(1, -1).join(" "); 
}