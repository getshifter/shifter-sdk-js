/**
 * Shifter API
 * Shifter API
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { StatusGetResponseUserGroup } from './StatusGetResponseUserGroup';
import { StatusGetResponseUserNotification } from './StatusGetResponseUserNotification';
import { HttpFile } from '../http/http';

/**
 * Account status. This properties only reflect for Legacy Plan.
 */
export class StatusGetResponseUser {
  /**
   * Payment method status of the account. [Registered]- Account has payment method. [unRegistered]- Account does not register payment method yet.
   */
  'creditCardStatus'?: string;
  /**
   * Maximum number of the sites
   */
  'upperLimitProjects'?: number;
  /**
   * Limit of maximum storage.
   */
  'maxTransferGb'?: number;
  /**
   * Limit of maximum data transfer quota
   */
  'maxDiskGb'?: number;
  /**
   * Whether domain feature is available or not
   */
  'domainSetting'?: string;
  /**
   * (deprecated)
   */
  'importArchives'?: string;
  /**
   * (deprecated)
   */
  'exportArchives'?: string;
  'backup'?: number;
  /**
   * (deprecated)
   */
  'enableSubuser'?: string;
  'notification'?: StatusGetResponseUserNotification;
  /**
   * ID of the current plan. (only Legacy plan)
   */
  'planId'?: string;
  'group'?: StatusGetResponseUserGroup;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: 'creditCardStatus',
      baseName: 'credit_card_status',
      type: 'string',
      format: '',
    },
    {
      name: 'upperLimitProjects',
      baseName: 'upper_limit_projects',
      type: 'number',
      format: '',
    },
    {
      name: 'maxTransferGb',
      baseName: 'max_transfer_gb',
      type: 'number',
      format: '',
    },
    {
      name: 'maxDiskGb',
      baseName: 'max_disk_gb',
      type: 'number',
      format: '',
    },
    {
      name: 'domainSetting',
      baseName: 'domain_setting',
      type: 'string',
      format: '',
    },
    {
      name: 'importArchives',
      baseName: 'import_archives',
      type: 'string',
      format: '',
    },
    {
      name: 'exportArchives',
      baseName: 'export_archives',
      type: 'string',
      format: '',
    },
    {
      name: 'backup',
      baseName: 'backup',
      type: 'number',
      format: '',
    },
    {
      name: 'enableSubuser',
      baseName: 'enable_subuser',
      type: 'string',
      format: '',
    },
    {
      name: 'notification',
      baseName: 'notification',
      type: 'StatusGetResponseUserNotification',
      format: '',
    },
    {
      name: 'planId',
      baseName: 'plan_id',
      type: 'string',
      format: '',
    },
    {
      name: 'group',
      baseName: 'group',
      type: 'StatusGetResponseUserGroup',
      format: '',
    },
  ];

  static getAttributeTypeMap() {
    return StatusGetResponseUser.attributeTypeMap;
  }

  public constructor() {}
}