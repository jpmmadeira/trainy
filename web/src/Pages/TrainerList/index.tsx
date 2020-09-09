import React from 'react';

import PageHeader from '../../components/PageHeader';
import TrainerItem from '../../components/TrainerItem';
import Input from '../../components/Input';

import './styles.css';
import Select from '../../components/Select';

function TrainerList() {
    return (
        <div id="page-trainer-list" className="container">
            <PageHeader title="These are the available trainers">
                <form id="search-trainers">

                    <Select name="specialization" label="Specialization"
                        options={[
                            { value: 'Bodybuilding', label: 'Bodybuilding' },
                            { value: 'Crossfit', label: 'Crossfit' },
                            { value: 'Cycling', label: 'Cycling' },
                            { value: 'Swimming', label: 'Swimming' },
                            { value: 'Other', label: 'Other' },


                        ]} />

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

                    <Input type="time" name="time" label="Time" />
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