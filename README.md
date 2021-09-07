# truffle-tutorial
## 01 - Intro
```
npm install truffle -g
truffle init
```

Compile contracts:
```
truffle compile
```

Start a local blockchain:
```
truffle develop
```

Deploy contracts:
```
truffle migrate
```

Interact with the contracts:
```
let instance = await Helloworld.deployed()
instance.hello()
```

After changing the contracts, don't forget to `migrate`:
```
truffle migrate
```
## 02 - Interaction between contracts
Redeploy a new contract substituting the old one (on local chain we don't really care about keeping our contracts). In a real distributed chain you can't just overwrite an existing contract; you to either create a proxy contract or redeploy a completely new contract.
````
migrate --reset
````

Attach value (in Wei, the smallest fraction of ether) to a function call in `truffle`:
````
instance = await Helloworld.deployed()
instance.setMessage("new message", { value: web3.utils.toWei("1.01", "ether") })
````

Send message from a different address (i.e. the account number 3 in given in the 10 locally generated after `truffle develop`):
````
instance = await Helloworld.deployed()
instance.setMessage("new message", { value: web3.utils.toWei("1.01", "ether"), from: accounts[3] })
````

After adding a new contract, must `compile`.