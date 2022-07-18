/** @jsxImportSource theme-ui */
import Link from "next/link"
import { Button, Container, Flex, Text } from "@theme-ui/components"

import WalletManager from "@/components/WalletManager/WalletManager"
import { useState } from "react"
import { CloseIcon, MenuIcon, MoonLogo, ProfileLogo, SunLogo } from "../icons"
import { useColorMode } from "theme-ui"

const Header = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)
  const [colorMode, setColorMode] = useColorMode()

  return (
    <Flex
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 9,
        background: (theme) => theme.colors?.backgroundGradient,
        borderBottom: "1px solid",
        borderColor: "background2",
      }}
    >
      <Container>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.6rem 1.6rem 0",
            height: "8rem",
          }}
        >
          <Link href="/" passHref>
            <Flex as="a" sx={{ alignItems: "center", flexDirection: "column" }}>
              <Flex sx={{ alignItems: "center" }}>
                <Text as="h1" variant="headingSpecial" ml=".4rem">
                  Solana Web App
                </Text>
              </Flex>
            </Flex>
          </Link>
          <Text
            variant="small"
            sx={{
              marginRight: "auto",
            }}
          >
            &nbsp;&nbsp;&nbsp;&#8226;&nbsp;
            {process.env.NEXT_PUBLIC_CONNECTION_NETWORK}
          </Text>

          <Flex
            as="nav"
            sx={{
              gap: "1.6rem",
              display: "none",
              alignItems: "center",
              alignSelf: "stretch",

              /** Mobile styles when the menu is active */
              ...(isMobileMenuActive && {
                display: "flex",
                position: "fixed",
                flexDirection: "column",
                alignItems: "center",
                top: "0",
                left: "0",
                width: "100vw",
                height: "100vh",
                transition:
                  "opacity 0.125s cubic-bezier(0.175, 0.885, 0.32, 1.275),visibility 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                backgroundColor: "background",
                zIndex: 99,

                "& > a": {
                  marginBottom: ".8rem",
                },

                "&.active": {
                  visibility: "visible",
                  opacity: 1,
                },
              }),

              /** Desktop styles (reset mobile) */
              "@media (min-width: 768px)": {
                display: "flex",
                flexDirection: "row",
                padding: 0,
                position: "relative",
              },
            }}
          >
            <Flex
              sx={{
                alignSelf: "stretch",
                justifyContent: "flex-end",
                borderBottom: "1px solid",
                borderColor: "background2",
                padding: "1.6rem",
                height: "8rem",
                alignItems: "center",
                ...(!isMobileMenuActive && { display: "none" }),
              }}
            >
              <Button
                sx={{
                  padding: ".8rem",
                }}
                onClick={() => setIsMobileMenuActive(false)}
              >
                <CloseIcon />
              </Button>
            </Flex>
            {/* Change theme-ui color mode */}
            <Flex
              sx={{
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "stretch",

                "&:hover": {
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderBottomColor: "text",
                },
              }}
            >
              <Button
                variant="resetted"
                onClick={(e) => {
                  setColorMode(colorMode === "default" ? "light" : "default")
                }}
              >
                {colorMode === "default" ? <SunLogo /> : <MoonLogo />}
              </Button>
            </Flex>
            {/* Finish menu items */}
            <WalletManager />
          </Flex>
          <Button
            sx={{
              padding: ".8rem",
              "@media(min-width: 768px)": {
                display: "none",
              },
            }}
            onClick={() => setIsMobileMenuActive(true)}
          >
            <MenuIcon />
          </Button>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Header
