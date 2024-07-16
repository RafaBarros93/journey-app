export type IButtonProps = {
  title: string;
  handlerButton?: () => void;
  icon?: JSX.Element;
  style: string;
  type: "submit" | "reset" | "button" | undefined;
};

export function Button(props: IButtonProps) {
  return (
    <>
      <button
        className={props.style}
        onClick={props.handlerButton}
        type={props.type}
      >
        {props.title}
        {props.icon}
      </button>
    </>
  );
}
