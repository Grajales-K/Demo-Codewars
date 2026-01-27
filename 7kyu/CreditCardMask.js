// return masked string
function maskify(cc) {
  // console.log(cc);

  if (cc.length <= 4) {
    return cc;
  }

  const lastFour = cc.slice(-4);
  // console.log(lastFour);

  const maskingPart = cc.slice(0, -4);
  // console.log(maskingPart);

  const masked = "#".repeat(maskingPart.length);
  console.log(masked);

  // console.log(masked + lastFour);

  return masked + lastFour;
}

module.exports = maskify;




function maskify2(cc) {
  console.log(cc);

  if (cc.length <= 4) {
    return cc;
  }
  const lastFour = cc.slice(-4);
  console.log(lastFour);

  const maskingPart = cc.slice(0, -4);
  console.log(maskingPart);

  const masked = "#".repeat(maskingPart.length);
  console.log(masked);

  console.log(masked + lastFour);

  return masked + lastFour;
}

maskify2( "jjsksjfi100045670"); //invoke the function to run node.