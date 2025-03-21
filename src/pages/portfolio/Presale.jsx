import React from 'react'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import preview from '@/assets/portofolio/presale/preview.png'
import Divider from '@/components/Divider'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'


const Presale = () => {
  const details = {
    title: 'dApps Token Presale',
    description: `
# Decentralized App for Token Presale

## Overview

This project consists of a simple ERC20 token contract and a presale contract for the token. The presale allows users to purchase tokens at a fixed rate using Ether. The frontend is built with React to provide an interface for users to participate in the presale.

## Demo

[![](https://img.shields.io/badge/token_presale_v1-vercel_app-red)](https://token-presale-v1.vercel.app/)

## Contracts

### SimpleToken

The 'SimpleToken' contract is an ERC20 token with a fixed initial supply. It uses OpenZeppelin's 'ERC20PresetMinterPauser' for standard ERC20 functionality.

#### Key Features:
- Initial supply is minted to the deployer's address.
- Decimals can be set during deployment.

### Presale

The 'Presale' contract allows users to purchase 'SimpleToken' tokens at a rate of 1000 tokens per 1 ETH.

#### Key Features:
- Users can buy tokens by sending Ether to the contract.
- The Ether received is transferred to the owner's address.
- Tracks the total amount of Ether raised.

## Frontend

The frontend is built using React and provides a user interface for participating in the token presale.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Truffle or Hardhat (for deploying contracts)
- MetaMask (for interacting with the contracts)
    `,
    highlight: ['React.js', 'dApps', 'Solidity', 'Web3', 'Hardhat', 'Ethereum', 'ERC20'],
    link: 'https://github.com/iamyourdre/Token-Presale-DAPP'
  }
  return (
    <div className='mt-16'>
      <div className=" grid grid-cols-1 lg:grid-cols-5 box gap-6 place-content-start">
        <div className="col-span-1">
          <div className="">
            <Link className='hidden lg:flex absolute left-0 top-1/2 transform -translate-x-1/3 z-10' to={details.link}>
              <Button className='rounded-none rotate-90' size={'xl'}><Github/>GitHub</Button>
            </Link>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-4">
          <img src={preview} alt="tweetify" className="w-full border border-muted rounded-2xl" />
          <div className="lg:box-m box border border-muted rounded-2xl flex flex-col gap-3">
            <h1 className='font-bold h1'>
              {details.title}
            </h1>
            <div className="text-muted-foreground markdown">
              <Markdown>{details.description}</Markdown>
            </div>
            <Link to={details.link} className='flex'>
              <Button className='mt-4 flex-1' size='lg'><Github/> Check on GitHub</Button>
            </Link>
            <Divider/>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {details.highlight.map((item, index) => (
                  <Badge key={index} variant="outline" className='border-muted text-muted-foreground rounded-full'>{item}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
        </div>
      </div>
    </div>
  )
}
export default Presale