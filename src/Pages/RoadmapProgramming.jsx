import RoadmapTemplate from "../Components/RoadmapTemplate";

const roadmap = [
    {
        title: "Introduction to Programming Languages",
        icon: "https://cdn-icons-png.flaticon.com/512/3063/3063822.png",
        desc: "Programming languages are tools used to communicate instructions to a computer. Think of them like different languages humans speak — each language has its units and strengths. Why Should You Learn Programming? To solve problems and automate tasks. Programming opens up job opportunities and helps you think logically.",
    },
    {
        title: "Paradigms in Programming (Types of Approaches)",
        icon: "https://cdn-icons-png.flaticon.com/512/9068/9068671.png",
        desc: "Procedural: Break down tasks into procedures or routines (functions). Example: C++. Object-Oriented (OOP): Organize code around objects (data and functions). Example: Python, Java. Functional: Focus on computation through mathematical functions.",
    },
    {
        title: "Understanding Object-Oriented Programming (OOP)",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055685.png",
        desc: "OOP is a programming paradigm where the program is designed using objects, which represent real-world entities. The idea is to structure programs by creating objects that contain both data (attributes) and methods (functions).",
    },
    {
        title: "Key Concepts in OOP",
        icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
        desc: "Class, Object, Inheritance, Polymorphism, Encapsulation, Abstraction.",
    },
    {
        title: "Why is OOP Important?",
        icon: "https://cdn-icons-png.flaticon.com/512/1162/1162456.png",
        desc: "Code Reusability, Code Maintainability, Code Scalability, Real-World Modeling, security",
    },
    {
        title: "OOP In Popular Languages",
        icon: "https://cdn-icons-png.flaticon.com/512/919/919852.png",
        desc: "Python: One of the easiest languages to learn OOP due to its simple syntax. Java: A purely OOP language used for large-scale enterprise applications. C++: Provides a mix of procedural and object-oriented paradigms.",
    },
    {
        title: "How to Choose the Right Language?",
        icon: "https://cdn-icons-png.flaticon.com/512/189/189664.png",
        desc: "C++: Choose if you're interested in systems programming, game development, or understanding how computers work at a low level. Python: Ideal if you want a simple start to programming, or are interested in data science, web development, or automation. Java: Best if you're looking into enterprise applications, Android development, or backend systems.",
    },
];

const RoadmapProgramming = () => {
    return (
        <RoadmapTemplate roadmap={roadmap} heading="Programming Language" resources="Programming-language.pdf" />
    );
};

export default RoadmapProgramming;
