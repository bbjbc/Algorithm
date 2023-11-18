function solution(polynomial) {
  const terms = polynomial.split(" + ");
  const termArr = { x: 0, const: 0 };

  for (let i = 0; i < terms.length; i++) {
    let coefficient = 1;
    let xIdx = terms[i].indexOf("x");

    if (xIdx !== -1) {
      if (xIdx === 0) {
        termArr["x"] += coefficient;
      } else {
        coefficient = Number(terms[i].slice(0, xIdx));
        termArr["x"] += coefficient;
      }
    } else {
      termArr["const"] += Number(terms[i]);
    }
  }

  let result = "";

  if (termArr["x"] !== 0) {
    result += termArr["x"] === 1 ? "x" : termArr["x"] + "x";
  }

  if (termArr["const"] !== 0) {
    if (result !== "") {
      result += " + ";
    }
    result += termArr["const"];
  }

  return result;
}
