import { Typography } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import * as T from './modules';

interface Props {
    documentState: T.DocumentState,
}

const Notes: React.FC<Props> = ({ documentState }) => {
    const { Paragraph } = Typography;

    return (
        <div style={{ marginLeft: '150px' }}>
            <Title level={2}>{documentState.title.text}</Title>
            <Paragraph>
                {documentState.paragraph.text}
            </Paragraph>
            <ul>
                {documentState.list.elements.map((element, index) => {
                    return <li key={index}> {element} </li>
                })}
            </ul>
        </div>
    )
};

export default Notes;