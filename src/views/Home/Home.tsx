import React from 'react';

import * as S from './Home.styles';

import { HomePropTypes } from './Home.types';

export default function Home({ message = 'Default' }: HomePropTypes) {
    return <S.Container>{message}</S.Container>;
}
