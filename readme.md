## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.


### Sample Sign Message/Public/Private Key pair for Testing Purpose
//first pair
 private key: 8e2702a9c3abc4e156464c585fd476cdb70e75a2997b54dc7eec26559a6197fb
 public key: e448090bcd9fd5ae0dd106dc2979427d60aad3a4
 sign message: 3045022100c78d382948b307557c2197a8e9ab8ddc94473612bf666891ea1b253d14cb0fcd02203758db0630f6239d90941e85d35e4c19e5230577a21856c9b0210d73aad4663e

//second pair
 private key: ddca7682d0637cb52582b14c76b4aaad57f19893c0ca9b85a1e10599f0df07cd
 public key: 69ce11a751fbb04403ee1ff83e577f44ea86d20c
 sign message: 304402203f69535d8c3d72ff7cb172cb60b6ad15621930fc4f6980eadcd33ddd9fca15330220448cfd11ce91d56183f4c39fd5598fbcaf78caf251bb1570c3c8a00257a08f07

//third pair 
 private key: 9729b11b47f1fe033e8064c275f87286bf5f879a48b686abaa38e1fcd87bfde0
 public key: a923d18b5452008477e4c94e670434e618412353
 sign message: 3044022027dedabdfd0ece7de3d673c011274b7fb1975b5afe2bc64d323f65ed29d05c6a02204fb27a6776f2f7ea9bfcd76aac51a85024bc16bd2cc9d0b68357796caca29d65

