import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('workout_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.string('from').notNullable();
        table.string('to').notNullable();

        table.integer('workout_id')
            .notNullable()
            .references('id')
            .inTable('workouts')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('workout_schedule');
}
