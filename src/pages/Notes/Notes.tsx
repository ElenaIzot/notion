import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Typography, Dropdown, Menu } from 'antd';
import Title from 'antd/lib/typography/Title';
import './notes.scss';

import * as T from '../../modules';

interface Props {
    documentState: T.DocumentState,
}

const Notes: React.FC<Props> = ({ documentState }) => {
    const { Paragraph, Text } = Typography;

    const [title, setTitle] = useState<string>('');
    const [paragraph, setParagraph] = useState<string>('');
    const [list, setList] = useState<string[]>([]);

    const handleChooseTypeElementNote = (type: string) => {
        if (type === 'title') {
            return setTitle(documentState.title.text);
        }

        if (type === 'paragraph') {
            return setParagraph(documentState.paragraph.text);
        }

        if (type === 'list') {
            return setList(documentState.list.elements);
        }
    }

    const optionTypeNote = (
        <Menu onClick={(item) => handleChooseTypeElementNote(item.key)}>
            <Menu.Item key='title' title='title'>
                Title
            </Menu.Item>
            <Menu.Item key='paragraph' title='paragraph'>
                Paragraph
            </Menu.Item>
            <Menu.Item key='list' title='list'>
                List
            </Menu.Item>
        </Menu>
    );

    return (
        <div className='notes'>
            <div className='container' >
                <div className='container__menu'>
                    <Dropdown overlay={optionTypeNote} placement="bottomLeft">
                        <Button icon={<PlusOutlined />} />
                    </Dropdown>
                    <Text className='container__text'>Click and choose type note</Text>
                </div>

                <div className='container__elements'>
                    {title && <Title level={2}>{title}</Title>}
                    {paragraph && <Paragraph>{documentState.paragraph.text}</Paragraph>}
                    {list &&
                        <ul className='list'>
                            {list.map((element, index) => {
                                return <li key={index}>
                                    {element}
                                </li>
                            })}
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
};

export default Notes;