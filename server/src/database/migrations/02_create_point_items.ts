import Knex from 'knex';

export async function up(knex: Knex) {
    // Alterações no banco
    return knex.schema.createTable('point_items', table => {
        //criar os campos da table
        table.increments('id').primary();

        //chave estrangeira
        table.integer('point_id')
        .notNullable()
        .references('id')
        .inTable('points');

        table.integer('item_id')
        .notNullable()
        .references('id')
        .inTable('items');

    });
}

export async function down(knex: Knex) {
    // Voltar atras
    return knex.schema.dropTable('point_itens');
}