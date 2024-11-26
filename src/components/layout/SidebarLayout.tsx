import clsx from "clsx";
import SidebarNavigation from "../nav/SidebarNavigation";

const SidebarLayout = ({
  children,
  className,
}: JSX.IntrinsicElements["div"]) => {
  return (
    <div className="flex">
      <SidebarNavigation />
      <div className={clsx("flex-1 h-screen overflow-auto", className)}>
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
