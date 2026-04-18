import pfp from "../assets/test-img-1.png";

export const User = {
    name: "Joanne Rasendo",
    work: "Freelancer",
    image: pfp,
    totalClients: 20000,
    ClientGrowth: 2,
    ActiveProjectsGrowth: -20,
    ActiveProjects: 30,
    TotalInvoiceGrowth: -13,
    TotalInvoice: 25,
    TotalRevenue: 450000,
    RevenueGrowth: -2,
    RecentProjectName: "Joeverse Smart Web",
    ClientName: "Joe Myers",
    ProjectStatus: "Active",
    ProjectDeadline: "2026-06-12",
    
    invoices:[
        {
            amount: 19000,
            client: "John D.",
            status: "Done",
        },
        {
            amount: 21000,
            client: "Sam M.",
            status: "Overdue",
        },
        {
            amount: 1000,
            client: "Nirro B.",
            status: "Done",
        },
        {
            amount: 20900,
            client: "Jane D.",
            status: "Overdue",
        },
    ],
    
    monthlyRevenue:[
    { month: "Jan", value: 500 },
    { month: "Feb", value: 800 },
    { month: "Mar", value: 650 },
    { month: "Apr", value: 900 },
    { month: "May", value: 700 },
    { month: "Jun", value: 1000 },
    { month: "Jul", value: 850 },
    { month: "Aug", value: 950 },
    { month: "Sep", value: 700 },
    { month: "Oct", value: 1100 },
    { month: "Nov", value: 1050 },
    { month: "Dec", value: 1200 },
    ],

    deadlines:[
        {
            projectName: "AceWears",
            duedate: "2026-04-04",
            deadlinestatus: "Overdue",
        },
        {
            projectName: "JohnDWeb",
            duedate: "2026-07-04",
            deadlinestatus: "Upcoming",
        },
        {
            projectName: "JohnDWeb",
            duedate: "2026-07-04",
            deadlinestatus: "Upcoming",
        },
        {
            projectName: "JohnDWeb",
            duedate: "2026-07-04",
            deadlinestatus: "Upcoming",
        },
    ],

    tasks:[
        {
            taskId: "TSK-321",
            taskName: "Design Dashboard UI Layout",
            clientName: "Johan Doe",
            projectName: "Payroll System",
            progress: "0",
            deadline: "2026-05-06",
            priority: "High",
            status: "To Do"
            
        },
        {
            taskId: "TSK-352",
            taskName: "Fix Responsive Navigation Bug",
            clientName: "Sam Milby",
            projectName: "Smart Helmet",
            progress: "0",
            deadline: "2026-07-04",
            priority: "Medium",
            status: "To Do"
            
        },
        {
            taskId: "TSK-432",
            taskName: "Create Client Project Wireframes",
            clientName: "John Stone",
            projectName: "CSIT Fest Site",
            progress: "0",
            deadline: "2026-09-06",
            priority: "Low",
            status: "To Do"
            
        },
        {
            taskId: "TSK-005",
            taskName: "Update UI Layout",
            clientName: "Sam Sulek",
            projectName: "TaskFlow App",
            progress: "10",
            deadline: "2026-04-27",
            priority: "High",
            status: "In Progress"
            
        },
        {
            taskId: "TSK-012",
            taskName: "Optimize Mobile View",
            clientName: "John Dao",
            projectName: "CareSync Platform",
            progress: "40",
            deadline: "2026-05-14",
            priority: "Medium",
            status: "In Progress"
            
        },
        {
            taskId: "TSK-013",
            taskName: "Test User Flow",
            clientName: "Sassy Ser",
            projectName: "Nova Dashboard",
            progress: "03",
            deadline: "2026-08-26",
            priority: "Low",
            status: "In Progress"
            
        },
        {
            taskId: "TSK-0025",
            taskName: "Improve UI Spacing",
            clientName: "Sam Sulek",
            projectName: "Pulse System",
            progress: "100%",
            deadline: "2025-01-04",
            priority: "Low",
            status: "Completed"
            
        },
        {
            taskId: "TSK-120",
            taskName: "Debug API Response",
            clientName: "John Dao",
            projectName: "Orbit Platform",
            progress: "10",
            deadline: "2024-07-02",
            priority: "Medium",
            status: "Completed"
            
        },
        {
            taskId: "TSK-233",
            taskName: "Redesign card Layout",
            clientName: "Sassy Ser",
            projectName: "Vertex Dashboard",
            progress: "100",
            deadline: "2026-03-16",
            priority: "Low",
            status: "Completed"
            
        },
    ],
};