import React, { Component } from "react";
import { Flex, Link, Image } from "rimble-ui";

import NavBarHamburger from "./NavBarHamburger";
import NavBarDropdown from "./NavBarDropdown";
import ConnectWalletButton from "./ConnectWalletButton";

class OutplayLoginHeaderMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.handleBurger = this.handleBurger.bind(this);
  }

  handleBurger(e) {
    this.setState({isOpen: !this.state.isOpen});
  }

  render () {
    const {
      account, 
      accountBalance,
      accountValidated,
      handleClickLogo, 
      handleConnectAccount,
      shortenAddress, 
      logo, 
      balanceIcon,
      walletIcon,
      rimbleInitialized,
      drizzleInitialized
    } = this.props;

    return (
      <>
        <Flex justifyContent={"space-between"} p={3} bg={"white"}>
          <Link title={ "Back to Home" }>
            <Image 
                pr={2}
                borderColor={"white"}
                overflow={"hidden"}
                src={logo}
                onClick={handleClickLogo}
            />
          </Link>

          <Flex>
            {account && accountValidated ? "" : (
            <ConnectWalletButton handleConnectAccount={handleConnectAccount} rimbleInitialized={rimbleInitialized} drizzleInitialized={drizzleInitialized}/>
            )}
            

            <NavBarHamburger handleBurger={this.handleBurger} isOpen={this.state.isOpen}/>
          </Flex> 
        </Flex>

        <NavBarDropdown
          account={account}
          accountBalance={accountBalance}
          accountValidated={accountValidated}
          shortenAddress={shortenAddress}
          balanceIcon={balanceIcon}
          walletIcon={walletIcon}
          isOpen={this.state.isOpen}
        />
      </>
    )
  }
}

export default OutplayLoginHeaderMobile;