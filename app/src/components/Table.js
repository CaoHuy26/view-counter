import React, { useCallback, useEffect, useState } from 'react';
import { Table as TableTD } from 'antd';
import axios from 'axios';
import columns from '../constants/columns';

const Table = () => {
  const [data, setData] = useState({
    numberOfRecords: 1,
    records: []
  });
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/records?page=${page}`);
      const { data } = res;
      setData({
        numberOfRecords: data.numberOfRecords,
        records: data.records
      });
      setIsLoading(false);
    };

    fetchData();
    console.log(`Page: ${page}`)
  }, [data.numberOfRecords, page]);

  const onChangePagination = useCallback((currentPage) => {
    setPage(currentPage);
  }, []);

  return (
    <TableTD
      style={styles.table}
      dataSource={data.records}
      columns={columns}
      bordered={true}
      rowKey={record => record._id}
      loading={isLoading}
      pagination={{
        total: data.numberOfRecords, // Nhận tổng số bản ghi trong db
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