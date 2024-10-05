export default function Banner({ message, type }) {
  const styles = {
    success: "border-green-600",
    failure: "border-red-600",
    updateSucess: "border-blue-600",
  };
  return (
    <div
      role="alert"
      className={`alert absolute top-[-10px]  left-1/2 transform -translate-x-1/2 w-1/3 z-20 rounded ${styles[type]} bg-inherit`}
      style={{ borderWidth: "3px" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{message}</span>
    </div>
  );
}
