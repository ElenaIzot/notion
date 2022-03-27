import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, } from 'antd';
import './notes.scss';

import * as T from '../../modules';

interface Props {
    documentState: T.DocumentState,
}

const Notes: React.FC<Props> = ({ documentState }) => {
    const nodes = documentState.elements.map((element, index) => {
        if (T.isParagraph(element)) {
            return <p key={index}>{element.text}</p>
        }

        if (T.isTitle(element)) {
            return <h2 key={index}>{element.text}</h2>
        }

        if (T.isList(element)) {
            return <ul>
                {element.elements.map((listItem, index) => {
                    return <li key={index}>{listItem}</li>
                })}
            </ul>
        }
    });

    return (
        <div className='notes'>
            <div className='container' >
                <div className='container__menu'>
                    <div>
                        <Button icon={<PlusOutlined />} />
                    </div>
                </div>

                <div className='container__elements'>
                    {nodes}
                </div>
            </div>
        </div>
    )
};

export default Notes;