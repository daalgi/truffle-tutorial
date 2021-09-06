# truffle-tutorial
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