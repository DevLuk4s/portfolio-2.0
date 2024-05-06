// Components
import Logo from "./Logo";
import MainNavigation from "./MainNavigation";
import MenuHamburguer from "./MenuHamburguer";

export default function Sidebar() {

  const hamburger = document.querySelector(".hamburger")
  const SidebarMobile = document.querySelector(".SidebarMobile")

  hamburger?.addEventListener("click", () => {
    SidebarMobile?.classList.toggle("SidebarMobile")
  })

  return (
    <aside className="fixed top-0 left-0 overflow-x-hidden z-10 flex flex-col items-center justify-center gap-10 p-12 SidebarMobile">
      <Logo />
      <MainNavigation />
      <MenuHamburguer />
    </aside>
  );
}
