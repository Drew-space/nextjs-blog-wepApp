import { navlinks } from "@/app/constance";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

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

      {user ? (
        <div className="flex items-center gap-4">
          <p> {user.given_name} </p>
          <LogoutLink>
            <Button>Logout</Button>
          </LogoutLink>
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-4">
            <LoginLink>
              <Button>Login</Button>
            </LoginLink>

            <RegisterLink>
              <Button variant="secondary">Sign Up</Button>
            </RegisterLink>
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
