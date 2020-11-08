import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';
import './styles.css';

function TrainerForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [specialization, setSpecialization] = useState('');
    const [cost, setCost] = useState('');

    const [schedulesItems, setScheduleItens] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItens([
            ...schedulesItems,
            { week_day: 0, from: '', to: '' }
        ])
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updateScheduleItems = schedulesItems.map((schedulesItem, index) => {
            if (index === position) {
                return { ...schedulesItem, [field]: value };
            }

            return schedulesItem;
        });

        setScheduleItens(updateScheduleItems);
    }

    function handleCreateWorkout(e: FormEvent) {
        e.preventDefault();

        api.post('workouts', {
            name,
            avatar,
            whatsapp,
            bio,
            specialization,
            cost: Number(cost),
            schedule: schedulesItems
        }).then(() => {
            alert('Registered successfully!');
            history.push('/');
        }).catch(() => {
            alert('Registration error!');
        })
    }

    return (
        <div id="page-trainer-form" className="container">
            <PageHeader
                title="It's a pleasure to have you as Trainy"
                description="Fill the form below and be with us"
            />

            <main>
                <form onSubmit={handleCreateWorkout}>
                    <fieldset>
                        <legend>Your personal data</legend>

                        <Input
                            name="name"
                            label="Name"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />

                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />

                        <Input
                            name="whatsapp"
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />

                        <Textarea
                            name="bio"
                            label="Biography"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Specialization</legend>

                        <Select
                            name="specialization"
                            label="Specialization"
                            value={specialization}
                            onChange={(e) => { setSpecialization(e.target.value) }}
                            options={[
                                { value: 'Bodybuilding', label: 'Bodybuilding' },
                                { value: 'Crossfit', label: 'Crossfit' },
                                { value: 'Cycling', label: 'Cycling' },
                                { value: 'Running', label: 'Running' },
                                { value: 'Swimming', label: 'Swimming' },
                                { value: 'Other', label: 'Other' },
                            ]}
                        />

                        <Input
                            name="cost"
                            label="Price per hour (€)"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Available Schedules
                            <button type="button" onClick={addNewScheduleItem}>
                                + New Schedule
                            </button>
                        </legend>

                        {schedulesItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Week Day"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Sunday' },
                                            { value: '1', label: 'Monday' },
                                            { value: '2', label: 'Tuesday' },
                                            { value: '3', label: 'Wednesday' },
                                            { value: '4', label: 'Thursday' },
                                            { value: '5', label: 'Friday' },
                                            { value: '6', label: 'Saturday' },
                                        ]}
                                    />

                                    <Input
                                        name="from"
                                        label="From"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />

                                    <Input
                                        name="to"
                                        label="To"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
                                </div>
                            );
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante" />
                            Important! <br />
                            Fill all fields
                        </p>
                        <button type="submit">
                            Be a Trainy
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TrainerForm;