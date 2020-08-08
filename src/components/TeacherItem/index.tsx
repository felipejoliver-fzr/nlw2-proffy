import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/41312615?s=400&u=2719decf34ebcfd4b1e82fb930a9ee16792acfbe&v=4" alt="Felipe Oliveira" />
                <div>
                    <strong>Felipe Oliveira</strong>
                    <span>Node</span>
                </div>
            </header>

            <p>
                Descrição aqui
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 100,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;