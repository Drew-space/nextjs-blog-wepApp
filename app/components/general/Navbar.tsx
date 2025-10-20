import { navlinks } from "@/app/constance";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" py-5 flex items-center justify-between">
      <div className="flex items-center gap-6 tracking-tighter">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Next <span className=" text-blue-500 ">Blog</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6 ">
          {navlinks.map((link, index) => (
            <li
              key={index}
              className="list-none font-medium text-base/normal hover:text-blue-500"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button>Login</Button>
        <Button variant="secondary">Sign Up</Button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
