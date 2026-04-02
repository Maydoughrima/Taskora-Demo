const TesCardSec = ({ image, header, feedback, author, title }) => {
  return (
    <div
      className="group relative flex flex-col px-4 py-12 gap-4 shadow-sm border border-[var(--text)]/50 rounded-lg bg-cover bg-center transition-colors duration-300"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay for hover */}
      <div className="absolute inset-0 bg-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

      {/* image */}
      <div className="invisible pl-6 mb-4 group-hover:visible transition-opacity duration-300 relative z-10">
        <img
          src={image}
          alt={author ? `user-image${author}` : "user-img"}
          className="rounded-full w-[80px] h-[80px] lg:w-[107px] lg:h-[107px]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-20 flex-1 relative z-10">
        <div className="invisible group-hover:visible transition-opacity duration-300 flex flex-col gap-2">
          <h4 className="font-heading font-semibold text-xl text-[var(--text)]">
            {header}
          </h4>
          <p className="font-body text-[var(--text)]">{feedback}</p>
        </div>
        {/* footer */}
        <div className="footer relative z-10 mt-auto">
          <h3 className="text-[var(--primary)] group-hover:text-[var(--text)] text-lg font-body font-semibold">
            {author}
          </h3>
          <p className="font-body text-[var(--primary)] group-hover:text-[var(--text)]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TesCardSec;
