import React, { useState } from "react";
import { Button } from "./button";
import {CalendarDays,Timer} from "lucide-react";
import { cn } from "./utils/cn";
import { useNavigate } from "react-router-dom";

type MovieTicketProps = {
    movieTitle: string;
    director: string;
    genre: string;
    duration: number;
    releaseDate: string;
    description: string;
    posterUrl: string;
};

const MovieTicketList: React.FC<MovieTicketProps> = ({
    movieTitle,
    director,
    genre,
    duration,
    releaseDate,
    description,
    posterUrl,
}) => {
    const Navigate = useNavigate();
    const handleclick = () => {
        Navigate(`/movie/${movieTitle}`);
    };
    
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div onClick={handleclick} className="flex flex-col items-start w-[240px] h-[350px] rounded-xl bg-white m-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            
                <div className={cn(isHovered ? " w-[240px] h-[350px]":" w-[240px] h-[300px]","transition-all duration-300 ease-in-out relative flex flex-col items-start bg-white rounded-xl shadow-lg")}>
                    <img
                        src={posterUrl}
                        alt={`پوستر ${movieTitle}`}
                        className= {cn("transition-all duration-300 ease-in-out",
                            isHovered ? "relative w-[210px] h-[150px] rounded-xl overflow-hidden m-[15px] mb-0 " : "w-full h-full rounded-xl")}
                    />
                    <div className={cn(!isHovered ?"opacity-0 absolute bottom-8 w-full flex flex-col items-end justify-center rounded-xl mt-2":"opacity-100 transition-all duration-300 ease-in-out absolute bottom-2 w-full flex flex-col items-end justify-center rounded-xl mt-2")}>
                        <p className="mr-7 mt-1 text-[16px] text-right text-gray-800">{movieTitle}</p>
                        <p className="mr-7 mt-1 text-[12px] text-gray-500">کارگردان: {director}</p>
                        <p className="mr-7 mt-1 text-[12px] text-gray-500">ژانر: {genre}</p>
                        <p className="mr-6 mt-1 text-[12px] text-gray-500 flex flex-row">مدت زمان: {duration} دقیقه<Timer className="ml-1" size={20}/></p>
                        <p className="mr-6 mt-1 text-[12px] text-gray-500 flex flex-row">تاریخ انتشار: {new Date(releaseDate).toLocaleDateString("fa-IR")}<CalendarDays className="ml-1" size={20}/></p>
                        <div className="w-full flex flex-col items-center justify-center rounded-2xl">
                        <Button variant={"outline"} className="text-gray-500 border-2 m-2 w-[90%]">خرید</Button>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default MovieTicketList;
