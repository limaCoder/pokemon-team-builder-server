import knex, { Knex } from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('Pokemon', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('type').notNullable();

    table.integer('PokemonTeam_id').notNullable().references('id').inTable('PokemonTeam').onUpdate('CASCADE').onDelete('CASCADE')
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('Pokemon');
}