import { Avatar } from "./Avatar.styled";

interface AvatarAtomProps {
    src: string;
    alt: string;
    styleClass?: string;
    avatarSize?: string;
}

export const AvatarAtom = (props: AvatarAtomProps) => {
    const { src, alt, styleClass, avatarSize } = props;
    return (
        <Avatar
            src={src}
            alt={alt}
            className={styleClass}
            width={avatarSize}
            height={avatarSize}
        ></Avatar>
    );
};
