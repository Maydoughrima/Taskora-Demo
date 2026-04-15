import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const RevenueChart =({ data

}) => {
    return(
        <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data} margin={{ top: 10, right: 20, left: -5, bottom: 5 }}>                  
                <XAxis dataKey="month" /> 
                <YAxis /> <Tooltip /> 
                <Bar dataKey="value" fill="var(--accent)" /> 
                </BarChart> 
                </ResponsiveContainer>
    );
};
export default RevenueChart;