import knex, { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('PokemonTeam', table => {
    table.increments('id').primary();
    table.string('teamName').notNullable();
    table.string('pokemonMap').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('PokemonTeam');
}