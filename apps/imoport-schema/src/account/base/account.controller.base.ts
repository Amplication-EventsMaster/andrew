/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AccountService } from "../account.service";
import { AccountCreateInput } from "./AccountCreateInput";
import { Account } from "./Account";
import { AccountFindManyArgs } from "./AccountFindManyArgs";
import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";
import { AccountUpdateInput } from "./AccountUpdateInput";

export class AccountControllerBase {
  constructor(protected readonly service: AccountService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Account })
  async createAccount(
    @common.Body() data: AccountCreateInput
  ): Promise<Account> {
    return await this.service.createAccount({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        typeField: true,
        provider: true,
        providerAccountId: true,
        refreshToken: true,
        accessToken: true,
        expiresAt: true,
        tokenType: true,
        scope: true,
        idToken: true,
        sessionState: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Account] })
  @ApiNestedQuery(AccountFindManyArgs)
  async accounts(@common.Req() request: Request): Promise<Account[]> {
    const args = plainToClass(AccountFindManyArgs, request.query);
    return this.service.accounts({
      ...args,
      select: {
        id: true,
        typeField: true,
        provider: true,
        providerAccountId: true,
        refreshToken: true,
        accessToken: true,
        expiresAt: true,
        tokenType: true,
        scope: true,
        idToken: true,
        sessionState: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Account })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async account(
    @common.Param() params: AccountWhereUniqueInput
  ): Promise<Account | null> {
    const result = await this.service.account({
      where: params,
      select: {
        id: true,
        typeField: true,
        provider: true,
        providerAccountId: true,
        refreshToken: true,
        accessToken: true,
        expiresAt: true,
        tokenType: true,
        scope: true,
        idToken: true,
        sessionState: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Account })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAccount(
    @common.Param() params: AccountWhereUniqueInput,
    @common.Body() data: AccountUpdateInput
  ): Promise<Account | null> {
    try {
      return await this.service.updateAccount({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          typeField: true,
          provider: true,
          providerAccountId: true,
          refreshToken: true,
          accessToken: true,
          expiresAt: true,
          tokenType: true,
          scope: true,
          idToken: true,
          sessionState: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Account })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAccount(
    @common.Param() params: AccountWhereUniqueInput
  ): Promise<Account | null> {
    try {
      return await this.service.deleteAccount({
        where: params,
        select: {
          id: true,
          typeField: true,
          provider: true,
          providerAccountId: true,
          refreshToken: true,
          accessToken: true,
          expiresAt: true,
          tokenType: true,
          scope: true,
          idToken: true,
          sessionState: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
