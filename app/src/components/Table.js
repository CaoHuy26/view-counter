import React from 'react';
import { Table as TableTD } from 'antd';

const data = [
  {
    _id: '5f61db1a4cadfa04c70efaac',
    username: 'caohuy26',
    view: 3152,
    differenceView: 13,
    date: '16/09/2020',
    time: '9:30:00 AM'
  },
  {
    _id: '5f61db1a4cadfa04c70efaa3',
    username: 'caohuy26',
    view: 3152,
    differenceView: 0,
    date: '17/09/2020',
    time: '9:30:00 AM'
  },
  {
    _id: '5f61db1a4cadfa04c70efaac',
    username: 'caohuy26',
    view: 3152,
    differenceView: 13,
    date: '16/09/2020',
    time: '9:30:00 AM'
  },
  {
    _id: '5f61db1a4cadfa04c70efaac',
    username: 'caohuy26',
    view: 3152,
    differenceView: 13,
    date: '16/09/2020',
    time: '9:30:00 AM'
  },
  {
    _id: '5f61db1a4cadfa04c70efaac',
    username: 'caohuy26',
    view: 3152,
    differenceView: 13,
    date: '16/09/2020',
    time: '9:30:00 AM'
  },
  {
    _id: '5f61db1a4cadfa04c70efaac',
    username: 'caohuy26',
    view: 3152,
    differenceView: 13,
    date: '16/09/2020',
    time: '9:30:00 AM'
  },
  {
    _id: '5f61db1a4cadfa04c70efaac',
    username: 'caohuy26',
    view: 3152,
    differenceView: 13,
    date: '16/09/2020',
    time: '9:30:00 AM'
  },
  {
    _id: '5f61db1a4cadfa04c70efaac',
    username: 'caohuy26',
    view: 3152,
    differenceView: 13,
    date: '16/09/2020',
    time: '9:30:00 AM'
  },
  {
    _id: '5f61db1a4cadfa04c70efaac',
    username: 'caohuy26',
    view: 3152,
    differenceView: 13,
    date: '16/09/2020',
    time: '9:30:00 AM'
  }
];

const columns = [
  {
    title: 'Thời gian',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: 'Lượt xem',
    dataIndex: 'view',
    key: 'view'
  },
  {
    title: 'Tăng trưởng',
    dataIndex: 'differenceView',
    key: 'differenceView'
  },
];


const Table = () => {
  return (
    <TableTD
      dataSource={data}
      columns={columns}
    />
  );
};

export default Table;