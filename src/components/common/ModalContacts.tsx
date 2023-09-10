import React, {useState} from 'react';
import {Button, Modal} from 'antd';
import { useTranslation } from "react-i18next";


const ModalContacts = ({textBtn, size = 'middle'}: {textBtn?: string, size?: 'large' | 'middle' | 'small'}) => {
  const { t } = useTranslation();
  textBtn = textBtn || t('ContactMe')

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={"w-100"}>
      <Button type="primary" onClick={showModal} size={size}>
        {textBtn}
      </Button>
      <Modal title="My contacts" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className={"contacts__wrp"}>
          <a href={"https://wa.me/+79120381324"} className={"contacts__it"}>
            <img src="https://img.icons8.com/3d-fluency/94/whatsapp.png" alt="whatsapp"/>
            <b>WhatsApp: </b>
            <div>+7 912 038 13 24</div>
          </a>
          <a href={"https://github.com/alexeysoloberezin"} className={"contacts__it"}>
            <img  src="https://img.icons8.com/3d-fluency/94/github.png" alt="github"/>
            <b>GitHub: </b>
            <div>alexeysoloberezin</div>
          </a>
          <a href={"https://www.linkedin.com/in/leonidivanovfrontend/"} className={"contacts__it"}>
            <img src="https://img.icons8.com/3d-fluency/94/linkedin.png" alt="linkedin"/>
            <b>LinkedIn: </b>
            <div>Leonid Ivanov</div>
          </a>
          <a href={"https://instagram.com/alexwebsitejs?igshid=OGQ5ZDc2ODk2ZA=="} className={"contacts__it"}>
            <img src="https://img.icons8.com/3d-fluency/94/instagram-new.png" alt="instagram-new"/>
            <b>Instagram: </b>
            <div>@alexwebsitejs</div>
          </a>
          <a href={"https://t.me/leonidivanov_web"} className={"contacts__it"}>
            <img src="https://img.icons8.com/3d-fluency/94/telegram.png" alt="telegram"/>
            <b>Telegram: </b>
            <div>@leonidivanov_web</div>
          </a>
          <a href={"mailto:leonidivanovweb@gmail.com"} className={"contacts__it"}>
            <img src="https://img.icons8.com/3d-fluency/94/gmail.png" alt="gmail"/>
            <b>Gmail: </b>
            <div>leonidivanovweb@gmail.com</div>
          </a>
        </div>
      </Modal>
    </div>
  );
}

export default ModalContacts;