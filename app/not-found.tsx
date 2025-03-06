import { Construction } from "@/components/Construction";
import { FC } from "react";

export type NotFoundProps = {};

const NotFound: FC<NotFoundProps> = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl">Page Under Construction</h1>
      <Construction />
    </div>
  );
};
export default NotFound;
