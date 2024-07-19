import Avatar from './Avatar';
import Bio from './Bio';
import css from './ProfileMeta.module.css';

const ProfileMeta = ({
  profileDetails: { username, tag, location, avatar },
}) => {
  return (
    <div className={css.description}>
      <Avatar meta={{ avatar, username }} shape="circle" />
      <Bio meta={{ username, tag, location }} />
    </div>
  );
};

export default ProfileMeta;
