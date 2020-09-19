import React from 'react';
import { Table as TableTD } from 'antd';
import columns from '../constants/columns';

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
    _id: '5f61db1a4cadfa04c70efaac1',
    username: 'caohuy26',
    view: 3152,
    differenceView: 13,
    date: '16/09/2020',
    time: '9:30:00 AM'
  },
  {
    _id: '5f61db1a4cadfa04c70efaac2',
    username: 'caohuy26',
    view: 3152,
    differenceView: 13,
    date: '16/09/2020',
    time: '9:30:00 AM'
  },
  {
    _id: '5f61db1a4cadfa04c70efaac3',
    username: 'caohuy26',
    view: 3152,
    differenceView: 13,
    date: '16/09/2020',
    time: '9:30:00 AM'
  },
  {
    _id: '5f61db1a4cadfa04c70efaac4',
    username: 'caohuy26',
    view: 3152,
    differenceView: 13,
    date: '16/09/2020',
    time: '9:30:00 AM'
  },
  {
    _id: '5f61db1a4cadfa04c70efaac5',
    username: 'caohuy26',
    view: 3152,
    differenceView: 13,
    date: '16/09/2020',
    time: '9:30:00 AM'
  },
  {
    _id: '5f61db1a4cadfa04c70efaa45',
    username: 'caohuy26',
    view: 3152,
    differenceView: 13,
    date: '16/09/2020',
    time: '9:30:00 AM'
  },
  {
    _id: '5f61db1a4cadfa04c70efaa42',
    username: 'caohuy26',
    view: 3152,
    differenceView: 13,
    date: '16/09/2020',
    time: '9:30:00 AM'
  }
];

const Table = () => {
  return (
    <TableTD
      style={styles.table}
      dataSource={data}
      columns={columns}
      bordered={true}
      rowKey={record => record._id}
      pagination={{
        defaultPageSize: 7
      }}
    />
  );
};

export default Table;

const styles = {
  table: {
    padding: 24
  }
};