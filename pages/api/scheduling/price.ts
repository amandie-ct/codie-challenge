const Payment = (pokemonNumber: number, pokemonGeneration: number) => {
  let pricePerPokemon = 70 * pokemonNumber
  let generationalTax = pokemonGeneration * 0.03

  return generationalTax + pricePerPokemon
}
