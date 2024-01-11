import {
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar as FNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export const Navbar = ({...props}) => {
  return (
    <FNavbar
      fluid
      className={`w-full fixed border-b-2 shadow-teal-500/50 ${props.className || ''}`}
    >
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src="/favicon.ico"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Dash React
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
        <NavbarLink href="/services">Services</NavbarLink>
      </NavbarCollapse>
    </FNavbar>
  );
};
