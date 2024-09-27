const Error = ({ message }: { message: string }) => {
  return (
    <div className="text-sm text-red-500 p-4 bg-red-100 rounded-lg">
      <h1>Error</h1>
      <p>{message}</p>
    </div>
  );
};

export default Error;
