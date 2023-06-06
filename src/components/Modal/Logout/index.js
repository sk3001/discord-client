import React from 'react';
import { useNavigate } from 'react-router-dom';

import { postLogout } from '../../../utils/api/postLogOut';
import { URL } from '../../../utils/constants/index';
import Colors from '../../../styles/Colors';
import Modal from '..';
import { MiddlePart } from './style';

function LogoutModal({ controller: { hide, show } }) {
  const navigate = useNavigate();
  const logOut = async () => {
    const isSuccess = await postLogout();
    if (isSuccess) {
      navigate(URL.LOGIN, { replace: true });
      window.location.reload();
    }
  };

  const middleContent = <MiddlePart>정말로 로그아웃 하시겠습니까?</MiddlePart>;
  return (
    <Modal
      props={{
        title: '로그아웃',
        middleContent,
        bottomRightButton: {
          text: '로그아웃',
          color: Colors.Blue,
          onClickHandler: logOut,
        },
      }}
      controller={{ hide, show }}
    />
  );
}

export default LogoutModal;
