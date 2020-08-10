import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string,
}

export default class WorkoutsController {
    async index(request: Request, response: Response) {
        const filters = request.query;

        const specialization = filters.specialization as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;


        if (!week_day || !specialization || !time) {
            return response.status(400).json({
                error: 'Missing filters to search workouts'
            })
        }

        const timeInMinutes = convertHourToMinutes(time);

        const workouts = await db('workouts')
            .whereExists(function () {
                this.select('workout_schedule.*')
                    .from('workout_schedule')
                    .whereRaw('`workout_schedule`.`workout_id` = `workouts`.`id`')
                    .whereRaw('`workout_schedule`.`week_day` = ??', [Number(week_day)])
                    .whereRaw('`workout_schedule`.`from` <= ??', [timeInMinutes])
                    .whereRaw('`workout_schedule`.`to` > ??', [timeInMinutes])
            })
            .where('workouts.specialization', '=', specialization)
            .join('users', 'workouts.user_id', '=', 'users.id')
            .select(['workouts.*', 'users.*']);

        return response.json(workouts);
    }

    async create(request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            specialization,
            cost,
            schedule,
        } = request.body;

        const trx = await db.transaction();

        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });

            const user_id = insertedUsersIds[0];

            const insertedWorkoutsIds = await trx('workouts').insert({
                specialization,
                cost,
                user_id,
            });

            const workout_id = insertedWorkoutsIds[0];

            const workoutSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    workout_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to)
                };
            })

            await trx('workout_schedule').insert(workoutSchedule);

            await trx.commit();

            return response.status(201).send();
        } catch (error) {
            await trx.rollback();

            return response.status(400).json({
                error: 'Unexpected error while creating new workout'
            })
        }
    }
}