import React, { FormEvent, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import TrainerItem, { Trainer } from '../../components/TrainerItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';


function TrainerList() {
    const [trainers, setTrainers] = useState([]);

    const [specialization, setSpecialization] = useState('');
    const [weekDay, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTrainers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('workouts', {
            params: {
                specialization,
                week_day: weekDay,
                time
            }
        });

        console.log(response.data)

        setTrainers(response.data);
    }

    return (
        <div id="page-trainer-list" className="container">
            <PageHeader title="These are the available trainers">
                <form id="search-trainers" onSubmit={searchTrainers}>

                    <Select
                        name="specialization"
                        label="Specialization"
                        value={specialization}
                        onChange={e => { setSpecialization(e.target.value) }}
                        options={[
                            { value: 'Bodybuilding', label: 'Bodybuilding' },
                            { value: 'Crossfit', label: 'Crossfit' },
                            { value: 'Cycling', label: 'Cycling' },
                            { value: 'Running', label: 'Running' },
                            { value: 'Swimming', label: 'Swimming' },
                            { value: 'Other', label: 'Other' },


                        ]} />

                    <Select
                        name="week-day"
                        label="Week Day"
                        value={weekDay}
                        onChange={e => { setWeekDay(e.target.value) }}
                        options={[
                            { value: '0', label: 'Sunday' },
                            { value: '1', label: 'Monday' },
                            { value: '2', label: 'Tuesday' },
                            { value: '3', label: 'Wednesday' },
                            { value: '4', label: 'Thursday' },
                            { value: '5', label: 'Friday' },
                            { value: '6', label: 'Saturday' },
                        ]} />

                    <Input
                        type="time"
                        name="time"
                        label="Time"
                        value={time}
                        onChange={e => { setTime(e.target.value) }}
                    />

                    <button type="submit">Search</button>
                </form>
            </PageHeader>

            <main>
                {trainers.map((trainer: Trainer) => {
                    return <TrainerItem key={trainer.id} trainer={trainer} />;
                })}
            </main>
        </div>
    );
}

export default TrainerList;