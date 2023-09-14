import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentUserData } from '../../store/user/userAction'

const PlayListPage = () => {
  const dispatch  = useDispatch();

  const { userData } = useSelector((state) => state.userData);

  useEffect(() => {
    dispatch(fetchCurrentUserData());
  },[dispatch])
  return (
    <div>{userData['display_name']}</div>
  )
}

export default PlayListPage