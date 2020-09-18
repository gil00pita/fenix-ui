import InternalAvatar, { AvatarProps } from './Avatar';
import Group from './Group';

export { AvatarProps } from './Avatar';
export { GroupProps } from './Group';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLElement>> {
  Group: typeof Group;
}

const Avatar = InternalAvatar as CompoundedComponent;
Avatar.Group = Group;

export { Group };
export default Avatar;
