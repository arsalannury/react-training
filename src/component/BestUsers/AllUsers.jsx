import { useState, useEffect } from "react";
import BestUsers from "./BestUsers";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import styled from "styled-components";
import UsersLoading from "../Loadings/UsersLoading";
import SwiperCore, { Pagination, Autoplay } from "swiper";

SwiperCore.use([Pagination, Autoplay]);

function AllUsers() {
  const [getUser, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const get = async () => {
      const result = await axios.get("https://reqres.in/api/users?page=2");
      setUser(result.data.data);
      setLoading(false);
    };
    get();
  }, []);

  return (
    <>
      {loading ? (
        <UsersLoading />
      ) : (
        <SwiperBox
          slidesPerView={"auto"}
          spaceBetween={30}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {getUser.map((user, index) => (
            <SwiperSlide>
              <BestUsers
                id={user.id}
                key={index}
                avatar={user.avatar}
                email={user.email}
                fName={user.first_name}
                lName={user.last_name}
              />
            </SwiperSlide>
          ))}
          <Title>
            خریداران غیر ایرانی{" "}
            <span style={{ color: "rgba(255, 183, 3,1)" }}>سانلند</span>
          </Title>
        </SwiperBox>
      )}
    </>
  );
}

export default AllUsers;

const SwiperBox = styled(Swiper)`
  margin: 100px 0;
  padding: 40px;
  background: #eee;
`;

const Slide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h2`
  position: absolute;
  top: 130px;
  left: 120px;
`;
