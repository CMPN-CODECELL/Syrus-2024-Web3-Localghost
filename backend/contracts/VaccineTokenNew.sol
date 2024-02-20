// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import "@openzeppelin/contracts@4.3.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.3.2/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@4.3.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.3.2/utils/Counters.sol";

contract VaccineTokenNew is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    enum Role {
        Company,
        Logistics,
        Doctor
    }

    mapping(address => Role) private _roles;

    constructor() ERC721("VaccineToken", "VAX") {}

    modifier onlyCompany() {
        require(
            _roles[msg.sender] == Role.Company,
            "Only Company person can access this!"
        );
        _;
    }

    modifier onlyLogistics() {
        require(
            _roles[msg.sender] == Role.Logistics,
            "Only logistics person can access this!"
        );
        _;
    }

    modifier onlyDoctor() {
        require(
            _roles[msg.sender] == Role.Doctor,
            "Only doctor can access this!"
        );
        _;
    }

    function grantRole(address _address, Role _role) public onlyOwner {
        _roles[_address] = _role;
    }

    function safeMint(address to, string memory _tokenURI) public onlyCompany {
        _tokenIdCounter.increment();
        _safeMint(to, _tokenIdCounter.current());
        _setTokenURI(_tokenIdCounter.current(), _tokenURI);
    }

    function appendMetadata(
        uint256 tokenId,
        string memory additionalData
    ) public onlyLogistics {
        // appending logic here
    }

    function _burn(
        uint256 tokenId
    ) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }
}
