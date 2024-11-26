import Link from "next/link";
import { IconType } from "react-icons";
import { MdDashboard } from "react-icons/md";
import { SiTmobile } from "react-icons/si";

const SidebarNavigation = () => {
  return (
    <div className="h-screen bg-indigo-600/95 w-72 px-4">
      <SiTmobile className="size-8 text-white/90 my-8" />
      <Link
        href="/assessment/new"
        className="py-3 rounded-md bg-white/85 block text-center text-lg font-semibold text-indigo-600 active:scale-99"
      >
        New Record
      </Link>
      <div className="flex flex-col gap-2 mt-6">
        <MenuItem href="/" label="Dashboard" icon={MdDashboard} />
      </div>
    </div>
  );
};

export default SidebarNavigation;

const MenuItem = (props: { href: string; label: string; icon: IconType }) => {
  const { href, label, icon: Icon } = props;
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-lg text-white/80 font-semibold px-4 py-2 rounded-md hover:bg-indigo-700"
    >
      <Icon className="size-6" />
      <p>{label}</p>
    </Link>
  );
};
