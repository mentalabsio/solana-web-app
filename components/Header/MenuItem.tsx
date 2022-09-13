import Link from "next/link"
import { Button, Flex } from "theme-ui"

export const MenuItem = ({
  icon,
  href,
}: {
  icon: React.ReactNode | React.ReactNode[]
  href: string
}) => {
  return (
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
      <Link href={href}>
        <Button variant="resetted">{icon}</Button>
      </Link>
    </Flex>
  )
}
