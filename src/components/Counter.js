import React from 'react'
import classNames from 'classnames/bind'
import styles from './Counter.scss'

const cx = classNames.bind(styles)

const Counter = () => {
  return (
    <div className={cx('cyan')}>
      응
    </div>
  )
}

export default Counter
