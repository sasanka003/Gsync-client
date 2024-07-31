import { createClient } from "@/utils/supabase/server";
import { ModeToggle } from "../ModeToggle";
import { SheetMenu } from "./sheet-menu";
import { UserNav } from "./user-nav";

interface NavbarProps {
  title: string;
}

export async function Navbar({ title }: NavbarProps) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const getFirstLetter = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  const firstLetter = getFirstLetter(user?.user_metadata.name);

  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <h1 className=" text-h2 text-text">{title}</h1>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <ModeToggle />
          <UserNav
            email={user!.email}
            name={user!.user_metadata.name}
            firstLetter={firstLetter}
          />
        </div>
      </div>
    </header>
  );
}
