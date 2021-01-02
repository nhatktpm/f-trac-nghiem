import React from 'react';
import "../Translate/styles.css"

function Translate(props) {
    return (
        <div className="container dich_nentrang">
            <div className="row">
                <div className="col dich">
                   <h5>Bài Nghe Tiếng Anh</h5> 
                        September 30, 2010
                        Ms. Josephine Boss
                        Chief Executive Officer
                        Acme Company
                        456 Main St.
                        Philadelphia, PA 12345
                        Dear Mr. Boss,
                        I am writing to formally notify you that
                         I am resigning from my position as 
                         Administrative Assistant with Acme Company.
                        My last day of employment will
                         be October 14, as per the terms of my employment contract.
                        I appreciate the opportunities
                         I have been given at Acme and your professional guidance and support
                         . I wish you and the company success in the future.
                        Sincerely,
                        Jill Applicant
                

                </div>

                <div className="col dich">
                <h5>Bài Nghe Tiếng Việt</h5> 
                    Ngày 30 tháng 9 năm 2010
                    Bà Josephine Boss
                    Giám đốc điều hành
                    Công ty Acme
                    456 Main St.
                    Philadelphia, PA 12345
                    Thưa ông chủ,
                    Tôi viết thư này để chính thức thông báo với bạn rằng tôi sẽ thôi giữ chức vụ Trợ lý Hành chính của Công ty Acme.
                    Ngày làm việc cuối cùng của tôi sẽ là ngày 14 tháng 10, theo các điều khoản trong hợp đồng lao động của tôi.
                    Tôi đánh giá cao những cơ hội mà tôi có được tại Acme cũng như sự hướng dẫn và hỗ trợ chuyên nghiệp của bạn. Chúc các bạn và công ty thành công trong tương lai.
                    Trân trọng,
                    Người nộp đơn Jill
                 </div>
            </div>
        </div>
    );
}

export default Translate;