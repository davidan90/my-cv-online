import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Cv } from './cv';

storiesOf('Cv', module)
    .add('default', () => (
        <Cv/>
    ));
