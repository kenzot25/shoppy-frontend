export const getErrorMessage = (res: any) => {
  if (res.message) {
    if (Array.isArray(res.message)) {
      return formatErrorMessage(res.message[0]);
    } else {
      return res.message;
    }
  }
  return 'Unknown error!';
};
const formatErrorMessage = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
