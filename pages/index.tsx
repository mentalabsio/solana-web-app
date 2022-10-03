/** @jsxImportSource theme-ui */
import Head from "next/head"

import { Heading, Text, Label } from "@theme-ui/components"

import Header from "@/components/Header/Header"
import NFTSelectInput from "@/components/NFTSelectInput/NFTSelectInput"
import useWalletNFTs from "@/hooks/useWalletNFTs"

export default function Home() {
  const { walletNFTs } = useWalletNFTs()
  return (
    <>
      <Header />
      <main
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "64rem",
          margin: "0 auto",
          marginTop: "4rem",
          padding: "0 1.6rem",
        }}
      >
        <Heading mb=".8rem" variant="heading1">
          Solana Web App template
        </Heading>
        <Text>Quickstart template to build Solana web3 applications</Text>
        <Text mt="1.6rem">Featuring:</Text>
        <ul>
          <li>Connect and manage your Solana wallet</li>
          <li>Fetch wallet NFTs</li>
          <li>Select component for NFTs</li>
          <li>List component for NFTs</li>
          <li>Mobile-first UI</li>
          <li>Easily change your theme on theme.ts file</li>
          <li>Google Analytics (UA) ready</li>
          <br />
          <li>
            Used stack: <a href="https://nextjs.org/">NextJS</a> and{" "}
            <a href="https://theme-ui.com/">Theme UI</a>
          </li>
        </ul>

        {walletNFTs ? (
          <>
            {" "}
            <Heading mt="3.2rem" variant="heading3">
              Select component
            </Heading>
            <Label
              sx={{
                flexDirection: "column",
              }}
            >
              Select an NFT:
              <NFTSelectInput name="NFT" NFTs={walletNFTs} />
            </Label>
          </>
        ) : null}
      </main>

      {/* <footer
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "4rem 0",
        }}
      >
        Created by
        <a
          href="https://github.com/mentalabsio"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "0.2em",
          }}
        >
          <Text
            variant="small"
            sx={{
              color: (theme) => theme.colors?.primary,
            }}
          >
            Menta Labs
          </Text>
        </a>
      </footer> */}
    </>
  )
}
