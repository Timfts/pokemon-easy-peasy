import React from 'react'
import HomeCardGridStyle from './home-card-grid.module.scss'

const HomeCardGrid = ({children}) => (
  <div className={HomeCardGridStyle.root}>
    {children}
  </div>
)

export default HomeCardGrid