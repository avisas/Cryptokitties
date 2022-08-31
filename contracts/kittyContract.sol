pragma solidity ^0.8.15;

import "./IERC721.sol";

contract KittyContract is IERC721 {

    string public constant name = "curiousKitty";
    string public constant symbol = "CURIK";

    struct kitty {
        uint256 genes;
        uint64 birthTime;
        uint32 numId;
        uint dadId;
        uint generation;
    }

    kitty[] kitties;

    mapping(address => uint256) ownershipTokenCount;
    mapping(uint256 => address) public kittyIndexToOwner;

    function balanceOf(address owner) external view returns (uint256 balance){
        return ownershipTokenCount[owner];
    }

    function totalSupply() external view returns (uint256 total){

    }

    function name() external view returns (string memory tokenName){
        return name;
    }



}