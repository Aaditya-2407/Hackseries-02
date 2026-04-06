import RoadmapTemplate from "../Components/RoadmapTemplate";

const roadmap = [
    {
        title: "HTML",
        icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        desc: "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
    },
    {
        title: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        desc: "CSS or Cascading Style Sheets is the language used to style the frontend of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
    },
    {
        title: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        desc: "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.",
    },
    {
        title: "Bootstrap | Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        desc: "Bootstrap: Focuses on providing a comprehensive set of pre-styled components and a robust grid system. Great for quick prototypes and consistent design. Tailwind CSS: Emphasizes utility classes and flexibility, allowing for more customized and unique designs but requiring more hands-on styling.",
    },
    {
        title: "React | Angular | Vue",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        desc: "React is a JavaScript library, developed and maintained by Facebook, whereas Angular is a TypeScript-based JavaScript framework developed by Google. Vue.js was created by Evan You. He worked at Google on AngularJS projects. He extracts the parts that we really liked in AngularJS and builds something really lightweight.",
    },
    {
        title: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        desc: "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.",
    },
    {
        title: "MongoDB OR MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        desc: "MongoDB and MySQL are two database management systems that you can use to store and manage data. MySQL is a relational database system that stores data in a structured tabular format. In contrast, MongoDB stores data as JSON documents in a more flexible format.",
    },
    {
        title: "Git & GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        desc: "Git is a version control system that intelligently tracks changes in files. Git is particularly useful when you and a group of people are all making changes to the same files at the same time. GitHub is a cloud-based platform where you can store, share, and work together with others to write code. Storing Your code in Repository.",
    },
];

const RoadmapWebDev = () => {
    return (
        <RoadmapTemplate roadmap={roadmap} heading="Web Development" resources="WEB DEV.pdf" />
    );
};

export default RoadmapWebDev;