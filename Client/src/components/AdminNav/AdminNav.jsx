import React from 'react';
import Icons from '../../assets/icons.svg';
import { Links, List, SideNav } from '../ProvileNav/ProfileNav.styles';
import { Nav, Header } from './AdminNav.styles';

const AdminNav = () => (
  <Nav>
    <Header>Admin</Header>
    <SideNav>
      <List>
        <Links to="#">
          <svg>
            <use xlinkHref={`${Icons}#icon-map`} />
          </svg>
          Manage Pets
        </Links>
      </List>
      <List>
        <Links to="#">
          <svg>
            <use xlinkHref={`${Icons}#icon-users`} />
          </svg>
          Manage Users
        </Links>
      </List>
      <List>
        <Links to="#">
          <svg>
            <use xlinkHref={`${Icons}#icon-star`} />
          </svg>
          Manage Reviews
        </Links>
      </List>
      <List>
        <Links to="#">
          <svg>
            <use xlinkHref={`${Icons}#icon-briefcase`} />
          </svg>
          Manage Sales
        </Links>
      </List>
    </SideNav>
  </Nav>
);
export default React.memo(AdminNav);
