import { useCallback, useEffect, useState } from "react"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import {
  Metaplex,
  Metadata,
  JsonMetadata,
  FindNftByMintOutput,
} from "@metaplex-foundation/js"

const useWalletNFTs = (creators: string[] = null) => {
  const { connection } = useConnection()
  const { publicKey } = useWallet()
  const [walletNFTs, setWalletNFTs] = useState<FindNftByMintOutput[] | null>(
    null
  )

  const fetchNFTs = useCallback(async () => {
    const metaplex = Metaplex.make(connection)

    console.time("fetch")
    /** Fetch on-chain metadatas */
    const metadatas = await metaplex
      .nfts()
      .findAllByOwner({ owner: publicKey, commitment: "confirmed" })
      .run()

    /** Filter by creator */
    const filteredMetadatas = creators
      ? metadatas.filter((NFT) => {
          const obj = NFT.creators?.find((value) => {
            return creators.indexOf(value.address.toString()) !== -1
          })

          return obj
        })
      : metadatas

    /** Fetch JSON for all on-chain metadatas */
    const NFTs = await Promise.all(
      filteredMetadatas.map(async (metadata: Metadata<JsonMetadata<string>>) =>
        metaplex.nfts().load({ metadata }).run()
      )
    )

    console.timeEnd("fetch")

    setWalletNFTs(NFTs)
  }, [connection, publicKey])

  useEffect(() => {
    if (publicKey) {
      fetchNFTs()
    }
  }, [publicKey])

  return { walletNFTs, fetchNFTs }
}

export default useWalletNFTs
