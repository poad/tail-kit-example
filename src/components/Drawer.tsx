import dynamic from 'next/dynamic';
import React from 'react';
import 'tailwindcss/tailwind.css';
const KeyboardEventHandler = dynamic(
  import('react-keyboard-event-handler'), { ssr: false },
);

const Drawer = (): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggle = () => {
    setOpen(!open);
  };

  const onKeyDown = (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
    event.preventDefault();
  }; 

  return (
    <div className="relative dark:bg-transparent w-72">
      <div className="z-50 w-screen bg-blue-500">
        <button
          type="button"
          onClick={toggle}
          className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-blue-600"
        >
          {/* https://www.indetail.co.jp/blog/13002/ */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <KeyboardEventHandler onKeyEvent={onKeyDown}>
        { open ? (
            <>
              <div className="fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-20 sm:flex-row sm:justify-left" onClick={() =>setOpen(false)} />
              <div className="fixed top-0 left-0 z-40 w-72 h-screen z-40 aria-modal={true} animate-drawer-top">
                <nav className="mt-16 pt-2 px-6 w-72 h-screen flex flex-col bg-white pointer-events-auto">
                  <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="#">
                    <span className="mx-4 text-lg font-normal">
                      Element
                    </span>
                    <span className="flex-grow text-right">
                    </span>
                  </a>
                  <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600" href="#">
                    <span className="mx-4 text-lg font-normal">
                      Form
                    </span>
                    <span className="flex-grow text-right">
                    </span>
                  </a>
                  <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="#">
                    <span className="mx-4 text-lg font-normal">
                      Commerce
                    </span>
                    <span className="flex-grow text-right">
                    </span>
                  </a>
                  <a className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg " href="#">
                    <span className="mx-4 text-lg font-normal">
                      Navigation
                    </span>
                    <span className="flex-grow text-right">
                    </span>
                  </a>
                </nav>
              </div>
            </>
          ) : (<></>)
        }
      </KeyboardEventHandler>
    </div>
  );
};

export default Drawer;
