import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import PokemonSelect from './Select'

interface Pokemon {
  id: number
  name: string
}

interface FormData {
  pokemons: Pokemon[]
}

const PokemonForm: React.FC = () => {
  const { control, register, handleSubmit, setValue, getValues } =
    useForm<FormData>({
      defaultValues: {
        pokemons: [{ id: 0, name: '' }]
      }
    })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'pokemons'
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  const addPokemonSelect = () => {
    const currentValues = getValues('pokemons')
    if (currentValues.length < 6) {
      append({ id: 0, name: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <PokemonSelect
          key={field.id}
          register={register}
          options={[]}
          index={index}
          remove={() => remove(index)}
        />
      ))}
      <button type="button" onClick={addPokemonSelect}>
        Add Pokemon
      </button>
      <button type="submit">Submit</button>
    </form>
  )
}

export default PokemonForm
