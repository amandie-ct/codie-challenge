import { useForm } from 'react-hook-form'

type FormValues = {
  firstName: string
  lastName: string
  region: string
  firstPokemon: string
  additionPokemon: {
    pokemonName: string
  }[]
  city: string
  date: Date
  time: string
}

const PokemonForm2 = () => {
  const form = useForm<FormValues>()
  const { register, handleSubmit } = form

  const onSubmit = (data: FormValues) => {
    console.log('form submitted', data)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">Nome</label>
        <input
          type="text"
          id="firstName"
          {...register('firstName', {
            required: 'Nome é obrigatório'
          })}
        />

        <label htmlFor="lastName">Nome</label>
        <input
          type="text"
          id="lastName"
          {...register('lastName', {
            required: 'Sobrenome é obrigatório'
          })}
        />

        <label htmlFor="region">Região</label>
        <select {...register('region')} id="region">
          <option value="valor1">Valor 1</option>
          <option value="valor2" selected>
            Valor 2
          </option>
          <option value="valor3">Valor 3</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default PokemonForm2
