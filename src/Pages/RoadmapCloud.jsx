import RoadmapTemplate from "../Components/RoadmapTemplate";

const roadmap = [
    {
        title: "Understand Basic Programming Concepts",
        icon: "https://cdn-icons-png.flaticon.com/512/2721/2721620.png",
        desc: "Languages: Python, JavaScript (Node.js), Java, Go. Key Concepts: Data structures, Algorithms, OOP. Resources: Codecademy, freeCodeCamp, Coursera.",
    },
    {
        title: "Learn Operating Systems and Networking",
        icon: "https://cdn-icons-png.flaticon.com/512/6947/6947575.png",
        desc: "Linux: Learn to manage Linux servers. Networking: TCP/IP, DNS, HTTP/HTTPS, Firewalls. Resources: Linux Academy, Cisco Networking Academy.",
    },
    {
        title: "Understand Cloud Computing Basics",
        icon: "https://cdn-icons-png.flaticon.com/512/3308/3308395.png",
        desc: "Cloud Models: IaaS, PaaS, SaaS. Key Concepts: Virtualization, Containers, Serverless Computing. Resources: Cloud provider docs, YouTube, Coursera.",
    },
    {
        title: "Choose a Cloud Providers",
        icon: "https://cdn-icons-png.flaticon.com/512/5776/5776304.png",
        desc: "AWS: EC2, S3, RDS, Lambda. Azure: VMs, App Services, Azure Functions. Google Cloud: Compute Engine, Kubernetes Engine. Resources: Tutorials from AWS, Azure, Google Cloud.",
    },
    {
        title: "Learn Cloud Architecture and Services",
        icon: "https://cdn-icons-png.flaticon.com/512/7792/7792116.png",
        desc: "Compute: EC2, Lambda, VMs. Storage: S3, Blob Storage, DynamoDB. Networking: VPC, CDN, Load Balancers. Resources: Whitepapers, cloud vendor documentation.",
    },
    {
        title: "Understand Cloud Security",
        icon: "https://cdn-icons-png.flaticon.com/512/1162/1162477.png",
        desc: "Best Practices: IAM, Encryption, Compliance. Tools: AWS Shield, Azure Security Center. Resources: Security blogs, vendor-specific security courses.",
    },
    {
        title: "Version Control",
        icon: "https://cdn-icons-png.flaticon.com/512/11518/11518876.png",
        desc: "Version Control: Git. Resources: Git tutorials, Courses on Udemy.",
    },
    {
        title: "Get Certified",
        icon: "https://cdn-icons-png.flaticon.com/512/3135/3135825.png",
        desc: "AWS: AWS Certified Solutions Architect. Azure: Azure Developer Associate. Google Cloud: Associate Cloud Engineer. Resources: Certification prep on Udemy, A Cloud Guru.",
    },
    {
        title: "Gain Hands-On Experience",
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055683.png",
        desc: "Build Projects: Host websites, build APIs, deploy clusters. Freelancing/Internships: Gain practical experience. Resources: GitHub, Cloud Labs, personal projects.",
    },
    {
        title: "Stay Updated & Follow Best Practices",
        icon: "https://cdn-icons-png.flaticon.com/512/1165/1165230.png",
        desc: "Best Practices: Cost optimization, high availability. Stay Updated: Follow blogs, webinars, cloud provider channels.",
    },
];

const RoadmapCloud = () => {
    return (
        <RoadmapTemplate roadmap={roadmap} heading="Cloud Computing" resources="cloud Computing.pdf" />
    );
};

export default RoadmapCloud;
