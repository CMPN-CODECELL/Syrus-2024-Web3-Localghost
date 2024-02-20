// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@4.3.1/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.3.1/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts@4.3.1/access/Ownable.sol";
import "@openzeppelin/contracts@4.3.1/utils/Counters.sol";

contract VaccineToken is ERC721, ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    uint256 public mintRate = 0.001 ether;
    uint256 public MAX_SUPPLY = 1000;

    constructor() ERC721("VaccineToken", "VAX") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://api.mynft.com/tokens/";
    }

    function safeMint(address to) public payable {
        require(totalSupply() < MAX_SUPPLY, "Can't Mine more NFTs.");
        require(msg.value >= mintRate, "Not Enough ether sent!");
        _tokenIdCounter.increment();
        _safeMint(to, _tokenIdCounter.current());
        
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721Enumerable) returns(bool) {
        return super.supportsInterface(interfaceId);
    }

    function withdraw() public onlyOwner {
        require(address(this).balance > 0, "Balance is 0.");
        payable(owner()).transfer(address(this).balance);
    }
}
