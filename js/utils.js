// função que verificar se o valor enviado é um Nan ou vazio.
export function notANumber(value) {
  return isNaN(value) || value == ""
}

// função de calculo do IMC
export function calculateIMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
} 