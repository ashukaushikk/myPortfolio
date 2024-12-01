import Analog_Clock from "../assets/ProjectImages/Analog_Clock.jpg";
import calculator from "../assets/ProjectImages/calculator.jpg";
import CountDown_Timer from "../assets/ProjectImages/CountDown_Timer.jpg";
import ConvertorKMToMiles from "../assets/ProjectImages/Convertor_KM_to_Miles.jpg";
import Digital_Clock from "../assets/ProjectImages/Digital_Clock.jpg";
import DigitalClockWithDate from "../assets/ProjectImages/Digital_Clock with_Date.jpg";
import DropDownSearchBar from "../assets/ProjectImages/DropDownSearchBar.jpg";
import GenerateQRCode from "../assets/ProjectImages/Generate_QR_Code.jpg";
import LibertyCart from "../assets/ProjectImages/Liberty_Cart.jpg";
import Note_App from "../assets/ProjectImages/Note_App.jpg";
import PasswordGenerator from "../assets/ProjectImages/passwordGenerator.jpg";
import RandomColor from "../assets/ProjectImages/RandomColor.jpg";
import StopWatch from "../assets/ProjectImages/StopWatch.jpg";
import TextFormatter from "../assets/ProjectImages/TextFormatter.jpg";
import WeatherApp from "../assets/ProjectImages/WeatherApp.png";
import WordsCounter from "../assets/ProjectImages/WordsCounter.jpg";
import QuizApp from "../assets/ProjectImages/QuizApp.png";

export const HERO_CONTENT = `
✨ Hello! I am a passionate Frontend Web Developer with expertise in building modern, responsive, and user-friendly websites and applications. Turning ideas into impactful digital experiences is what I do best.
With expertise in React.js, Tailwind CSS, and state management tools like Redux, I design and build intuitive solutions that work seamlessly across all devices.
`;

