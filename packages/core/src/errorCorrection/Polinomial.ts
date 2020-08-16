import { antilogAlpha, logAlpha } from './alpha'

type CoefficientExponentObject = {
  [power: number]: number
}

const fromNumberArrayToExponentObject = (coefficients: number[]) => {
  const exponentObject: CoefficientExponentObject = {}

  coefficients.forEach((coefficient, index) => {
    // We skip zero coefficients, as these can't be represented in alpha notation
    if (coefficient === 0) return

    exponentObject[index] = logAlpha(coefficient)
  })

  return exponentObject
}

const fromExponentObjectToNumberArray = (
  exponents: CoefficientExponentObject
) => {
  const maxPower = Math.max(...Object.keys(exponents).map(Number))
  const coefficients = Array(maxPower + 1).fill(0)

  for (const [power, exponent] of Object.entries(exponents)) {
    coefficients[Number(power)] = antilogAlpha(exponent)
  }

  return coefficients
}

export class Polinomial {
  private coefficients: number[]
  // We can use the alpha exponents of the coefficients for ease of multiplication
  private exponents: CoefficientExponentObject

  constructor(coefficients?: number[], exponents?: CoefficientExponentObject) {
    if (coefficients) {
      this.coefficients = coefficients
      this.exponents = fromNumberArrayToExponentObject(coefficients)
    } else if (exponents) {
      this.coefficients = fromExponentObjectToNumberArray(exponents)
      this.exponents = exponents
    } else {
      this.coefficients = []
      this.exponents = {}
    }
  }

  static fromCoef(coefficients: number[]) {
    return new Polinomial(coefficients, undefined)
  }

  static fromCoefExponents(exponents: CoefficientExponentObject) {
    return new Polinomial(undefined, exponents)
  }

  coefficientAtPower(position: number) {
    if (position >= this.coefficients.length) {
      return 0
    }
    return this.coefficients[position]
  }

  map(
    callback: (coefficient: number, index: number, array: number[]) => number
  ) {
    return new Polinomial(this.coefficients.map(callback))
  }

  mapExponent(
    callback: (exponentEntry: [string, number]) => [string | number, number]
  ) {
    const newExponentEntries = Object.entries(this.exponents).map(callback)
    return new Polinomial(undefined, Object.fromEntries(newExponentEntries))
  }

  sum(target: Polinomial) {
    return target.map(
      (coefficient, power) => this.coefficientAtPower(power) ^ coefficient
    )
  }

  multiply(target: Polinomial) {
    const polinomials = Object.entries(
      this.exponents
    ).map(([lefthandSidePower, exponent]) =>
      target.mapExponent(([righthandSidePower, targetExponent]) => [
        Number(lefthandSidePower) + Number(righthandSidePower),
        (exponent +
          targetExponent +
          Math.floor((exponent + targetExponent) / 256)) %
          256,
      ])
    )

    return polinomials.reduce((acc, curr) => acc.sum(curr))
  }

  toCoef() {
    return this.coefficients
  }

  toExponents() {
    return this.exponents
  }
}
