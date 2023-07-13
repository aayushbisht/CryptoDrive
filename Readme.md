
# CryptoDrive

  Decentralized storage solution facilitating seamless storage and retrieval of diverse file formats
 
## 📄Index

- [About](#about-the-project)
  - [Built With](#built-with)
- [Setting up the Project](#setting-up-the-project)
  - [Pre-Requisites](#prerequisites)
  - [Running the Project](#running-the-project)


 ## About The Project

CryptoDrive is a Blockchain based Drive which enables Decentralized and Secure storage of files of any format over IPFS. Users can
store and retreive files as well as share account access with other users.

### Built With

Following technologies and libraries are used for the development of this project.

- [React](https://reactjs.org/)
- [Solidity](https://soliditylang.org/)
- [Hardhat](https://hardhat.org/)
- [Pinata](https://www.pinata.cloud/)

## Setting up the Project

Follow the steps below to setup the project

### Prerequisites

- Install and Setup Metamask extension in your browser
- Install and Setup Ganache in you local system 

### Running the project


1.  **clone** the project to your local system
2.  Install all the dependencies 

```
npm install
```

3. Start local blockchain on command line interface by running follwing command 
```
npx hardhat node
```
4. Configure metamask to connect to Hardhat. Copy the private key of any account given by the Hardhat local blockchain and import it
    in your metamsk wallet

5. Run the following command to deploy the contract on the local blockchain 

```
npx hardhat run --network localhost scripts/deploy.js
```
6. Copy the address of the deployed smart contract and paste it in `/client/src/app.js`
```
let contractAddress = "Your deployed contract address";
```
7. Now in `/client` run the following command to start the app
```
npm start;
```
8. You're ready to go. Visit http://localhost:3000/ to checkout CryptoDrive








 

 
