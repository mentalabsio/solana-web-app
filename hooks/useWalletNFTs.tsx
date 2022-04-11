import { web3 } from "@project-serum/anchor"
import { programs } from "@metaplex/js"

export type NFT = {
  onChain: {
    metaData: programs.metadata.Metadata
    tokenAccount: web3.PublicKey
  }
  offChain: {
    attributes: Array<any>
    collection: any
    description: string
    edition: number
    external_url: string
    image: string
    name: string
    properties: {
      files: Array<string>
      category: string
      creators: Array<string>
    }
    seller_fee_basis_points: number
  }
}

const useWalletNFTs = () => {}

export default useWalletNFTs
