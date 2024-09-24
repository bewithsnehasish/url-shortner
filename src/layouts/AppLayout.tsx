import Header from "@/components/header";
import { LinkedinIcon } from "lucide-react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Outlet />
      </main>
      <footer className="p-10 bg-gray-800 flex items-center justify-center">
        <a
          href="https://www.linkedin.com/in/snehasish-mandal-/"
          aria-label="Snehasish Mandal's LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="h-6 w-6 text-white" />
        </a>
        &nbsp; Made with Love by Snehasish Mandal
      </footer>
    </div>
  );
};

export default AppLayout;
