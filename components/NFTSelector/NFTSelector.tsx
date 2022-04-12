/** @jsxImportSource theme-ui */

import useWalletNFTs from "@/hooks/useWalletNFTs"
import Select, { StylesConfig } from "react-select"
import { useThemeUI, Flex } from "theme-ui"

const SelectorNFTOptionLabel = ({
  imgSrc,
  name,
}: {
  imgSrc: string
  name: string
}) => {
  return (
    <Flex
      sx={{
        alignItems: "center",
        gap: "1.6rem",
      }}
    >
      <img
        src={imgSrc}
        sx={{
          maxHeight: "4.8rem",
        }}
      />
      {name}
    </Flex>
  )
}

const NFTSelector = () => {
  const { theme } = useThemeUI()
  const { walletNFTs } = useWalletNFTs()

  const options = walletNFTs.map((NFT) => ({
    value: NFT.mint,
    label: (
      <SelectorNFTOptionLabel
        imgSrc={NFT.externalMetadata.image}
        name={NFT.onchainMetadata.data.name}
      />
    ),
  }))

  const colourStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      backgroundColor: theme?.colors.background.toString(),
    }),

    container: (styles) => ({
      ...styles,
      minWidth: "32rem",
    }),

    menu: (styles) => ({
      ...styles,
      backgroundColor: theme?.colors.background.toString(),
    }),

    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isFocused
          ? "#333"
          : isSelected
          ? theme?.colors.background.toString()
          : undefined,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? theme?.colors.primary.toString()
          : theme?.colors.text.toString(),
        cursor: isDisabled ? "not-allowed" : "pointer",

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled ? "#333" : undefined,
        },
      }
    },
    singleValue: (styles) => ({
      ...styles,
      color: theme?.colors.text.toString(),
    }),
  }

  return <Select options={options} styles={colourStyles} />
}
export default NFTSelector
