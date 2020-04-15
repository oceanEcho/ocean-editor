import React, { FunctionComponent } from 'react';

import styles from './Loader.module.scss';

interface ILoaderProps {
  loading: boolean;
}

export const Loader: FunctionComponent<ILoaderProps> = ({ loading }) => {
  console.log(loading)
  return loading ? <div className={styles.root} /> : null;
};
