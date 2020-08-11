import React from 'react';

import PageHeader from '../../components/PageHeader';
import TrainerItem from '../../components/TrainerItem';
import Input from '../../components/Input';

import './styles.css';

function TrainerList() {
    return (
        <div id="page-trainer-list" className="container">
            <PageHeader title="These are the available trainers">
                <form id="search-trainers">
                    <Input name="specialization" label="Specialization" />
                    <Input name="week-day" label="Week Day" />
                    <Input name="time" label="Time" />
                </form>
            </PageHeader>

            <main>
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
                <TrainerItem />
            </main>
        </div>
    );
}

export default TrainerList;