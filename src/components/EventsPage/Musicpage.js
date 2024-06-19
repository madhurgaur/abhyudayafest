import React, { useState, useEffect } from 'react';
import './event.css';
import { Link } from 'react-router-dom';

const MusicPage = () => {
    const [activeEvent, setActiveEvent] = useState('Raga');
    const [content, setContent] = useState({});

    useEffect(() => {
        updateContent('Raga');
    }, []);

    const updateContent = (eventName) => {
        setActiveEvent(eventName);

        const contentMap = {
            'Raga': {
                header: 'RAGA',
                tagline: 'Solo singing competition',
                about: 'Gather your crew, synchronize your steps, and bring your collective energy to the stage. From high-energy Bollywood medleys to captivating thematic performances, showcase your teamwork, precision, and artistic fusion in a mesmerizing display of group dance dynamics. Let your creativity shine as you captivate the audience with synchronized moves, storytelling, and a vibrant display of diverse dance styles!',
                rules: [
                    'Participants should also get their submitted audios on a pen drive or their mobile phone. Live music is not allowed.',
                    'Stage specification - Area will be approximately 20ft x 25ft.',
                    'In case of malfunctioning of any equipment provided, the participant will be allowed to repeat the performance from the beginning or from the point of disruption that the participant wishes, with the consent of the judges.',
                    'Accessories, costumes and props will have to be arranged by the participants.',
                    'Time Limit: 12 mins (Music on to Music off)',
                    'Audio Submission Deadline: 22nd January, 2024',
                    'Submission Format: Mail the audio at dance.sf2024@gmail.com with the subject “Centrifuge Audio: <College Name>”.',
                    'Judging Criteria: Synchronization and Coordination (40 points), Choreography and Creativity (30 points), Artistic Presentation (30 points)',
                ],
            },
            'Mel-Jol': {
                header: 'MEL-JOL',
                tagline: 'Duet competition',
                about: 'Gather your crew, synchronize your steps, and bring your collective energy to the stage. From high-energy Bollywood medleys to captivating thematic performances, showcase your teamwork, precision, and artistic fusion in a mesmerizing display of group dance dynamics. Let your creativity shine as you captivate the audience with synchronized moves, storytelling, and a vibrant display of diverse dance styles!',
                rules: [
                    'Participants should also get their submitted audios on a pen drive or their mobile phone. Live music is not allowed.',
                    'Stage specification - Area will be approximately 20ft x 25ft.',
                    'In case of malfunctioning of any equipment provided, the participant will be allowed to repeat the performance from the beginning or from the point of disruption that the participant wishes, with the consent of the judges.',
                    'Accessories, costumes and props will have to be arranged by the participants.',
                    'Time Limit: 12 mins (Music on to Music off)',
                    'Audio Submission Deadline: 22nd January, 2024',
                    'Submission Format: Mail the audio at dance.sf2024@gmail.com with the subject “Centrifuge Audio: <College Name>”.',
                    'Judging Criteria: Synchronization and Coordination (40 points), Choreography and Creativity (30 points), Artistic Presentation (30 points)',
                ],
            },
            'Goonj': {
                header: 'GOONJ',
                tagline: 'Group singing competition',
                about: 'Gather your crew, synchronize your steps, and bring your collective energy to the stage. From high-energy Bollywood medleys to captivating thematic performances, showcase your teamwork, precision, and artistic fusion in a mesmerizing display of group dance dynamics. Let your creativity shine as you captivate the audience with synchronized moves, storytelling, and a vibrant display of diverse dance styles!',
                rules: [
                    'Participants should also get their submitted audios on a pen drive or their mobile phone. Live music is not allowed.',
                    'Stage specification - Area will be approximately 20ft x 25ft.',
                    'In case of malfunctioning of any equipment provided, the participant will be allowed to repeat the performance from the beginning or from the point of disruption that the participant wishes, with the consent of the judges.',
                    'Accessories, costumes and props will have to be arranged by the participants.',
                    'Time Limit: 12 mins (Music on to Music off)',
                    'Audio Submission Deadline: 22nd January, 2024',
                    'Submission Format: Mail the audio at dance.sf2024@gmail.com with the subject “Centrifuge Audio: <College Name>”.',
                    'Judging Criteria: Synchronization and Coordination (40 points), Choreography and Creativity (30 points), Artistic Presentation (30 points)',
                ],
            },
            'Bandish': {
                header: 'BANDISH',
                tagline: 'Instrumental',
                about: 'Gather your crew, synchronize your steps, and bring your collective energy to the stage. From high-energy Bollywood medleys to captivating thematic performances, showcase your teamwork, precision, and artistic fusion in a mesmerizing display of group dance dynamics. Let your creativity shine as you captivate the audience with synchronized moves, storytelling, and a vibrant display of diverse dance styles!',
                rules: [
                    'Participants should also get their submitted audios on a pen drive or their mobile phone. Live music is not allowed.',
                    'Stage specification - Area will be approximately 20ft x 25ft.',
                    'In case of malfunctioning of any equipment provided, the participant will be allowed to repeat the performance from the beginning or from the point of disruption that the participant wishes, with the consent of the judges.',
                    'Accessories, costumes and props will have to be arranged by the participants.',
                    'Time Limit: 12 mins (Music on to Music off)',
                    'Audio Submission Deadline: 22nd January, 2024',
                    'Submission Format: Mail the audio at dance.sf2024@gmail.com with the subject “Centrifuge Audio: <College Name>”.',
                    'Judging Criteria: Synchronization and Coordination (40 points), Choreography and Creativity (30 points), Artistic Presentation (30 points)',
                ],
            },
            'Battle of Bands': {
                header: 'BATTLE OF BANDS',
                tagline: 'Battle of Bands',
                about: 'Gather your crew, synchronize your steps, and bring your collective energy to the stage. From high-energy Bollywood medleys to captivating thematic performances, showcase your teamwork, precision, and artistic fusion in a mesmerizing display of group dance dynamics. Let your creativity shine as you captivate the audience with synchronized moves, storytelling, and a vibrant display of diverse dance styles!',
                rules: [
                    'Participants should also get their submitted audios on a pen drive or their mobile phone. Live music is not allowed.',
                    'Stage specification - Area will be approximately 20ft x 25ft.',
                    'In case of malfunctioning of any equipment provided, the participant will be allowed to repeat the performance from the beginning or from the point of disruption that the participant wishes, with the consent of the judges.',
                    'Accessories, costumes and props will have to be arranged by the participants.',
                    'Time Limit: 12 mins (Music on to Music off)',
                    'Audio Submission Deadline: 22nd January, 2024',
                    'Submission Format: Mail the audio at dance.sf2024@gmail.com with the subject “Centrifuge Audio: <College Name>”.',
                    'Judging Criteria: Synchronization and Coordination (40 points), Choreography and Creativity (30 points), Artistic Presentation (30 points)',
                ],
            },
        };

        const eventContent = contentMap[eventName];
        setContent(eventContent);
    };

    return (
        <div className="sub-events">
            <h1 className="sub-events-heading">MUSIC</h1>
            <div className="sub-events-card-container">
                <div className="sub-event-navbar">
                    {['Raga', 'Mel-Jol', 'Goonj', 'Bandish', 'Battle of Bands'].map(eventName => (
                        <div
                            key={eventName}
                            className={`sub-event-navbar-name ${activeEvent === eventName ? 'active-sub-event' : ''}`}
                            onClick={() => updateContent(eventName)}
                            data-event={eventName}
                        >
                            {eventName}
                        </div>
                    ))}
                </div>
                <div className="sub-events-card" id="contentContainer">
                    <div className="event-details-card">
                        <div className="sub-event-details-header">
                            <h2 className="sub-event-details-header-content">{content.header}</h2>
                            <div className="sub-event-details-header-content-tagline">{content.tagline}</div>
                        <Link to = '/events/music/Registration' > <button className="sub-event-details-modal-register-button">Register</button></Link>
                        </div>
                        <div className="sub-event-details-content">
                            <h2>About</h2>
                            <div className="sub-event-details-writeup">{content.about}</div>
                        </div>
                        <div className="sub-event-details-rules">
                            <h2>Rules</h2>
                            {content.rules && content.rules.map((rule, index) => (
                                <div key={index}>
                                    <span style={{ fontFamily: 'sans-serif', fontWeight: '600' }}>{index + 1}. </span>{rule}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub-event-card-open"></div>
        </div>
    );
};

export default MusicPage;
