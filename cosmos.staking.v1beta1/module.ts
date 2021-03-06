// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject } from "@cosmjs/proto-signing";

import { Api } from "./rest";
import { MsgCreateValidator } from "./types/cosmos/staking/v1beta1/tx";
import { MsgEditValidator } from "./types/cosmos/staking/v1beta1/tx";
import { MsgBeginRedelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgDelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgUndelegate } from "./types/cosmos/staking/v1beta1/tx";

type sendMsgCreateValidatorParams = {
  value: MsgCreateValidator;
  fee?: StdFee;
  memo?: string;
};

type sendMsgEditValidatorParams = {
  value: MsgEditValidator;
  fee?: StdFee;
  memo?: string;
};

type sendMsgBeginRedelegateParams = {
  value: MsgBeginRedelegate;
  fee?: StdFee;
  memo?: string;
};

type sendMsgDelegateParams = {
  value: MsgDelegate;
  fee?: StdFee;
  memo?: string;
};

type sendMsgUndelegateParams = {
  value: MsgUndelegate;
  fee?: StdFee;
  memo?: string;
};

type msgCreateValidatorParams = {
  value: MsgCreateValidator;
};

type msgEditValidatorParams = {
  value: MsgEditValidator;
};

type msgBeginRedelegateParams = {
  value: MsgBeginRedelegate;
};

type msgDelegateParams = {
  value: MsgDelegate;
};

type msgUndelegateParams = {
  value: MsgUndelegate;
};

class Module extends Api<any> {
  private _client?: SigningStargateClient;
  private _addr?: string;

  constructor(baseUrl: string) {
    super({
      baseUrl,
    });
  }

  public withSigner(client: SigningStargateClient, _addr: string) {
    this._client = client;
    this._addr = _addr;
  }

  public noSigner() {
    this._client = undefined;
    this._addr = undefined;
  }

  async sendMsgCreateValidator({
    value,
    fee,
    memo,
  }: sendMsgCreateValidatorParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        "TxClient:sendMsgCreateValidator: Unable to sign Tx. Signer is not present."
      );
    }
    if (!this._addr) {
      throw new Error(
        "TxClient:sendMsgCreateValidator: Unable to sign Tx. Address is not present."
      );
    }
    try {
      let msg = this.msgCreateValidator({
        value: MsgCreateValidator.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:sendMsgCreateValidator: Could not broadcast Tx: " + e.message
      );
    }
  }

  async sendMsgEditValidator({
    value,
    fee,
    memo,
  }: sendMsgEditValidatorParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        "TxClient:sendMsgEditValidator: Unable to sign Tx. Signer is not present."
      );
    }
    if (!this._addr) {
      throw new Error(
        "TxClient:sendMsgEditValidator: Unable to sign Tx. Address is not present."
      );
    }
    try {
      let msg = this.msgEditValidator({
        value: MsgEditValidator.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:sendMsgEditValidator: Could not broadcast Tx: " + e.message
      );
    }
  }

  async sendMsgBeginRedelegate({
    value,
    fee,
    memo,
  }: sendMsgBeginRedelegateParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        "TxClient:sendMsgBeginRedelegate: Unable to sign Tx. Signer is not present."
      );
    }
    if (!this._addr) {
      throw new Error(
        "TxClient:sendMsgBeginRedelegate: Unable to sign Tx. Address is not present."
      );
    }
    try {
      let msg = this.msgBeginRedelegate({
        value: MsgBeginRedelegate.fromPartial(value),
      });
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:sendMsgBeginRedelegate: Could not broadcast Tx: " + e.message
      );
    }
  }

  async sendMsgDelegate({
    value,
    fee,
    memo,
  }: sendMsgDelegateParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        "TxClient:sendMsgDelegate: Unable to sign Tx. Signer is not present."
      );
    }
    if (!this._addr) {
      throw new Error(
        "TxClient:sendMsgDelegate: Unable to sign Tx. Address is not present."
      );
    }
    try {
      let msg = this.msgDelegate({ value: MsgDelegate.fromPartial(value) });
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:sendMsgDelegate: Could not broadcast Tx: " + e.message
      );
    }
  }

  async sendMsgUndelegate({
    value,
    fee,
    memo,
  }: sendMsgUndelegateParams): Promise<DeliverTxResponse> {
    if (!this._client) {
      throw new Error(
        "TxClient:sendMsgUndelegate: Unable to sign Tx. Signer is not present."
      );
    }
    if (!this._addr) {
      throw new Error(
        "TxClient:sendMsgUndelegate: Unable to sign Tx. Address is not present."
      );
    }
    try {
      let msg = this.msgUndelegate({ value: MsgUndelegate.fromPartial(value) });
      return await this._client.signAndBroadcast(
        this._addr,
        [msg],
        fee ? fee : { amount: [], gas: "200000" },
        memo
      );
    } catch (e: any) {
      throw new Error(
        "TxClient:sendMsgUndelegate: Could not broadcast Tx: " + e.message
      );
    }
  }

  msgCreateValidator({ value }: msgCreateValidatorParams): EncodeObject {
    try {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
        value: MsgCreateValidator.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgCreateValidator: Could not create message: " + e.message
      );
    }
  }

  msgEditValidator({ value }: msgEditValidatorParams): EncodeObject {
    try {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
        value: MsgEditValidator.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgEditValidator: Could not create message: " + e.message
      );
    }
  }

  msgBeginRedelegate({ value }: msgBeginRedelegateParams): EncodeObject {
    try {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: MsgBeginRedelegate.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgBeginRedelegate: Could not create message: " + e.message
      );
    }
  }

  msgDelegate({ value }: msgDelegateParams): EncodeObject {
    try {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: MsgDelegate.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgDelegate: Could not create message: " + e.message
      );
    }
  }

  msgUndelegate({ value }: msgUndelegateParams): EncodeObject {
    try {
      return {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: MsgUndelegate.fromPartial(value),
      };
    } catch (e: any) {
      throw new Error(
        "TxClient:MsgUndelegate: Could not create message: " + e.message
      );
    }
  }
}

export default Module;
