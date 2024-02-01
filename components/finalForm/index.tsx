import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  lastName: yup.string().required('Sobrenome é obrigatório'),
  region: yup.string().required('Região é obrigatória'),
  city: yup.string().required('Cidade é obrigatória'),
  pokemon: yup
    .array()
    .of(yup.string().required('Adicione no mínimo 1 pokémon')),
  dateTime: yup.date().default(() => new Date())
})

type FormValues = {
  name: string
  lastName: string
  region: string
  city: string
  pokemon: []
  dateTime: Date
}

export const YupPokemonForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      lastName: '',
      region: '',
      city: '',
      pokemon: [],
      dateTime: new Date()
    },
    resolver: yupResolver(schema)
  })
}
;<form></form>
