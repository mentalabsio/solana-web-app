/** @jsxImportSource theme-ui */

import { Flex, Spinner, Text } from "@theme-ui/components"
import useWalletNFTs from "@/hooks/useWalletNFTs"
import CollectionItem from "@/components/NFTList/CollectionItem"
import { useWallet } from "@solana/wallet-adapter-react"

export type NFTCollectionProps = {}

/**
 * Component to displays all NFTs from a connected wallet
 */
export function NFTList(props: NFTCollectionProps) {
  const { publicKey } = useWallet()
  const { walletNFTs } = useWalletNFTs()

  return (
    <>
      {walletNFTs ? (
        walletNFTs.length ? (
          <Flex
            sx={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              sx={{
                display: "grid",
                gridTemplateColumns:
                  walletNFTs.length > 1 ? "1fr 1fr 1fr 1fr" : "1fr",
                gap: "1.6rem",
                alignItems: "center",

                "@media (min-width: 768px)": {
                  gridTemplateColumns:
                    walletNFTs.length > 9
                      ? "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
                      : walletNFTs.length > 4
                      ? "1fr 1fr 1fr 1fr 1fr 1fr"
                      : walletNFTs.map(() => "1fr").join(" "),
                },
              }}
            >
              {walletNFTs.map((item) => {
                return (
                  <CollectionItem
                    key={item.address.toString()}
                    item={item}
                    sx={{
                      maxWidth: "8rem",
                    }}
                  />
                )
              })}
            </div>
          </Flex>
        ) : (
          /** walletNFTs fetched but array is empty, means current wallet has no NFT. */
          <Flex
            sx={{
              justifyContent: "center",
              alignSelf: "stretch",
            }}
          >
            <Text>There are no NFTs on your wallet.</Text>
          </Flex>
        )
      ) : /** No walletNFTs and public key, means it is loading */
      publicKey ? (
        <Flex
          sx={{
            justifyContent: "center",
            alignSelf: "stretch",
          }}
        >
          <Spinner variant="styles.spinnerLarge" />
        </Flex>
      ) : publicKey ? (
        <Text>No NFTs found.</Text>
      ) : (
        <Text>Please connect your wallet.</Text>
      )}
    </>
  )
}
