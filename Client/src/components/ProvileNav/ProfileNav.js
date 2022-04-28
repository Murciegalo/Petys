import React from 'react';
import Icons from '../../assets/icons.svg';
import { Links, List, SideNav } from './ProfileNav.styles';

const ProfileNav = () => (
  <SideNav>
    <List className="side-nav--active">
      <Links to="#">
        <svg>
          <use xlinkHref={`${Icons}#icon-settings`} />
        </svg>
        Settings
      </Links>
    </List>
    <List>
      <Links to="#">
        <svg>
          <use xlinkHref={`${Icons}#icon-star`} />
        </svg>
        My reviews
      </Links>
    </List>
    <List>
      <Links to="#">
        <svg>
          <use xlinkHref={`${Icons}#icon-credit-card`} />
        </svg>
        Billing
      </Links>
    </List>
  </SideNav>
);

export default React.memo(ProfileNav);
