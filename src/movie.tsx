import { useParams } from "react-router-dom";
import Home from "./home";
import MovieTicketList from "./components/ui/item";
import { Bold, Indent, Key } from "lucide-react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";



function Movie(){
  const toFarsiNumber = (number: string | number) => {
    const farsiDigits = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return number.toString().replace(/\d/g, d => farsiDigits[parseInt(d)]);
  };


  const {id} = useParams();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [rateCounter,setrateCounter] = useState<number[]>([0,0,0,0,0])
  const stars  = [
    { value: 9 , size: 1.2 },
    { value: 15 , size: 1.4 },
    { value: 6 , size: 1.7 },
    { value: 2 , size: 2.2 },
    { value: 1 , size: 2.5 },
  ];
  const handleRateCounter = (index : number) =>{
    const update = [...rateCounter];
    update[index] += 1;
    setrateCounter(update)
  }
  const totalRating = rateCounter.reduce((acc,val) => acc+val,0)
  const SimpleAverageRating = totalRating == 0 ? '0' : (
    rateCounter.reduce((sum, count, index) => sum + count * (index+1), 0) / totalRating).toFixed(1)

  const AverageRating = SimpleAverageRating.replace(".", "/");
  const recommends = [
    {id : '1', value:'/img/recommends/bahoon.jpg'},
    {id : '2', value:'/img/recommends/Film_Serial_Download.jpg'},
    {id : '3', value:'/img/recommends/Tars_&_Nekbat.jpg'},
    {id : '4', value:'/img/recommends/Waiting_For_Godot.jpg'},
    ]
  const movies=[
    {
      id: 1,
      title: "باهون",
      director: "تاد فیلیپس",
      genre:[ "درام"," روان‌شناختی"],
      duration: 122,
      releaseDate: "2019-10-04",
      description:
          "این فیلم داستان مردی تنها را روایت می‌کند که به مرور به چهره‌ای جنایتکار تبدیل می‌شود.",
      posterUrl: "/img/posters/bahoon.jpg",
      banner:'/img/banners/bahoon.jpeg',
  },
  {
      id: 2,
      title: "می‌نیون‌ها",
      director: "کایل بالدا",
      genre: ["انیمیشن "," کمدی"],
      duration: 90,
      releaseDate: "2022-07-01",
      description:
          "ماجراهای خنده‌دار مینیون‌ها در تلاش برای رسیدن به یک رئیس جدید.",
      posterUrl: "/img/photo_2025-04-04_21-26-09.jpg",
      banner:'/img/banners/banner-cause-of-death-unknown-movie.jpg',
      
  },
  {
      id: 3,
      title: "جوکر",
      director: "تاد فیلیپس",
      genre: [ "درام"," روان‌شناختی"],
      duration: 122,
      releaseDate: "2019-10-04",
      description:
          "این فیلم داستان مردی تنها را روایت می‌کند که به مرور به چهره‌ای جنایتکار تبدیل می‌شود.",
      posterUrl: "/img/photo_2025-04-04_21-26-04.jpg",
      banner:'/img/banners/banner-cause-of-death-unknown-movie.jpg',
  },
  {
      id: 4,
      title: "می‌نیون‌ها",
      director: "کایل بالدا",
      genre:  ["انیمیشن "," کمدی"],
      duration: 90,
      releaseDate: "2022-07-01",
      description:
          "ماجراهای خنده‌دار مینیون‌ها در تلاش برای رسیدن به یک رئیس جدید.",
      posterUrl: "/img/photo_2025-04-04_21-26-09.jpg",
      banner:'/img/banners/banner-cause-of-death-unknown-movie.jpg',
  },
  {
      id: 5,
      title: "جوکر",
      director: "تاد فیلیپس",
      genre: [ "درام"," روان‌شناختی"],
      duration: 122,
      releaseDate: "2019-10-04",
      description:
          "این فیلم داستان مردی تنها را روایت می‌کند که به مرور به چهره‌ای جنایتکار تبدیل می‌شود.",
      posterUrl: "/img/photo_2025-04-04_21-26-04.jpg",
      banner:'/img/banners/banner-cause-of-death-unknown-movie.jpg',
  },
  ];

  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }
  const genre = movie.genre


    const starsRef = useRef<HTMLDivElement>(null);
    const handleScrollToStars = () => {
      const element = starsRef.current;
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

  return (
    <div>
      <img className="banner" src={movie.banner} alt={movie.title} />

      <div className="extra">
        <a className='extra_film' href="/" >فیلم </a>
        <span className="extra_arrow"><FontAwesomeIcon icon={faAngleLeft}/></span>
        <span className='extra_title' style={{fontWeight:'Bold'}}>{movie.title}</span>
        <span className="extra_fa"><FontAwesomeIcon icon={faEllipsisV}/></span>
        <span className="extra_fa"><FontAwesomeIcon icon={faShareAlt}/></span>
        <span className="extra_nazar">نظر کاربران</span>
        <div className="extra_rating_box">
          <span className="extra_rating" onClick={handleScrollToStars}>★{AverageRating}</span>
        </div>
        <span className="extra_info">اطلاعات</span>
      </div>

      <div className="movie-container">
        <div className="movie-card">
          <div className="movie-poster">
            <img className="poster-image" src={movie.posterUrl} alt={movie.title} ></img>
            <p><FontAwesomeIcon icon={faEye} /> 1,234</p>
            <div className="recommend">
              <a href="/movie/1/"><img src={recommends[0].value}/></a>
              <a href="/"><img src={recommends[1].value}/></a>
              <a href="/movie/3/"><img src={recommends[2].value}/></a>
              <a href="/movie/4/"><img src={recommends[3].value}/></a>
            </div>
          </div>
          <div className="movie-info">
            <p className="movie-details" style={{marginTop:'20px'}}>کارگردان: {movie.director}</p>
            <p className="movie-details">مدت:{movie.duration} minutes</p>
            <p className="movie-details">زمان انتشار: {movie.releaseDate}</p>
            <p className="movie-description">خلاصه:{movie.description}</p>
            <div className="movie-genre">
              <div className="genre-box">
                <div className="genre-item genre">سبک</div>
                {genre.map((genre, index) => (
                  <div key={index} className="genre-item">{genre}</div>
                ))}
              </div>
            </div>
          </div>
      </div>
        <div  className="rating-container" ref={starsRef}>
            <div className="stars-breakdown">
              {stars.map((item,index)=>(
                <h6
                  key={index}
                  className="star-item"
                  onMouseEnter={() =>setHoveredIndex(index)}
                  onMouseLeave={()=>setHoveredIndex(null)}>
                  <FontAwesomeIcon icon={faStar} onClick={() =>(handleRateCounter(index))}
                    className={hoveredIndex !== null && index<=hoveredIndex ? 'star gold' : hoveredIndex !== null ? 'star gray' : 'star default'}
                    style={{ fontSize: `${item.size}em` }}
                  />
                  <span className="rate-number" >{toFarsiNumber(rateCounter[index])}</span>
                </h6>
                
              ))}
            </div>   
            <h2 className="rank">{toFarsiNumber(AverageRating)}</h2>
            <small className="people"> ({toFarsiNumber(totalRating)}<FontAwesomeIcon icon={faUser}/>)</small>
        </div>
      </div>   
    </div>
  );
};

export default Movie;
