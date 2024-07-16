import { X } from "lucide-react";
import { ReactNode } from "react";

export type IModalProps = {
  isviewModal: boolean;
  handlerOpenModal: () => void;
  children?: ReactNode;
  title?: string;
  text: string | JSX.Element;
};

export function Modal(props: IModalProps) {
  return (
    <>
      {props.isviewModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl px-5 py-6 shadow-shape bg-zinc-900 grid gap-2">
            <div className="grid gap-2">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-semibold text-justify ">
                  {props.title}
                </h2>
                <X
                  className="cursor-pointer size-5 text-zinc-400"
                  onClick={props.handlerOpenModal}
                ></X>
              </div>
              <p className="text-sm text-zinc-400 text-start">{props.text}</p>
            </div>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
