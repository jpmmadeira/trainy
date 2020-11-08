import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

import './styles.css';

export interface Trainer {
    id: number
    avatar: string
    bio: string
    cost: number
    name: string
    specialization: string
    whatsapp: string
}

interface TrainerItemProps {
    trainer: Trainer
}

const TrainerItem: React.FC<TrainerItemProps> = ({ trainer }) => {

    function createNewConnection() {
        api.post('connections', { user_id: trainer.id });
    }

    return (
        <article className="trainer-item">
            <header>
                <img src={trainer.avatar} alt={trainer.name} />
                <div>
                    <strong>{trainer.name}</strong>
                    <span>{trainer.specialization}</span>
                </div>
            </header>

            <p>
                {trainer.bio}
            </p>

            <footer>
                <p>
                    Price/hour
                            <strong>{trainer.cost}€</strong>
                </p>
                <a
                    target="blank"
                    onClick={createNewConnection}
                    href={`https://wa.me/${trainer.whatsapp}`}
                >
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Contact me
                </a>
            </footer>
        </article >
    )
}

export default TrainerItem;