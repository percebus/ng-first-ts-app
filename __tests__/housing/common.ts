export const MIME_TYPE = 'application/json';
export const CHAR_SET = 'utf-8';

export const contentTypes = [MIME_TYPE, `charset=${CHAR_SET}`];

export const headers = {
  'Content-Type': contentTypes.join('; '),
};
