import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
          Thành viên của chúng tôi là những chuyên gia hàng đầu, nhiệt huyết và tài năng, luôn sẵn sàng đem lại những giải pháp thông minh và sáng tạo nhất cho mỗi dự án.
          </p>
        </div>
        <div id="row">
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src="https://wallpapers.com/images/hd/the-boss-baby-in-a-suitcase-7jmwp3nlz7mmwyif.jpg" alt="..." className="team-img" />
              <div className="caption">
                <h4>Hồng Phúc</h4>
                <p>CEO</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src="https://wallpapers.com/images/hd/the-boss-baby-in-a-suitcase-7jmwp3nlz7mmwyif.jpg" alt="..." className="team-img" />
                <div className="caption">
                <h4>Mạnh Tùng</h4>
                <p>Chủ tịch HĐQT</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src="https://wallpapers.com/images/hd/the-boss-baby-in-a-suitcase-7jmwp3nlz7mmwyif.jpg" alt="..." className="team-img" />
              <div className="caption">
                <h4>Quốc Việt</h4>
                <p>Quản lí dự án</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src="https://wallpapers.com/images/hd/the-boss-baby-in-a-suitcase-7jmwp3nlz7mmwyif.jpg" alt="..." className="team-img" />
              <div className="caption">
                <h4>Huy Hoàng</h4>
                <p>Tech Lead</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src="https://wallpapers.com/images/hd/the-boss-baby-in-a-suitcase-7jmwp3nlz7mmwyif.jpg" alt="..." className="team-img" />
              <div className="caption">
                <h4>Đức Tài</h4>
                <p>Trưởng phòng kĩ thuật</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src="https://wallpapers.com/images/hd/the-boss-baby-in-a-suitcase-7jmwp3nlz7mmwyif.jpg" alt="..." className="team-img" />
              <div className="caption">
                <h4>Anh Đức</h4>
                <p>Kĩ thuật viên trưởng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
