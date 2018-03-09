import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import UserNav from '@/components/users/userNav'
import './user.scss'

// Sub Layouts
import BrowseUsers from '@/components/users/browseUsers'
import AddUser from '@/components/users/addUser'
import UserProfile from '@/components/users/userProfile'

const UserSubLayout = ({ match }) => (
  <div className='user-sub-layout'>
    <aside>
      <UserNav />
    </aside>
    <div className='primary-content'>
      <Switch>
        <Route path={match.path} exact={true} component={BrowseUsers} />
        <Route path={`${match.path}/add`} exact={true} component={AddUser} />
        <Route path={`${match.path}/:userId`} component={UserProfile} />
      </Switch>
    </div>
  </div>
)

export default UserSubLayout
