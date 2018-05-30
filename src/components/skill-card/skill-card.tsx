import * as React from 'react';
import { SkillCardProps } from './interfaces';
import './skill-card.scss';

export class SkillCard extends React.Component<SkillCardProps, {}> {

    public static defaultProps: Partial<SkillCardProps> = {
        title: undefined
    };

    constructor(props: SkillCardProps) {
        super(props);
    }

    render() {
        return this.props.title ? (
            <div className='skill-card-container'>
                <h3>{this.props.title}</h3>
                <div className='skill-indicator-container'>
                    {this.props.children}
                </div>
            </div>
        ) : null;
    }
}
