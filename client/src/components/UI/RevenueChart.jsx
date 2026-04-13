import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const RevenueChart =({ data

}) => {
    return(
        <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>                  
                <XAxis dataKey="month" /> 
                <YAxis /> <Tooltip /> 
                <Bar dataKey="value" fill="var(--accent)" /> 
                </BarChart> 
                </ResponsiveContainer>
    );
};
export default RevenueChart;