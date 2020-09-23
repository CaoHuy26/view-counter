import React, { useEffect } from 'react';
import { Card as CardTD, Result, Skeleton } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import recordActions from '../redux/actions/recordActions';
import COLOR from '../constants/color';
import { getCurrentDate } from '../utils/time';

const Card = () => {
  const dispatch = useDispatch();
  const recordReducers = useSelector(state => state.recordReducers);

  const { idLoadingRecordOfToday, record, error } = recordReducers;
  
  useEffect(() => {
    const today = getCurrentDate();
    dispatch(recordActions.getRecordOfToday(today));
  }, [dispatch]);

  return (
    <div style={styles.container}>
      {
        idLoadingRecordOfToday
          ? (
            <div style={styles.skeleton}>
              <Skeleton
                active
                title={false}
                round='circle'
                paragraph={{ rows: 4 }}
              />
            </div>
          )
          : (
            <CardTD style={styles.card}>
              {
                record
                  ? (
                    <>
                      <div style={styles.currentView}>
                        <h1 style={styles.view}>
                          {record.view}
                        </h1>
                        <ArrowUpOutlined style={styles.arrowIcon} />
                        <span style={styles.incrementNumber}>
                          {record.differenceView}
                        </span>
                      </div>
                      <p style={styles.time}>
                        Cập nhật: {record.time} - {record.date}
                      </p>
                    </>
                  )
                  : (
                    <Result
                      status='error'
                      subTitle='Không tìm thấy lượt xem hôm nay'
                    />
                  )
              }
            </CardTD>
          )
      }
    </div>
  );
};

export default Card;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300
  },
  skeleton: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    width: 300,
    height: 180,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    width: 300,
    height: 180,
    borderRadius: 10,
    boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)'
  },
  currentView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16
  },
  view: {
    textAlign: 'center',
    fontSize: 40,
    margin: 0,
    marginRight: 8
  },
  arrowIcon: {
    fontSize: 24,
    color: COLOR.Japanese_Laurel,
    marginTop: 0
  },
  incrementNumber: {
    marginTop: 12,
    color: COLOR.Japanese_Laurel
  },
  time: {
    margin: 0,
    color: COLOR.Nobel
  }
};