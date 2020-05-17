import React from 'react';

import {
    HeaderWrapper,
    Heading,
    SubHeading,
} from 'components/PageHeader/PageHeader.styles';

const PageHeader = ({ header, subHeader }) => (
    <HeaderWrapper>
        <Heading>
            <SubHeading>{subHeader}</SubHeading>
            {header}
        </Heading>
    </HeaderWrapper>
);

export default PageHeader;
