import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TrainerItem() {
    return (
        <article className="trainer-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/55503995?s=460&u=10792bd9c1c4dfb9ca9b288ec99b196f09a662a5&v=4" alt="avatar" />
                <div>
                    <strong>João Madeira</strong>
                    <span>Bodybuilding</span>
                </div>
            </header>

            <p>
                Enthusiast for everything about bodybuilding train
                <br></br>
                <br></br>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            <footer>
                <p>
                    Price/hour
                            <strong>80,00€</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Contact me
                </button>
            </footer>
        </article >
    )
}

export default TrainerItem;