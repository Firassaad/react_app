interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger"; //? means optional ; and ...|...|... like enum the value should be oe of them
  onClick: () => void;
}
const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <>
      {/* <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
      </div> */}
      <button type="button" className="btn btn-danger" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
