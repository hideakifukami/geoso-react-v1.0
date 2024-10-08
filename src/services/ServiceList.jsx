import React from 'react';
import styles from './ServicesSection.module.css';

const ServiceList = ({ services }) => (
  <ul className={styles.serviceList}>
    {services.map((service, index) => (
      <li key={index}>{service}</li>
    ))}
  </ul>
);

export default ServiceList;