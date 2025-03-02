import { CalendarRange } from "lucide-react";
import { NavLink } from "../../components/NavLink";
import { UserButton } from "@clerk/nextjs";

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex py-2 border-b bg-card">
        <nav className="font-medium flex items-center text-sm gap-6 container">
          <div className="flex items-center gap-4 font-semibold mr-auto">
            <CalendarRange className="w-6 h-6" />
            <span className="sr-only md:not-sr-only">Calendar</span>{" "}
            {/* only show text for screen size medium or larger */}
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/schedule">Schedule</NavLink>
            <div className="ml-auto size-10">
            <UserButton
              appearance={{ elements: { userButtonAvatarBox: "size-full" } }}
            />
          </div>
          </div>
        </nav>
      </header>

      <main className="container my-6">{children}</main>
    </>
  );
}
