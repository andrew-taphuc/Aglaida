import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              {/* <p>{props.data ? props.data.paragraph : "loading..."}</p> */}
              <p>Aglaida là đơn vị hàng đầu tại Việt Nam chuyên cung cấp dịch vụ tư vấn và lắp đặt nhà thông minh. Chúng tôi mang đến các giải pháp tiên tiến, biến không gian sống của bạn trở nên thông minh, tiện nghi và hiệu quả. Đội ngũ chuyên gia của chúng tôi cam kết hiểu rõ nhu cầu của bạn và đưa ra những hệ thống nhà thông minh được tùy chỉnh để nâng cao chất lượng cuộc sống. Tại Aglaida, chúng tôi đặt sự đổi mới, chất lượng và sự hài lòng của khách hàng lên hàng đầu, đảm bảo mỗi dự án đều được thực hiện với độ chính xác và sự tận tâm cao nhất. Hãy cùng Aglaida đón nhận tương lai của cuộc sống tiện nghi và hiện đại.
</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {/* {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"} */}
                      <li>Giá thành hợp lý</li>
                      <li>Hệ sinh thái</li>
                      <li>Hàng VN chất lượng cao</li>
                      
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                  <li>Bảo mật, an toàn</li>
                      <li>Chính sách bảo hành</li>
                      <li>Đội ngũ uy tín chất lượng</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
