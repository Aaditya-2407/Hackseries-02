import RoadmapTemplate from "../Components/RoadmapTemplate";

const roadmap = [
    {
        title: "Foundations of Data Structures",
        icon: "https://cdn-icons-png.flaticon.com/512/9322/9322127.png",
        desc: "Introduction to Data Structures: Understand the purpose and types of data structures. Pointers, Structures, Functions, Dynamic Memory Allocation & Recursion.",
    },
    {
        title: "Algorithms and Problem Solving",
        icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
        desc: "Sorting Algorithms: Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, Quick Sort, Heap Sort. Searching Algorithms: Linear Search for unsorted data, Binary Search for sorted data.",
    },
    {
        title: "Fundamental Data Structures",
        icon: "https://cdn-icons-png.flaticon.com/512/2082/2082805.png",
        desc: "Array-Based Data Structures, Linked Lists, Matrix Operations, Dynamic Arrays, Hash Tables.",
    },
    {
        title: "Trees",
        icon: "https://cdn-icons-png.flaticon.com/512/1653/1653702.png",
        desc: "Introduction to Trees: Understand binary tree concepts and their representations. Learn and practice binary tree traversal (preorder, inorder, postorder). Advanced Tree Structures, Heaps.",
    },
    {
        title: "Graphs",
        icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        desc: "Graph Representation and Management: Learn the fundamentals of graph representation. Graph Traversal Algorithms: BFS, DFS. Shortest Path Algorithms: Dijkstra's Algorithm, Bellman-Ford Algorithm. Minimum Spanning Tree: Prim's Algorithm, Kruskal's Algorithm.",
    },
    {
        title: "Algorithm Design Strategies",
        icon: "https://cdn-icons-png.flaticon.com/512/9068/9068676.png",
        desc: "Divide and Conquer, Greedy Algorithms, Dynamic Programming (DP), Backtracking.",
    },
];

const RoadmapDSA = () => {
    return (
        <RoadmapTemplate roadmap={roadmap} heading="Data-Structures & Algorithm" resources="DSA.pdf" />
    );
};

export default RoadmapDSA;
