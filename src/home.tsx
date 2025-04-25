import { useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button";
import { useEffect, useState } from "react";
import { Input } from "./components/ui/input";
import { CircleUser, AlignJustify, Grid2X2, Ticket, Search, Music, Film, Drama, GraduationCap, CalendarIcon, CalendarDays,icons, ChevronRight, ChevronLeft, House,Building,LocateIcon,Map} from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "./components/ui/popover";
import { cn } from "./lib/utils";
import { Calendar } from "./components/ui/calendar";
import Item from "./components/ui/item";


const Home = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [daterange, setDaterange] = useState<{ from: Date | undefined; to?: Date | undefined }>({ from: new Date() })
    const navigate = useNavigate();
    const slides = [
        { id: 1, title: "Slide 1", image: "/img/photo_2025-04-04_21-26-04.jpg" },
        { id: 2, title: "Slide 2", image: "/img/photo_2025-04-04_21-26-09.jpg" },
        { id: 3, title: "Slide 3", image: "/img/photo_2025-04-04_21-26-15.jpg" },
    ];


    const [movies, setmovies] = useState([
        {
            id: 1,
            title: "جوکر",
            director: "تاد فیلیپس",
            genre: "درام / روان‌شناختی",
            duration: 122,
            releaseDate: "2019-10-04",
            description:
                "این فیلم داستان مردی تنها را روایت می‌کند که به مرور به چهره‌ای جنایتکار تبدیل می‌شود.",
            posterUrl: "/img/photo_2025-04-04_21-26-04.jpg",
        },
        {
            id: 2,
            title: "می‌نیون‌ها",
            director: "کایل بالدا",
            genre: "انیمیشن / کمدی",
            duration: 90,
            releaseDate: "2022-07-01",
            description:
                "ماجراهای خنده‌دار مینیون‌ها در تلاش برای رسیدن به یک رئیس جدید.",
            posterUrl: "/img/photo_2025-04-04_21-26-09.jpg",
        },
        {
            id: 1,
            title: "جوکر",
            director: "تاد فیلیپس",
            genre: "درام / روان‌شناختی",
            duration: 122,
            releaseDate: "2019-10-04",
            description:
                "این فیلم داستان مردی تنها را روایت می‌کند که به مرور به چهره‌ای جنایتکار تبدیل می‌شود.",
            posterUrl: "/img/photo_2025-04-04_21-26-04.jpg",
        },
        {
            id: 2,
            title: "می‌نیون‌ها",
            director: "کایل بالدا",
            genre: "انیمیشن / کمدی",
            duration: 90,
            releaseDate: "2022-07-01",
            description:
                "ماجراهای خنده‌دار مینیون‌ها در تلاش برای رسیدن به یک رئیس جدید.",
            posterUrl: "/img/photo_2025-04-04_21-26-09.jpg",
        },
        {
            id: 1,
            title: "جوکر",
            director: "تاد فیلیپس",
            genre: "درام / روان‌شناختی",
            duration: 122,
            releaseDate: "2019-10-04",
            description:
                "این فیلم داستان مردی تنها را روایت می‌کند که به مرور به چهره‌ای جنایتکار تبدیل می‌شود.",
            posterUrl: "/img/photo_2025-04-04_21-26-04.jpg",
        },
        {
            id: 2,
            title: "می‌نیون‌ها",
            director: "کایل بالدا",
            genre: "انیمیشن / کمدی",
            duration: 90,
            releaseDate: "2022-07-01",
            description:
                "ماجراهای خنده‌دار مینیون‌ها در تلاش برای رسیدن به یک رئیس جدید.",
            posterUrl: "/img/photo_2025-04-04_21-26-09.jpg",
        },
        {
            id: 1,
            title: "جوکر",
            director: "تاد فیلیپس",
            genre: "درام / روان‌شناختی",
            duration: 122,
            releaseDate: "2019-10-04",
            description:
                "این فیلم داستان مردی تنها را روایت می‌کند که به مرور به چهره‌ای جنایتکار تبدیل می‌شود.",
            posterUrl: "/img/photo_2025-04-04_21-26-04.jpg",
        },
        {
            id: 2,
            title: "می‌نیون‌ها",
            director: "کایل بالدا",
            genre: "انیمیشن / کمدی",
            duration: 90,
            releaseDate: "2022-07-01",
            description:
                "ماجراهای خنده‌دار مینیون‌ها در تلاش برای رسیدن به یک رئیس جدید.",
            posterUrl: "/img/photo_2025-04-04_21-26-09.jpg",
        },
    ]);
    //ناقص
    /*
    useEffect(() => {
        // فرض کنیم API ما این مسیر باشه
        fetch("/api/movies-with-tickets")
          .then(res => res.json())
          .then(data => {
            setmovies(data);
          });
      }, []);*/

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextSlide = () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(nextIndex);
    };

    const handlePrevSlide = () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(prevIndex);
    };

    const currentSlide = slides[currentIndex];

    return (
        <div className="flex flex-col items-center w-full h-full" >

            <div className="flex w-[90%] h-[150px] bg-gray-50 justify-center items-start flex-col m-4">
                <div className="flex w-full justify-between items-center flex-row" >
                    <Button variant="ghost" className="hover:text-blue-500 text-gray-700 m-0.5 flex items-center justify-center flex-row" onClick={() => navigate('/login')}>
                        <CircleUser size={20} />
                        ورود یا عضویت
                    </Button>
                    <Button variant="ghost" className="hover:text-blue-500 text-gray-700 m-0.5" >
                        خرید ها
                        <Ticket size={20} />
                    </Button>
                    <div className="relative flex items-center justify-center flex-row w-[40%] h-[45px] mx-[200px]" >
                        <Search size={20} className="absolute left-3 " />
                        <Input placeholder=" . . . جستجو" className="text-right placeholder:pr-1.5 rounded-2xl m-0.5  border-0 bg-[#dfdfdf] hover:border-blue-500 hover:border-2 hover:bg-blue-50 " />
                    </div>
                    <Button variant="ghost" className="hover:text-blue-500 text-gray-700 m-0.5" >
                        ویترین
                        <Grid2X2 size={20} />
                    </Button>
                    <div className=" w-20 flex items-center justify-between flex-row m-2.5" >
                        <p>logo</p>
                        <AlignJustify size={30} />
                    </div>
                </div>
                <div className=" w-full flex flex-row items-center justify-center h-full m-2.5" >
                    <div className="w-[70%] flex justify-center items-center flex-row h-full bg-blue-50 rounded-xl">
                        <Button variant="outline" className="mx-4 w-[15%] hover:text-blue-500 text-gray-500  border-2">
                            کنسرت
                            <Music size={20} />
                        </Button>
                        <Button variant="outline" className="mx-4 w-[15%] hover:text-blue-500 text-gray-500  border-2">
                            فیلم و سریال
                            <Film size={20} />
                        </Button>
                        <Button variant="outline" className="mx-4 w-[15%] hover:text-blue-500 text-gray-500  border-2">نمایش
                            <Drama size={20} />
                        </Button>
                        <Button variant="outline" className="mx-4 w-[15%] hover:text-blue-500 text-gray-500  border-2">تاتر
                            <Drama size={20} />
                        </Button>
                        <Button variant="outline" className="mx-4 w-[15%] hover:text-blue-500 text-gray-500  border-2">اموزشی
                            <GraduationCap size={20} />
                        </Button>
                    </div>
                    <div className="w-[25%] flex justify-center items-center flex-row h-full bg-blue-100 rounded-xl">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" className="m-0.5 w-[30%] hover:text-blue-500 text-gray-500  border-2">کی</Button>
                            </DialogTrigger>
                            <DialogContent className="border-0 bg-gray-50 text-gray-500 rounded-2xl shadow-lg">
                                <div className="grid gap-4">
                                    <Button type="button" variant="outline" className="w-[280px] text-left">
                                        امروز
                                        <CalendarDays className="mr-2 h-4 w-4" />
                                    </Button>

                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[280px]",
                                                    !Date && "text-muted-foreground text-gray-500"
                                                )}
                                            >
                                                <span>در روز</span>
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                initialFocus
                                                className="bg-gray-50 text-gray-500"
                                            />
                                        </PopoverContent>
                                    </Popover>

                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[280px]",
                                                    !Date && "text-muted-foreground text-gray-500"
                                                )}
                                            >
                                                <span> از روز تا</span>
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="range"
                                                selected={daterange}
                                                onSelect={(range) => setDaterange(range || { from: undefined })}
                                                initialFocus
                                                className="bg-gray-50 text-gray-500"
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <DialogClose />

                            </DialogContent>
                        </Dialog>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" className="m-0.5 w-[30%] hover:text-blue-500 text-gray-500  border-2">کجا</Button>
                            </DialogTrigger>
                            <DialogContent className="border-0 bg-gray-50 text-gray-500 rounded-2xl shadow-lg">
                                <div className="grid gap-4">
                                    <Button type="button" variant="outline" className="w-[280px] text-left">
                                        تهران
                                        <House className="mr-2 h-4 w-4" />
                                    </Button>
                                    <Button type="button" variant="outline" className="w-[280px] text-left">
                                        دیگرشهرها
                                        <Building className="mr-2 h-4 w-4" />
                                    </Button>
                                    <Button type="button" variant="outline" className="w-[280px] text-left">
                                        نزدیکی اینجا
                                        <LocateIcon className="mr-2 h-4 w-4" />
                                    </Button>
                                    <Button type="button" variant="outline" className="w-[280px] text-left">
                                        شهر یا سالن ...
                                        <Map className="mr-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
            <div className="flex w-[90%] h-[450px] bg-gray-50 justify-between items-center flex-row m-4 rounded-xl">
                <Button variant="outline" size={"icon"} onClick={handlePrevSlide} className="mx-4 bg-white hover:text-blue-500 text-gray-500 rounded-full border-2">
                    <ChevronLeft />
                </Button>
                <div className="w-[50%] h-full flex flex-wrap justify-center items-center">
                    <div className="flex flex-col items-center justify-end w-[20%] h-full">
                        <Button variant="outline" className="mb-4 hover:text-blue-500 text-gray-500  border-2">خرید بلیط</Button>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[80%] h-full">
                        <h1 className="text-2xl font-bold text-gray-700">{currentSlide.title}</h1>
                    </div>
                </div>

                <div className="w-[50%] h-full rounded-2xl">
                    <img src={currentSlide.image} alt={currentSlide.title} className="w-full h-full" />
                </div>

                <Button variant="outline" size={"icon"} onClick={handleNextSlide} className="mx-4 bg-white hover:text-blue-500 text-gray-500 rounded-full border-2">
                    <ChevronRight />
                </Button>
            </div>

            <div className="flex w-[90%] justify-center items-start flex-row flex-wrap m-4">
                {movies.map((movie: any) => (
                    <Item
                        key={movie.id}
                        movieTitle={movie.title}
                        director={movie.director}
                        genre={movie.genre}
                        duration={movie.duration}
                        releaseDate={movie.releaseDate}
                        description={movie.description}
                        posterUrl={movie.posterUrl}
                    />
                ))}
            </div>
        </div>
    )
}
export default Home;