export const JAVASCRIPT_PROJECTS = [
  // E_Commerce_Web_Site
  {
    title: "LibertyCart - Live E-commerce Platform",
    url: "https://liberty-cart-client.vercel.app/",
    imgUrl: LibertyCart,
    description:
      "LibertyCart is a live, dynamic, and user-friendly e-commerce platform designed to provide a seamless shopping experience. It features a responsive design, efficient state management, and real-time data integration. The application includes functionalities like user authentication, product browsing with category filtering, cart management, and order placement. Being live, it ensures smooth transactions and real-time updates for a smooth user experience. The platform is built using modern technologies, ensuring optimal performance, scalability, and an intuitive interface, making it a reliable solution for online shopping.",
    technologies: [
      "HTML",
      "TailwindCSS",
      "React.js",
      "AntDesign",
      "React iCons",
      "React Redux",
      "Redux_Saga",
      "React_Hook_Form",
      "RESTful APIs",
    ],
  },
  // Weather_App
  {
    title: "Weather_APP (Live)",
    url: "https://weather-app-kappa-pink.vercel.app/",
    imgUrl: WeatherApp,
    description:
      "The Weather App is a real-time weather forecasting application that provides users with accurate weather data based on their location or city search. The app features a clean and responsive UI, displaying essential weather details such as temperature, humidity, wind speed, and a 7-day forecast. It offers a seamless user experience by integrating with a weather API to fetch real-time data and display it dynamically. The app is built with modern technologies to ensure high performance and responsiveness across devices.",
    technologies: ["HTML", "TailwindCSS", "React.js", "Axios", "API Integration"],
  },
  // Analog_Clock
  {
    title: "Analog Clock",
    url: "https://github.com/ashukaushikk/JavaScript_Projects/tree/main/05_Analog%20Clock",
    imgUrl: Analog_Clock,
    description:
      "An analog clock that displays the current time with clock hands for hours, minutes, and seconds. It updates in real-time.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  // Calculator
  {
    title: "Calculator",
    url: "https://github.com/ashukaushikk/JavaScript_Projects/tree/main/04_Calculator",
    imgUrl: calculator,
    description:
      "A fully functional calculator application with basic arithmetic operations like addition, subtraction, multiplication, and division.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  // Count_Down_Timer
  {
    title: "Count Down Timer",
    url: "https://github.com/ashukaushikk/JavaScript_Projects/tree/main/08_Cunt-Down",
    imgUrl: CountDown_Timer,
    description:
      "A countdown timer app that allows users to set a specific time and counts down to zero, alerting the user when the time is up.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  // Digital_Clock
  {
    title: "Digital Clock",
    url: "https://github.com/ashukaushikk/JavaScript_Projects/tree/main/06_Digital_Clock_1",
    imgUrl: Digital_Clock,
    description:
      "A real-time digital clock displaying the current time, formatted in hours, minutes, and seconds. It automatically updates every second.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  // Digital_Clock_With_Date
  {
    title: "Digital Clock with Date",
    url: "https://github.com/ashukaushikk/JavaScript_Projects/tree/main/07_Digital_Clock_2",
    imgUrl: DigitalClockWithDate,
    description:
      "A real-time digital clock that also displays the current date along with the time, formatted in hours, minutes, seconds, and date.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  // DropDown_SearchBar
  {
    title: "DropDown SearchBar",
    url: "https://github.com/ashukaushikk/JavaScript_Projects/tree/main/01_Dropdown_SearchBar",
    imgUrl: DropDownSearchBar,
    description:
      "Developed a dynamic Dropdown Search Bar that filters and displays options based on user input. The app improves user experience by offering suggestions in real-time as the user types.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  // KM_to_Miles_Converter
  {
    title: "Converter KM to Miles ",
    url: "https://github.com/ashukaushikk/JavaScript_Projects/tree/main/12_Converter_KM_to_Miles",
    imgUrl: ConvertorKMToMiles,
    description:
      "A simple converter that allows users to convert kilometers into miles. The app provides real-time results as the user inputs the distance in kilometers.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  // Note_App
  {
    title: "Note App",
    url: "https://github.com/ashukaushikk/JavaScript_Projects/tree/main/10_Note-App",
    imgUrl: Note_App,
    description:
      "A simple note-taking application where users can add, edit, and delete their notes. It allows users to keep track of their daily tasks and thoughts.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
  },
  // Password_Generator
  {
    title: "Password Generator",
    url: "https://github.com/ashukaushikk/JavaScript_Projects/tree/main/13_Password%20Generator",
    imgUrl: PasswordGenerator,
    description:
      "A password generator that creates secure passwords of various lengths and complexities. Users can customize the strength of the password they want.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  // Random_Color_Generator
  {
    title: "Random Color Generator",
    url: "https://github.com/ashukaushikk/JavaScript_Projects/tree/main/11_Random-Color",
    imgUrl: RandomColor,
    description:
      "A random color generator that generates a new color every time the user clicks a button, allowing users to experiment with different color schemes.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  // Stop_Watch
  {
    title: "Stop Watch",
    url: "https://github.com/ashukaushikk/JavaScript_Projects/tree/main/09_Stopwatch",
    imgUrl: StopWatch,
    description:
      "A simple stopwatch application that allows users to start, stop, and reset the timer, useful for timing events or activities.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  // Text_Formatter
  {
    title: "Text Formatter",
    url: "https://github.com/ashukaushikk/JavaScript_Projects/tree/main/03_Text_Formatter",
    imgUrl: TextFormatter,
    description:
      "A simple text formatter that allows users to convert text to uppercase, lowercase, and capitalize the first letter of each word.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  // Words_Counter
  {
    title: "Words Counter",
    url: "https://github.com/ashukaushikk/JavaScript_Projects/tree/main/02_Words_Counter",
    imgUrl: WordsCounter,
    description:
      "A tool to count the number of words and characters in a given text input. It helps users keep track of word limits for writing tasks, such as essays or articles.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  // QR_Code_Generator
  {
    title: "QR Code Generator",
    url: "https://github.com/ashukaushikk/JavaScript_Projects/tree/main/14_QR%20Code%20Generator",
    imgUrl: GenerateQRCode,
    description:
      "A QR Code Generator app that converts a URL or any text input into a QR code, allowing users to easily share and scan the code using mobile devices.",
    technologies: ["HTML", "CSS", "JavaScript", "QR Code API"],
  },
  // Quiz_App
  {
    title: "Quiz App",
    url: "https://github.com/ashukaushikk/JavaScript_Projects/tree/main/15_Quiz%20App",
    imgUrl: QuizApp,
    description:
      "A fun quiz app that presents multiple-choice questions to users. After answering, users can view their score and the correct answers to the quiz.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Gopal Marg, Near Krishan Mandir, Budhlada, District: Mansa, State: Punjab, Pin: 151502",
  phoneNo: "+91 9872932661",
  email: "ashukaushik1007@gmail.com",
};
