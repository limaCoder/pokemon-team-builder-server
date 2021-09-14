import express, { Request, Response } from 'express';
import db from './database/connection';

const routes = express.Router();

routes.get('/list-pokemons-team',  async (req: Request, res: Response) => {
  const pokemons = await db('Pokemon')
    .whereExists(function() {
      this.select('Pokemon.*')
        .from('Pokemon')
    })

  return res.json(pokemons)
});

routes.post('/create-pokemons-team', async (req: Request, res: Response) => {
  try {
    const { id, name, type, teamName, pokemonData } = req.body
    
    const pokemonMap = pokemonData.map((pokemonItem: any) => {
      return { pokemonItem, name, type }
    });

    await db('PokemonTeam').insert({ teamName, pokemonMap })

    return res.send()

  } catch (err) {
    console.log(err)
  }
});

routes.post('/create-pokemons', async (req: Request, res: Response) => {
  try {
    const { id, name, type } = req.body
    
    const insertPokemonId =  await db('Pokemon').insert({ id, name, type });

    const pokemon_id = insertPokemonId[0]

    await db('Pokemon').insert({ pokemon_id })

    return res.send()

  } catch (err) {
    console.log(err)
  }
});

export default routes;