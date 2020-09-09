import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textaerea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
    return (
        <div id="page-trainer-form" className="container">
            <PageHeader
                title="It's a pleasure to have you as Trainy"
                description="Fill the form below and be with us"
            />
            <main>
                <fieldset>
                    <legend>Your personal data</legend>
                    <Input name="name" label="Name" />
                    <Input name="avatar" label="Avatar URL" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biography" />
                </fieldset>

                <fieldset>
                    <legend>About your workouts</legend>
                    <Select name="specialization" label="Specialization"
                        options={[
                            { value: 'Bodybuilding', label: 'Bodybuilding' },
                            { value: 'Crossfit', label: 'Crossfit' },
                            { value: 'Cycling', label: 'Cycling' },
                            { value: 'Swimming', label: 'Swimming' },
                            { value: 'Other', label: 'Other' },


                        ]} />
                    <Input name="cost" label="Price per hour" />
                </fieldset>

                <fieldset>
                    <legend>
                        Avaialble Schedules
                        <button type="button">
                            + New Schedule
                            </button>
                    </legend>

                    <div className="schedule-item">
                        <Select name="week-day" label="Week Day"
                            options={[
                                { value: '0', label: 'Sunday' },
                                { value: '1', label: 'Monday' },
                                { value: '2', label: 'Tuesday' },
                                { value: '3', label: 'Wednesday' },
                                { value: '4', label: 'Thursday' },
                                { value: '5', label: 'Friday' },
                                { value: '6', label: 'Saturday' },
                            ]} />

                        <Input name="from" label="From" type="time"/>
                        <Input name="to" label="To" type="time" />
                    </div>
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Important warning" />
                        Important! <br />
                        Fill all fields
                    </p>
                    <button type="button">
                        Be a trainy
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;