export class Polinomial {
  private coefficients: number[]

  constructor(coefficients: number[]) {
    this.coefficients = coefficients
  }

  static fromCoef(coefficients: number[]) {
    return new Polinomial(coefficients)
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

  mapWithPower(
    callback: (coefficient: number, index: number) => [number, number]
  ) {
    const newCoefMapping = this.coefficients.map(callback)
    const maxPower = Math.max(...newCoefMapping.map(([, power]) => power))
    const newCoeffiecients = Array(maxPower).fill(0)

    for (const [coefficient, index] of newCoefMapping) {
      newCoeffiecients[index] = coefficient
    }

    return new Polinomial(newCoeffiecients)
  }

  sum(target: Polinomial) {
    return target.map(
      (targetExponential, index) =>
        this.coefficientAtPower(index) + targetExponential
    )
  }

  multiply(target: Polinomial) {
    const [
      lefthandSide,
      righthandSide,
    ] = this.coefficients.map((coefficient, lefthandSidePower) =>
      target.mapWithPower((targetCoefficient, righthandSidePower) => [
        coefficient * targetCoefficient,
        lefthandSidePower + righthandSidePower,
      ])
    )

    return lefthandSide.sum(righthandSide)
  }

  toCoef() {
    return this.coefficients
  }
}
