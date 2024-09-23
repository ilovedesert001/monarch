import { formatBalance } from './balance';
import { SupportedNetworks } from './networks';
import { UserTxTypes } from './types';

export const MORPHO = '0xbbbbbbbbbb9cc5e90e3b3af64bdaf62c37eeffcb';

export const getBundlerV2 = (chain: SupportedNetworks) => {
  if (chain === SupportedNetworks.Base) {
    // ChainAgnosticBundlerV2
    return '0x23055618898e202386e6c13955a58D3C68200BFB';
  }

  // EthereumBundlerV2
  return '0x4095F064B8d3c3548A3bebfd0Bbfd04750E30077';
};

export const getRewardPer1000USD = (yearlySupplyTokens: string, marketSupplyAssetUSD: number) => {
  return ((formatBalance(yearlySupplyTokens, 18) / marketSupplyAssetUSD) * 1000).toString();
};

export const getUserRewardPerYear = (
  yearlySupplyTokens: string | null,
  marketSupplyAssetUSD: number,
  userSuppliedUSD: number,
) => {
  if (!yearlySupplyTokens) return '0';
  return (
    (formatBalance(yearlySupplyTokens, 18) * Number(userSuppliedUSD)) /
    marketSupplyAssetUSD
  ).toFixed(2);
};

export const getIRMTitle = (address: string) => {
  switch (address.toLowerCase()) {
    case '0x870ac11d48b15db9a138cf899d20f13f79ba00bc':
      return 'Adaptive Curve';
    default:
      return 'Unknown IRM';
  }
};

export const actionTypeToText = (type: UserTxTypes) => {
  switch (type) {
    case UserTxTypes.MarketBorrow:
      return 'Borrow';
    case UserTxTypes.MarketSupply:
      return 'Supply';
    case UserTxTypes.MarketWithdraw:
      return 'Withdraw';
    default:
      return type;
  }
};
