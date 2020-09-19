import React, { useCallback, useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(false);

  const onChangePagination = useCallback((currentPage) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log(currentPage);
    }, 1500);
  }, []);

  return (
    <TableTD
      style={styles.table}
      dataSource={data}
      columns={columns}
      bordered={true}
      rowKey={record => record._id}
      loading={isLoading}
      pagination={{
        total: 80, // Nhận tổng số bản ghi trong db
        pageSizeOptions: ['7'],
        defaultPageSize: 7, // Mỗi page chỉ hiển thị 7 bản ghi
        position: ['bottomCenter'],
        onChange: (currentPage) => onChangePagination(currentPage) // Mỗi lần thay đổi page gọi lại API
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