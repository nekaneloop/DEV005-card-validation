const validator = {
  isValid: function (valor) {
    let resultado = 0;
    const splitText = [...valor];
    const revertText = splitText.reverse();
    // eslint-disable-next-line no-console
    console.log("revert: ", revertText);

    for (let i = 0; i < revertText.length; i++) {
      let digito = parseInt(revertText[i]);
      if (i % 2 !== 0) {
        digito *= 2;
        if (digito > 9) {
          digito -= 9;
        }
      }
      resultado += digito;
    }
    // eslint-disable-next-line no-console
    console.log(resultado);
    return resultado % 10 === 0;
  },

  maskify: function (creditCardNumber) {
    const convirtiendo = creditCardNumber.split("");
    let result = ''; 
    for (let i = 0; i < creditCardNumber.length - 4; i++) {
      convirtiendo[i] = "#";
    }
    for (let i = 0; i < convirtiendo.length; i ++) {
      result = result + convirtiendo[i];
    }
    
    console.log(result);
   
    return result 
  },
};

export default validator;
