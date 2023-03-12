import PropTypes from 'prop-types';

import css from './FriendListItem.module.css';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <span class={isOnline ? css.online : css.offline}>{isOnline}</span>
      <img class={css.avatar} src={avatar} alt={name} width="50" />
      <p class={css.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
