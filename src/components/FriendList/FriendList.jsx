import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';

import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul class={css.friendlist}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li class={css.item} key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
