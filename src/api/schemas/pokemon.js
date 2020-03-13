import { object, number, array, string } from "yup";


export const Pokemon = object({
  id: number(),
  height: number(),
  name: string(),
  weight: string()
})


export const PokemonList = object({
  count: number().default(0),
  results: array()
    .of(
      object({
        name: string(),
        url: string()
      })
    )
    .default([])
});
