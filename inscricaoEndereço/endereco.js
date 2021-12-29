jQuery.validator.addMethod("cep", function(value, element) {
  return this.optional(element) || /^[0-9]{5}-[0-9]{3}$/.test(value);
}, "Por favor, digite um CEP válido");