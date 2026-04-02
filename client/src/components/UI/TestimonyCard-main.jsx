const TesCardMain = ({ header, feedback, author, title, image, className =" " }) => {
  return (
    <div className={`flex flex-col px-4 py-12 gap-4 shadow-sm border border-[var(--text)]/50 rounded-lg ${className}`}>
      {/* image */}
      <div className="pl-6 mb-4">
        <img
          src={image}
          alt={author ? `user-image${author}` : "user-img"}
          className="rounded-full w-[80px] h-[80px] lg:w-[107px] lg:h-[107px]"
        />
      </div>

      {/* Content */}
      <div className="gap-20 flex flex-col flex-1">
        <div className="flex flex-col gap-2">
          <h4 className="font-heading font-semibold text-xl text-[var(--text)]">
            {header}
          </h4>
          <p className="font-body text-[var(--text)]">{feedback}</p>
        </div>
        {/* footer */}
        <div className="footer mt-auto">
          <h3 className="text-[var(--text)] text-lg font-body font-semibold">
            {author}
          </h3>
          <p className="font-body text-[rgba(0,0,0,0.5)]">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TesCardMain;
