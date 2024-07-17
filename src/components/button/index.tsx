export type IButtonProps = {
  title: string;
  handlerButton?: () => void;
  icon?: JSX.Element;
  style: string;
  type: "submit" | "reset" | "button" | undefined;
  isLeftIcon?: boolean;
};

export function Button(props: IButtonProps) {
  return (
    <>
      <button
        className={props.style}
        onClick={props.handlerButton}
        type={props.type}
      >
        {props.isLeftIcon && props.icon}
        {props.title}
        {!props.isLeftIcon && props.icon}
      </button>
    </>
  );
}
