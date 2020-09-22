import React, { useCallback, useEffect, useState } from 'react';
import { Table as TableTD } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import columns from '../constants/columns';
import recordActions from '../redux/actions/recordActions';

const Table = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
 
  const recordReducers = useSelector(state => state.recordReducers); 
  // console.log(`recordReducers: {$recordReducers}`)
  const { isLoading, numberOfRecords, records, erorr } = recordReducers;

  useEffect(() => {
    dispatch(recordActions.getRecords(page))
    // console.log(`Page: ${page}`)
  }, [dispatch, page]);

  const onChangePagination = useCallback((currentPage) => {
    setPage(currentPage);
  }, []);

  return (
    <TableTD
      style={styles.table}
      dataSource={records}
      columns={columns}
      bordered={true}
      rowKey={record => record._id}
      loading={isLoading}
      pagination={{
        total: numberOfRecords, // Nhận tổng số bản ghi trong db
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