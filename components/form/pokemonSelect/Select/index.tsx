import { FieldValues, UseFormRegister } from 'react-hook-form'

interface Pokemon {
  id: number
  name: string
}

interface IPokemonSelectProps {
  register: UseFormRegister<FieldValues>
  options: Pokemon[]
  index: number
  remove: () => void
}

const APokemonSelect: React.FC<IPokemonSelectProps> = ({
  register,
  options,
  index,
  remove
}) => {
  return (
    <div>
      <select {...register(`pokemons[${index}].id` as const)} required>
        <option value="">Select a Pokemon</option>
        {options.map((pokemon) => (
          <option key={pokemon.id} value={pokemon.id}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button type="button" onClick={remove}>
        Remove
      </button>
    </div>
  )
}

export default APokemonSelect
