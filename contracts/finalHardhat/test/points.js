const {
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  
  describe("Points", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployPoints() {
  
      // Contracts are deployed using the first signer/account by default
      const [owner, otherAccount] = await ethers.getSigners();
  
      const Points = await ethers.getContractFactory("LoyaltyPoints");
      const points = await Points.deploy();

      return { points, owner, otherAccount };
    }
  
    describe("Deployment", function () {
      it("This should add loyalty points", async function () {
        const { points } = await loadFixture(deployPoints);
  
        expect(await points.areTherePoints()).to.equal(false);
      });

      
  
      
    });
  });
  