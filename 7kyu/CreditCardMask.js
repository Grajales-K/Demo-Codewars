// return masked string
function maskify(cc) {
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

maskify( "jjsksjfi100045670");