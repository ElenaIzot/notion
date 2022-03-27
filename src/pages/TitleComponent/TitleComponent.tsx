import React from 'react';
import './titleComponent.scss';
import { Typography } from 'antd';

import * as T from '../../modules';

interface Props {
  title: T.Title,
}

const TitleComponent: React.FC<Props> = ({ title }) => {
  const { Title } = Typography;

  return (
    <div className='title'>
      <Title level={2}>{title}</Title>
    </div>
  )
};

export default TitleComponent;