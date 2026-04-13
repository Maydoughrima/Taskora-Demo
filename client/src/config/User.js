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
};