import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import RaesLogo from "../../Assets/raes.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import LoginButton from "../LoginButtons/LoginButton";
import LogoutButton from "../LoginButtons/LogoutButton";
import { fetchUsersEmail } from "../../Redux/reducer/Users";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {});

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          mr={width > 300 ? { base: -20 } : { base: -5 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Link href="/">
          <Image
            src={RaesLogo}
            alt="Raes Logo"
            width={12}
            height={12}
            margin={{ base: "1", md: "2" }}
            padding={{ base: "-12" }}
          />
        </Link>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav />
          </Flex>
        </Flex>

        <LoginButton />
        <LogoutButton />

        <ColorModeSwitcher />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  const [userId, setUserId] = useState<any>();
  const { user } = useAuth0();
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchUsersEmail(user.email))
        .then((action) => {
          if (action.payload) {
            setUserId(action.payload);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [dispatch, user]);

  return (
    <Stack direction={"row"} spacing={4}>
      {userId?.userType !== 1
        ? NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    href={navItem.href ?? "#"}
                    fontSize={"sm"}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.label}
                  </Link>
                </PopoverTrigger>

                {navItem.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={"xl"}
                    bg={popoverContentBgColor}
                    p={4}
                    rounded={"xl"}
                    minW={"sm"}
                  >
                    <Stack>
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
            </Box>
          ))
        : NAV_ITEMS_ADMIN.map((navItem) => (
            <Box key={navItem.label}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    href={navItem.href ?? "#"}
                    fontSize={"sm"}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.label}
                  </Link>
                </PopoverTrigger>

                {navItem.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={"xl"}
                    bg={popoverContentBgColor}
                    p={4}
                    rounded={"xl"}
                    minW={"sm"}
                  >
                    <Stack>
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
            </Box>
          ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS_ADMIN: Array<NavItem> = [
  {
    label: "Propiedades",
    href: "/properties",
    children: [
      {
        label: "Encontra lo que buscas",
        href: "/properties",
      },
    ],
  },
  {
    label: "Franquicia",
    href: "/franchise",
  },
  {
    label: "Nosotros",
    href: "/about",
  },
  {
    label: "Formulario",
    href: "/form",
  },
  {
    label: "Perfil",
    href: "/profile",
  },
  {
    label: "Admin",
    href: "/admin",
  },
];

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Propiedades",
    href: "/properties",
    children: [
      {
        label: "Encontra lo que buscas",
        href: "/properties",
      },
    ],
  },
  {
    label: "Franquicia",
    href: "/franchise",
  },
  {
    label: "Nosotros",
    href: "/about",
  },
  {
    label: "Perfil",
    href: "/profile",
  },
];

export default NavBar;
