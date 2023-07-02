import { Text, Image, Grid, GridItem, Heading, Box } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import Sliders from "./Pages/Sliders";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay }from "swiper";
import "./Home.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [gridData, setGridData] = useState([]);
  const [data1, setData1] = useState([]);
  const [tradingData, setTradingData] = useState([]);
  const [place, setPlace] = useState([]);
  return (
    <div>
      <Navbar />

      <Box mt={"8%"} mb="4%">
        <Image
          display={"block"}
          m={"auto"}
          width={"92%"}
          borderRadius={"5px"}
          src="https://www.merchantscx.com/wp-content/uploads/2021/05/Digital-Recruitment.jpeg"
          alt="hiii"
        />
      </Box>
      <Sliders
        slide1={4}
        slide2={4}
        heading="Plan Your Next Trip Using Roaming Routes's Complete Destination Guides"
        data={place}
      />
      <hr style={{ marginTop: "5%" }} />
      <hr />
      <Image
        display={"block"}
        m={"auto"}
        width={"92%"}
        borderRadius={"5px"}
        height={"50vh"}
        src="https://media.licdn.com/dms/image/C4D12AQHADXJ_Cd9rQA/article-cover_image-shrink_720_1280/0/1622455174089?e=2147483647&v=beta&t=g4E4XK4A3AZU2TfUDYwp_thdVf3dXLAd6NEMtJiJMoM"
        alt="hiii"
      />
      <div className='swippers'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={2}
          autoplay={{ delay: 500 }}
          className="mySwiper"
        >


          <SwiperSlide><img src="https://i.pinimg.com/originals/27/1b/90/271b908f8876d11c0ec5d98a374635f4.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.pinimg.com/originals/b6/80/61/b68061a9550cafe16425071fd7c6f9b3.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.pinimg.com/originals/0e/31/42/0e31424a014ad8238fc2a4b25ba72f1c.jpg" alt="" /></SwiperSlide>
        </Swiper>
      </div>
      
      <Footer />
    </div>
  );
}
