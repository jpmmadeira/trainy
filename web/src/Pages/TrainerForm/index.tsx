import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

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
                </fieldset>

                <fieldset>
                    <legend>About your workouts</legend>
                    <Input name="type" label="Specialization" />
                    <Input name="cost" label="Price per hour" />
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