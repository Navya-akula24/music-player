import React from 'react';
import { NavLink } from 'react-router-dom';

const TabNavigation = () => {
    return (
        <div className="tab-navigation">
            <NavLink to="/foryou" activeClassName="active-tab">
                For You
            </NavLink>
            <NavLink to="/toptracks" activeClassName="active-tab">
                Top Tracks
            </NavLink>
        </div>
    );
};

export default TabNavigation;
