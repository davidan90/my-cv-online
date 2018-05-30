import * as React from 'react';
import { ArrowNavigation, ArrowNavigationProps, SkillCard, Indicator } from '../../components';
import './index.scss';

export class SkillsLayout extends React.Component<{}, {}> {
    render() {
        const leftArrowProps: ArrowNavigationProps = { link: { href: '#home', direction: 'left', title: 'Inicio' } };
        const its: Array<any> = [
            { title: 'Javascript', max: 5, value: 4 },
            { title: 'Typescript', max: 5, value: 4 },
            { title: 'Angular', max: 5, value: 4 },
            { title: 'React', max: 5, value: 4 },
            { title: 'HTML', max: 5, value: 5 },
            { title: 'CSS', max: 5, value: 4 },
            { title: 'NodeJs', max: 5, value: 3 },
            { title: 'Java', max: 5, value: 3 },
            { title: 'Spring', max: 5, value: 3 },
            { title: 'Python', max: 5, value: 2 },
            { title: 'Django', max: 5, value: 2 },
            { title: 'ReasonML', max: 5, value: 1 }

        ];

        return (
            <section id='skills' className='layout'>
                <div className='skills-container'>
                    <div className='arrow-container home-arrow-left'>
                        <ArrowNavigation {...leftArrowProps} />
                    </div>
                    <div className='it-container'>
                        <h2>Tecnologías</h2>
                        <div className='it-skills-container'>
                            {
                                its.map((skill, index) => (
                                    <SkillCard key={`skill-card-${index}`} title={skill.title}>
                                        <Indicator
                                            max={skill.max}
                                            value={skill.value}
                                        />
                                    </SkillCard>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
