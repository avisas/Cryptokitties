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
        return kitties.length;
    }

    function ownerOf(uint256 tokenId) external view returns (address owner){
        return kittyIndexToOwner[tokenId];
    }

    function transfer(address to, uint256 tokenId) external{
        require(to != address(0));
        require(to != address(this));
        require(_owns(msg.sender, tokenId));

        _transfer(msg.sender, to, tokenId);
    }

    function _transfer(address _from, address _to, uint256 _tokenId) internal {
        ownershipTokenCount[_to]++;

        kittyIndexToOwner[_tokenId] = _to;

        if(_from != address(0)) {
            ownershipTokenCount[_from]--;
        }

        emit Transfer(_from, _to, _tokenId);
    }

    function _owns(address _claimant, uint256 _tokenId) internal view returns (bool) {
        return kittyIndexToOwner[_tokenId] == _claimant;
    }



}