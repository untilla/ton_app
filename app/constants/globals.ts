import { getStatusBarHeight } from 'react-native-status-bar-height';

export const STATUS_BAR_HEIGHT: number = getStatusBarHeight();
export const EMAIL_RULE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const TG_RULE = /(^|[^@\w])@(\w{1,64})\b/;
export const PHONE_RULE = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
export const STR_RULE = /^[a-zA-Z]{3,}$/;
