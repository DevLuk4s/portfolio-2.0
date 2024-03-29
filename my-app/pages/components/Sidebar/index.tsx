// Components
import Logo from "./Logo";
import MainNavigation from "./MainNavigation";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 overflow-x-hidden z-10 flex flex-col gap-10 p-12">
      <Logo />
      <MainNavigation />
    </aside>
  );
}
