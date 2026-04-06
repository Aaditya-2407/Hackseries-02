import RoadmapTemplate from "../Components/RoadmapTemplate";

const roadmap = [
    {
        title: "Fundamentals of Programming",
        icon: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
        desc: "Python or R Programming, Algorithms and Data Structures in Python, Problem Solving Techniques, OOP Concepts, Version Control Git",
    },
    {
        title: "Mathematics for AI-ML",
        icon: "https://cdn-icons-png.flaticon.com/512/897/897368.png",
        desc: "Calculus, Linear Algebra, Probability and Statistics, Discrete Mathematics, Optimization Technologies, Information Theory",
    },
    {
        title: "Data Analysis",
        icon: "https://cdn-icons-png.flaticon.com/512/4222/4222023.png",
        desc: "Data Preprocessing, Statistical Data Analysis, Data Visualization, Feature Engineering, Pipelines for Data Processing",
    },
    {
        title: "Introduction to SQL",
        icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
        desc: "Queries, Joins, Database Design, Indexing",
    },
    {
        title: "Tools and Libraries",
        icon: "https://cdn-icons-png.flaticon.com/512/4149/4149670.png",
        desc: "Scipy, Scikit-learn, Keras, TensorFlow, PyTorch, Pandas, Numpy, OpenCV, Docker, Jupyter Notebook",
    },
    {
        title: "Machine Learning",
        icon: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
        desc: "Supervised Learning, Unsupervised Learning, Model Evaluation and Cross Validation, Optimization Techniques",
    },
    {
        title: "Deep Learning",
        icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
        desc: "ANN and CNN, RNN and LSTM, GANs, Transformer Models",
    },
    {
        title: "Natural Language Processing",
        icon: "https://cdn-icons-png.flaticon.com/512/8649/8649607.png",
        desc: "Text Processing, Word Embeddings, Transformers, BERT",
    },
    {
        title: "Computer Vision",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055661.png",
        desc: "Image Processing, CNN, Object Detection, Image Segmentation",
    },
    {
        title: "Reinforcement Learning",
        icon: "https://cdn-icons-png.flaticon.com/512/3590/3590035.png",
        desc: "Bellman Equation, Monte Carlo Methods, Deep Q-Network, Policy Gradient Methods",
    },
    {
        title: "Building AI ML Application",
        icon: "https://cdn-icons-png.flaticon.com/512/1162/1162499.png",
        desc: "Cloud Platforms AWS, Azure, Deployment and Scaling, MLOps",
    },
];

const RoadmapAIML = () => {
    return (
        <RoadmapTemplate roadmap={roadmap} heading="AI & ML" resources="AI & ML resources Doc.pdf" />
    );
};

export default RoadmapAIML;
