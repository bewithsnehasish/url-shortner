const Error = ({ message }: { message: string }) => {
  return (
    <div className="text-sm text-red-500 p-2 rounded-lg">
      <p>{message}</p>
    </div>
  );
};

export default Error;
