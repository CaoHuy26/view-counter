import React from 'react';
import { Card as CardTD } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

const Card = () => {
  return (
    <div style={styles.container}>
      <CardTD style={styles.card}>
        <div style={styles.currentView}>
          <h1 style={styles.view}>
            3203
          </h1>
          <ArrowUpOutlined style={styles.arrowIcon} />
        </div>
        <p style={styles.time}>
          Cập nhật: 12:00 AM - 19/09/2020
        </p>
      </CardTD>
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
    color: 'green',
    marginTop: 0
  },
  time: {
    margin: 0,
    color: '#b3b3b3'
  }
};