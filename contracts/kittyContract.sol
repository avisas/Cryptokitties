pragma solidity ^0.8.15;

import "./IERC721.sol";
import "./Ownable.sol";

contract KittyContract is IERC721, Ownable {

    uint256 public constant CREATION_LIMIT_GEN0 = 10;
    string public constant name = "curiousKitty";
    string public constant symbol = "CURIK";
    
    //website knows every birth of cat.
    event Birth(
        address owner, 
        uint256 kittenId,
        uint256 mumId,
        uint256 dadId,
        uint256 genes
    );

    struct Kitty {
        uint256 genes;
        uint64 birthTime;
        uint32 mumId;
        uint32 dadId;
        uint16 generation;
    }

    Kitty[] kitties;

    mapping(address => uint256) ownershipTokenCount;
    mapping(uint256 => address) public kittyIndexToOwner;
    
    uint256 public gen0counter;

    //oinly the contract owner
    function createKittyGen0(uint256 _genes) public onlyOwner returns (uint256){
        require(gen0counter < CREATION_LIMIT_GEN0);

        gen0counter++;

        return _createKitty(0, 0, 0, _genes, msg.sender);
    }

    function _createKitty(
        uint256 _mumId,
        uint256 _dadId,
        uint256 _generation,
        uint256 _genes,
        address _owner
    ) private returns (uint256) {
        Kitty memory _kitty = Kitty({
            genes: _genes,
            birthTime: uint64(block.timestamp),
            mumId: uint32(_mumId),
            dadId: uint32(_dadId),
            generation: uint16(_generation) 
        });
        
        kitties.push(_kitty);
        uint256 newKittenId = kitties.length - 1;
        emit Birth(_owner, newKittenId, _mumId, _dadId, _genes);
        _transfer(address(0), _owner, newKittenId);
        return newKittenId;
    }

    function getKitty(uint256 tokenId) external view returns(
        uint256 genes,
        uint64 birthTime, 
        uint32 mumId,
        uint32 dadId,
        uint16 generation
        )
        {
        require(tokenId < kitties.length);
        return (
            kitties[tokenId].genes,
            kitties[tokenId].birthTime,
            kitties[tokenId].mumId,
            kitties[tokenId].dadId,
            kitties[tokenId].generation
        );
    }

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