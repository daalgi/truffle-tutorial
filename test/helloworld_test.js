const Helloworld = artifacts.require("Helloworld");

// Each test has a new and clena state 
contract("Helloworld", accounts => {
    it("constructor should set the message correctly", async() => {
        let instance = await Helloworld.deployed();
        let message = await instance.message();
        assert.equal(message, "Hello world constructor");
    })

    it("owner should be accounts[0]", async() => {
        let instance = await Helloworld.deployed();
        let owner = await instance.owner();
        assert.equal(owner, accounts[0]);
    })
})