// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract HelloworldPermanent {
    string public message;

    constructor(string memory _message) {
        message = _message;
    }
}