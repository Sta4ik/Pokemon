import { useState } from "react";
import { useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/ButtonBase';

function AvatarUploader() {
  const [avatarSrc, setAvatarSrc] = useState('');

  useEffect(() => {
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
      setAvatarSrc(savedAvatar);
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result;
        localStorage.setItem('userAvatar', base64Data);
        setAvatarSrc(base64Data);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <ButtonBase
        component="label"
        sx={{
          borderRadius: '50%',
          '&:has(:focus-visible)': {
            outline: '2px solid',
            outlineOffset: '2px',
          },
        }}
      >
        <Avatar
          alt="Аватар пользователя"
          src={avatarSrc}
          sx={{ width: 100, height: 100 }}
        />
        <input
          type="file"
          accept="image/*"
          style={{
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: '1px',
            margin: '-1px',
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            whiteSpace: 'nowrap',
            width: '1px',
          }}
          onChange={handleFileChange}
        />
      </ButtonBase>
    </div>
  );
}
export default AvatarUploader;