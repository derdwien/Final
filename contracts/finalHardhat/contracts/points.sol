pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0



pragma solidity ^0.8.0;

contract LoyaltyPoints {

    bool public areTherePoints;

    function addPoints()public {
        areTherePoints = true;
    }

    function dontAddPoints()public{
        areTherePoints = false;
    }

    
    struct Instructor {
        address walletAddress;
        uint256 loyaltyPoints;
    }
    
   
    mapping(address => Instructor) public instructors;

 
    event LoyaltyPointsAdded(address indexed instructor, uint256 pointsAdded);

    
    function addLoyaltyPoints(address _instructor, uint256 _rating) public {
        require(_rating >= 3, "Rating must be 3 or higher");
        
    
        instructors[_instructor].loyaltyPoints += 1;
    }
}
      