import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div className="col">
          <div  className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {" "}
                <img src="https://images2.thanhnien.vn/zoom/686_429/Uploaded/haoph/2021_10_21/jack-va-thien-an-5805.jpeg" alt="" />{" "}
              </div>
              <div className="testimonial-content">
                <p>"Tôi đã chọn Aglaida cho dự án nhà thông minh của mình và không thể hài lòng hơn. Đội ngũ nhân viên tư vấn rất nhiệt tình và chuyên nghiệp. Các thiết bị được lắp đặt rất gọn gàng và hoạt động hiệu quả."</p>
                <div className="testimonial-meta"> - J97
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div  className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {" "}
                <img src="https://5sfashion.vn/storage/upload/images/ckeditor/4KG2VgKFDJWqdtg4UMRqk5CnkJVoCpe5QMd20Pf7.jpg" alt="" />{" "}
              </div>
              <div className="testimonial-content">
                <p>"Aglaida đã mang đến cho gia đình tôi một giải pháp nhà thông minh hoàn hảo. Từ khi lắp đặt, chúng tôi cảm thấy tiện nghi và an toàn hơn rất nhiều. Dịch vụ hậu mãi cũng rất tốt."</p>
                <div className="testimonial-meta"> - Nguyễn Thanh Tùng
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div  className="col-md-4">
            <div className="testimonial">
              <div className="testimonial-image">
                {" "}
                <img src="https://phunuvietnam.mediacdn.vn/zoom/660_412/179072216278405120/2022/8/11/binh-an-1660190289986711137266-21-0-471-720-crop-1660190302475641587782.jpg" alt="" />{" "}
              </div>
              <div className="testimonial-content">
                <p>"Aglaida đã biến ngôi nhà của chúng tôi thành một không gian sống hiện đại và thông minh hơn bao giờ hết. Các thiết bị hoạt động mượt mà và rất dễ sử dụng. Tôi rất hài lòng với dịch vụ của họ."</p>
                <div className="testimonial-meta"> - Nguyễn Bình An
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
