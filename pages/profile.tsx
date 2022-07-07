/** @jsxImportSource theme-ui */
import Header from "@/components/Header/Header";
import { NFTGallery } from "@/components/NFTGallery/NFTGallery";
import NFTSelectInput from "@/components/NFTSelectInput/NFTSelectInput";
import useWalletNFTs from "@/hooks/useWalletNFTs";
import { Flex, Heading, Text } from "theme-ui";

export default function Profile() {
    const { walletNFTs } = useWalletNFTs()
    return (
        <>
            <Header />
            <main sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "4rem",
            }}>
                <Flex
                    mb="3.2rem"
                    sx={{
                        flexDirection: "column",
                        gap: "1.6rem",
                    }}
                >
                    <Flex
                        sx={{
                            flexDirection: "column",
                            gap: ".8rem",
                        }}
                    >
                        <Heading variant="heading3">NFT Gallery:</Heading>
                        <NFTGallery />
                    </Flex>

                    <Flex
                        sx={{
                            flexDirection: "column",
                            gap: ".8rem",
                        }}
                    >
                        <Heading variant="heading3">NFT Selector:</Heading>
                        <NFTSelectInput name="nft" NFTs={walletNFTs} />
                    </Flex>
                </Flex>
            </main>
        </>
    )
} 