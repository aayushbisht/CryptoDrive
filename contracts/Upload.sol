// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Upload {
  struct File {
    string url;
    string fileName; // Added file name field
    string fileType;
  }

  struct Access {
    address user;
    bool access; // true or false
  }

  mapping(address => File[]) private files;
  mapping(address => mapping(address => bool)) private ownership;
  mapping(address => Access[]) private accessList;
  mapping(address => mapping(address => bool)) private previousData;

  function add(address _user, string memory url, string memory fileName, string memory fileType) external {
    files[_user].push(File(url, fileName, fileType));
  }

  function allow(address user) external {
    ownership[msg.sender][user] = true;
    if (previousData[msg.sender][user]) {
      for (uint256 i = 0; i < accessList[msg.sender].length; i++) {
        if (accessList[msg.sender][i].user == user) {
          accessList[msg.sender][i].access = true;
        }
      }
    } else {
      accessList[msg.sender].push(Access(user, true));
      previousData[msg.sender][user] = true;
    }
  }

  function disallow(address user) external {
    ownership[msg.sender][user] = false;
    for (uint256 i = 0; i < accessList[msg.sender].length; i++) {
      if (accessList[msg.sender][i].user == user) {
        accessList[msg.sender][i].access = false;
      }
    }
  }

  function display(address _user) external view returns (File[] memory) {
    require(_user == msg.sender || ownership[_user][msg.sender], "You don't have access");
    return files[_user];
  }

  function shareAccess() external view returns (Access[] memory) {
    return accessList[msg.sender];
  }
}
