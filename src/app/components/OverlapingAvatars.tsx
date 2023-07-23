import React from "react";

const OverlappingAvatars = () => {
  const avatars = [
    "/avatars/avatar5.png",
    "/avatars/avatar2.png",
    "/avatars/avatar3.png",
    "/avatars/avatar4.png",
    "/avatars/avatar1.png",
    "/avatars/avatar6.png",
  ];

  const avatarSize = 60;
  const overlapAmount = 15;

  return (
    <div className="flex items-center">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className="relative rounded-full"
          style={{
            marginLeft: index > 0 ? `-${overlapAmount}px` : "0",
            width: `${avatarSize}px`,
            height: `${avatarSize}px`,
            zIndex: avatars.length + index,
            backgroundImage: `url(${avatar})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  );
};

export default OverlappingAvatars;
