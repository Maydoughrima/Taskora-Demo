import Button from "../UI/Button";

const ClientCardContent = ({ client = {}, onView }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "text-[var(--highlight)]";
      case "Completed":
        return "text-[var(--accent)]";
      default:
        return "text-[var(--text)]";
    }
  };

  const formatCurrency = (value) => {
    return `₱${value?.toLocaleString() || 0}`;
  };

  return (
    <div className="flex flex-col gap-3 p-3 border rounded-[10px]">
      
      {/* HEADER */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <p className="font-heading font-semibold text-lg text-[var(--text)]">
            {client.name}
          </p>

          <span
            className={`text-xs font-medium ${getStatusColor(client.status)}`}
          >
            {client.status}
          </span>
        </div>

        <p className="text-[var(--secondary400)] text-sm">
          {client.contact}
        </p>
      </div>

      {/* META */}
      <div className="flex justify-between text-sm text-[var(--secondary400)]">
        <p>Projects: {client.projects ?? 0}</p>
        <p>Revenue: {formatCurrency(client.revenue)}</p>
      </div>

      {/* ACTION */}
      <Button onClick={onView}>
        View Client
      </Button>
    </div>
  );
};

export default ClientCardContent;