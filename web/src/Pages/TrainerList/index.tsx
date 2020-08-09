import React from 'react';

import PageHeader from '../../components/PageHeader';
import TrainerItem from '../../components/TrainerItem';

import './styles.css';

function TrainerList() {
    return (
        <div id="page-trainer-list" className="container">
            <PageHeader title="These are the available trainers">
                <form id="search-trainers">
                    <div className="input-block">
                        <label htmlFor="specialization">Specialization</label>
                        <input type="text" id="specialization" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Week Day</label>
                        <input type="text" id="week-day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Time</label>
                        <input type="text" id="time" />
                    </div>
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