import Knex from 'knex';

export async function up(knex: Knex) {
    // Alterações no banco
    return knex.schema.createTable('points', table => {
        //criar os campos da table
        table.increments('id').primary();
        table.string('image').notNullable;
        table.string('name').notNullable;
        table.string('email').notNullable;
        table.string('whatsapp').notNullable;
        table.decimal('latitude').notNullable;
        table.decimal('longitude').notNullable;
        table.string('city').notNullable;
        table.string('uf', 2).notNullable; // 2 param = tamanho do campo

    });
}

export async function down(knex: Knex) {
    // Voltar atras
    return knex.schema.dropTable('points');
}