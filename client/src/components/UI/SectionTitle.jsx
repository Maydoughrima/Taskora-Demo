const Heading = ({
    level = 2,
    children,
    className = ""
}) =>{
    const Tag = `h${level}`;
    return(
        <Tag className = {`text-2xl md:text-4xl lg:text-5xl text-center font-heading font-semibold text-[var(--text)] leading-tight ${className}`}>
            {children}
        </Tag>
    );
};

export default Heading;