import React from 'react';

const Body = ({ currentLanguage }) => {
  return (
    <div id="main">
      <h3>
        {currentLanguage === 'vi' ? 'Giới thiệu' : 'Introduction'}
      </h3>
      <p>
        {currentLanguage === 'vi'
          ? 'Vietpro là một trong những đơn vị đầu tiên chuyên đào tạo nghề Lập trình viên website mã nguồn mở một cách đầy đủ, chuyên nghiệp, luôn cập nhật các công nghệ mới theo đúng nhu cầu tuyển dụng của thị trường.'
          : 'Vietpro is one of the first units specializing in training open-source web developers in a comprehensive and professional way, always updating new technologies according to market recruitment needs.'}
      </p>
      <p>
        {currentLanguage === 'vi'
          ? 'Mỗi năm, Vietpro đào tạo & giới thiệu việc làm thành công cho hàng trăm học viên tới các đơn vị tuyển dụng đối tác, nhiều trong số đó đa trở thành các Leader, Manager,… quan trọng cho các công ty lớn.'
          : 'Every year, Vietpro successfully trains and introduces jobs for hundreds of students to partner recruitment units, many of whom become important Leaders, Managers, etc., for large companies.'}
      </p>
    </div>
  );
};

export default Body;
