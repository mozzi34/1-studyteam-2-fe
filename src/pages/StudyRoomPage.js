import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import StudyHomeForm from '../components/StudyHomeComponents/StudyHomeForm.js';

function StudyRoomPage({ paramsReset }) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.toast === 'deleted') {
      toast('스터디가 성공적으로 삭제되었습니다.', {
        position: 'bottom-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  }, [location.state]);

  return (
    <>
      <ToastContainer />
      <StudyHomeForm paramsReset={paramsReset} />
    </>
  );
}

export default StudyRoomPage;
